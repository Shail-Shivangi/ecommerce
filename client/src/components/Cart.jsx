import { useState } from "react";
import LED from "/src/assets/LED.png";
import headphone from "/src/assets/headphone.png";
import tshirt from "/src/assets/tshirt.png";
import kettle from "/src/assets/kettle.png";

import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      originalPrice: 99,
      quantity: 1,
      image: LED, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
      image: headphone, // Replace with actual image URL
    },
    {
      id: 3,
      name: "TRAVIS Oversized T-Shirt",
      price: 899,
      quantity: 3,
      image: tshirt, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Prestige 1.5 Litres Electric Kettle (PKOSS 1.5)|1500W | Silver - Black| Automatic Cut-off | Stainless Steel | Rotatable Base | Power Indicator | Single-Touch Lid Locking",
      price: 250,
      quantity: 3,
      image: kettle, // Replace with actual image URL
    },
  ]);

  const [totals, setTotals] = useState({
    subTotal: 320,
    shipping: 0,
    discount: 24,
    tax: 61.99,
    total: 357.99,
  });

  const updateQuantity = (id, amount) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto flex justify-between">
        {/* Left Section: Shopping Cart */}
        <div className="w-2/3 bg-white p-5 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-5">Shopping Cart</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Products</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 mr-4"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-4">
                    {item.originalPrice && (
                      <span className="line-through text-gray-400 mr-2">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span>${item.price}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 border border-gray-300"
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="px-3">
                        {item.quantity.toString().padStart(2, "0")}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 border border-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4">${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-10 flex justify-between">
            <Link to="/">
              <button className="mt-5 bg-orange-500 text-white py-2 px-4 rounded">
                Return to Shop
              </button>
            </Link>

            <button className="mt-5 bg-orange-500 text-white py-2 px-4 rounded">
              Update Cart
            </button>
          </div>
        </div>

        {/* Right Section: Card Totals */}
        <div className="w-1/3 pl-10">
          <div className="bg-white p-5 shadow-md rounded-lg mb-5">
            <h2 className="text-xl font-semibold mb-5">Card Totals</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Sub-total</span>
                <span>${totals.subTotal}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Discount</span>
                <span>${totals.discount}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${totals.tax}</span>
              </li>
              <li className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${totals.total.toFixed(2)} USD</span>
              </li>
            </ul>
            <Link to="/checkout">
              <button className="mt-5 bg-orange-500 text-white py-2 px-4 w-full rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>

          {/* Coupon Code */}
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-5">Coupon Code</h2>
            <input
              type="email"
              placeholder="Email address"
              className="border p-2 w-full mb-4"
            />
            <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
