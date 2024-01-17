/* eslint-disable react/prop-types */
import StarIcon from "./StarIcon";

const MenuItem = (props) => {
  const { item, onClick } = props;
  return (
    <div className="menuItem">
      <div className="menuItem--card" onClick={onClick}>
        <div className="menuItem--texts">
          <h3>{item.title}</h3>
          {item.description && item.description.length > 0 && (
            <p>{item.description}</p>
          )}
          <div className="menuItem--infos">
            <div className="menuItem--price">
              {Number(item.price).toFixed(2).replace(".", ",")} €
            </div>

            {item.popular && (
              <span className="menuItem--popular">
                <StarIcon size={20} style={{ marginRight: 5 }} />
                Populaire
              </span>
            )}
          </div>
        </div>
        {item.picture && (
          <div className="menuItem--picture">
            <img src={item.picture} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
