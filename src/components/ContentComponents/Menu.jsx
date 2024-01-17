import MenuItems from "./MenuItems";

const Menu = (props) => {
  const { menu, addItem } = props;

  const nonEmptyCategories = menu.filter((elem) => elem.meals.length > 0);

  return (
    <div className="menu">
      {nonEmptyCategories.map((elem, index) => {
        return (
          <MenuItems
            key={index}
            name={elem.name}
            items={elem.meals}
            addItem={addItem}
          />
        );
      })}
    </div>
  );
};

export default Menu;
