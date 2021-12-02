import {
  COLLECTION_REQUEST,
  COLLECTION_REQUEST_SUCCESS,
  COLLECTION_REQUEST_ERROR,
  UPDATE_COLLECTION_STATE,
  GO_TO_HOME,
} from "../actions/types";

const initialState = {
  collection: [],
  input: "",
  page: 1,
  loading: true,
  error: "",
};

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_HOME:
      return {
        ...state,
        collection: [],
        input: "",
        page: 1,
        loading: true,
        error: "",
      };
    case UPDATE_COLLECTION_STATE:
      return {
        ...state,
        collection: [],
      };
    case COLLECTION_REQUEST:
      return {
        ...state,
        input: action.input,
        loading: !state.loading,
      };
    case COLLECTION_REQUEST_SUCCESS:
      return {
        ...state,
        collection: [...state.collection, ...action.collection],
        page: ++state.page,
        loading: !state.loading,
      };
    case COLLECTION_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
