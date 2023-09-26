import "./styles.css";
import Products from "./Products/Products";
import CartContext from "./Context/CartContext";
import { useEffect, useState } from "react";

export default function App() {
  const [cart, setCart] = useState({});
  function increaseQuantity() {
    console.log("increase Quantity");
  }

  function decreaseQuantity() {
    console.log("decrease Quantity");
  }
  useEffect(() => {
    setCart("HERE IS THE CART");
  }, []);

  return (
    // Providing Context
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <h1>Hello PRAY</h1>
        <h2>Here is your Ecosystem!</h2>
        <Products />
      </div>
    </CartContext.Provider>
  );
}
