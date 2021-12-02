import React, { useEffect, useState } from "react";
import { Photo } from "../Photo/Photo";
import styles from "./photosList.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncPhotosRequest,
  photosRequest,
  collectionRequest,
  asyncCollectionRequest,
} from "../../actions/actions";
import { LoadMore } from "../../elements/LoadMore/LoadMore";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToUp } from "../../icons/ToUp";
import classNames from "classnames";

export const PhotosList = () => {
  const loading = useSelector((state) => state.photos.loading);
  const collectionLoading = useSelector((state) => state.collection.loading);
  const photos = useSelector((state) => state.photos.photos);
  const isAuth = useSelector((state) => state.token.isAuth);
  const isLight = useSelector((state) => state.theme.lightTheme);
  const input = useSelector((state) => state.collection.input);
  const collection = useSelector((state) => state.collection.collection);
  const dispatch = useDispatch();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: ${isLight ? "black" : "white"};
  `;

  useEffect(() => {
    dispatch(asyncPhotosRequest());
  }, [loading]);

  useEffect(() => {
    dispatch(asyncCollectionRequest());
  }, [collectionLoading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollToTop);
    return () => {
      document.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  const scrollToTop = (e) => {
    if (e !== undefined) {
      if (e.target.documentElement.scrollTop > 250) {
        console.log("scroll");
        return styles.scrollUpBtn;
      }
    }
  };

  const gridClass = (photoIndex) => {
    switch (photoIndex % 20) {
      case 1:
        return styles.square;
      case 4:
        return styles.horizontalRectangle;
      case 8:
        return styles.verticalRectangle;
      case 10:
        return styles.square;
      case 13:
        return styles.horizontalRectangle;
      case 14:
        return styles.square;
      case 17:
        return styles.verticalRectangle;
      case 18:
        return styles.horizontalRectangle;
      case 19:
        return styles.verticalRectangle;
      case 0:
        return styles.horizontalRectangle;
      default:
        return styles.normalCase;
    }
  };

  const fetchData = () => {
    input ? dispatch(collectionRequest(input)) : dispatch(photosRequest());
  };

  const arr = input ? collection : photos;

  return (
    <div className={styles.mainBlock}>
      <InfiniteScroll
        hasMore={true}
        dataLength={arr.length}
        next={fetchData}
        loader={<ClipLoader loading={true} css={override} size={60} />}
      >
        <div className={styles.container}>
          {arr.map((photo, index) => {
            return (
              <Link
                key={nanoid()}
                to={{
                  pathname: `/photo/${photo.id}`,
                }}
                className={gridClass(index + 1)}
              >
                <Photo
                  id={photo.id}
                  likesCount={photo.likes}
                  isLike={photo.liked_by_user}
                  isAuth={isAuth}
                  src={
                    photo.hasOwnProperty("cover_photo")
                      ? photo.cover_photo.urls.regular
                      : photo.urls.regular
                  }
                  authorImg={photo.user.profile_image.small}
                  authorName={photo.user.name}
                />
              </Link>
            );
          })}
        </div>
        {/* {isEnd && (
          <div className={styles.loadMoreContainer}>
            <LoadMore />
          </div>
        )} */}
      </InfiniteScroll>
      <button
        className={classNames(styles.scrollUpBtnHidden, scrollToTop())}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ToUp />
      </button>
    </div>
  );
};
