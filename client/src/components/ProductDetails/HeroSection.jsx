import { useState } from "react";

const HeroSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("space-gray");
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleWishlistToggle = () => {
    setIsWishlistAdded(!isWishlistAdded);
  };

  return (
    <div className="p-6 bg-white border-gray-100 rounded-2xl shadow-xl border-4">
      <h2 className="text-3xl font-bold mb-4">
        2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - {selectedColor === "space-gray" ? "Space Gray" : "Silver"}
      </h2>
      <p className="text-gray-600 text-sm mb-2">SKU: A264671</p>
      <p className="text-gray-600 text-sm mb-2">Availability: In Stock</p>
      <p className="text-gray-600 text-sm mb-4">Brand: Apple | Category: Electronics Devices</p>

      <div className="flex items-center mb-4 space-x-4">
        <span className="text-2xl font-bold text-green-600">$1699</span>
        <span className="line-through text-gray-400">$1999</span>
        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
          21% OFF
        </span>
      </div>

      <div className="flex items-center mb-4 space-x-8">
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1">Color</p>
          <div className="flex space-x-2">
            <button
              onClick={() => handleColorChange("space-gray")}
              className={`w-8 h-8 rounded-full border ${selectedColor === "space-gray" ? "border-blue-500" : "border-gray-300"}`}
              style={{ backgroundColor: 'gray' }}
            ></button>
            <button
              onClick={() => handleColorChange("silver")}
              className={`w-8 h-8 rounded-full border ${selectedColor === "silver" ? "border-blue-500" : "border-gray-300"}`}
              style={{ backgroundColor: 'silver' }}
            ></button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1">Size</p>
          <select className="border rounded-md px-3 py-2">
            <option>13-inch</option>
            <option>14-inch Liquid Retina</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mb-4 space-x-8">
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1">Memory</p>
          <select className="border rounded-md px-3 py-2">
            <option>8GB unified memory</option>
            <option>16GB unified memory</option>
          </select>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1">Storage</p>
          <select className="border rounded-md px-3 py-2">
            <option>256GB SSD</option>
            <option>1TB SSD</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <p className="text-sm font-semibold mr-4">Quantity</p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="border border-gray-300 px-3 py-1 rounded-md"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4 py-1 border border-gray-300 rounded-md">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border border-gray-300 px-3 py-1 rounded-md"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleWishlistToggle}
          className={`bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold flex items-center space-x-2 ${isWishlistAdded ? "bg-red-500 text-white" : ""}`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>{isWishlistAdded ? "Added to Wishlist" : "Add to Wishlist"}</span>
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Add to Cart
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 14.81 22 10.27H14.81L12 3 9.19 10.27H2L7.46 14.81 5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-sm ml-2">4.5/5 (200 reviews)</span>
        </div>
      </div>

      <div className="mt-6 text-gray-600 text-sm">
        <p className="mb-2">100% Guarantee Safe Checkout</p>
        <div className="flex space-x-2">
          <img
            src="/path-to-payment-methods.jpg"
            alt="Payment Methods"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
