import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant, createReview } from '../actions/restaurant_actions';
import { withRouter } from "react-router-dom";
import { openModal } from '../actions/modal_actions';

const mapStateToProps = ({entities, session}, ownProps) => {
    return {
        restaurant: entities.restaurants[ownProps.match.params.restaurantId],
        currentUserId: session.currentUserId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
        createReview: data => dispatch(createReview(data)),
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));