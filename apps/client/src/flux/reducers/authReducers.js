import { USER_LOADED, AUTH_ERROR } from "./../constants/userConstants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
}

export default function  AuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isauthenticated: true,
        loading: false,
        user: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isauthenticated: false,
      };

    default:
      return state;
  }
}
