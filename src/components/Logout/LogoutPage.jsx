import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage({
  redirectPath = "/dashboard",
  confirmMessage = "Are you sure you want to logout?",
  successMessage = "You have successfully logged out. Redirecting to login...",
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // // Clear any stored authentication data
    setShowConfirm(true);
    // navigate("/login");
  };

  const handleCancel = () => navigate(redirectPath);

  useEffect(() => {
    if (showConfirm) {
      const timer = setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
      return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }
  }, [showConfirm, navigate]);

  return (
    <div className="min-h-screen bg-gray-400 p-6 flex items-start justify-center">
      <div className="bg-gray-100 p-8 shadow-md rounded-lg text-center w-full max-w-md min-h-[24rem]">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        {!showConfirm ? (
          <div>
            <p className="text-lg font-semibold mt-8 mb-4">{confirmMessage}</p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold mt-8">{successMessage}</p>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => navigate("/login")}
              >
                Go to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogoutPage;
