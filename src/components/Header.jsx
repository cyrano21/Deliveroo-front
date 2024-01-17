/* eslint-disable react/prop-types */
import RestaurantInfos from "./HeaderComponents/RestaurantInfos";
import TopBar from "./HeaderComponents/TopBar/TopBar";

function Header({ restaurant }) {
  return (
    <div className="header">
      <TopBar />
      <RestaurantInfos restaurant={restaurant} />
    </div>
  );
}

export default Header;
