// Context wraps parent child relationship
// Avoids props drilling from parent to children

import { createContext } from "react";

// Creating Context
const CartContext = createContext({
  cart: {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {}
});

export default CartContext;
