import React, { useState } from "react";

const Signup = () => {
  // Creating States for Form inputs and Messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [signupFailed, setSignupFailed] = useState("");

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form reload

    const newUser = {
      name,
      email,
      password,
    };

    try {
      // Send post request to JSON Server
      const response = await fetch("http://localhost:5173/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        ("User registered successfully!");
        // After success Clearing all input forms
        setSignupFailed("");
        setName("");
        setEmail("");
        setPassword("");

        // Creating Aleart for successfully Sign-up

        alert("Account created Successfully! Redirecting to Login Page");

        // Redirect to login page
        setTimeout(() => {
          window.location.href = "/login";
        }, 1800);
      } else {
        setSignupFailed("Failed to register user. Please try again!");

        // Clearing all input forms after failure
        setName("");
        setEmail("");
        setPassword("");

        // Clearing all input forms after failure
        setTimeout(() => {
          setSignupFailed("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSignupFailed("Failed to register user. Please try again!");
      setSignupSuccess("");
      // Clearing all input forms after failure
      setTimeout(() => {
        setSignupFailed("");
      }, 2000);
    }

    // Validating form inputs
    if (!name || !email || !password) {
      setSignupFailed("Please fill in all fields");
      return;
    }
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded font-semibold"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center justify-center">
          <p className="pt-5">
            Already have an account?
            <a
              className="font-semibold underline pl-2 hover:text-gray-300"
              href="/login"
            >
              Login!
            </a>
          </p>
        </div>
      </div>

      {signupSuccess && (
        <div className="text-center text-green-500 mt-5 font-semibold text-lg">
          {signupSuccess}
        </div>
      )}
      {signupFailed && (
        <div className="text-center text-red-500 mt-5 font-semibold text-lg">
          {signupFailed}
        </div>
      )}
    </div>
  );
};

export default Signup;
