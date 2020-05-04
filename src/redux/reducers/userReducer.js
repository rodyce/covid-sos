import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return action.user;
    case types.USER_LOGOUT_SUCCESS:
      return {};
    default:
  }
  return state;
}
