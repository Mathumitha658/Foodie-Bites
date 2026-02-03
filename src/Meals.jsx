import React from "react";
import { useNavigate } from "react-router-dom";
import "./Meals.css";

const meals = [
  {
    title: "Veg Meals",
    type: "veg",
    items: [
      "Steamed Rice",
      "Sambar",
      "Rasam",
      "Vegetable Kuzhambu",
      "Poriyal",
      "Kootu",
      "Appalam",
      "Curd",
      "Sweet"
    ]
  },
  {
    title: "Non-Veg Meals",
    type: "nonveg",
    items: [
      "Steamed Rice",
      "Chicken Curry",
      "Fish Fry",
      "Egg Masala",
      "Sambar",
      "Rasam",
      "Poriyal",
      "Appalam",
      "Curd"
    ]
  },
  {
    title: "Special Meals",
    type: "special",
    items: [
      "Biryani / Flavored Rice",
      "Chicken Fry",
      "Fish Fry",
      "Paneer Curry",
      "Veg Curry",
      "Sweet",
      "Ice Cream",
      "Special Dessert"
    ]
  }
];

const Meals = () => {
  const navigate = useNavigate();

  return (
    <div className="meals-container">
      <h1 className="meals-title">Our Signature Meals</h1>
      <p className="meals-subtitle">Fresh • Hygienic • Delicious</p>

      <div className="meals-grid">
        {meals.map((meal, index) => (
          <div className="meal-card" key={index}>
            <h2>{meal.title}</h2>

            <ul>
              {meal.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button
              className="meal-btn"
              onClick={() => navigate(`/meals/${meal.type}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
