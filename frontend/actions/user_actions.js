import * as UserApiUtil from '../util/user_api_util';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch({ type: RECEIVE_CURRENT_USER, user }));
};