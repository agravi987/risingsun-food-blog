import connectDB from "@/lib/connectDB";
import foodModel from "@/models/food.model";

export const GET = async (request) => {
  try {
    await connectDB(); // Ensure the database connection is established

    const foods = await foodModel.find({}).sort({ createdAt: -1 }).lean();
    return Response.json(
      { status: "success", message: "Foods fetched successfully", data: foods },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching foods:", error);
    return Response.json(
      { status: "error", message: "error in fetching foods: " + error.message },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    await connectDB(); // Ensure the database connection is established

    const body = await request.json();
    const { name, description, category, imageUrl, calories } = body;

    if (!name || !description || !imageUrl || !calories) {
      return Response.json(
        { status: "error", message: "All fields are required" },
        { status: 400 }
      );
    }

    const newFood = new foodModel({
      name,
      description,
      category,
      imageUrl,
      calories,
    });

    await newFood.save();

    return Response.json(
      {
        status: "success",
        message: "Food created successfully",
        data: newFood,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating food:", error);
    return Response.json(
      { status: "error", message: "Error in creating food: " + error.message },
      { status: 500 }
    );
  }
};
