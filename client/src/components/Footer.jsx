import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaTruck,
  FaExchangeAlt,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Left section with logo and contact details */}
        <div className="space-y-3 text-sm">
          <h1 className="text-xl font-bold text-orange-500">Nexus Drop</h1>
          <p>
            Customer Supports: <br />
            <span className="text-white font-semibold">+91 0356203562</span>
          </p>
          <p>
            MANIT, Bhopal, Kamla Nagar <br />
            Madhya Pradesh , 462003
          </p>
          <p>
            <a href="Support@nexus_drop.com" className="text-white">
              Support@nexus_drop.com
            </a>
          </p>
        </div>

        {/* Top category section */}
        <div className="space-y-3 text-sm">
          <h2 className="text-lg font-semibold text-white">Top Category</h2>
          <ul className="space-y-2 cursor-pointer">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li className="text-yellow-500">Accessories</li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
          </ul>
          <a href="/" className="text-yellow-500 text-sm">
            Browse All Product &rarr;
          </a>
        </div>

        {/* Quick links section */}
        <div className="space-y-3 text-sm">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2 cursor-pointer">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h2 className="text-lg font-semibold text-white">Help</h2>
          <ul className="space-y-2 cursor-pointer">
            <li>Paymenyt</li>
            <li>Shipping</li>
            <li>Cancellation and Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="container mx-auto flex justify-between items-start text-lg px-4">
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <FaFacebookF className="text-white hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" />
            <FaPinterestP className="text-white hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-white hover:text-gray-400 cursor-pointer" />
            <span className="ml-4">Eng </span>
            <p>|</p>
            <span className="ml-1">Hindi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
