export const fetchRestaurants = filters => {
  return $.ajax({
    url: `/api/restaurants/`,
    data: { filters },
  });
};

export const fetchRestaurant = restaurantId => {
    return $.ajax({
      url: `/api/restaurants/${restaurantId}`,
    });
};