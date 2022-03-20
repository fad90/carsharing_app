import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./sidebar.module.scss";
import { ReactComponent as BurgerLogo } from "../../assets/svg/menu_btn.svg";
import { openMenu } from "../../redux/actions";
import { language } from "../../redux/selectors";
import { changeLang } from "../../redux/actions";

export default function Sidebar() {
  const dispatch = useDispatch();
  const EngLanguage = useSelector(language);

  const menuOpen = () => {
    dispatch(openMenu());
  };

  const changeLanguage = () => {
    dispatch(changeLang());
  };

  return (
    <>
      <button className={styles.hamburger} onClick={menuOpen}>
        <BurgerLogo className={styles.logo} />
      </button>
      <div className={styles.sidebar}>
        <div className={styles.language} onClick={changeLanguage}>
          <button className={styles.language_button}>
            {EngLanguage ? "Eng" : "Рус"}
          </button>
        </div>
      </div>
    </>
  );
}
