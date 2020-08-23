import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../actions/restaurant_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities}, ownProps) => {
    return {
        restaurant: entities.restaurants[ownProps.match.params.restaurantId],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));