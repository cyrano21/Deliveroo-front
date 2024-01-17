/* eslint-disable react/prop-types */

import NonEmptyCart from "./ContentComponents/nonEmptyCart";

/* eslint-disable no-unused-vars */
const CartMinus = (props) => {
  const {
    cartVisible,
    total,
    addItem,
    removeItem,
    setCartVisible,
    deliveryFees,
    cart,
    subTotal,
  } = props;

  const numberOfProducts = () => {
    let totalOfProducts = 0;
    cart.forEach((elem) => {
      totalOfProducts += elem.quantity;
    });
    return totalOfProducts;
  };

  return (
    <div className="cart-minus-container">
      {cartVisible && cart.length > 0 && (
        <NonEmptyCart
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          subTotal={subTotal}
          deliveryFees={deliveryFees}
          total={total}
          setCartVisible={setCartVisible}
          modal
        />
      )}
      <button
        disabled={cart.length > 0 ? false : true}
        onClick={() => {
          cart.length > 0 && setCartVisible(true);
        }}
        style={{
          justifyContent:
            cartVisible || cart.length === 0 ? "center" : "space-between",
        }}
        className={`cart-minus-button${cart.length === 0 ? "-disabled" : ""}`}
      >
        {cartVisible ? (
          <span>Valider mon panier</span>
        ) : (
          <>
            {cart.length > 0 && (
              <span className="cart-minus-number-of-products">
                {numberOfProducts()}
              </span>
            )}
            <span>Voir le panier</span>
            {cart.length > 0 && <span>{total.toFixed(2)} €</span>}
          </>
        )}
      </button>
    </div>
  );
};

export default CartMinus;
