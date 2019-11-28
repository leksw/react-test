import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from "../actionTypes";

const initialState = {
  article: null,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  console.log("articles", state, action);
  switch (action.type) {
    case FETCH_ARTICLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload.article
      };

    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        article: null,
      };

    default:
      return state;
  }
}
