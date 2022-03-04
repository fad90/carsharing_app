import React from "react";
import styles from "./slider.module.scss";
import img1 from "../../assets/images/img1.png";
import arrowLeft from "../../assets/svg/Vector_left.svg";
import arrowRight from "../../assets/svg/Vector_right.svg";

export default function Slider() {
  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={img1} alt="image" />
        <button className={styles.btnLeft}>
          <img src={arrowLeft} alt="arrow" />
        </button>
        <div className={styles.content}>
          <h3 className={styles.title}>Бесплатная парковка</h3>
          <p className={styles.text}>
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button className={styles.button}>Подробнее</button>
        </div>
        <button className={styles.btnRight}>
          <img src={arrowRight} alt="arrow" />
        </button>
        <div className={styles.dots}>
          <button className={styles.dot}></button>
          <button className={styles.dot}></button>
          <button className={styles.dot}></button>
          <button className={styles.dot}></button>
        </div>
      </div>
    </section>
  );
}
