import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemform = (props) => {
  const AmountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +AmountInputRef.current.value;
    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={AmountInputRef}
        input={{
          type: "number",
          id: "Amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemform;
