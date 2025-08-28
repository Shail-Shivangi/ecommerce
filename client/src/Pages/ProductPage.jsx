import ImageGallery from "../components/ProductDetails/ImageGallery";
import HeroSection from "../components/ProductDetails/HeroSection";
import Description from "../components/ProductDetails/Description";
import FlashDeals from "../components/FlashDeals";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../components/Store/Auth";
import { FilterContextProvider } from "../components/Store/filterContext";
const url="http://localhost:8000/api/products/testing"
const ProductPage = () => {
  const {id}=useParams();
  const {detailedProduct,SingleProduct}=useAuth()
  useEffect(()=>{
    detailedProduct(`${url}?product_id=${id}`)
  },[])
  console.log("single",SingleProduct)

  
  return (
    <>
    <FilterContextProvider>
      <div className="container mx-auto p-8 bg-slate-300 rounded-xl mt-10">
        <div className="flex justify-between items-center space-x-10">
          <ImageGallery key={id} product={SingleProduct}/>
          <HeroSection />
        </div>
      </div>
      <Description />
      <FlashDeals />
      </FilterContextProvider>
    </>
  );
};

export default ProductPage;
