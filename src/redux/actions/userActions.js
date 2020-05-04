import * as types from "./actionTypes";

export function userLoginSuccess(user) {
  return { type: types.USER_LOGIN_SUCCESS, user };
}

export function userLogoutSuccess() {
  return { type: types.USER_LOGOUT_SUCCESS };
}

export function loginUser(user) {
  return function (dispatch) {
    dispatch(userLoginSuccess(user));
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch(userLogoutSuccess());
  };
}
