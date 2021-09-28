import axios from "axios";
import { successMessage } from "../../../components/message";
import {
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
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
  console.log(res);
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
    console.log(res);

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
    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch({
      type: AD_LIST_FAIL,
      payload: error,
    });
  }
};
