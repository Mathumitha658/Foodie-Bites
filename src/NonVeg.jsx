import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NonVeg.css";

const nonVegMeals = [
  {
    id: 1,
    name: "Chicken Meals",
    img: "/chicken.avif",
    price: 260
  },
  {
    id: 2,
    name: "Fish Meals",
    img: "/fish.jpg",
    price: 280
  },
  {
    id: 3,
    name: "Special Non-Veg Meals",
    img: "/specialnonveg.png",
    price: 320
  }
];

const NonVeg = () => {
  const navigate = useNavigate();

  // 🔢 Quantity state
  const [quantities, setQuantities] = useState(
    nonVegMeals.reduce((acc, meal) => {
      acc[meal.id] = 1;
      return acc;
    }, {})
  );

  const increaseQty = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decreaseQty = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  // 🛒 Add to cart
  const handleAddToCart = (meal) => {
    const cartItem = {
      ...meal,
      quantity: quantities[meal.id],
      totalPrice: meal.price * quantities[meal.id]
    };

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem(
      "cart",
      JSON.stringify([...existingCart, cartItem])
    );

    alert("Added to Cart Successfully!");
  };

  // 🚀 Order now
  const handleOrder = (meal) => {
    const orderData = {
      ...meal,
      quantity: quantities[meal.id],
      totalPrice: meal.price * quantities[meal.id]
    };

    localStorage.setItem("selectedItem", JSON.stringify(orderData));
    navigate("/order");
  };

  return (
    <div className="nonveg-container">
      <h1 className="nonveg-title">Non-Veg Meals</h1>

      <div className="nonveg-grid">
        {nonVegMeals.map((meal) => (
          <div className="nonveg-card" key={meal.id}>
            <img src={meal.img} alt={meal.name} />

            <h3>{meal.name}</h3>

            {/* 💰 Dynamic price */}
            <p className="nonveg-price">
              ₹ {meal.price * quantities[meal.id]}
            </p>

            {/* 🔢 Quantity */}
            <div className="qty-box">
              <button onClick={() => decreaseQty(meal.id)}>
                -
              </button>
              <span>{quantities[meal.id]}</span>
              <button onClick={() => increaseQty(meal.id)}>
                +
              </button>
            </div>

            {/* 🛒 Buttons */}
            <div className="nonveg-actions">
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(meal)}
              >
                Add to Cart
              </button>

              <button
                className="order-btn"
                onClick={() => handleOrder(meal)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVeg;
