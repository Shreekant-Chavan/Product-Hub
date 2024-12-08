import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Product from "./components/Products/Product.jsx";
import Brands from "./components/Brands/Brands.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Customers from "./components/Customers/Customers.jsx";
import EditProduct from "./components/Products/EditProduct.jsx";
import AddProduct from "./components/Products/AddProduct.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/add-product" element={<AddProduct />} />
      <Route path="/products/edit-product/:id" element={<EditProduct />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>
);
