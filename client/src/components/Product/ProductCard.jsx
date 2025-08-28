import { useEffect, useState } from "react";
import axios from "axios";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

//images
// import xbox from "../../assets/xbox.png";
// import wash from "../../assets/washing.png";
// import mobile from "../../assets/mobile.png";
// import earbuds from "../../assets/earbuds.png";
// import camera from "../../assets/camera.png";
// import speaker from "../../assets/speaker.png";
// import tv from "../../assets/tv.png";
//static data
// const products = [
//   {
//     id: 1,
//     name: "Xbox Series S - 512GB SSD Console",
//     price: 442.12,
//     originalPrice: 865.99,
//     discount: "38% OFF",
//     hot: true,
//     rating: 5,
//     reviews: 52677,
//     description:
//       "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//     image: xbox,
//   },
//   {
//     id: 2,
//     name: "Simple Mobile 4G LTE Prepaid Smartphone",
//     price: 220,
//     image: mobile,
//   },
//   {
//     id: 3,
//     name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
//     price: 1200,
//     image: camera,
//   },
//   {
//     id: 4,
//     name: "4K UHD LED Smart TV with Chromecast Built-in",
//     price: 150,
//     originalPrice: 685,
//     image: tv,
//   },
//   {
//     id: 5,
//     name: "Portable Washing Machine",
//     price: 70,
//     image: wash,
//   },
//   {
//     id: 6,
//     name: "Bose Sport Earbuds",
//     price: 2300,
//     image: earbuds,
//     soldOut: true,
//   },
//   {
//     id: 7,
//     name: "JBL Flip 4 Bluetooth Speaker",
//     price: 250,
//     originalPrice: 680,
//     discount: "38% OFF",
//     image: speaker,
//   },
// ];

//smaller cards
const ProductCard = () => {
  const [products, setProducts] = useState([]);

  //fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data); // Set fetched products to state
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  const smallerProducts = products.slice(1,7);
  return (
    <>
      {smallerProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 shadow-lg hover:shadow-2xl border-2 rounded-xl relative"
        >
          {product.soldOut && (
            <span className="absolute top-2 left-2 bg-gray-500 text-xs font-semibold px-2 py-1 rounded-full">
              SOLD OUT
            </span>
          )}
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
            {product.originalPrice && (
              <div className="text-gray-500 line-through text-sm">
                ${product.originalPrice}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

//larger card
const FeaturedCard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  const featuredProduct = products[0];
  return (
    featuredProduct && (
      <div className="lg:row-span-2 bg-white p-4 shadow-lg hover:shadow-xl border-2 rounded-lg space-y-12">
        <div className="relative">
          {featuredProduct.discount && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
              {featuredProduct.discount}
            </span>
          )}
          {featuredProduct.hot && (
            <span className="absolute top-2 right-2 bg-red-500 text-xs font-semibold px-2 py-1 rounded-full">
              HOT
            </span>
          )}
          <img
            src={featuredProduct.image}
            alt={featuredProduct.name}
            className="w-full h-48 object-contain"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-lg sm:text-2xl font-bold">
            {featuredProduct.name}
          </h3>
          <div className="flex items-center justify-between mt-4 mb-4">
            <div>
              {featuredProduct.originalPrice && (
                <span className="text-gray-500 line-through">
                  ${featuredProduct.originalPrice}
                </span>
              )}
              <span className="ml-2 text-xl font-bold text-red-600">
                ${featuredProduct.price}
              </span>
            </div>
          </div>
          <div className="flex items-center mt-2 ">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(featuredProduct.rating)}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({featuredProduct.reviews})
            </span>
          </div>
          <p className="text-sm sm:text-lg mt-4 text-gray-600">
            {featuredProduct.description}
          </p>
          <div className="mt-12 flex justify-between items-center space-x-1">
            <span className="text-3xl bg-orange-200 p-2 rounded-md cursor-pointer hover:bg-orange-300">
              <CiHeart />
            </span>
            <button className="p-3 bg-orange-400 text-white rounded-md w-full hover:bg-orange-600">
              Add to Cart
            </button>
            <span className="text-3xl bg-orange-200 p-2 rounded-md  cursor-pointer hover:bg-orange-300">
              <IoEyeOutline />
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export { ProductCard, FeaturedCard };
