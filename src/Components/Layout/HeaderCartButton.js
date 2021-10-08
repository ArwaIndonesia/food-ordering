import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [isBtnHighlighted, setIsButtonHighlighted] = useState(false);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    debugger;
    if (ctx.items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    console.log("running");

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button
      className={`${classes.button} ${isBtnHighlighted ? classes.bump : ""}`}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
