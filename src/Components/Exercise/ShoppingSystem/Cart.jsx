// components/Cart.jsx
import React from "react";

export default function Cart({ cart }) {
    // here we are calculating the Total Price of Selected items or Products
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
        {/* Here all items are display in the List */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "5px 0",
                }}
              >
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          {/* Total Price */}
          <h3> Total Price: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}
