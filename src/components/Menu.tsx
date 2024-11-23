import React from 'react';
import { mockMenuData } from '../data/mockMenu';
import type { MenuItem } from '../types/MenuItem';
import { useCart } from '../context/CartContext';

const Menu: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);
  const { dispatch } = useCart();

  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="py-8">
      {/* Categories */}
      <nav className="mb-8 border-b">
        <div className="flex space-x-8 overflow-x-auto pb-4">
          {mockMenuData.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="text-gray-500 hover:text-gray-900 whitespace-nowrap"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Sections */}
      <div className="space-y-12">
        {mockMenuData.map((category) => (
          <section key={category.id} id={category.id}>
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="text-lg font-medium">${item.price.toFixed(2)}</span>
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-hidden" onClick={() => setSelectedItem(null)}>
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-lg max-w-lg w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <p className="text-xl font-medium mb-4">${selectedItem.price.toFixed(2)}</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    addToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;