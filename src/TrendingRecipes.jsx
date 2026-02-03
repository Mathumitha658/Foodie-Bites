import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingRecipes.css";

const trendingItems = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    price: 250,
    img: "/hyderabadi.jpg"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 200,
    img: "/paneer.jpg"
  },
  {
    id: 3,
    name: "Prawn Pepper Fry",
    price: 280,
    img: "/prawn2.jpg"
  },
  {
    id: 4,
    name: "Mushroom Manchurian",
    price: 180,
    img: "/mushroom.jpg"
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    price: 320,
    img: "/tandoori.jpg"
  },
  {
    id: 6,
    name: "Veg Kothu Parotta",
    price: 160,
    img: "/parotta.jpg"
  }
];

const TrendingRecipes = () => {
  const navigate = useNavigate();

  // 🔢 quantity state
  const [quantities, setQuantities] = useState(
    trendingItems.reduce((acc, item) => {
      acc[item.id] = 1;
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

  // 🛒 Add to Cart
  const handleAddToCart = (item) => {
    const cartItem = {
      ...item,
      quantity: quantities[item.id],
      totalPrice: item.price * quantities[item.id]
    };

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem(
      "cart",
      JSON.stringify([...existingCart, cartItem])
    );

    alert("Added to Cart Successfully!");
  };

  // 🚀 Order Now
  const handleOrder = (item) => {
    const orderItem = {
      ...item,
      quantity: quantities[item.id],
      totalPrice: item.price * quantities[item.id]
    };

    localStorage.setItem("selectedItem", JSON.stringify(orderItem));
    navigate("/order");
  };

  return (
    <div className="trending-container">
      <h1 className="trending-title">🔥 Trending Recipes</h1>
      <p className="trending-subtitle">
        Customer Favorites • Chef Special Picks
      </p>

      <div className="trending-grid">
        {trendingItems.map((item, index) => (
          <div
            className="trending-card"
            key={item.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            {/* 💰 Dynamic price */}
            <p className="price">
              ₹ {item.price * quantities[item.id]}
            </p>

            {/* 🔢 Quantity */}
            <div className="qty-box">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{quantities[item.id]}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            {/* 🛒 Buttons */}
            <div className="trending-actions">
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>

              <button
                className="order-btn"
                onClick={() => handleOrder(item)}
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

export default TrendingRecipes;
