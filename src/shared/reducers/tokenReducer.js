import { GETTOKEN } from "../actions/types";

const initialState = {
  token: '',
  isAuth: false,
  loading: true
}

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTOKEN:
      return {
        ...state,
        token: action.token,
        isAuth: true,
        loading: false
      }
    default: return state
  }
}