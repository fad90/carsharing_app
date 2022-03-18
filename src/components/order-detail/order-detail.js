import React from 'react';
import styles from "./order-detail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { city } from '../../redux/selectors';
import { point } from '../../redux/selectors';

export default function OrderDetail() {
  const totalCity = useSelector(city);
  const totalPoint = useSelector(point);
  return (
    <div className={styles.order}>
      <div className={styles.title}>Ваш заказ</div>
      <div className={styles.info}>
        <div className={styles.wrap}>
          <div className={styles.name}>Пункт выдачи</div>
          <div className={styles.dot}></div>
          <div className={styles.item}>
            <div>{totalCity}</div>
            <div>{totalPoint}</div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Выбрать модель</button>
    </div>
  )
}
