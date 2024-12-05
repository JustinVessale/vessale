import React, { ReactNode } from 'react';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  
  const updateQuantity = (itemId: string, newQuantity: number) => {
    const item = state.items.find(item => item.id === itemId);
    if (!item) return;

    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
      toast({
        title: "Item removed",
        description: `${item.name} has been removed from your cart.`,
        duration: 2000,
      });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: newQuantity } });
      toast({
        title: "Quantity updated",
        description: `${item.name} quantity updated to ${newQuantity}.`,
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">World Famous Grill</h1>
            </div>
            
            {/* Mobile cart button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
            
            {/* Desktop cart preview */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-6 w-6 mr-2" />
                <span>Cart ({state.items.reduce((acc, item) => acc + item.quantity, 0)})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Cart sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="ml-3 h-7 flex items-center"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {state.items.length === 0 ? (
                    <p className="mt-8 text-gray-500">No items in cart</p>
                  ) : (
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="divide-y divide-gray-200">
                          {state.items.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-1 ml-4">
                                <div className="flex justify-between">
                                  <h3 className="text-sm font-medium">{item.name}</h3>
                                  <p className="ml-4 text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <div className="mt-4 flex items-center">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 rounded-md hover:bg-gray-100"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 rounded-md hover:bg-gray-100"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      dispatch({ type: 'REMOVE_ITEM', payload: item.id });
                                      toast({
                                        title: "Item removed",
                                        description: `${item.name} has been removed from your cart.`,
                                        duration: 2000,
                                      });
                                    }}
                                    className="ml-4 text-sm text-red-600 hover:text-red-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 p-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${state.total.toFixed(2)}</p>
                  </div>
                  <button
                    className="w-full mt-6 bg-blue-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={state.items.length === 0}
                    onClick={() => {
                      // We'll implement checkout later
                      console.log('Proceeding to checkout');
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Toaster component */}
      <Toaster />
    </div>
  );
};

export default Layout;