// components/ProductList.jsx
import React from "react";

// here we accepts props as products and addToCart from the Shop Componenets
export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "8px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{product.name}</strong> - ₹{product.price}
            <button
              onClick={() => addToCart(product)}
              style={{ marginLeft: "10px" }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
