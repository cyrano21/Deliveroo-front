/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  const { name, items, addItem } = props;
  return (
    <div className="menuItems">
      <h2>{name}</h2>
      <div className="menuItems--Items">
        {items.map((item) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              onClick={() => {
                addItem(item);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
