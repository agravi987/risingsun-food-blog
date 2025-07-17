import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Food name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
    default: "Lunch",
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
  calories: {
    type: Number,
    required: [true, "Calories info is required"],
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Food || mongoose.model("Food", foodSchema);
