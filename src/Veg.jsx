import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Veg.css";

const vegMeals = [
  {
    id: 1,
    name: "South Indian Veg Meals",
    img: "/veg.jpg",
    price: 180
  },
  {
    id: 2,
    name: "North Indian Veg Meals",
    img: "/north.jpg",
    price: 220
  },
  {
    id: 3,
    name: "Special Veg Meals",
    img: "/special.jpg",
    price: 260
  }
];

const Veg = () => {
  const navigate = useNavigate();

  // 🔢 Quantity state
  const [quantities, setQuantities] = useState(
    vegMeals.reduce((acc, meal) => {
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

    localStorage.setItem(
      "selectedItem",
      JSON.stringify(orderData)
    );
    navigate("/order");
  };

  return (
    <div className="veg-container">
      <h1 className="veg-title">Veg Meals</h1>

      <div className="veg-grid">
        {vegMeals.map((meal) => (
          <div className="veg-card" key={meal.id}>
            <img src={meal.img} alt={meal.name} />

            <h3>{meal.name}</h3>

            {/* 💰 Dynamic price */}
            <p className="veg-price">
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
            <div className="veg-actions">
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

export default Veg;
