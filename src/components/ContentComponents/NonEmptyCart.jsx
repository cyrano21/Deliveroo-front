/* eslint-disable react/jsx-key */
import CartLine from "./CartLine";
import CartResults from "./CartResults";

const NonEmptyCart = (props) => {
  const {
    total,
    addItem,
    removeItem,
    modal,
    deliveryFees,
    cart,
    subTotal,
    setCartVisible,
  } = props;
  console.log("modal==>", modal);
  return (
    <div className="cart-minus-cart-container">
      {modal && (
        <div
          onClick={() => setCartVisible(false)}
          className="cart-minus-close-cart-modal"
        >
          X
        </div>
      )}
      <div className="cart--items">
        {cart.map((cartItem) => {
          return (
            <CartLine
              key={cartItem.id}
              addItem={addItem}
              removeItem={removeItem}
              cartItem={cartItem}
            />
          );
        })}
      </div>
      <CartResults
        deliveryFees={deliveryFees}
        subTotal={subTotal}
        total={total}
      />
    </div>
  );
};

export default NonEmptyCart;
