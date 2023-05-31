import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Widgets from "../component/Widgets";
import Graphs from "../component/Graphs";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-cols w-[1320px]">
        <Navbar />
        <Widgets />
        <Graphs />
      </div>
      
    </div>
  );
};

export default Dashboard;