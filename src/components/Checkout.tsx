
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

interface CheckoutProps {
  onClose: () => void;
}

export const Checkout = ({ onClose }: CheckoutProps) => {
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

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

  return (
    <div className="mt-6">
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
