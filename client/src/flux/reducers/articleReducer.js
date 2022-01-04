import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  FILTER_ARTICLE_FAIL,
  FILTER_ARTICLE_REQUEST,
  FILTER_ARTICLE_SUCCESS,
} from "../constants/articleConstants";

export const ArticlesReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
    case FILTER_ARTICLE_REQUEST:
      return {
        loading: true,
      };
    case ARTICLE_LIST_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
      };
    case FILTER_ARTICLE_SUCCESS:
      return { loading: false, article: action.payload };
    case ARTICLE_LIST_FAIL:
    case FILTER_ARTICLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ArticlesDetailsReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case FILTER_ARTICLE_REQUEST:
      return {
        loading: true,
      };
    case FILTER_ARTICLE_SUCCESS:
      return { loading: false, article: action.payload.article };
    case FILTER_ARTICLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
