import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

const CartLine = (props) => {
  const { addItem, removeItem, cartItem } = props;

  return (
    <div className="cart--line">
      <div className="cart--counter">
        <span onClick={() => removeItem(cartItem)}>
          <MinusIcon size={20} />
        </span>
        <span>{cartItem.quantity}</span>
        <span onClick={() => addItem(cartItem)}>
          <PlusIcon size={20} />
        </span>
      </div>
      <span className="cart--item-name">{cartItem.title}</span>
      <span className="cart--amount">
        {(Number(cartItem.price) * cartItem.quantity)
          .toFixed(2)
          .replace(".", ",") + " €"}
      </span>
    </div>
  );
};

export default CartLine;
