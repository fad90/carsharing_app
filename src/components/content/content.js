import React from "react";
import styles from "./content.module.scss";

export default function Content() {
  return (
    <section className={styles.content}>
      <header className={styles.header}>
        <div className={styles.logo}>Need for drive</div>
        <div className={styles.location}>
          <div>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.location_text}>Ульяновск</div>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Каршеринг</h1>
        <h2 className={styles.subtitle}>Need for drive</h2>
        <p className={styles.text}>Поминутная аренда авто твоего города</p>
        <button className={styles.button}>Забронировать</button>
      </main>
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
        <p className={styles.number}>8 (495) 234-22-44</p>
      </footer>
    </section>
  );
}
