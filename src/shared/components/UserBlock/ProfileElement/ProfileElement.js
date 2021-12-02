import React from "react";
import { IconAnon } from "../../../icons/IconAnon.js";
import styles from "./profileElement.css";
import { useSelector } from "react-redux";

export const ProfileElement = () => {
  const username = useSelector((state) => state.me.data.name);
  const avatarSrc = useSelector((state) => state.me.data.iconImg);
  const isAuth = useSelector((state) => state.token.isAuth);
  const isLight = useSelector((state) => state.theme.lightTheme);

  return (
    <a
      href="https://unsplash.com/oauth/authorize?client_id=pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA&redirect_uri=http://localhost:3000/isAuth&response_type=code&scope=public+read_user+write_likes"
      className={isLight ? styles.linkStyleLight : styles.linkStyleDark}
    >
      <div className={styles.flex}>
        {avatarSrc ? (
          <img src={avatarSrc} className={styles.avatarImg} />
        ) : (
          <div className={styles.avatarImg}>
            <IconAnon />
          </div>
        )}

        <div className={styles.userName}>{username ? username : "Anon"}</div>
      </div>
    </a>
  );
};
