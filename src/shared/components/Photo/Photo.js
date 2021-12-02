import React from "react";
import styles from "./photo.css";
import { IsDisLike } from "../../icons/IsDisLike";
import { IsLike } from "../../icons/IsLike";
import { useDispatch } from "react-redux";
import { asyncLikeReducer } from "../../actions/actions";
import classNames from "classnames";

export const Photo = ({
  id,
  likesCount,
  isLike,
  isAuth,
  src,
  authorImg,
  authorName,
}) => {
  const dispatch = useDispatch();

  const likePhoto = (id) => {
    dispatch(asyncLikeReducer(id));
  };

  let icon = isLike ? <IsLike /> : <IsDisLike />;

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryItem}>
        <div className={styles.image}>
          <img src={src}></img>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className={styles.author}
        >
          <div className={styles.authorBlock}>
            <img src={authorImg}></img>
            <div className={styles.authorName}>{authorName}</div>
          </div>
          {isAuth && (
            <div className={styles.likeBlock}>
              <button onClick={() => likePhoto(id)}>{icon}</button>
              <div className={styles.likeCount}>{likesCount}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
