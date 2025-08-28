import img from "/src/assets/aboutus.png";
import { TiTick } from "react-icons/ti";
import img2 from "/src/assets/p2.png";
import FlashDeals from "./FlashDeals";
import img3 from "/src/assets/p3.png";
import manish from "/src/assets/manish.jpg";
import sneha from "/src/assets/sneha.jpg";
import aditya from "/src/assets/aditya.jpg";
import manas from "/src/assets/profilemanas.jpeg";
import shail from "/src/assets/shail.jpeg";
import preeti from "/src/assets/preeti.jpeg";

const profile = [
  {
    name: "Manish Verma",
    work: "Frontend Developer",
    image: manish,
  },
  {
    name: "Aditya Dixit",
    work: "Frontend Developer",
    image: aditya,
  },
  {
    name: "Sneha Dange",
    work: "Frontend Developer",
    image: sneha,
  },
  {
    name: "Manas Das",
    work: "Backend Developer",
    image: manas,
  },
  {
    name: "Preeti Gautam",
    work: "Backend Developer",
    image: preeti,
  },
  {
    name: "Shail Shivangi",
    work: "UI/UX Designer",
    image: shail,
  },
];

const Aboutus = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen px-4 py-4 mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full lg:w-6/12 px-4 py-4 lg:px-8">
          <div className="bg-orange-500 text-white px-4 py-2 w-max text-3xl rounded-xl">
            <p>WHO WE ARE</p>
          </div>
          <div className="font-semibold text-2xl lg:text-4xl mt-4">
            <p>NEXUS_DROP - LARGEST ELECTRONIC DEVICES IN THE WORLD</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Features Section */}
          <div className="flex flex-col my-4 space-y-2">
            {[
              "Great Customer Support",
              "Quality Products",
              "Fast Delivery",
              "Trusted by Many",
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <TiTick color="green" className="mr-2" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-6/12 mt-4 lg:mt-0">
          <img
            src={img}
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Core Team Members */}
      <div className="flex flex-col justify-center items-center px-2 py-2">
        <div>
          <p className="font-semibold text-3xl text-black">OUR CORE TEAM MEMBERS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {profile.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center space-x-4 px-2 py-4"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500">{item.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-8">
        <img
          className="object-cover w-full h-64 lg:h-96"
          src={img2}
          alt="Banner"
        />
      </div>

      {/* Flash Deals Section */}
      <div className="w-full mt-8">
        <FlashDeals />
      </div>

      {/* Newsletter Section */}
      <div className="w-full flex flex-col justify-center items-center bg-custom-color px-4 py-8 mt-8">
        <div className="w-full lg:w-5/12 text-center mb-4">
          <p className="text-2xl lg:text-3xl font-semibold text-white">
            Subscribe to our Newsletter
          </p>
        </div>
        <div className="w-full lg:w-5/12 mb-4">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Email Input Section */}
        <div className="flex w-full lg:w-6/12 relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-12 lg:h-16 px-4 py-2 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-600 absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 lg:py-3 text-white rounded-md">
            Subscribe
          </button>
        </div>

        {/* Footer Image */}
        <div className="w-full mt-8">
          <img className="object-cover w-full h-23 lg:h-23" src={img3} alt="Footer" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

