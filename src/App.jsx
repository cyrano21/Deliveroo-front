import { useEffect, useState } from "react";
import Content from "./components/ContentComponents/Content";
import Header from "./components/Header";
import axios from "axios";
import CartMinus from "./components/CartMinus";

const apikey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const deliveryFees = 2.5;

  let subTotal = 0;
  cart.forEach((cartItem) => {
    subTotal += Number(cartItem.price) * cartItem.quantity;
  });

  let total = subTotal + deliveryFees;

  const addItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    console.log("Le produit exixte déjà, le voici :", exist);
    if (exist) {
      exist.quantity++;
      setCart(newCart);
    } else {
      newCart.push({ ...item, quantity: 1 });
      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist.quantity === 1) {
      const index = newCart.indexOf(exist);
      newCart.splice(index, 1);
      if (newCart.length === 0) {
        setCartVisible(false);
      }
    } else {
      exist.quantity--;
    }
    setCart(newCart);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/restaurant/notre-pain-quotidien",
        { headers: { Authorization: `Bearer ${apikey}` } }
      );

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <Content
        menu={data.categories}
        total={total}
        addItem={addItem}
        removeItem={removeItem}
        setCartVisible={setCartVisible}
        deliveryFees={deliveryFees}
        cart={cart}
        subTotal={subTotal}
      />
      <CartMinus
        cartVisible={cartVisible}
        total={total}
        addItem={addItem}
        removeItem={removeItem}
        setCartVisible={setCartVisible}
        deliveryFees={deliveryFees}
        cart={cart}
        subTotal={subTotal}
      />
    </div>
  );
};

export default App;
