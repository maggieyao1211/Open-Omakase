import * as CityApiUtil from '../util/city_api_util';

export const RECEIVE_CITY = 'RECEIVE_CITY';

export const fetchCity = cityId => dispatch => {
    return CityApiUtil.fetchCity(cityId)
        .then(city => dispatch({ type: RECEIVE_CITY, city }));
};