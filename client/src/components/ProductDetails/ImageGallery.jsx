import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";

// const images = [img1, img2, img3, img4];

export default function ImageGallery({product}) {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = [`/src/${product.image_url}`,img1, img2, img3, img4];
  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-gray-100 bg-white shadow-2xl">
      {/* Main Image */}
      <div className="relative aspect-video mb-4">
        <img
          src={images[selectedImage]}
          alt={`Product ${selectedImage + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-colors duration-200"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-colors duration-200"
          onClick={handleNext}
          aria-label="Next image"
        >
          <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            className={`flex-shrink-0 border-2 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedImage === index ? "border-blue-500" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={img}
              alt={`Gallery thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  )
}