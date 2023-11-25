

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <strong>{restaurant.state}:</strong>
          <ul>
            <li>{restaurant.restaurant_name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;