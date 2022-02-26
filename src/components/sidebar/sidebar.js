import React from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <button className={styles.hamburger}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.hamburger_line}
            d="M4 16H28"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            className={styles.hamburger_line}
            d="M4 8H28"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            className={styles.hamburger_line}
            d="M4 24H28"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={styles.sidebar}>
        <div className={styles.language}>
          <button className={styles.language_button}>Eng</button>
        </div>
      </div>
    </>
  );
}
