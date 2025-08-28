import { useEffect, useState } from "react";
import xbox from "../assets/xbox.png";
import { useAuth } from "./Store/Auth";
import { NavLink } from "react-router-dom";
// const categories = [
//   {
//     title: "FLASH SALE TODAY",
//     products: [
//       {
//         name: "Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear...",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Simple Mobile 4G LTE Prepaid Smartphone",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "4K UHD LED Smart TV with Chromecast Built-in",
//         price: "$1,500",
//         image: xbox,
//       },
//     ],
//   },
//   {
//     title: "BEST SELLERS",
//     products: [
//       {
//         name: "Samsung Electronics Samsung Galaxy S21 5G",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
//         price: "$1,500",
//         image: xbox,
//       },
//     ],
//   },
//   {
//     title: "TOP RATED",
//     products: [
//       {
//         name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
//         price: "$1,500",
//         image: xbox,
//       },
//     ],
//   },
//   {
//     title: "NEW ARRIVAL",
//     products: [
//       {
//         name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "JBL FLIP 4 -Waterproof Portable Bluetooth Speaker...",
//         price: "$1,500",
//         image: xbox,
//       },
//       {
//         name: "Wyze Cam Pan v2 1080p Pan/ Tilt/Zoom Wi-Fi Indoor Smar...",
//         price: "$1,500",
//         image: xbox,
//       },
//     ],
//   },
// ];

export default function FlashDeals() {
  const {products}=useAuth()
  console.log("flash",products)
  const[bannerProduct,setBannerProduct]=useState([]);
  // useEffect(()=>{
  //   setBannerProduct(products)
  // },[])
  // setBannerProduct(products)
  // console.log("flash",bannerProduct)
  // const categories = [
  //   {
  //     title: "FLASH SALE TODAY",
  //     products: [
  //       {
  //         name: "Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear...",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Simple Mobile 4G LTE Prepaid Smartphone",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "4K UHD LED Smart TV with Chromecast Built-in",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //     ],
  //   },
  //   {
  //     title: "BEST SELLERS",
  //     products: [
  //       {
  //         name: "Samsung Electronics Samsung Galaxy S21 5G",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //     ],
  //   },
  //   {
  //     title: "TOP RATED",
  //     products: [
  //       {
  //         name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //     ],
  //   },
  //   {
  //     title: "NEW ARRIVAL",
  //     products: [
  //       {
  //         name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "JBL FLIP 4 -Waterproof Portable Bluetooth Speaker...",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //       {
  //         name: "Wyze Cam Pan v2 1080p Pan/ Tilt/Zoom Wi-Fi Indoor Smar...",
  //         price: "$1,500",
  //         image: xbox,
  //       },
  //     ],
  //   },
  // ];
  const categories = ["NEW ARRIVAL", "BEST SELLERS", "TOP RATED", "FLASH SALE TODAY"];
return (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* <NavLink to={`/product/${post.product_id}`}> */}
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-lg font-bold text-gray-600">
            {category}
          </h2>
          <div className="space-y-4">
          {/* <NavLink to={`/product/${post.product_id}`}> */}
            {products
              .filter(product => product.presence === category) // filter products by category
              .map((product, productIndex) => (
                <NavLink to={`/product/${product.product_id}`} key={product.product_id}>
                <div
                  key={productIndex}
                  className="flex p-4 shadow-2xl rounded-2xl items-center h-24 w-full cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 mr-4">
                    <img
                      src={`/src/${product.image_url}`}
                      alt={product.title}
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <p className="text-sm truncate">{product.title}</p>
                    <p className="text-blue-500 font-bold">{product.price}</p>
                  </div>
                </div>
                </NavLink>
              ))}
              {/* </NavLink> */}
          </div>
        </div>
      ))}
      {/* </NavLink> */}
    </div>
  </div>
);

}
