import React from "react";
import styles from "./content.module.scss";
import location from '../../assets/svg/Group.svg'

export default function Content() {
  return (
    <section className={styles.content}>
      <header className={styles.header}>
        <div className={styles.logo}>Need for drive</div>
        <div className={styles.location}>
          <div>
            <img src={location} alt="location" />
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
