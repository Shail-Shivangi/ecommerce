import React from 'react';
import icon from '/src/assets/icons8-technical-support-100.png';

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Help Center Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-lg text-yellow-500 font-semibold mb-2">HELP CENTER</h2>
          <h1 className="text-3xl font-bold mb-6">How we can help you!</h1>

          <div className="flex justify-center items-center max-w-md mx-auto mb-8">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your question or keyword"
            />
            <button className="ml-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600">
              SEARCH
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={icon}
              alt="Support Agent"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Assistance Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            What can we assist you with today?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Track Order
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Reset Password
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Payment Option
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              User & Account
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Wishlist & Compare
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Shipping & Billing
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Shopping Cart & Wallet
            </button>
            <button className="border border-orange-500 p-4 rounded-md hover:bg-orange-50 text-orange-500 font-semibold">
              Sell on Nexus_Drop
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm">
            <ul className="list-disc space-y-2">
              <li>How do I return my item?</li>
              <li>What is Nexus_Drop's Returns Policy?</li>
              <li>How long is the refund process?</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>What are the 'Delivery Timelines'?</li>
              <li>What is Discover Your Daraz Campaign 2022?</li>
              <li>What is the Voucher & Gift Offer in this Campaign?</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>How to cancel Nexus_Drop Order?</li>
              <li>How to ask the Digital and Device Community?</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>How to change my shop name?</li>
              <li>How to manage my account settings?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't find your answer? Contact with us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Call us now</h3>
              <p className="text-sm mb-4">We are available online from 9:00 AM to 5:00 PM (GMT+5)</p>
              <p className="font-bold text-lg">+91-0123456789</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                CALL NOW
              </button>
            </div>
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Chat with us</h3>
              <p className="text-sm mb-4">We are available online from 9:00 AM to 5:00 PM (GMT+5)</p>
              <p className="font-bold text-lg">Support@nexus_drop.com</p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupport;
