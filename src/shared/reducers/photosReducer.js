import {
  PHOTOS_REQUEST,
  PHOTOS_REQUEST_SUCCESS,
  PHOTOS_REQUEST_ERROR,
  COLLECTION_REQUEST,
  COLLECTION_REQUEST_SUCCESS,
  COLLECTION_REQUEST_ERROR,
  UPDATELIKES,
} from "../actions/types";

const initialState = {
  photos: [],
  page: 1,
  loading: true,
  error: "",
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_REQUEST:
      return {
        ...state,
        loading: !state.loading,
      };
    case PHOTOS_REQUEST_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
        page: ++state.page,
      };
    case PHOTOS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case UPDATELIKES:
      const updatePhotos = state.photos.map((photo) => {
        if (action.id === photo.id) {
          photo.liked_by_user = !photo.liked_by_user;
          if (photo.liked_by_user) {
            photo.likes = ++photo.likes;
          } else {
            photo.likes = --photo.likes;
          }
        }
        return photo;
      });
      return {
        ...state,
        photos: updatePhotos,
      };

    default:
      return state;
  }
};
