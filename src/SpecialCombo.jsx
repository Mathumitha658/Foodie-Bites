import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialCombo.css";

const images = [
  { src: "/biriyani.webp", alt: "Biryani" },
  { src: "/chicken fry.jpg", alt: "Chicken Fry" },
  { src: "/Fish-Fry.jpg", alt: "Fish Fry" },
  { src: "/paneer_curry.jpg", alt: "Paneer Curry" },
  { src: "/Ice-cream-recipe.jpg", alt: "Ice Cream" }
];

const BASE_PRICE = 350;

const SpecialCombo = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 🔁 Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 💰 Total price
  const totalPrice = BASE_PRICE * quantity;

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    const cartItem = {
      name: "Special Combo Meals",
      price: BASE_PRICE,
      quantity,
      totalPrice,
      img: images[current].src
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
  const handleOrder = () => {
    const orderData = {
      name: "Special Combo Meals",
      price: BASE_PRICE,
      quantity,
      totalPrice
    };

    localStorage.setItem("selectedItem", JSON.stringify(orderData));
    navigate("/order");
  };

  return (
    <div className="combo-container">
      <div className="combo-card">

        <h2 className="comboo-title">Special Combo Meals</h2>

        {/* 🖼️ Carousel */}
        <div className="carousel">
          <img
            src={images[current].src}
            alt={images[current].alt}
          />
        </div>

        <p className="combo-tagline">
          Delicious • Fresh • Hygienic
        </p>

        {/* 💰 Dynamic price */}
        <p className="combo-price">₹ {totalPrice}</p>

        {/* 🔢 Quantity */}
        <div className="qty-box">
          <button
            onClick={() =>
              setQuantity((q) => (q > 1 ? q - 1 : 1))
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity((q) => q + 1)}>
            +
          </button>
        </div>

        {/* 🛒 Buttons */}
        <div className="combo-actions">
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="order-btn" onClick={handleOrder}>
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default SpecialCombo;
