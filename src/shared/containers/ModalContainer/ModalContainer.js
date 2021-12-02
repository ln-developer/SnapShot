import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import {
  asyncSinglePhotoRequest,
  updateSinglePhotoState,
} from "../../actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ModalContainer.css";

export const ModalContainer = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.singlePhoto.singlePhoto);

  useEffect(() => {
    dispatch(asyncSinglePhotoRequest(id));
    document.body.setAttribute("style", "overflow: hidden");
  }, []);

  let history = useHistory();
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
    dispatch(updateSinglePhotoState());
    document.body.removeAttribute("style");
  };

  return (
    <div onClick={back} className={styles.container}>
      {photo && (
        <Modal
          photoSrc={photo.urls.regular}
          authorImg={photo.user.profile_image.medium}
          authorName={photo.user.name}
          date={photo.created_at}
        />
      )}
    </div>
  );
};
