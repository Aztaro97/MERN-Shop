import {
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
} from "../constants/advertising";

export const advertisingReducer = (
  state = { cardItemData: [], service: {}, loading: true, listAdService: [] },
  action
) => {
  switch (action.type) {
    case "ADD_CART_IMAGE":
      return {
        ...state,
        cardItemData: action.payload,
        loading: false,
      };

    case "SAVE_SERVICE_INFO_SUCCESS":
      return {
        ...state,
        service: action.payload,
        loading: false,
      };
    case "CLEAR_ALL_CARD_SERVICE":
      return { ...state, cardItemData: [], service: {} };

    case AD_LIST_REQUEST:
      return { ...state, loading: true };
    case AD_LIST_SUCCESS:
      return { ...state, loading: false, listAdService: action.payload };
    case AD_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
