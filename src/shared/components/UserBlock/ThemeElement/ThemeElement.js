import React from "react";
import classNames from "classnames";
import styles from "./themeElement.css";
import { changeBodyScheme } from "../../../actions/actions";
import { useDispatch } from "react-redux";

export const ThemeElement = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.switch}>
      <input id="changeTheme" type="checkbox" />
      <span
        onClick={() => dispatch(changeBodyScheme())}
        className={classNames(styles.slider, styles.round)}
      ></span>
    </label>
  );
};
