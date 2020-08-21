import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import citiesReducer from './cities_reducer';
import restaurantsReducer from './restaurants_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cities: citiesReducer,
    restaurants: restaurantsReducer,
});

export default entitiesReducer;
