import Card from "../UI/Card.js";
import classes from "./AvailableMeal.module.css";
import MealItem from "./Mealtem/Mealitem.js";

const AvailableMeal = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItem
              key={item.id}
              id={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
            ></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
