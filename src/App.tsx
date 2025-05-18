
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UploadProducts from "./pages/UploadProducts";
import { CartProvider } from "./contexts/CartContext";
import { ShoppingCart } from "./components/ShoppingCart";
import { ChatBot } from "./components/ChatBot";

// Add Google Font for Dancing Script
import { Helmet } from "react-helmet";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Helmet>
              <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Toaster />
            <Sonner />
            <ShoppingCart />
            <ChatBot />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/upload" element={<UploadProducts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
