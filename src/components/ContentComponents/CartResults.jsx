/* eslint-disable react/prop-types */
const CartResults = (props) => {
  const { deliveryFees, subTotal, total } = props;

  return (
    <>
      <div className="cart--results">
        <div className="cart--result-line">
          <span className="cart--result-name">Sous-total</span>
          <span className="cart--amount">
            {subTotal.toFixed(2).replace(".", ",")} €
          </span>
        </div>
        <div className="cart--result-line">
          <span className="cart--result-name">Frais dde livraison</span>
          <span className="cart--amount">
            {deliveryFees.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>
      <div className="cart--total">
        <span className="cart--result-name">Total</span>
        <span className="cart--amount">
          {total.toFixed(2).replace(".", ",")} €
        </span>
      </div>
    </>
  );
};

export default CartResults;
