import { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";

import cod from "../assets/saving-icon.webp";
import venmo from "../assets/venmo-icon.png";
import gpay from "../assets/google-pay-icon.webp";
import amz from "../assets/amazon-a-logo-icon.webp";
import cc from "../assets/master-card-icon.webp";
import { countries } from "../data/country";

const Checkout = () => {
  //state to track selected payment options
  const [selectedPayment, setSelectedPayment] = useState("");

  // State for discount, tax, shipping, and total
  const [discount, setDiscount] = useState(24);
  const [tax, setTax] = useState(61.99);
  const [shipping, setShipping] = useState(0); // Free shipping
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  //state for country and region
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  //state for order items
  const [orderItems, setOrderItems] = useState([
    { name: "Canon EOS 1500D DSLR Camera Body+ 18...", quantity: 1, price: 70 },
    {
      name: "Wired Over-Ear Gaming Headphones with U...",
      quantity: 3,
      price: 250,
    },
  ]);

  //state for billing information
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    region: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  });

  //handler for country change
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countries[country] || []);
  };

  //Handler for payment option change
  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  //handler to place order
  // const handlePlaceOrder = async () => {
  //   try {
  //     // Replace with your actual API endpoint to submit the order
  //     const response = await axios.post("/api/orders", {
  //       orderItems,
  //       billingInfo,
  //       paymentOption: selectedPayment,
  //       total,
  //     });
  //     // Handle successful order placement (e.g., redirect to order confirmation page)
  //     console.log("Order placed successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //   }
  // };

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        const response = "add later";
        setOrderItems(response.data.orderItems);
        setBillingInfo(response.data.billingInfo);
      } catch (error) {
        console.error("Error fetching checkout data:", error);
      }
    };
    fetchCheckoutData();
  }, []);

  // Calculate sub-total and total whenever order items change
  useEffect(() => {
    const subTotalCalc = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(subTotalCalc);

    // Calculate total: subTotal - discount + tax + shipping
    const totalCalc = subTotalCalc - discount + tax + shipping;
    setTotal(totalCalc);
  }, [orderItems, discount, tax, shipping]);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Information */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={billingInfo.firstName}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={billingInfo.lastName}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  value={billingInfo.companyName}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  value={billingInfo.address}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Country
                  </label>
                  <select
                    className="w-full p-2 border rounded"
                    onChange={handleCountryChange}
                    value={selectedCountry}
                  >
                    <option value="">Select a Country</option>
                    {Object.keys(countries).map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    State
                  </label>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select a State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    value={billingInfo.zipCode}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={billingInfo.email}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={billingInfo.phoneNumber}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <h3 className="text-xl font-semibold mt-8 mb-4">
                Payment Option
              </h3>
              <div className="flex justify-between space-x-4">
                <div className="border-2 border-gray-200 p-4 w-full flex flex-col items-center">
                  <label
                    htmlFor="cashOnDelivery"
                    className="flex flex-col items-center"
                  >
                    <img src={cod} alt="COD" className="w-8 h-8 mb-2" />
                    <span>Cash on Delivery</span>
                  </label>
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="payment"
                    value="cod"
                    onChange={handlePaymentChange}
                    className="mb-2"
                  />
                </div>
                <div className="border-2 border-gray-200 p-4 w-full flex flex-col items-center">
                  <label htmlFor="venmo" className="flex flex-col items-center">
                    <img src={venmo} alt="venmo" className="w-8 h-8 mb-2" />
                    <span>Venmo</span>
                  </label>
                  <input
                    type="radio"
                    id="venmo"
                    name="payment"
                    value="venmo"
                    onChange={handlePaymentChange}
                    className="mb-2"
                  />
                </div>
                <div className="border-2 border-gray-200 p-4 w-full flex flex-col items-center">
                  <label htmlFor="gpay" className="flex flex-col items-center">
                    <img src={gpay} alt="Google Pay" className="w-8 h-8 mb-2" />
                    <span>Google Pay</span>
                  </label>
                  <input
                    type="radio"
                    id="gpay"
                    name="payment"
                    value="gpay"
                    onChange={handlePaymentChange}
                    className="mb-2"
                  />
                </div>
                <div className="border-2 border-gray-200 p-4 w-full flex flex-col items-center">
                  <label
                    htmlFor="amazonPay"
                    className="flex flex-col items-center"
                  >
                    <img src={amz} alt="Amazon Pay" className="w-8 h-8 mb-2" />
                    <span>Amazon Pay</span>
                  </label>
                  <input
                    type="radio"
                    id="amazonPay"
                    name="payment"
                    value="amazonpay"
                    onChange={handlePaymentChange}
                    className="mb-2"
                  />
                </div>
                <div className="border-2 border-gray-200 p-4 w-full flex flex-col items-center">
                  <label htmlFor="card" className="flex flex-col items-center">
                    <img
                      src={cc}
                      alt="Credit/Debit Cards"
                      className="w-8 h-8 mb-2"
                    />
                    <span>Credit/Debit Cards</span>
                  </label>
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value="card"
                    onChange={handlePaymentChange}
                    className="mb-2"
                  />
                </div>
              </div>

              {/* Conditionally render extra fields for UPI or Card payments */}
              {selectedPayment === "gpay" && (
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="example@upi"
                  />
                </div>
              )}

              {selectedPayment === "amazonpay" && (
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="example@upi"
                  />
                </div>
              )}

              {selectedPayment === "venmo" && (
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">
                    Venmo Username
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="@yourusername"
                  />
                </div>
              )}

              {selectedPayment === "card" && (
                <>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Expire Date
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

            {/* Dynamically display the order items */}
            {orderItems.map((item, index) => (
              <div className="mb-4" key={index}>
                <p>{item.name}</p>
                <p>
                  {item.quantity} x ${item.price}
                </p>
              </div>
            ))}

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between">
              <p>Sub-total</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{shipping === 0 ? "0.00" : `${shipping.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>${tax.toFixed(2)}</p>
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between font-bold text-xl">
              <p>Total</p>
              <p className="flex items-center">
                <FaRupeeSign size={14} />
                {total.toFixed(2)} USD
              </p>
            </div>

            <button
              //onClick={handlePlaceOrder}
              className="w-full bg-orange-500 text-white p-3 mt-6 rounded-lg hover:bg-orange-600"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
