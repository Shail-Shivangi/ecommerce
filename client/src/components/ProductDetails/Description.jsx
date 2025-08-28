import React, { useState } from 'react';

const Description = () => {
  const [activeSection, setActiveSection] = useState('Description');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="mt-5 bg-gray-300 py-10 px-6 md:px-12">
      <div className="container mx-auto ">
        {/* Header Row with Clickable Headings */}
        <div className="flex flex-wrap mb-4">
          <div
            className={`w-1/4 text-center cursor-pointer ${activeSection === 'Description' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Description')}
          >
            <h2 className="text-2xl">Description</h2>
          </div>
          <div
            className={`w-1/4 text-center cursor-pointer ${activeSection === 'Feature' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Feature')}
          >
            <h2 className="text-2xl">Feature</h2>
          </div>
          <div
            className={`w-1/4 text-center cursor-pointer ${activeSection === 'Shipping Information' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Shipping Information')}
          >
            <h2 className="text-2xl">Shipping Information</h2>
          </div>
          <div
            className={`w-1/4 text-center cursor-pointer ${activeSection === 'Review' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Review')}
          >
            <h2 className="text-2xl">Review</h2>
          </div>
        </div>

        {/* Content Row with Sections */}
        <div className="bg-white p-6 border-4 border-gray-100 shadow-2xl rounded-2xl mb-5">
          {activeSection === 'Description' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-gray-700">
                The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
              </p>
            </div>
          )}

          {activeSection === 'Feature' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Feature</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Free 1 Year Warranty</li>
                <li>Free Shipping & Fasted Delivery</li>
                <li>100% Money-back guarantee</li>
                <li>24/7 Customer support</li>
                <li>Secure payment method</li>
              </ul>
            </div>
          )}

          {activeSection === 'Shipping Information' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Shipping Information</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Courier:</strong> 2 - 4 days, free shipping</li>
                <li><strong>Local Shipping:</strong> up to one week, $19.00</li>
                <li><strong>UPS Ground Shipping:</strong> 4 - 6 days, $29.00</li>
                <li><strong>Unishop Global Export:</strong> 3 - 4 days, $39.00</li>
              </ul>
            </div>
          )}

          {activeSection === 'Review' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Review</h3>
              <p className="text-gray-700">Reviews will be added here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Description;
