import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Fetch user from db.json
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching from user:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-400 p-6 flex justify-center items-start">
      <div className="bg-gray-100 shadow-md rounded-lg p-6 w-96 h-96">
        {user.map((users, index) => (
          <div key={index}>
            <img
              src={
                users.profilePhoto ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={users.name}
              className="w-36 h-36 rounded-full mx-auto mb-5"
            />
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
              {users.name}
            </h1>
            <p className="text-center text-gray-600">{users.email}</p>
            <div className="mt-7">
              <p>
                <span className="font-bold m-2">Email:</span> {users.email}
              </p>
              <p>
                <span className="font-bold m-2">Password:</span>{" "}
                {users.password}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
