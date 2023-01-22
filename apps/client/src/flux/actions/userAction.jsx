import axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_REGISTER_COMPANY_INFO_REQUEST,
  USER_REGISTER_COMPANY_INFO_SUCCESS,
  USER_REGISTER_COMPANY_INFO_FAIL,
  USER_REGISTER_BANK_INFO_REQUEST,
  USER_REGISTER_BANK_INFO_SUCCESS,
  USER_REGISTER_BANK_INFO_FAIL,
  USER_REGISTER_SHIPPING_INFO_REQUEST,
  USER_REGISTER_SHIPPING_INFO_SUCCESS,
  USER_REGISTER_SHIPPING_INFO_FAIL,
  USER_ADDRESS_MAP_CONFIRM,
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
  COMPANY_LIST_FAIL,
  CRAFTMAN_LIST_REQUEST,
  CRAFTMAN_LIST_SUCCESS,
  CRAFTMAN_LIST_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";
import {
  errorMessage,
  successMessage,
  warningMessage,
} from "../../components/message";
import {
  SEND_CONTACT_FORM_FAIL,
  SEND_CONTACT_FORM_REQUEST,
  SEND_CONTACT_FORM_SUCCESS,
} from "../constants/userConstants";

export const login = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login", body, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    successMessage("Login Succefull", 500);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    warningMessage(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_LIST_RESET });
};

export const register = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users", body, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    successMessage("User Registration Successfull ");

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    // console.log(error)
    warningMessage(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/users/${id}`);
    if (data)
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const getCompanyDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/profile`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};

// /////////   REGISTER COMPANY INFORMATION
export const registerCompanyInfo = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_REGISTER_COMPANY_INFO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/users/company", body, config);

    dispatch({
      type: USER_REGISTER_COMPANY_INFO_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    successMessage("COMPANY INFORMATION SUCCESSFULL SAVED");
  } catch (error) {
    console.log(error);
    warningMessage(error.message);
    dispatch({
      type: USER_REGISTER_COMPANY_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// /////////   REGISTER BANK INFORMATION
export const registerBankInfo = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_REGISTER_BANK_INFO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/users/bank", body, config);

    dispatch({
      type: USER_REGISTER_BANK_INFO_SUCCESS,
      payload: data,
    });
    successMessage("BANK INFORMATION SUCCESSFULL SAVED");
  } catch (error) {
    console.log(error);
    warningMessage(error.message);
    dispatch({
      type: USER_REGISTER_BANK_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//   REGISTER SHIPPING ADDRESS
export const registerShippingInfo = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_REGISTER_SHIPPING_INFO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/users/shipping",
      JSON.stringify(body),
      config
    );

    dispatch({
      type: USER_REGISTER_SHIPPING_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    warningMessage(error.message);
    dispatch({
      type: USER_REGISTER_SHIPPING_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCompanyList = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/users/company/${"company"}`);

    dispatch({
      type: COMPANY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: COMPANY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCraftmanList = () => async (dispatch) => {
  try {
    dispatch({
      type: CRAFTMAN_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/users/company/${"personnel"}`);

    dispatch({
      type: CRAFTMAN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CRAFTMAN_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userAddressMapReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADDRESS_MAP_CONFIRM:
      return { address: action.payload };
    default:
      return state;
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("/api/users/reset-password", { email }, config);
    dispatch({ type: RESET_PASSWORD_SUCCESS });
    successMessage("A message has been sent to your email", 2000);
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    errorMessage(error);
  }
};

export const newPassword = (token, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `/api/users/new-password/${token}`,
      { password },
      config
    );

    if (res.data.msg === "success") {
      successMessage(res.data.msg, 2000, 3);
      setTimeout(() => {
        window.location.href = "/auth";
      }, 2000);
    }
    dispatch({
      type: "UPDATE_PASSWORD_SUCCESS",
    });
    // successMessage("A message has been sent to your email", 2000);
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    errorMessage(error.msg, 2000, 3);
    console.log(error);
  }
};

export const sendContactFormMessage = (body) => async (dispatch) => {
  try {
    dispatch({ type: SEND_CONTACT_FORM_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/contact-us", body, config);
    if (res.data.message) {
      successMessage("Your Message have successfully sended !", 500, 4);
    }
    dispatch({ type: SEND_CONTACT_FORM_SUCCESS });
  } catch (error) {
    dispatch({
      type: SEND_CONTACT_FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    errorMessage(error);
  }
};
