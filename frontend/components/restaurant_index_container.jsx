import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapStateToProps = ({entities}) => {
    console.log(Object.values(entities.restaurants));
    return {
        restaurants: Object.values(entities.restaurants),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);