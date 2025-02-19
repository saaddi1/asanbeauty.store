
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop by Category", href: "/categories" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Special Offers", href: "/special-offers" }
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping Information", href: "/shipping" },
    { name: "Return Policy", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>asanmart333@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+923094144911</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Office no 1, 2nd Floor Alhamad Plaza Ghazni Street Urdu Bazar Lahore</span>
              </li>
            </ul>
            <Button 
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-gray-600 text-sm">
          <p>&copy; 2025 Online Book Store. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
