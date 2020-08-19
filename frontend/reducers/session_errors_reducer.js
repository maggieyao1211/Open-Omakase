import { RECEIVE_CURRENT_USER, RECEIVE_USER_ERRORS } from "../actions/session_actions";

const _noErrors = [];

const sessionErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _noErrors;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }

}

export default sessionErrorsReducer;
