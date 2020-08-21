import { RECEIVE_CITY } from '../actions/city_actions';

const citiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type){
        case RECEIVE_CITY:
            return Object.assign({}, oldState, { [action.city.id]: action.city })
        default:
            return oldState;
    }
};

export default citiesReducer;