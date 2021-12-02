import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR } from '../actions/types';

const initialState = {
  data: {},
  loading: true,
  error: ''
}

export const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: !state.loading
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: {...action.data}
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}