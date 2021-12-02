import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./loadMore.css";
import React from "react";

export const LoadMore = () => {
  const isLight = useSelector((state) => state.theme.lightTheme);
  return (
    <button
      className={classNames(
        styles.loadMoreBtn,
        isLight ? styles.lightScheme : styles.darkScheme
      )}
    >
      Load more
    </button>
  );
};
