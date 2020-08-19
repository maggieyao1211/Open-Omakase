import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'

const _noCurrentUser = Object.freeze({
    currentUserId: null
});

const sessionReducer = (oldState = _noCurrentUser, action) => {
    Object.freeze(oldState);
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.user.id };
        case REMOVE_CURRENT_USER:
            return _noCurrentUser;
        default:
            return oldState;
    }
};

export default sessionReducer;
