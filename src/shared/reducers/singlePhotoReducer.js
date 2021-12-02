import {
  SINGLE_PHOTO_REQUEST,
  SINGLE_PHOTO_REQUEST_SUCCESS,
  SINGLE_PHOTO_REQUEST_ERROR,
  UPDATE_SINGLE_PHOTO_STATE,
} from "../actions/types";

const initinalState = {
  singlePhoto: null,
  loading: true,
  error: "",
};

export const singlePhotoReducer = (state = initinalState, action) => {
  switch (action.type) {
    case SINGLE_PHOTO_REQUEST:
      return {
        ...state,
        loading: !state.loading,
      };
    case SINGLE_PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        singlePhoto: { ...action.singlePhoto },
      };
    case SINGLE_PHOTO_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case UPDATE_SINGLE_PHOTO_STATE:
      return {
        ...state,
        singlePhoto: null,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
