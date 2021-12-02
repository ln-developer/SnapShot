import React, { useRef } from "react";
import { BrandImg } from "../../icons/Brand.js";
import { UserBlock } from "../../components/UserBlock/UserBlock.js";
import { useSelector, useDispatch } from "react-redux";
import styles from "./header.css";
import classNames from "classnames";
import { SearchIco } from "../../icons/SearchIco.js";
import {
  updateCollectionState,
  collectionRequest,
} from "../../actions/actions";

export const Header = () => {
  const isLight = useSelector((state) => state.theme.lightTheme);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <header
      className={classNames(
        styles.header,
        isLight ? styles.lightScheme : styles.darkScheme
      )}
    >
      <div className={styles.navBar}>
        <div className={styles.brandBox}>
          <div className={styles.brandImg}>
            <BrandImg />
          </div>
          <div className={styles.brandPrev}>
            <div className={styles.brandName}>SnapShot</div>
            <div>Photos for everyone</div>
          </div>
        </div>
        <div className={styles.searchBlock}>
          <input
            className={classNames(
              styles.searchInput,
              isLight ? styles.searchInputLight : styles.searchInputDark
            )}
            type="text"
            placeholder="Search"
            ref={inputRef}
          />
          <button
            className={styles.searchBtn}
            onClick={() => {
              dispatch(updateCollectionState());
              dispatch(collectionRequest(inputRef.current.value.trim()));
              inputRef.current.value = "";
            }}
          >
            <SearchIco />
          </button>
        </div>

        <UserBlock />
      </div>
    </header>
  );
};
