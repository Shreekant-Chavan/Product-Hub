import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  // Creating States for Form inputs and Messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState({
    type: "", // "success" or "error"
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form reload
    if (isSubmitting) return; // Prevent multiple submissions

    // Validating form inputs
    if (!name || !email || !password) {
      setStatusMessage({ type: "error", message: "Please fill all fields" });
      return;
    }
    setIsSubmitting(true); // Disable from while submitting

    try {
      // Check for Existing User
      const existingUserResponse = await fetch(
        `http://localhost:3001/users?email=${email}`
      );

      const existingUser = await existingUserResponse.json();

      if (existingUser.length > 0) {
        setStatusMessage({
          type: "error",
          message: "Email already in use. Please use a different email.",
        });
        setIsSubmitting(false);
        return;
      }

      // Create new user
      const newUser = {
        name,
        email,
        password,
      };

      // Send post request to JSON Server
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        setStatusMessage({
          type: "success",
          message: "Account created Successfully! Redirecting to Login Page...",
        });

        // Redirect to login page
        setTimeout(() => {
          navigate("/login");
        }, 1800);

        // After success Clearing all input forms
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setStatusMessage({
          type: "error",
          message: "Failed to register user. Please try again!",
        });

        // // Clearing all input forms after failure
        // setName("");
        // setEmail("");
        // setPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }

    setIsSubmitting(false); // Re-enable form after submission
  };
  return (
    <div className="h-screen w-screen pt-10 bg-[#1c1c1c]">
      <div className="max-w-md mx-auto bg-gray-800 p-6 text-white rounded-lg">
        <h2 className="text-xl font-bold mb-5 flex justify-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
              type="text"
              id="username"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            } px-4 py-2 rounded font-semibold`}
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className="flex items-center justify-center">
          <p className="pt-5">
            Already have an account?
            <Link to="/login" className="text-indigo-500 ml-1">
              Login!
            </Link>
          </p>
        </div>
      </div>

      {statusMessage.message && (
        <div
          className={`text-center mt-5 font-semibold text-lg ${
            statusMessage.type === "success"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {statusMessage.message}
        </div>
      )}
    </div>
  );
};

export default Signup;
