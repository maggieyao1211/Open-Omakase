import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../actions/modal_actions';
import { signOut } from '../actions/session_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.currentUserId],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        signOut: () => dispatch(signOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
