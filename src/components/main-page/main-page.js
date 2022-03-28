import React from "react";
import styles from "./main-page.module.scss";

import Content from "../content";
import Slider from "../slider";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Content />
      <Slider />
    </div>
  );
}
