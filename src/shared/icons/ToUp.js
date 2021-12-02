import React from "react";
import { useSelector } from "react-redux";

export const ToUp = () => {
  const isLight = useSelector((state) => state.theme.lightTheme);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 20 20"
      height="40px"
      viewBox="3 3 15 15"
      width="40px"
      fill={isLight ? "black" : "white"}
    >
      <g>
        <rect fill="none" height="20" width="20" />
        <path d="M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v3h1v-3H13l-3-3l-3,3H9.5z" />
      </g>
    </svg>
  );
};
