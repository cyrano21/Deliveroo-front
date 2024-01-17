/* eslint-disable react/prop-types */
import NonEmptyCart from "./nonEmptyCart";

const Cart = (props) => {
  const {
    total,
    addItem,
    removeItem,
    setCartVisible,
    deliveryFees,
    cart,
    subTotal,
  } = props;

  const empty = cart.length === 0;
  return (
    <div className="cart">
      <div className="cart--card">
        <button className={"cart--validate" + (empty ? " cart--disabled" : "")}>
          Valider mon panier
        </button>
        {empty ? (
          <div className="cart--empty">Votre panier est vide</div>
        ) : (
          <NonEmptyCart
            total={total}
            addItem={addItem}
            removeItem={removeItem}
            setCartVisible={setCartVisible}
            deliveryFees={deliveryFees}
            cart={cart}
            subTotal={subTotal}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
