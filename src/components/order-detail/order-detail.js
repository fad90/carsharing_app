import React from 'react';
import styles from "./order-detail.module.scss";

export default function OrderDetail() {
  return (
    <div className={styles.order}>
      <div className={styles.title}>Ваш заказ</div>
      <div className={styles.info}></div>
      <button className={styles.button}>Выбрать модель</button>
    </div>
  )
}
