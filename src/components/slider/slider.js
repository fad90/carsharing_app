import React from "react";
import styles from "./slider.module.scss";
import img1 from "../../assets/images/img1.png";

export default function Slider() {
  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={img1} alt="image" />
        <button className={styles.btnLeft}>
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 10L9 19"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 10L1 19"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
