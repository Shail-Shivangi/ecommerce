/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import xbox from "../../assets/xbox.png";

//icons
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useAuth } from "../Store/Auth.jsx";

// Product data
const products = [
  {
    id: 1,
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    category: "Headphone",
    rating: 4.5,
    reviews: 738,
    price: 70,
    image: xbox,
    tag: "HOT",
  },
  {
    id: 2,
    name: "Samsung Electronics Samsung Galaxy S21 5G",
    category: "Smart Phone",
    rating: 5,
    reviews: 536,
    price: 2300,
    image: xbox,
  },
  {
    id: 3,
    name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    category: "TV",
    rating: 4.5,
    reviews: 423,
    price: 360,
    image: xbox,
    tag: "BEST DEALS",
  },
  {
    id: 4,
    name: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
    category: "TV",
    rating: 3.5,
    reviews: 816,
    price: 80,
    image: xbox,
  },
  {
    id: 5,
    name: "Apple MacBook Pro 16-inch",
    category: "Laptop",
    rating: 4.8,
    reviews: 1023,
    price: 3200,
    image: xbox,
  },
  {
    id: 6,
    name: "Sony WH-1000XM4 Noise Canceling Headphones",
    category: "Headphone",
    rating: 4.7,
    reviews: 650,
    price: 300,
    image: xbox,
  },
  {
    id: 7,
    name: "HP Pavilion Gaming Laptop",
    category: "Laptop",
    rating: 4.5,
    reviews: 980,
    price: 1800,
    image: xbox,
  },
  {
    id: 8,
    name: "Dell Inspiron 15 3000",
    category: "Laptop",
    rating: 4.3,
    reviews: 720,
    price: 1200,
    image: xbox,
  },
  // Add more products as needed...
];

// DiscountBanner component
const DiscountBanner = () => {
  // Dynamic data for categories and discounts
  const [offerEndsIn, setOfferEndsIn] = useState(null);
  
  const discountInfo = [
    {
      category: "COMPUTER",
      discount: 32,
      productType: "all electronics products",
      ending: "ENDS OF CHRISTMAS",
    },
    {
      category: "SMARTPHONES",
      discount: 20,
      productType: "selected mobile phones",
      ending: "OFFER ENDS IN 5 DAYS",
    },
    {
      category: "LAPTOPS",
      discount: 40,
      productType: "all laptops",
      ending: "ENDS OF SUMMER SALE",
    },
    {
      category: "HEADPHONES",
      discount: 25,
      productType: "audio gear",
      ending: "FLASH SALE ENDS SOON",
    },
  ];

  // Randomly select one of the discount offers
  const randomOffer =
    discountInfo[Math.floor(Math.random() * discountInfo.length)];

  // Function to calculate time left for the offer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const offerEndDate = new Date("2024-12-25T23:59:59");
      const now = new Date();
      const timeLeft = offerEndDate - now;

      if (timeLeft <= 0) {
        setOfferEndsIn(null);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        setOfferEndsIn({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };
    // calculateTimeLeft()
    // Update the timer every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-yellow-300 p-8 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-2xl font-bold mb-4">
        {randomOffer.category.toUpperCase()}
      </h2>
      <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
        {randomOffer.discount}% OFF
      </h1>
      <p className="text-lg mb-4">On {randomOffer.productType}</p>
      <div className="flex items-center mb-4">
        <span className="mr-2 font-semibold">Offers ends in:</span>
        <span className="bg-white px-3 py-2 rounded-md text-red-600 font-bold">
          {randomOffer.ending}
        </span>
      </div>
      {offerEndsIn && (
        <div className="flex space-x-4 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold">{offerEndsIn.days}</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{offerEndsIn.hours}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{offerEndsIn.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{offerEndsIn.seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
      )}
      <ul className="list-disc list-inside text-sm mb-6 font-bold">
        <li>Exclusive offers for premium members.</li>
        <li>Additional 20% off for orders above $500.</li>
        <li>Free shipping on all orders.</li>
      </ul>
      <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg">
        SHOP NOW →
      </button>
      <div className="mt-6">
        <p className="text-xs text-gray-600">
          * Limited time offer. T&Cs apply. Discounts are subject to
          availability and may change without notice.
        </p>
      </div>
    </div>
  );
};

// ProductCard component
const ProductCard = ({ product }) => (
  <div
    key={product.id}
    className="bg-white p-4 shadow-lg hover:shadow-2xl border-2 rounded-xl relative"
  >
    {/* {product.soldOut && (
      <span className="absolute top-2 left-2 bg-gray-500 text-xs font-semibold px-2 py-1 rounded-full">
        SOLD OUT
      </span>
    )} */}
    <div className="relative group">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain group-hover:blur-md border-b-2 border-gray-600"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 rounded-lg">
        <div className="flex space-x-4">
          <span className="text-white font-extrabold cursor-pointer bg-orange-400 p-2 rounded-full text-4xl">
            <CiHeart />
          </span>
          <span className="text-white font-extrabold cursor-pointer bg-orange-400 p-2 rounded-full text-4xl">
            <CiShoppingCart />
          </span>
          <span className="text-white font-extrabold cursor-pointer bg-orange-400 p-2 rounded-full text-4xl">
            <IoEyeOutline />
          </span>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-sm font-bold">{product.name}</h3>
      <div className="mt-2 text-xl font-bold text-blue-500">
        ${product.price}
      </div>
      {product.originalprice&& (
        <div className="text-gray-500 line-through text-sm">
          ${product.originalprice}
        </div>
      )}
    </div>
  </div>
);

const getRandomProducts = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function FeaturedProducts() {
  // const[selectedProducts,setProduct]=useState([])
  // const{products}=useAuth();
  // setProduct(products);
  // console.log("checks",products);
  const [activeCategory, setActiveCategory] = useState("All Product");

  const categories = [
    "All Product",
    "Smart Phone",
    "Laptop",
    "Headphone",
    "TV",
    
  ];

  const filteredProducts =
    activeCategory === "All Product"
      ? getRandomProducts(products, 6) // Show 6 random products
      : products
          .filter((product) => product.category == activeCategory)
          .slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/4 px-4 mb-8">
          <DiscountBanner />
        </div>
        <div className="w-full md:w-3/4 px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory == category
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="text-orange-500 font-semibold cursor-pointer">
              Browse All Product →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products available in this category</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
