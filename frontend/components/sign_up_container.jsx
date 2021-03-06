import { connect } from 'react-redux';
import SignUp from './sign_up';
import { signUp } from '../actions/session_actions';
import { closeModal, openModal } from '../actions/modal_actions';

const mstp = ({}) => {
    return {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        },
    };
};

const mdtp = (dispatch) => {
    return {
        action: user => dispatch(signUp(user)),
        closeModal: modal => dispatch(closeModal(modal)),
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(SignUp);
