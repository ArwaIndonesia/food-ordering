import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform.js";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.additem({
      id: props.id,
      title: props.title,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemform onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
