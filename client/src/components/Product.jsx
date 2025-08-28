import  { useEffect, useState } from "react";
import Card from "/src/components/Card";
import Spinner from "/src/components/Spinner";
import { useAuth } from "./Store/Auth.jsx";
import { useFilterContext } from "./Store/filterContext.jsx";

const Product = () => {
  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const {products}=useAuth();
  const { state,filter_Products,sorting, all_products, updateFilterValue } = useFilterContext();
  // const { filters } = state;
  // const { filters = { category: [], brand: [] } } = state || {};
  console.log("st",filter_Products)
// if (!state ) 
//   return <div>Loading...</div>;
  const getUniqueData=(data,property)=>{
    let newData=data.map((curr)=>{
      return curr[property];
    })
    newData=[...new Set(newData)]
    console.log("cate",newData);
  }
  // const category=getUniqueData(all_products,"category_name")
  
  // const API = "https://fakestoreapi.com/products";
  const API="http://localhost:8000/api/products"

  const categories = [
    "Electronics Devices", "Computer & Laptop", "Computer Accessories", "SmartPhone",
    "Headphone", "Mobile Accessories", "Gaming Console", "Camera & Photo",
    "TV & Home Appliances", "Watch & Accessories", "GPS & Navigation", "Wearable Technology"
  ];
  
  const priceRanges = [
    "All Price", "Under $20", "$25 to $100", "$100 to $300",
    "$300 to $500", "$500 to $1,000", "$1,000 to $10,000"
  ];
  
  const popularBrands = [
    "Apple", "Microsoft", "Dell", "Symphony", "Sony", "LG",
    "Google", "Samsung", "HP", "Xiaomi", "Panasonic", "Intel"
  ];

   function fetchProductData() {
    setLoading(true);
    try {
      setPosts(products); // Set posts based on filter_Products (updated state)
    } catch (error) {
      console.log("Error occurred:", error);
      setPosts([]);
    }
    setLoading(false);
    // try {
    //   const res = await fetch(API);
    //   const data = await res.json();
    //   console.log("state",products);
    //   // setPosts(state.products);
    //   console.log("post=",posts)
    //   // console.log("data", data); // Updated to log 'data' instead of 'posts'
    // } catch (error) {
    //   console.log("Error occurred");
    //   setPosts([]);
    // }
    // setLoading(false);
  }
//  console.log(posts.length)
  useEffect(() => {
    // if (Array.isArray(filter_Products)) {
    //   setPosts(filter_Products);
    // }
    fetchProductData();
  }, [products]);

  return loading ? (
    <div className="flex justify-center items-center">
        <Spinner/>
    </div>
     ) :(
    <div className="w-full flex">
      <div className="w-1/4 p-4 border-r ">
        <div className="mb-6">
          <h2 className="font-bold mb-2">CATEGORY</h2>
          {categories.map((curr, index) => (
            <div key={index} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2" 
              name={"category"}
               value={`${curr}`}
              //  checked={filters.category.includes(curr)}
                // onClick={updateFilterValue}
                />
              <span>{curr}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="font-bold mb-2">PRICE RANGE</h2>
          <div className="flex justify-between mb-2">
            <span>Min price</span>
            <span>Max price</span>
          </div>
          {priceRanges.map((range, index) => (
            <div key={index} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2" />
              <span>{range}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-bold mb-2">POPULAR BRANDS</h2>
          <div className="grid grid-cols-2 gap-2">
            {popularBrands.map((curr, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" 
                 name={"brand"}
                //  value={`${curr}`} 
                
                //  onClick={updateFilterValue}
                />
                <span>{curr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex items-center flex-col w-3/4 ">
        <div className="w-full flex justify-between items-center space-x-4">
          <div>
            <input placeholder="Search for everything" className="border px-2 py-1 " />
          </div>

         

          <div className="flex justify-center items-center space-x-2 ">
          <div>
            <p>Sort By:</p>
          </div>
          <div>
            {/* <label htmlFor="">Most Popular</label> */}
          <select className="" onChange={sorting}>
              <option value={"popular"}>Most Popular</option>
              <option value={"incr"}>Price: Low to High</option>
              <option value={"decr"}>Price: High to Low</option>
            </select>
          </div>
           
          </div>
        </div>

        {
        posts.length > 0 ? (
          
          <div className="grid grid-cols-4 gap-4 mt-3">
            {   
               posts.map((post) => {
               
               return <Card key={post._id} post={post} />
              })
            }
          </div>
          ) : (
          <div className="flex justify-center items-center">
            <p>No Posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
