import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div className="text-center mt-20 text-gray-700">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="bg-white shadow-xl rounded-lg w-80 border border-gray-200">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={user.picture.large}
            alt="User"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <img
            src={user.picture.large}
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-10"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-12 px-4">
          <h1 className="text-lg font-semibold text-gray-800">
            {`${user.name.first} ${user.name.last}`}
          </h1>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        {/* Details Section */}
        <div className="px-6 py-4">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase">
              Location
            </h2>
            <p className="text-sm text-gray-700">
              {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase">
                Phone
              </h2>
              <p className="text-sm text-gray-700">{user.phone}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase">
                Age
              </h2>
              <p className="text-sm text-gray-700">{user.dob.age}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center space-x-4 py-4 border-t border-gray-200">
          <a
            href={`tel:${user.phone}`}
            className="text-sm text-blue-500 hover:text-blue-600 transition"
          >
            Call
          </a>
          <a
            href={`mailto:${user.email}`}
            className="text-sm text-blue-500 hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
