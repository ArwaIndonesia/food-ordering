import React from "react";
const CartContext = React.createContext({
  items: [],
  totalCount: 0,
  additem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
