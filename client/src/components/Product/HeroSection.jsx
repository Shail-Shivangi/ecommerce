//images
import xbox from "../../assets/xbox.png";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
//icons
import { FaLongArrowAltRight } from "react-icons/fa";


const HeroSection = () => {
  const slides = [
    {
      title: "Xbox Consoles",
      description:
        "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
      price: "$299",
      image: xbox,
    },
    {
      title: "PlayStation Consoles",
      description:
        "PlayStation 5 now available with exclusive bundles and offers.",
      price: "$499",
      image: xbox,
    },
    {
      title: "Nintendo Switch",
      description: "Discover the joy of gaming anywhere with Nintendo Switch.",
      price: "$199",
      image: xbox,
    },
  ];

  return (
    <div className="rounded-lg hover:shadow-lg hover:shadow-gray-300 sm:mx-auto lg:mx-20 mt-5 bg-gray-300 p-8 md:p-24">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module here
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16">
              <div className="space-y-4 text-center md:text-left">
                <p className="text-blue-500 uppercase tracking-widest font-bold text-sm md:text-base">
                  The Best Place to Play
                </p>
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base">{slide.description}</p>
                <button className="flex items-center justify-center mx-auto md:mx-0 px-6 py-2 bg-orange-500 text-white rounded-sm hover:bg-orange-600 transition">
                  Shop Now
                  <span className="ml-2">
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-40 md:w-64 h-auto mt-6 md:mt-0"
              />
              <div className="text-lg absolute top-2 right-4 md:right-6 bg-blue-500 text-white px-3 py-4 rounded-full">
                {slide.price}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
