"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./AddFoodPage.css"; // <-- Import CSS

export default function AddFoodPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Lunch",
    imageUrl: "",
    calories: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/foods", {
        ...formData,
        calories: parseInt(formData.calories),
      });
      alert("Food added successfully!");
      router.push("/");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="add-food-container">
      <h1 className="add-food-title">➕ Add New Food</h1>
      <form onSubmit={handleSubmit} className="add-food-form">
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
        />

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
          <option>Dessert</option>
        </select>

        <label>Image URL (e.g. /biryani.jpg):</label>
        <input
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
