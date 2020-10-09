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

export const createReview = review => {
  return $.ajax({
    url: `/api/reviews/`,
    method: 'post',
    data: { review },
  });
};

export const updateReview = (reviewId, review) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'patch',
    data: { review },
  });
};

export const createReservation = reservation => {
  return $.ajax({
    url: `/api/reservations/`,
    method: 'post',
    data: { reservation },
  });
};

export const updateReservation = (reservationId, reservation) => {
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: 'patch',
    data: { reservation },
  });
};

export const cancelReservation = reservationId => {
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: 'delete',
  });
};