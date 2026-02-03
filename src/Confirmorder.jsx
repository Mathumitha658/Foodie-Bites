import React, { useEffect, useState } from "react";
import "./Confirmorder.css";

const Confirmorder = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("Confirmedorder")
    );
    setOrder(data);
  }, []);

  if (!order) {
    return <h2>No order found</h2>;
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
