import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  MY_PRODUCT_REQUEST,
  MY_PRODUCT_SUCCESS,
  MY_PRODUCT_FAIL,
  FILTER_PRODUCT_REQUEST,
  FILTER_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAIL,
  PRODUCT_ALLOW_SUCCESS,
  PRODUCT_ALLOW_REQUEST,
  PRODUCT_ALLOW_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
    case FILTER_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
    case FILTER_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
    case FILTER_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true, success: false };
    case PRODUCT_DELETE_SUCCESS:
    case MY_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
    case PRODUCT_ALLOW_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
    case PRODUCT_ALLOW_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
    case PRODUCT_ALLOW_FAIL:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const MyProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case MY_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case MY_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case MY_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const filterproductListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case FILTER_PRODUCT_REQUEST:
//       return { loading: true, products: [] };
//     case FILTER_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload.products,
//         pages: action.payload.pages,
//         page: action.payload.page,
//       };
//     case FILTER_PRODUCT_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
