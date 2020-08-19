import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveUserErrors(error.responseJSON))
        )
);

export const signIn = user => dispatch => (
    SessionApiUtil.signIn(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveUserErrors(error.responseJSON))
        )
);

export const signOut = () => dispatch => (
    SessionApiUtil.signOut()
        .then(
            () => dispatch({type: REMOVE_CURRENT_USER}),
            error => dispatch(receiveUserErrors(error.responseJSON))
        )
);
