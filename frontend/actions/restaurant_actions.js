import * as RestaurantApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const fetchRestaurants = filters => dispatch => {
    return RestaurantApiUtil.fetchRestaurants(filters)
        .then(restaurants => dispatch({ type: RECEIVE_RESTAURANTS, restaurants }));
};

export const fetchRestaurant = restaurantId => dispatch => {
    return RestaurantApiUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch({ type: RECEIVE_RESTAURANT, restaurant }));
};

export const createReview = data => dispatch => {
    return RestaurantApiUtil.createReview(data);
};

export const createReservation = data => dispatch => {
    return RestaurantApiUtil.createReservation(data);
};