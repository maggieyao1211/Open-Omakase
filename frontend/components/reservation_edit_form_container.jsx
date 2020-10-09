import { connect } from 'react-redux';
import ReservationEditForm from './reservation_edit_form';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = ({session}, ownProps) => {
    return {
        currentUserId: session.currentUserId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationEditForm);