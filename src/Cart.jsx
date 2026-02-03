import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleOrderNow = (item) => {
    localStorage.setItem(
      "selectedItem",
      JSON.stringify(item)
    );
    navigate("/order");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-card" key={index}>
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="cart-img"
              onClick={() => handleOrderNow(item)}
            />

            {/* Details */}
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹ {item.totalPrice}</p>
            </div>

            {/* Actions */}
            <div className="cart-actions">
              <button
                className="order-btn small"
                onClick={() => handleOrderNow(item)}
              >
                Order Now
              </button>

              <button
                className="remove-btn small"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
