import { ISMOUNTED } from "../actions/types";

const initialState = {
  isMounted: false,
  loading: true
}

export const isMountedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISMOUNTED:
      return {
        ...state,
        isMounted: true,
        loading: false
      }
    default: return state
  }
}