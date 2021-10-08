import { Fragment } from "react";
import classes from "./Header.module.css";
import MealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
