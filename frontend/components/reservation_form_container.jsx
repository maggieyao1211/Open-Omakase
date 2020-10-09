import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { createReservation, updateReservation } from '../actions/restaurant_actions';
import { closeModal } from '../actions/modal_actions';

const mapStateToProps = ({session}, ownProps) => {
    return {
        currentUserId: session.currentUserId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createReservation: reservation => dispatch(createReservation(reservation)),
        updateReservation: (reservationId, reservation) => dispatch(updateReservation(reservationId, reservation)),
        closeModal: modal => dispatch(closeModal(modal)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);