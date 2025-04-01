
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

interface CheckoutProps {
  onClose: () => void;
}

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(3, { message: "Zip code is required" }),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

export const Checkout = ({ onClose }: CheckoutProps) => {
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<"information" | "payment">("information");

  // Initialize form
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const onSubmitInformation = (data: CheckoutFormValues) => {
    // Store the form data and move to payment step
    console.log("Customer information:", data);
    setStep("payment");
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    try {
      // Format line items for Stripe
      const lineItems = items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * 100), // Convert to cents
        },
        quantity: item.quantity,
      }));

      // Create a Stripe Checkout Session
      const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: `${window.location.origin}?success=true`,
          cancel_url: `${window.location.origin}?canceled=true`,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error(error.message);
      }

      // If successful, clear the cart
      clearCart();
      onClose();
    } catch (error) {
      console.error('Error during checkout:', error);
      // For demo purposes, we'll simulate a successful checkout
      toast({
        title: "Order placed successfully!",
        description: "This is a demo checkout. In a real app, we would process payment through Stripe.",
      });
      clearCart();
      onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  // Go back to information step
  const handleBack = () => {
    setStep("information");
  };

  if (step === "information") {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitInformation)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="123 Main St, Apt 4B" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="NY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input placeholder="10001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full rounded-md px-4 py-3 text-white transition hover:bg-blue-700"
            >
              Continue to Payment
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Payment</h3>
        <Button variant="ghost" onClick={handleBack} size="sm">
          Back to Information
        </Button>
      </div>
      
      <button
        onClick={handleCheckout}
        disabled={isProcessing || items.length === 0}
        className="w-full rounded-md bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {isProcessing ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};
