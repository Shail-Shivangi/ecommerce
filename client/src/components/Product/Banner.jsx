//import Image from '../../assets/xbox.png'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            INTRODUCING
          </span>
          <h2 className="text-2xl font-bold mt-4 mb-2">New Apple Homepod Mini</h2>
          <p className="text-gray-600 mb-4">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center">
            SHOP NOW
            <FaLongArrowAltRight className="ml-2 h-4 w-4" />
          </button>
          {/* <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Apple Homepod Mini"
            width={150}
            height={150}
            className="rounded-full"
          /> */}
        </div>
      </div>
      <div className="flex-1 bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col justify-between relative overflow-hidden">
        <div>
          <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded">
            INTRODUCING NEW
          </span>
          <h2 className="text-2xl font-bold mt-4 mb-2">Xiaomi Mi 11 Ultra 12GB+256GB</h2>
          <p className="text-gray-400 text-sm mb-4">
            *Data provided by internal laboratories. Industry measurment.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center">
            SHOP NOW
            <FaLongArrowAltRight className="ml-2 h-4 w-4" />
          </button>
          {/* <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Xiaomi Mi 11 Ultra"
            width={200}
            height={200}
            className="absolute bottom-0 right-0"
          /> */}
        </div>
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-xl font-bold p-2 rounded-full">
          $590
        </div>
      </div>
    </div>
  )
}