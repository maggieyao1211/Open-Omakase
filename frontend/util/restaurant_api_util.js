export const fetchRestaurants = restaurantId => {
  return $.ajax({
    url: `/api/restaurants/`,
  });
};

export const fetchRestaurant = restaurantId => {
    return $.ajax({
      url: `/api/restaurants/${restaurantId}`,
    });
};