import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../actions/restaurant_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities}, ownProps) => {
    let cityId = null;
    if (ownProps.cityId != null) {
        cityId = ownProps.cityId;
    } else if (ownProps.match != null) {
        cityId = ownProps.match.params.cityId;
    }
    return {
        restaurants: Object.values(entities.restaurants),
        cityId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: filters => dispatch(fetchRestaurants(filters)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex));