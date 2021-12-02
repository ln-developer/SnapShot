import {
  COLLECTION_REQUEST,
  COLLECTION_REQUEST_SUCCESS,
  COLLECTION_REQUEST_ERROR,
} from "./types";
import {
  PHOTOS_REQUEST,
  PHOTOS_REQUEST_SUCCESS,
  PHOTOS_REQUEST_ERROR,
} from "./types";
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR } from "./types";
import {
  LIKE_REQUEST,
  LIKE_REQUEST_SUCCESS,
  LIKE_REQUEST_ERROR,
} from "./types";
import {
  SINGLE_PHOTO_REQUEST,
  SINGLE_PHOTO_REQUEST_SUCCESS,
  SINGLE_PHOTO_REQUEST_ERROR,
  UPDATE_SINGLE_PHOTO_STATE,
} from "./types";
import { GETTOKEN } from "./types";
import { UPDATELIKES } from "./types";
import { ISMOUNTED } from "./types";
import { TOGGLE_THEME } from "./types";
import { UPDATE_COLLECTION_STATE } from "./types";
import { GO_TO_HOME } from "./types";

export const isMounted = () => {
  return {
    type: ISMOUNTED,
  };
};

export const changeTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

export const changeBodyScheme = () => {
  return (dispatch, getState) => {
    dispatch(changeTheme());
    if (getState().theme.lightTheme) {
      document.body.setAttribute("class", "lightScheme");
    } else {
      document.body.setAttribute("class", "darkScheme");
    }
  };
};

export const getToken = (token) => {
  return {
    type: GETTOKEN,
    token,
  };
};

export const singlePhotoRequest = () => {
  return {
    type: SINGLE_PHOTO_REQUEST,
  };
};

export const singlePhotoRequestSuccess = (singlePhoto) => {
  return {
    type: SINGLE_PHOTO_REQUEST_SUCCESS,
    singlePhoto,
  };
};

export const singlePhotoRequestError = (error) => {
  return {
    type: SINGLE_PHOTO_REQUEST_ERROR,
    error,
  };
};

export const asyncSinglePhotoRequest = (id) => {
  return (dispatch) => {
    dispatch(singlePhotoRequest());
    fetch(`http://localhost:3000/api/photo?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        const singlePhoto = data;
        dispatch(singlePhotoRequestSuccess(singlePhoto));
      })
      .catch((error) => dispatch(singlePhotoRequestError(String(error))));
  };
};

export const updateSinglePhotoState = () => {
  return {
    type: UPDATE_SINGLE_PHOTO_STATE,
  };
};

export const collectionRequest = (input) => {
  return {
    type: COLLECTION_REQUEST,
    input,
  };
};

export const collectionRequestSuccess = (collection) => {
  return {
    type: COLLECTION_REQUEST_SUCCESS,
    collection,
  };
};

export const collectionRequestError = (error) => {
  return {
    type: COLLECTION_REQUEST_ERROR,
    error,
  };
};

export const updateCollectionState = () => {
  return {
    type: UPDATE_COLLECTION_STATE,
  };
};

export const goToHome = () => {
  return {
    type: GO_TO_HOME,
  };
};

export const asyncCollectionRequest = () => {
  return (dispatch, getState) => {
    async function load() {
      console.log("req");
      try {
        await fetch(
          `http://localhost:3000/api/searchCollections?page=${
            getState().collection.page
          }&collection=${getState().collection.input}`
        )
          .then((response) => response.json())
          .then((data) => {
            const photosArray = data.results;
            dispatch(collectionRequestSuccess(photosArray));
          });
      } catch (error) {
        dispatch(collectionRequestError(String(error)));
      }
    }

    if (!getState().collection.loading) {
      load();
    }
  };
};

export const photosRequest = () => {
  return {
    type: PHOTOS_REQUEST,
  };
};

export const photosRequestSuccess = (photos) => {
  return {
    type: PHOTOS_REQUEST_SUCCESS,
    photos,
  };
};

export const photosRequestError = (error) => {
  return {
    type: PHOTOS_REQUEST_ERROR,
    error,
  };
};

export const asyncPhotosRequest = () => {
  return (dispatch, getState) => {
    async function load() {
      try {
        dispatch(photosRequest());
        await fetch(
          `http://localhost:3000/api/getCollection?page=${
            getState().photos.page
          }`
        )
          .then((response) => response.json())
          .then((data) => {
            const photosArray = data.results;
            dispatch(photosRequestSuccess(photosArray));
          });
      } catch (error) {
        dispatch(photosRequestError(String(error)));
      }
    }

    if (getState().photos.loading) {
      load();
    }
  };
};

export const meRequest = () => {
  return {
    type: ME_REQUEST,
  };
};

export const meRequestSuccess = (data) => {
  return {
    type: ME_REQUEST_SUCCESS,
    data,
  };
};

export const meRequestError = (error) => {
  return {
    type: ME_REQUEST_ERROR,
    error,
  };
};

export const asyncMeRequest = () => {
  return (dispatch, getState) => {
    dispatch(meRequest());
    fetch(`/api/userMe?token=${getState().token.token}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          meRequestSuccess({
            name: data.username,
            iconImg: data.profile_image.small,
          })
        );
      })
      .catch((error) => dispatch(meRequestError(error)));
  };
};

export const likeRequest = (id) => {
  return {
    type: LIKE_REQUEST,
    id,
  };
};

export const likeRequestSuccess = (likesCount) => {
  return {
    type: LIKE_REQUEST_SUCCESS,
    likesCount,
  };
};

export const likeRequestError = (error) => {
  return {
    type: LIKE_REQUEST_ERROR,
    error,
  };
};

export const asyncLikeReducer = (id) => {
  return (dispatch, getState) => {
    console.log("Like!");
    dispatch(likeRequest(id));
    if (!getState().likes.isLike) {
      fetch(
        `http://localhost:3000/api/getLike?id=${getState().likes.id}&token=${
          getState().token.token
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(likeRequestSuccess(data.photo.likes));
        })
        .catch((error) => dispatch(likeRequestError(String(error))));
    } else {
      fetch(
        `http://localhost:3000/api/getUnlike?id=${getState().likes.id}&token=${
          getState().token.token
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(likeRequestSuccess(data.photo.likes));
        });
    }
    dispatch(updateLikes(getState().likes.id));
  };
};

export const updateLikes = (id) => {
  return {
    type: UPDATELIKES,
    id,
  };
};
