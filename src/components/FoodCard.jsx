import "./FoodCard.css";

export default function FoodCard({
  name,
  description,
  category,
  imageUrl,
  calories,
}) {
  return (
    <div className="food-card">
      <img src={imageUrl} alt={name} className="food-img" />
      <div className="food-content">
        <h2 className="food-title">{name}</h2>
        <p className="food-category">Category: {category}</p>
        <p className="food-calories">Calories: {calories}</p>
        <p className="food-desc">{description}</p>
      </div>
    </div>
  );
}
