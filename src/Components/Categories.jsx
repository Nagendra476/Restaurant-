import React, { useState } from 'react';

const categories = [
  { name: 'Perfect-Buffet', price: 799, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80' },
  { name: 'Famous-Biryani', price: 299, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Barbeque', price: 499, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
  { name: 'Chinese', price: 349, img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80' },
  { name: 'Pure-veg', price: 259, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Luxury-Experience', price: 1199, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
  { name: 'Romantic', price: 899, img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
  { name: 'Street-Food', price: 199, img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80' },
  { name: 'Cafes', price: 249, img: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80' },
  { name: 'Quick-Bites', price: 179, img: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=800&q=80' },
  { name: 'Desserts', price: 149, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80' },
  { name: 'Healthy-Food', price: 299, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
];

const Categories = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max((prev[name] || 0) + delta, 0),
    }));
  };

  const handleAddToCart = (item) => {
    const qty = quantities[item.name] || 1;
    setCart((prev) => [...prev, { ...item, qty }]);
    alert(`${item.name} added to cart (${qty}x)`);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">🍽 Explore Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition"
          >
            <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              <p className="text-gray-600">₹{cat.price}</p>

              {/* ✅ Quantity + Button in one line */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(cat.name, -1)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">
                    {quantities[cat.name] || 0}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(cat.name, 1)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleAddToCart(cat)}
                  className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-600 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-8 p-4 border-t">
          <h3 className="text-xl font-semibold mb-2">🛍 Cart Summary</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} — {item.qty} × ₹{item.price} = ₹{item.qty * item.price}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-3">
            Total: ₹{cart.reduce((sum, i) => sum + i.price * i.qty, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;
