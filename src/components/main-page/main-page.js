import React from "react";
import { Outlet } from "react-router-dom";
import styles from './main-page.module.scss';


import Content from '../content';
import Sidebar from '../sidebar';
import Slider from '../slider';
import BurgerMenu from '../burger-menu'

export default function MainPage() {
  return (
      <div className={styles.main}>
        {/* <Sidebar /> */}
        {/* <Outlet /> */}
        <Content />
        <Slider />
        {/* <BurgerMenu /> */}
      </div>
  );
}
