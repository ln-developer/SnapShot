import { LIKE_REQUEST, LIKE_REQUEST_SUCCESS, LIKE_REQUEST_ERROR } from "../actions/types"

const initialState = {
  id: '',
  isLike: false,
  likesCount: 0,
  loading: true,
  error: ''
}

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return {
        ...state,
        loading: false,
        id: action.id
      }
    case LIKE_REQUEST_SUCCESS:
      return {
        ...state,
        isLike: !state.isLike,
        likesCount: action.likesCount
      }
    case LIKE_REQUEST_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}