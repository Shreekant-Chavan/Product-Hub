import { useState } from "react";
import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Dashboard>
        <Product />
      </Dashboard>
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;

{
  /* <h1>Product Hub</h1>
    <p>Welcome to your product hub!</p>
    <button onClick={() => {
      localStorage.setItem('isLoggedIn', 'true');
    }}>Login</button>
    <button onClick={() => {
      localStorage.setItem('isLoggedIn', 'false');
    }}>Logout</button>
    {localStorage.getItem('isLoggedIn') === 'true' && <Dashboard />}
    {localStorage.getItem('isLoggedIn') === 'false' && <Login />}
    {localStorage.getItem('isLoggedIn') === 'false' && <Signup />}
    <button onClick={() => {
      localStorage.removeItem('isLoggedIn');
    }}>Clear Local Storage</button>
    <button onClick={() => {
      window.location.reload();
    }}>Refresh Page</button> */
}
