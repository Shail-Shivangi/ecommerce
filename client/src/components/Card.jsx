/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  // useEffect(()=>{
  //   // post=post;
  // },[post])
  // console.log("card")
  return (
    <NavLink to={`/product/${post.product_id}`} >
      
    <div className="border p-4">
      <img src={"src/"+post.image_url} className="h-40 object-contain" />
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-700">${post.price}</p>
    </div>
    </NavLink>
  );
};

export default Card;
