import {
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_PROFILE_FAIL,
  AD_PROFILE_REQUEST,
  AD_PROFILE_RESET,
  AD_PROFILE_SUCCESS,
  DELETE_AD_PROFILE_REQUEST,
  DELETE_AD_PROFILE_SUCCESS,
  FETCH_MESSAGE_FAIL,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  FILTER_BUSINESS_FAIL,
  FILTER_BUSINESS_REQUEST,
  FILTER_BUSINESS_SUCCESS,
  OPEN_MESSAGE_FAIL,
  OPEN_MESSAGE_REQUEST,
  OPEN_MESSAGE_SUCCESS,
  USER_ADS_FAIL,
  USER_ADS_REQUEST,
  USER_ADS_SUCCESS,
} from "../constants/advertising";

export const advertisingReducer = (
  state = { cardItemData: [], service: {}, loading: true, listAdService: [], profile: {} },
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
    case FILTER_BUSINESS_REQUEST:
    case AD_PROFILE_REQUEST:
    case FETCH_MESSAGE_REQUEST:
    case USER_ADS_REQUEST:
    case DELETE_AD_PROFILE_REQUEST:
      return { ...state, loading: true };
      
    case AD_LIST_SUCCESS:
    case FILTER_BUSINESS_SUCCESS:
      return { ...state, loading: false, listAdService: action.payload };

    case USER_ADS_SUCCESS:
      return { ...state, loading: false, listAdService: action.payload };

    case DELETE_AD_PROFILE_SUCCESS:
      return { ...state, loading: false };

    case AD_LIST_FAIL:
    case FILTER_BUSINESS_FAIL:
    case AD_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case FETCH_MESSAGE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_ADS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case AD_PROFILE_SUCCESS:
      return { ...state, loading: false, profile: action.payload };
    case AD_PROFILE_RESET:
      return { ...state, loading: false, profile: {} };

    case FETCH_MESSAGE_SUCCESS:
      return { ...state, loading: false, allMessages: action.payload };

    default:
      return state;
  }
};

export const messageReducer = (
  state = { loading: true, error: {} },
  action
) => {
  switch (action.type) {
    case OPEN_MESSAGE_REQUEST:
      return { ...state, loading: true };

    case OPEN_MESSAGE_SUCCESS:
      return { ...state, loading: false, message: action.payload };

    case OPEN_MESSAGE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
