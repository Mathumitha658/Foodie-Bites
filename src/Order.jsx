import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const [item, setItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Load selected item from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedItem"));
    if (data) {
      // If totalPrice not already stored, calculate it
      if (!data.totalPrice) data.totalPrice = data.price * (data.quantity || 1);
      if (!data.quantity) data.quantity = 1;
      setItem(data);
    }
  }, []);

  // Redirect to home if no item selected
  useEffect(() => {
    if (!item) return;
  }, [item]);

  if (!item) {
    return <h2 className="empty-order">No item selected</h2>;
  }

  // Increase quantity
  const increaseQty = () => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
      totalPrice: (prev.quantity + 1) * prev.price,
    }));
  };

  // Decrease quantity
  const decreaseQty = () => {
    if (item.quantity > 1) {
      setItem((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
        totalPrice: (prev.quantity - 1) * prev.price,
      }));
    }
  };

  // Show confirmation popup
  const handlePlaceOrder = () => {
    setShowPopup(true);
  };

  // Confirm order and navigate to Confirm page
  const Confirmorder = () => {
    localStorage.setItem("confirmedOrder", JSON.stringify(item)); // Ensure key matches Confirm page
    setShowPopup(false);
    navigate("/confirm");
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Review Your Order</h1>

      <div className="order-card">
        <img src={item.img} alt={item.name} className="order-img" />

        <div className="order-details">
          <h2>{item.name}</h2>

          {/* Quantity */}
          <div className="qty-box">
            <button onClick={decreaseQty}>−</button>
            <span>{item.quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          <p>Price per item: ₹ {item.price}</p>
          <h3>Total: ₹ {item.totalPrice}</h3>

          <button className="place-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>

      {/* Modern Popup */}
      {showPopup && (
        <div className="popup-overlay-new">
          <div className="popup-card">
            <h3>Ready to place order?</h3>
            <p className="popup-amount">₹ {item.totalPrice}</p>

            <div className="popup-actions-new">
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>
                Cancel
              </button>

              <button className="confirm-btn" onClick={Confirmorder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
