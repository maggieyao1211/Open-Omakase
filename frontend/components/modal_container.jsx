import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../actions/modal_actions';

const mapStateToProps = ({ui}) => {
    return {
        modal: ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
