import React from "react";
import styles from "./footer.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { BrandImg } from "../../icons/Brand";

export const Footer = () => {
  const isLight = useSelector((state) => state.theme.lightTheme);
  return (
    <footer
      className={classNames(
        styles.footer,
        isLight ? styles.lightScheme : styles.darkScheme
      )}
    >
      <div className={styles.brandBox}>
        <div className={styles.brandImg}>
          <BrandImg />
        </div>
        <div className={styles.brandPrev}>
          <div className={styles.brandName}>SnapShot</div>
          <div>Photos for everyone</div>
        </div>
      </div>
      <small>© 2021 created by Liana Kazantseva</small>
    </footer>
  );
};
