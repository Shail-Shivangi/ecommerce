/* eslint-disable react/prop-types */
import avatar from '/src/assets/icons8-cat-profile-100.png'

const UserProfile = ({ user, email }) => {
    return (
      <div className="flex justify-center min-h-screen bg-gray-50">
        {/* Navbar */}
       
        <div className="flex flex-col md:flex-row">
         
          {/* Main content */}
          <main className="flex-1 p-6">
            
  
            {/* User Info Section */}
            <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-6 ">Account Settings</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Profile Image */}
                <div className="text-center">
                  <img
                    className="h-24 w-24 rounded-full mx-auto"
                    src={avatar}
                    alt="User"
                  />
                  <h2 className="mt-2 text-xl font-semibold">{user}</h2>
                  <p className="text-gray-500">{email}</p>
                </div>
  
                {/* User Form */}
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        value=""
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Secondary Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        value=""
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Phone Number</label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        value=""
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Country/Region</label>
                      <select className="mt-1 block w-full px-3 py-2 border rounded-md">
                        <option value=""></option>
                        {/* Add other country options here */}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">State</label>
                      <select className="mt-1 block w-full px-3 py-2 border rounded-md">
                        <option value=""></option>
                        {/* Add other state options here */}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">Zip Code</label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        value=""
                      />
                    </div>
                  </div>
                  <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md">
                    Save Changes
                  </button>
                </div>
              </div>
            </section>
  
          {/* Address Sections */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Billing Address */}
            <section className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
              </div>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </section>

            {/* Shipping Address */}
            <section className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                    value=""
                  />
                </div>
              </div>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </section>
          </div>

            {/* Password Change */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Current Password</label>
                  <input
                    type="password"
                    className="mt-1 block  w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="mt-1 block  w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="mt-1 block  w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md">
                Change Password
              </button>
            </section>
          </main>
     </div>
       
        </div>
    );
};

export default UserProfile;


