//components
import HeroSection from "../components/Product/HeroSection";
import BestDeals from "../components/Product/BestDeals";
import CategorySlider from "../components/Product/CategorySlider";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import Banner from "../components/Product/Banner";
import FlashDeals from "../components/FlashDeals";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestDeals />
      <CategorySlider />
      <FeaturedProducts />
      <Banner />
      <FlashDeals />
    </div>
  );
};

export default Home;
