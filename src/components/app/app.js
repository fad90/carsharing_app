import React from "react";
import styles from './app.module.scss';

import Content from '../content';
import Sidebar from '../sidebar';
import Slider from '../slider';
import BurgerMenu from '../burger-menu'

export default function App() {
  return (
      <div className={styles.app}>
        <Sidebar />
        <Content />
        <Slider />
        <BurgerMenu />
      </div>
  );
}
