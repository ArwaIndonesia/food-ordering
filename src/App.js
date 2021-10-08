import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cardIsShowm, setcardIsShown] = useState(false);

  const showCardhandler = () => {
    setcardIsShown(true);
  };

  const hideCartHandler = () => {
    setcardIsShown(false);
  };

  return (
    <CartProvider>
      {cardIsShowm && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCardhandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
