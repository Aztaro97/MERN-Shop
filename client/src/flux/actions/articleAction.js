import axios from "axios";
import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  FILTER_ARTICLE_FAIL,
  FILTER_ARTICLE_REQUEST,
  FILTER_ARTICLE_SUCCESS,
} from "../constants/articleConstants";

export const getCategoriesArticle = (categoryName) => async (dispatch) => {
  try {
    dispatch({
      type: ARTICLE_LIST_REQUEST,
    });

    const res = await axios.get(`/api/articles/filter/${categoryName}`);
    dispatch({ type: ARTICLE_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
    });
  }
};

export const getArticleById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_ARTICLE_REQUEST,
    });

    const res = await axios.get(`/api/articles/${id}`);
    dispatch({ type: FILTER_ARTICLE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: FILTER_ARTICLE_FAIL,
    });
  }
};

export const deleteArticleById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_ARTICLE_REQUEST",
    });

    const res = await axios.delete(`/api/articles/${id}`);
    dispatch({ type: "DELETE_ARTICLE_SUCCESS" });
  } catch (error) {
    dispatch({
      type: FILTER_ARTICLE_FAIL,
    });
  }
};

export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch({
      type: ARTICLE_LIST_REQUEST,
    });

    const res = await axios.get("/api/articles");
    dispatch({ type: ARTICLE_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
    });
  }
};
