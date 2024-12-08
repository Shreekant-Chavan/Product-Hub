import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user from local storage
    const userFromStorage = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userFromStorage) {
      setUser(userFromStorage);
    } else {
      // Redirect to login page if user is not found
      navigate("/login");
    }
  }, []);

  if (!user) {
    return <p className="text-center">Loading Profile...</p>;
  }

  // useEffect(() => {
  //   // Fetch user from db.json
  //   fetch("http://localhost:3001/users")
  //     .then((response) => response.json())
  //     .then((data) => setUser(data))
  //     .catch((error) => console.error("Error fetching from user:", error));
  // }, []);

  return (
    <div className="min-h-screen bg-gray-400 p-6 flex justify-center items-start">
      <div className="bg-gray-100 shadow-md rounded-lg p-6 w-96 h-96">
        <img
          src={
            user.profilePhoto ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={user.name}
          className="w-36 h-36 rounded-full mx-auto mb-5"
        />
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
          {user.name}
        </h1>
        <p className="text-center text-gray-600">{user.email}</p>
        <div className="mt-7">
          <p>
            <span className="font-bold m-2">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold m-2">Password:</span> {user.password}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
