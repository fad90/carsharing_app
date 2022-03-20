import React from "react";
import styles from "./burger-menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../redux/actions";
import { active } from "../../redux/selectors";

import cross from "../../assets/svg/cross.svg";
import { ReactComponent as TelegramLogo } from "../../assets/svg/telegram.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svg/Facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svg/Instagram.svg";

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const menuActive = useSelector(active);

  const menuClose = () => {
    dispatch(closeMenu());
  };

  return (
    <div
      className={
        menuActive ? `${styles.blur} ${styles.active}` : `${styles.blur}`
      }
    >
      <button className={styles.cross} onClick={menuClose}>
        <img src={cross} alt="cross" />
      </button>
      <div className={styles.menu}>
        <div className={styles.content}>
          <ul>
            <li className={styles.nav}>
              <a href="#" className={styles.link}>
                ПАРКОВКА
              </a>
            </li>
            <li className={styles.nav}>
              <a href="#" className={styles.link}>
                СТРАХОВКА
              </a>
            </li>
            <li className={styles.nav}>
              <a href="#" className={styles.link}>
                БЕНЗИН
              </a>
            </li>
            <li className={styles.nav}>
              <a href="#" className={styles.link}>
                ОБСЛУЖИВАНИЕ
              </a>
            </li>
          </ul>
          <div className={styles.social}>
            <a href="#" className={styles.social_link}>
              <TelegramLogo className={styles.social_logo} />
            </a>
            <a href="#" className={styles.social_link}>
              <FacebookLogo className={styles.social_logo} />
            </a>
            <a href="#" className={styles.social_link}>
              <InstagramLogo className={styles.social_logo} />
            </a>
          </div>
          <div className={styles.language}>
            <button className={styles.language_button}>Eng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
