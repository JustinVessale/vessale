import React, { ReactNode } from 'react';
import { ShoppingCart } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Restaurant Name</h1>
            </div>
            
            {/* Mobile cart button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
            
            {/* Desktop cart preview */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <ShoppingCart className="h-6 w-6 mr-2" />
                <span>Cart (0)</span>
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

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900">
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </nav>

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
                      <span className="sr-only">Close panel</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Cart items will go here */}
                  <div className="mt-8">
                    <p className="text-gray-500">No items in cart</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$0.00</p>
                  </div>
                  <button
                    className="w-full mt-6 bg-blue-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-blue-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;