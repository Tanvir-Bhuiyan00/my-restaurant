const API_URL = 'https://nextjs-orpin-omega-98.vercel.app/api/restaurants';

export const getRestaurants = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
}
