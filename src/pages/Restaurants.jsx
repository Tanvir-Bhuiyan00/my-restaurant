
import  { useState, useEffect } from 'react';
import { getRestaurants } from '../../public/api';
import RestaurantList from '../components/RestaurantList';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants =  () => {
      try {
        const data =  getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, [restaurants]);
  console.log(restaurants);


  return (
    <div>
      <h1>Restaurant App</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Restaurants;
