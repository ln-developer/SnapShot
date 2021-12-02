import React, { useEffect } from "react";
import styles from "./Modal.css";
import { IsLike } from "../../icons/IsLike";
import { IsDisLike } from "../../icons/IsDisLike";
import { CalendarIco } from "../../icons/Calendar";
import { asyncLikeReducer, updateLikes } from "../../actions/actions";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

export const Modal = ({ photoSrc, authorImg, authorName, date }) => {
  const isAuth = useSelector((state) => state.token.isAuth);
  const photos = useSelector((state) => state.photos.photos);
  let publishedOn = new Date(date);
  let { id } = useParams();
  const dispatch = useDispatch();
  const photo = photos.filter((photo) => photo.id === id)[0];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let icon = photo.liked_by_user ? <IsLike /> : <IsDisLike />;
  const isLight = useSelector((state) => state.theme.lightTheme);

  const likePhoto = (id) => {
    dispatch(asyncLikeReducer(id));
  };

  return (
    <div
      className={styles.modalContainer}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={isLight ? styles.modalItemLight : styles.modalItemDark}>
        <div className={styles.image}>
          <img src={photoSrc} />
        </div>
        <div className={styles.author}>
          <div className={styles.authorBlock}>
            <img src={authorImg}></img>
            <div className={styles.authorData}>
              <div className={styles.authorName}>{authorName}</div>
              <div
                className={classNames(
                  styles.publishedDate,
                  isLight ? styles.publishedDateLight : styles.publishedDateDark
                )}
              >
                <CalendarIco />
                Published on {months[publishedOn.getMonth()]}{" "}
                {publishedOn.getDate()}, {publishedOn.getFullYear()}
              </div>
            </div>
          </div>
          {isAuth && (
            <div className={styles.likeBlock}>
              <button onClick={() => likePhoto(id)}>{icon}</button>
              <div className={styles.likeCount}>{photo.likes}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
