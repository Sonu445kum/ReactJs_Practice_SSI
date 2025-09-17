
import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
// Here we are create An Object as products
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Total Items in Cart: {cart.length}</h2>

      {/* Product List */}
      {/* And We are passing products and AddTocart to the children components */}
      <ProductList products={products} addToCart={addToCart} />

      {/* Cart */}
      
      <Cart cart={cart} />
    </div>
  );
}
