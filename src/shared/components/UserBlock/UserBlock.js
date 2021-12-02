import React from "react";
import { ThemeElement } from "./ThemeElement/ThemeElement.js";
import { ProfileElement } from "./ProfileElement/ProfileElement.js";
import { ToHome } from "../../icons/toHome.js";
import styles from "./userBlock.css";
import { goToHome } from "../../actions/actions.js";
import { useDispatch } from "react-redux";

export const UserBlock = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.flex}>
      <button
        className={styles.homeBtn}
        onClick={() => {
          dispatch(goToHome());
        }}
      >
        <ToHome />
      </button>
      <ThemeElement />
      <ProfileElement />
    </div>
  );
};
