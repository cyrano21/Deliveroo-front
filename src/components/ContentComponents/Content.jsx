/* eslint-disable react/prop-types */
import Cart from "./Cart";
import Menu from "./Menu";
import MenuLoader from "./MenuLoader";

const Content = (props) => {
  const {
    menu,
    total,
    addItem,
    removeItem,
    setCartVisible,
    deliveryFees,
    cart,
    subTotal,
  } = props;

  return (
    <div className="content">
      {menu === null ? <MenuLoader /> : <Menu menu={menu} addItem={addItem} />}
      <Cart
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

export default Content;
