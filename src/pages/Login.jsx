import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  // Creating States for Form inputs and Messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginFailed, setLoginFailed] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handling form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form reload
    if (isSubmitting) return; // Prevent multiple submissions

    try {
      // Fetch users from JSON Server
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      // Find user in the fetched users array based on email and password
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // If user found, login success message!
        setLoginSuccess(`Login successful! Welcome back ${user.name}`);
        setLoginFailed("");

        // Storing user information in local storage for future use
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // setEmail("");
        // setPassword("");

        setTimeout(() => {
          navigate("/dashboard"); // Redirecting to dashboard after successful login
        }, 1500);
      } else {
        // If user not found, login failed message!
        setLoginFailed("Invalid email or password!");
        setLoginSuccess("");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoginFailed("An error occurred while logging in. Please try again");
      setLoginSuccess("");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="h-screen w-screen pt-10 bg-[#1c1c1c]">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-5 flex justify-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
              required
              type="text"
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
              required
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
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex items-center justify-center">
          <p className="pt-5">
            Don't have an account?
            <Link to="/signup" className="text-indigo-500 ml-1">
              Sign up!
            </Link>
          </p>
        </div>
      </div>

      {loginSuccess && (
        <p className="text-center text-green-600 mt-6 font-semibold text-lg">
          {loginSuccess}
        </p>
      )}
      {loginFailed && (
        <p className="text-center text-red-500 mt-6 font-semibold text-lg">
          {loginFailed}
        </p>
      )}
    </div>
  );
}

export default Login;
