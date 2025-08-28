import headphone from '/src/assets/headphone.png';
import tshirt from '/src/assets/tshirt.png';
import dress from '/src/assets/dress.png';
import monitor from '/src/assets/monitor.png';
import keyboard from '/src/assets/keyboard.png';


const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto my-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-8">Wishlist</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-b mb-2 bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">Product</th>
                  <th className="text-left px-4 py-2">Price</th>
                  <th className="text-left px-4 py-2">Stock Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img 
                        src={headphone}
                        alt="Product" 
                        className="w-17 h-16 object-cover mr-4" 
                      />
                      <span>Sony WH-ULT900N ULT WEAR Headphones</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">₹9,989.00</td>
                  <td className="px-4 py-2 text-green-600">In Stock</td>
                  <td className="px-4 py-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img 
                        src={tshirt}
                        alt="Product" 
                        className="w-16 h-16 object-cover mr-4" 
                      />
                      <span>TRAVIS Oversized T-Shirt</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">₹899</td>
                  <td className="px-4 py-2 text-green-600">In Stock</td>
                  <td className="px-4 py-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img 
                        src={dress}
                        alt="Product" 
                        className="w-15 h-16 object-cover mr-4" 
                      />
                      <span>Globus Women Opaque Stretchable Floral Lace Midi Bodycon Party Dress</span>
                    </div>
                  </td>
                  <td className="px-4 py-2"> ₹1,803</td>
                  <td className="px-4 py-2 text-green-600">In Stock</td>
                  <td className="px-4 py-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img 
                        src={monitor}
                        alt="Product" 
                        className="w-15 h-16 object-cover mr-4" 
                      />
                      <span>Dell 24 Monitor</span>
                    </div>
                  </td>
                  <td className="px-4 py-2"> ₹9,799</td>
                  <td className="px-4 py-2 text-green-600">In Stock</td>
                  <td className="px-4 py-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img 
                        src={keyboard}
                        alt="Product" 
                        className="w-15 h-16 object-cover mr-4" 
                      />
                      <span>Portronics Ki-pad 3 Usb Wired Keyboard Noise-free Typing</span>
                    </div>
                  </td>
                  <td className="px-4 py-2"> ₹499</td>
                  <td className="px-4 py-2 text-green-600">In Stock</td>
                  <td className="px-4 py-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </td>
                </tr>

                {/* More rows */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
