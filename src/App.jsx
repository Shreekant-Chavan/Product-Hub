import React,{ useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  React.useEffect(()=>{
    console.log(searchTerm)
  },[searchTerm, setSearchTerm])
  return (
    <div className="flex h-screen">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <Header onSearch={(query)=> setSearchTerm(query)} />
        <main className="flex-1 overflow-y-auto bg-gray-400">
          <Outlet context={{ searchTerm }} />
          <Layout />
        </main>
      </div>
    </div>
  );
}

export default App;
