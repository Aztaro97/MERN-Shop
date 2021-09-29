import axios from "axios";
import { successMessage } from "../../../components/message";
import {
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_PROFILE_FAIL,
  AD_PROFILE_REQUEST,
  AD_PROFILE_SUCCESS,
  FILTER_BUSINESS_FAIL,
  FILTER_BUSINESS_REQUEST,
  FILTER_BUSINESS_SUCCESS,
} from "../../constants/advertising";

export const AddOrderCardImage = (data) => async (dispatch, getState) => {
  dispatch({
    type: "ADD_CART_IMAGE",
    payload: data,
  });

  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const res = await axios.post("/api/subscription", data, config);
};

export const clearCardImage = () => (dispatch) => {
  dispatch({
    type: "CLEAR_ALL_CARD_SERVICE",
  });
  localStorage.removeItem("cardDataImage");
};

export const saveServiceInfo = (data) => (dispatch) => {
  dispatch({
    type: "SAVE_SERVICE_INFO_SUCCESS",
    payload: data,
  });
};

export const registerParnerService = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SERVICE_REGISTER_SUCCESS",
      payload: body,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post("/api/advertising", body, config);

    if (res.data) {
      successMessage("Info saved succefully !");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdService = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AD_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.get("/api/advertising", config);
    dispatch({
      type: AD_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AD_LIST_FAIL,
      payload: error,
    });
  }
};

export const filterByTypeBusiness = (typeBusiness) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_BUSINESS_REQUEST,
    });

    const config = {
      headers: {
        accept: "application/json",
      },
    };
    const res = await axios.post(
      "/api/advertising/filter-type-business",
      { typeBusiness },
      config
    );

    dispatch({
      type: FILTER_BUSINESS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FILTER_BUSINESS_FAIL,
      payload: error,
    });
  }
};

export const getAdvertisingProfileByID = (id) => async (dispatch) => {
  dispatch({
    type: AD_PROFILE_REQUEST,
  });

  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const res = await axios.get(`/api/advertising/profile/${id}`, config);

  dispatch({
    type: AD_PROFILE_SUCCESS,
    payload: res.data,
  });
  try {
  } catch (error) {
    dispatch({
      type: AD_PROFILE_FAIL,
      payload: error,
    });
  }
};
