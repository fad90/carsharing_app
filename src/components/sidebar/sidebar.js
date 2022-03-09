import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./sidebar.module.scss";
import { ReactComponent as BurgerLogo } from "../../assets/svg/menu_btn.svg";
import { openMenu } from "../../redux/actions";

export default function Sidebar() {
  const dispatch = useDispatch();

  const menuOpen = () => {
    dispatch(openMenu());
  };

  return (
    <>
      <button className={styles.hamburger} onClick={menuOpen}>
        <BurgerLogo className={styles.logo}/>
      </button>
      <div className={styles.sidebar}>
        <div className={styles.language}>
          <button className={styles.language_button}>Eng</button>
        </div>
      </div>
    </>
  );
}