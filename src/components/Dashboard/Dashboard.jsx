import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import DashboardPage from "./DashboardPage";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Navbar />
      {/* Sidebar */}

      <div className="flex-1 flex flex-col">
        <Header />
        {/* Header */}

        <main className="flex-1 overflow-y-auto bg-gray-400">
          <DashboardPage />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default Dashboard;
