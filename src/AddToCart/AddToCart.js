import { useContext } from "react";

import CartContext from "../Context/CartContext";

function AddToCart() {
  // Using Context
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  function increase() {
    increaseQuantity();
    console.log(cart);
  }
  return <button onClick={increase}> Add To Cart</button>;
}

export default AddToCart;
