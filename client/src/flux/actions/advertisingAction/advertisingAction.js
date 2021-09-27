import axios from "axios";
import { successMessage } from "../../../components/message";

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
    type: "CLEAR_CARD_IMAGE",
  });
  localStorage.removeItem("cardDataImage");
};

export const registerParnerService = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SERVICE_REGISTER_SUCCESS",
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
