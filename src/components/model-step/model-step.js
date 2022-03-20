import React from "react";
import styles from "./model-step.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";

import { addCars } from "../../redux/actions";
import { addCategory } from "../../redux/actions";
import { cars } from "../../redux/selectors";
import { category } from "../../redux/selectors";
import { setCategory } from "../../redux/actions";
import { selectedCategory } from "../../redux/selectors";
import { selectModel } from "../../redux/actions";
import { selectMinPrice } from "../../redux/actions";
import { selectMaxPrice } from "../../redux/actions";
import { selectedCarId } from "../../redux/selectors";
import { selectCarId } from "../../redux/actions";

export default function ModelStep() {
  const dispatch = useDispatch();
  const allCategory = useSelector(category);
  const allCars = useSelector(cars);
  const selectedModel = useSelector(selectedCategory);
  const selectedId = useSelector(selectedCarId);

  useEffect(() => {
    getFunctions.getCars().then((data) => {
      const allCars = data.data;
      dispatch(addCars(allCars));
    });

    getFunctions.getCategory().then((data) => {
      const allCategory = data.data;
      dispatch(addCategory(allCategory));
    });
  }, [dispatch]);

  const handleClick = (category) => () => {
    dispatch(setCategory(category));
  };

  const selectCar = (car, priceMin, priceMax, id) => () => {
    dispatch(selectModel(car));
    dispatch(selectMinPrice(priceMin));
    dispatch(selectMaxPrice(priceMax));
    dispatch(selectCarId(id));
  };

  return (
    <div className={styles.model}>
      <div className={styles.categories}>
        <div className={styles.category} onClick={handleClick("Все модели")}>
          <div
            className={
              selectedModel === "Все модели"
                ? `${styles.category_circle} ${styles.selected_circle}`
                : `${styles.category_circle}`
            }
          ></div>
          <div
            className={
              selectedModel === "Все модели"
                ? `${styles.category_text} ${styles.category_selected}`
                : `${styles.category_text}`
            }
          >
            Все модели
          </div>
        </div>
        {allCategory.map((item, index) => (
          <div
            className={styles.category}
            key={`${item.id}${index}`}
            onClick={handleClick(item.name)}
          >
            <div
              className={
                selectedModel === item.name
                  ? `${styles.category_circle} ${styles.selected_circle}`
                  : `${styles.category_circle}`
              }
            ></div>
            <div
              className={
                selectedModel === item.name
                  ? `${styles.category_text} ${styles.category_selected}`
                  : `${styles.category_text}`
              }
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cars}>
        <div className={styles.models}>
          {selectedModel === "Все модели"
            ? allCars.map((item, index) => (
                <div
                  className={
                    selectedId === item.id
                      ? `${styles.card} ${styles.card_selected}`
                      : `${styles.card}`
                  }
                  key={`${item.id}${index}`}
                  onClick={selectCar(
                    item.name,
                    item.priceMin,
                    item.priceMax,
                    item.id
                  )}
                >
                  <div className={styles.info}>
                    <div className={styles.model}>{item.name}</div>
                    <div
                      className={styles.price}
                    >{`${item.priceMin} - ${item.priceMax} ₽`}</div>
                  </div>
                  <img
                    className={styles.img}
                    src={item.thumbnail.path}
                    alt="img"
                  />
                </div>
              ))
            : allCars
                .filter(
                  (category) => category.categoryId.name === selectedModel
                )
                .map((item, index) => (
                  <div
                    className={
                      selectedId === item.id
                        ? `${styles.card} ${styles.card_selected}`
                        : `${styles.card}`
                    }
                    key={`${item.id}${index}`}
                    onClick={selectCar(
                      item.name,
                      item.priceMin,
                      item.priceMax,
                      item.id
                    )}
                  >
                    <div className={styles.info}>
                      <div className={styles.model}>{item.name}</div>
                      <div
                        className={styles.price}
                      >{`${item.priceMin} - ${item.priceMax} ₽`}</div>
                    </div>
                    <img
                      className={styles.img}
                      src={item.thumbnail.path}
                      alt="img"
                    />
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
}
