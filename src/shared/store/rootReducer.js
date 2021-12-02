import { likesReducer } from "../reducers/likesReducer";
import { photosReducer } from "../reducers/photosReducer";
import { themeReducer } from "../reducers/themeReducer";
import { meReducer } from "../reducers/meReducer";
import { tokenReducer } from "../reducers/tokenReducer";
import { isMountedReducer } from "../reducers/isMountedReducer";
import { singlePhotoReducer } from "../reducers/singlePhotoReducer";
import { collectionReducer } from "../reducers/collectionReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  isMounted: isMountedReducer,
  likes: likesReducer,
  photos: photosReducer,
  theme: themeReducer,
  me: meReducer,
  token: tokenReducer,
  singlePhoto: singlePhotoReducer,
  collection: collectionReducer,
});
