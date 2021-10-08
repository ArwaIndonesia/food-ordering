import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const RemoveItemHandler = (id) => {
    ctx.removeItem(id);
  };

  const AddItemHandler = (item) => {
    ctx.additem({ ...item, amount: 1 });
  };
  return (
    <Modal onConfirm={props.onHide}>
      <ul className={classes["cart-items"]}>
        {ctx.items.map((meal) => (
          <CartItem
            key={meal.id}
            title={meal.title}
            price={meal.price}
            amount={meal.amount}
            onRemove={RemoveItemHandler.bind(null, meal.id)}
            onAdd={AddItemHandler.bind(null, meal)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["btn--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
