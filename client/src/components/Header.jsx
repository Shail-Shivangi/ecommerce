import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaTruck,
  FaHeadset,
  FaExchangeAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { useFilterContext } from "./Store/filterContext";
//image
// import logo from "../assets/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const[search,setSearch]=useState("")
  // const {filters:{text},updateFilterValue}=useFilterContext()
  // t searchText = state?.filters?.text || "";
  // console.log(text)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/" className="text-white">
            Nexus Drop
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 mt-2 md:mt-0">
        <form action="" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
             name="text"
            // value={`${text}`}
            // onChange={updateFilterValue}
           
            placeholder="Search for anything..."
            className="w-full px-10 py-2 rounded-md text-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </form>
        </div>
        

        {/* Contact and Icons */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <div className="flex space-x-6">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <FaHeart className="text-xl" />
            </Link>

            {/* Cart with Hover */}
            <div
              className="relative"
            >
              <Link
                to="/cart"
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <FaShoppingCart className="text-xl" />
              </Link>
            </div>

            {/* Profile */}
            <Link
              to="/auth"
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <FaUser className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white shadow-md py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between space-y-4 md:space-y-0 px-4">
          {/* All Category with Dropdown */}
          <div className="relative">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-lg font-bold flex items-center"
              onClick={toggleDropdown}
            >
              All Category
              <FaChevronDown className="ml-2" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Computer & Laptop
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Computer Accessories
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Smartphone
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Headphone
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Mobile Accessories
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Gaming Console
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Camera & Photo
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    TV & Homes Application
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    GPS & Navigation
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
                    Wearable Technology
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Menu Items with Icons */}
          <div className="flex space-x-4 md:space-x-6 text-sm text-gray-700">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-blue-700"
            >
              <FaTruck />
              <span>Track Order</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-blue-700"
            >
              <FaExchangeAlt />
              <span>Compare</span>
            </a>
            <Link
              to="/support"
              className="flex items-center space-x-1 hover:text-blue-700"
            >
              <FaHeadset />
              <span>Customer Support</span>
            </Link>
            <Link
              to="/faq"
              className="flex items-center space-x-1 hover:text-blue-700"
            >
              <FaQuestionCircle />
              <span>Need Help?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="container mx-auto">
          <nav className="text-md text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>{" "}
            /
            <Link to="/shop" className="hover:text-blue-600">
              {" "}
              Shop
            </Link>{" "}
            /
            <Link to="/about" className="hover:text-blue-600">
              {" "}
              About Us
            </Link>
            /
            
            <Link to="/product" className="hover:text-blue-600">
              {" "}
              Product
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
