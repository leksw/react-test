import { normalize } from 'normalizr';
import { commentsList } from "./schemas";
import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from "./actionTypes";

import { articleAPI, commentsAPI } from "../utils";

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLE_BEGIN
});

export const fetchArticlesSuccess = article => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: { article }
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: { error }
});

export function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesBegin());
    return articleAPI
      .get()
      .then(article => {
        return dispatch(fetchArticlesSuccess(article));
      })
      .catch(error => dispatch(fetchArticlesFailure(error)));
  };
}

export const fetchCommentsBegin = () => ({
  type: FETCH_COMMENTS_BEGIN
});

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments }
});

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: { error }
});

export function fetchComments() {
  return dispatch => {
    dispatch(fetchCommentsBegin());
    return commentsAPI
      .get()
      .then(res => normalize(res, commentsList))
      .then(comments => {
        return dispatch(fetchCommentsSuccess(comments));
      })
      .catch(error => dispatch(fetchCommentsFailure(error)));
  };
}