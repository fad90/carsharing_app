import React from "react";
import styles from "./addition-step.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { selectedCarId } from "../../redux/selectors";
import { cars } from "../../redux/selectors";
import { setColor } from "../../redux/actions";
import { color } from "../../redux/selectors";
import { addRate } from "../../redux/actions";
import { rate } from "../../redux/selectors";
import { setRate } from "../../redux/actions";
import { selectedRate } from "../../redux/selectors";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

export default function AdditionStep() {
  const dispatch = useDispatch();
  const selectedCar = useSelector(selectedCarId);
  const allCars = useSelector(cars);
  const selectedColor = useSelector(color);
  const allRates = useSelector(rate);
  const clickedRate = useSelector(selectedRate);

  const [startDate, setStartDate] = useState(new Date("2022/02/08"));
  const [endDate, setEndDate] = useState(new Date("2022/02/10"));

  const handleClick = (color) => () => {
    console.log(color);
    dispatch(setColor(color));
  };

  useEffect(() => {
    getFunctions.getRate().then((data) => {
      const rate = data.data;
      dispatch(addRate(rate));
    });
  }, []);

  const handleRate = (rate) => () => {
    dispatch(setRate(rate));
  };
  return (
    <div className={styles.addition}>
      <div className={styles.colors}>
        <div className={styles.color} onClick={handleClick("Любой")}>
          <div
            className={
              selectedColor === "Любой"
                ? `${styles.color_circle} ${styles.selected_circle}`
                : `${styles.color_circle}`
            }
          ></div>
          <div
            className={
              selectedColor === "Любой"
                ? `${styles.color_text} ${styles.text_selected}`
                : `${styles.color_text}`
            }
          >
            Любой
          </div>
        </div>
        {allCars
          .filter((car) => car.id === selectedCar)[0]
          .colors.map((color, index) => (
            <div className={styles.color} onClick={handleClick(color)}>
              <div
                className={
                  selectedColor === color
                    ? `${styles.color_circle} ${styles.selected_circle}`
                    : `${styles.color_circle}`
                }
              ></div>
              <div
                className={
                  selectedColor === color
                    ? `${styles.color_text} ${styles.text_selected}`
                    : `${styles.color_text}`
                }
              >
                {color}
              </div>
            </div>
          ))}
      </div>
      <div className={styles.date}>
        <div className={styles.date_wrap}>
          <div className={styles.date_text}>C:</div>
          <DatePicker
            locale="ru"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className={styles.date_start}
            dateFormat=" d. MM. yyyy "
          />
        </div>
        <div className={styles.date_wrap}>
          <div className={styles.date_text}>По:</div>
          <DatePicker
            locale="ru"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className={styles.date_end}
            dateFormat=" d. MM. yyyy "
          />
        </div>
      </div>
      <div className={styles.rates}>
        <div className={styles.rates_text}>Тарифы</div>
        {allRates
          .filter((rate) => rate.rateTypeId)
          .map((item, index) => (
            <div
              className={styles.rate}
              onClick={handleRate(item.rateTypeId.name)}
            >
              <div
                className={
                  clickedRate === item.rateTypeId.name
                    ? `${styles.rate_circle} ${styles.rate_circle_selected}`
                    : `${styles.rate_circle}`
                }
              ></div>
              <div
                className={
                  clickedRate === item.rateTypeId.name
                    ? `${styles.rate_text} ${styles.rate_text_selected}`
                    : `${styles.rate_text}`
                }
              >{`${item.rateTypeId.name}, ${item.price}`}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
