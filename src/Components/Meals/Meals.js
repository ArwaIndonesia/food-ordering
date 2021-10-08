import { Fragment } from "react";
import AvailableMeal from "./Availablemeal";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
