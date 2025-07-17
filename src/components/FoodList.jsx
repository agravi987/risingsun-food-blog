"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get("/api/foods");
        setFoods(res.data.data);
      } catch (err) {
        console.error("Error fetching foods:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          backgroundColor: "#0a1725",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#9fc3e9",
          fontSize: "1.5rem",
          flexDirection: "column",
        }}
      >
        <div className="loader"></div>
        <p style={{ marginTop: "20px" }}>Loading Foods...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#0a1725",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>🍽 Food Menu</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {foods.map((food) => (
          <FoodCard key={food._id} {...food} />
        ))}
      </div>
    </div>
  );
}
