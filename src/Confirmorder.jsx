import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmorder.css";

const Confirmorder = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("confirmedOrder")); // fixed key
    if (data) {
      setOrder(data);
    } else {
      navigate("/"); // redirect if no order found
    }
  }, [navigate]);

  if (!order) {
    return <h2>Loading...</h2>; // temporary while redirect happens
  }

  return (
    <div className="confirm-container">
      <h1>🎉 Order Confirmed!</h1>

      <div className="confirm-card">
        <img src={order.img} alt={order.name} />
        <h2>{order.name}</h2>
        <p>Quantity: {order.quantity}</p>
        <p>Total Paid: ₹ {order.totalPrice}</p>
      </div>
    </div>
  );
};

export default Confirmorder;
