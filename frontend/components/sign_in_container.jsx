import { connect } from 'react-redux';
import SignIn from './sign_in';
import { signIn } from '../actions/session_actions';
import { closeModal, openModal } from '../actions/modal_actions';

const mstp = ({errors}) => {
    return {
        user: {
            email: '',
            password: ''
        },
        errors: errors.session
    };
};

const mdtp = (dispatch) => {
    return {
        action: user => dispatch(signIn(user)),
        closeModal: modal => dispatch(closeModal(modal)),
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(SignIn);
