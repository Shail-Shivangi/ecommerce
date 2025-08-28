/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import speaker from "../../assets/speaker.png";

// Custom Next Button
const NextButton = (props) => {
  const { onClick } = props;
  return (
    <button
      className="text-3xl bg-orange-500 text-white rounded-full p-4 absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hover:shadow-xl hover:shadow-gray-400 border-4 border-orange-100"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </button>
  );
};

// Custom Previous Button
const PrevButton = (props) => {
  const { onClick } = props;
  return (
    <button
      className="prev-button text-3xl bg-orange-500 text-white rounded-full p-4 absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hover:shadow-xl hover:shadow-gray-400 border-4 border-orange-100"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </button>
  );
};

const CategorySlider = () => {
  const categories = [
    {
      name: "Electronics",
      image: speaker,
    },
    {
      name: "Fashion",
      image: speaker,
    },
    {
      name: "Home Decor",
      image: speaker,
    },
    {
      name: "Books",
      image: speaker,
    },
    {
      name: "Sports",
      image: speaker,
    },
  ];

  // Slider settings with button navigation
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="container mx-auto p-8 rounded-xl shadow-lg hover:shadow-xl bg-gray-300">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="bg-white rounded-3xl cursor-pointer  mx-auto"
                style={{ width: "300px" }} 
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover border-b-4 border-gray-300"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CategorySlider;
