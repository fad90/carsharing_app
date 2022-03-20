import React from "react";
import styles from "./order-detail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { city } from "../../redux/selectors";
import { point } from "../../redux/selectors";
import { selectedModel } from "../../redux/selectors";
import { selectedPriceMin } from "../../redux/selectors";
import { selectedPriceMax } from "../../redux/selectors";

export default function OrderDetail() {
  const totalCity = useSelector(city);
  const totalPoint = useSelector(point);
  const model = useSelector(selectedModel);
  const priceMin = useSelector(selectedPriceMin);
  const priceMax = useSelector(selectedPriceMax);
  return (
    <div className={styles.order}>
      <div className={styles.title}>Ваш заказ</div>
      <div className={styles.info}>
        {totalCity || totalPoint ? (
          <div className={styles.wrap}>
            <div className={styles.name}>Пункт выдачи</div>
            <div className={styles.dot}></div>
            <div className={styles.item}>
              <div>{totalCity}</div>
              <div>{totalPoint}</div>
            </div>
          </div>
        ) : null}

        {model ? (
          <>
            <div className={styles.wrap}>
              <div className={styles.name}>Модель</div>
              <div className={styles.dot}></div>
              <div className={styles.item}>
                <div>{model}</div>
              </div>
            </div>

            <div className={styles.price}>
              <span className={styles.price_title}>Цена: </span>
              {`от ${priceMin} до ${priceMax}`}
            </div>
          </>
        ) : null}
      </div>
      <button className={styles.button}>Выбрать модель</button>
    </div>
  );
}
