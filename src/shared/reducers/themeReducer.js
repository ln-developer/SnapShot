import { TOGGLE_THEME } from "../actions/types";

const initialState = {
  lightTheme:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("isLight")) === null
        ? true
        : JSON.parse(localStorage.getItem("isLight"))
      : true,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      localStorage.setItem("isLight", !state.lightTheme);
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
    default:
      return state;
  }
};
