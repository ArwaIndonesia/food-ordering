import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD-ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.val.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.val.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.val);
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.val.price * action.val.amount,
    };
  }
  if (action.type === "REMOVE-ITEM") {
    const item = state.items.findIndex((item) => item.id === action.val);
    const deleteItem = state.items[item];
    const updatedTotalamount = state.totalAmount - deleteItem.price;
    if (deleteItem.amount > 1) {
      const updateItem = {                                   
        ...deleteItem,
        amount: deleteItem.amount - 1,
      };
      var updatedItems = [...state.items];
      updatedItems[item] = updateItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.val);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalamount,
    };
  }
  return { items: [], totalAmount: 0 };
};

const CartProvider = (props) => {
  const [cartItem, dispatchCartItem] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemHandler = (item) => {
    dispatchCartItem({ type: "ADD-ITEM", val: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartItem({ type: "REMOVE-ITEM", val: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItem.items,
        totalAmount: cartItem.totalAmount,
        additem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
