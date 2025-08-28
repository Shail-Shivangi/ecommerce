import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
import CustomerSupport from "./components/CustomerSupport";
import AuthForm from "./components/AuthForm";
import Wishlist from "./components/Wishlist";
import FAQ from "./components/FAQ";
import Product from './components/Product';
import Aboutus from "./components/Aboutus";
import UserProfile from "./components/UserProfile";
import ScrollToTop from "./components/scrolling";
import { FilterContextProvider } from "./components/Store/filterContext";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }


const App = () => {
  return (
    <>
    <FilterContextProvider>
      <BrowserRouter>
        {/**Header */}
        <Header />
        <ScrollToTop/>
        <Routes>
        
          <Route path="/dashboard" element={<UserProfile user="Mr Meow" email="meow_meow@gmail.com" />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/shop" element={<Product/>}/>
          <Route path="/about" element={<Aboutus />} />
        </Routes>
        {/**Footer */}
        <Footer />
      </BrowserRouter>
      </FilterContextProvider>
    </>
  );
};

export default App;
