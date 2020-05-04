import * as types from "./actionTypes";

export function userLoginSuccess(user) {
  return { type: types.USER_LOGIN_SUCCESS, user };
}

export function loginUser(user) {
  return function (dispatch) {
    dispatch(userLoginSuccess(user));
  };
}
