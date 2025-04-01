
import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart, CartItem } from '@/contexts/CartContext';
import { Button } from './ui/button';

export const ShoppingCartIcon: React.FC = () => {
  const { totalItems, setIsCartOpen, isCartOpen } = useCart();
  
  return (
    <Button 
      variant="ghost" 
      className="relative"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
};

const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-2 border-b border-gray-200">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img 
          src={item.image} 
          alt={item.name}
          className="h-full w-full object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-800">{item.name}</h3>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm font-medium text-gray-900">{item.price}</p>
        <div className="flex items-center mt-2">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-gray-500 p-1 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="mx-2 text-gray-700 w-8 text-center">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-gray-500 p-1 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShoppingCart: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, clearCart } = useCart();
  
  if (!isCartOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" onClick={() => setIsCartOpen(false)} />
      <div className="fixed inset-y-0 right-0 z-50 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Start adding some items to your cart
                    </p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {items.map((item) => (
                        <li key={item.id} className="py-2">
                          <CartItemComponent item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>
                    {items
                      .reduce(
                        (total, item) => 
                          total + 
                          (parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity),
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 flex space-x-3">
                  <Button 
                    className="w-full py-5" 
                    onClick={() => alert('Checkout functionality would go here')}
                  >
                    Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="py-5"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
