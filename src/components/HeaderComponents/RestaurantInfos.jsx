/* eslint-disable react/prop-types */
const RestaurantInfos = ({ restaurant }) => {
  return (
    <div className="restaurantInfos">
      <div className="restaurantInfos-text">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>

      <img
        className="restaurantInfos-cover"
        src={restaurant.picture}
        alt={`image ${restaurant.name}`}
      />
    </div>
  );
};

export default RestaurantInfos;
