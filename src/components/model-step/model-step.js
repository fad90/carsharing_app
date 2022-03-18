import React from "react";
import styles from "./model-step.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";
import { addCars } from "../../redux/actions";
import { addCategory } from "../../redux/actions";
import { cars } from "../../redux/selectors";
import { category } from "../../redux/selectors";

export default function ModelStep() {
  const dispatch = useDispatch();
  const allCategory = useSelector(category);
  const allCars = useSelector(cars);

  useEffect(() => {
    getFunctions.getCars().then((data) => {
      const allCars = data.data;
      dispatch(addCars(allCars));
      console.log(allCars);
    });

    getFunctions.getCategory().then((data) => {
      const allCategory = data.data;
      dispatch(addCategory(allCategory));
      console.log(allCategory);
    });
  }, []);

  return (
    <div className={styles.model}>
      <div className={styles.categories}>
        <div className={styles.category}>
          <div className={styles.category_circle}></div>
          <div className={styles.category_text}>Все модели</div>
        </div>
        {allCategory.map((item, index) => (
          <div className={styles.category} key={`${item.id}${index}`}>
            <div className={styles.category_circle}></div>
            <div className={styles.category_text}>{item.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.cars}>
        <div className={styles.models}>
          {allCars.map((item, index) => (
            <div className={styles.card}>
              <div className={styles.info}>
                <div className={styles.model}>{item.name}</div>
                <div className={styles.price}>{`${item.priceMin} - ${item.priceMax} ₽`}</div>
              </div>
              <img className={styles.img} src={item.thumbnail.path} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
