import {
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
} from "../actionTypes";

const initialState = {
    comments: [],
    loading: false,
    error: null
};
  
export default function(state = initialState, action) {
    console.log("comments", state, action);
    switch (action.type) {
        case FETCH_COMMENTS_BEGIN:
        return {
            ...state,
            loading: true,
            error: null
        };

        case FETCH_COMMENTS_SUCCESS:
        return {
            ...state,
            loading: false,
            comments: action.payload.comments
        };

        case FETCH_COMMENTS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            comments: [],
        };

        default:
        return state;
    }
}
