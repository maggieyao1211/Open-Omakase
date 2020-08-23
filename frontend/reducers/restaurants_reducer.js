import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

const restaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type){
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, oldState, { [action.restaurant.id]: action.restaurant });
        default:
            return oldState;
    }
};

export default restaurantsReducer;