import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../actions/user_actions';
import { cancelReservation } from '../actions/restaurant_actions';
import { withRouter } from "react-router-dom";
import { openModal } from '../actions/modal_actions';

const mapStateToProps = ({entities, session}, ownProps) => {
    let { userId } = ownProps.match.params;
    if (userId == null) {
        userId = session.currentUserId;
    }
    return {
        user: entities.users[userId],
        userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        cancelReservation: reservationId => dispatch(cancelReservation(reservationId)),
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));