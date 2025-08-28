import { ProductCard, FeaturedCard } from "./ProductCard";

const BestDeals = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-40 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Best Deals
          </h2>
          <div className="text-gray-500 font-medium">
            Deals ends in:{" "}
            <span className="text-black font-normal bg-yellow-300 px-2 py-1 rounded">
              16d : 2h : 57m : 23s
            </span>
          </div>
        </div>
        <a href="#" className="text-blue-500 text-sm sm:text-base md:text-lg">
          Browse All Products &rarr;
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Featured Product */}
        <FeaturedCard />
        {/* Smaller Product Cards */}
        <ProductCard />
      </div>
    </div>
  );
};

export default BestDeals;
