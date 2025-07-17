import React from "react";
import FoodList from "@/components/FoodList";
import Navbar from "@/components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <FoodList />
    </div>
  );
}

export default Dashboard;
