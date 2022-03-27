import React from "react";
import styles from "./addition-step.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CheckMark } from "../../assets/svg/check-mark.svg";

import { selectedCarId } from "../../redux/selectors";
import { cars } from "../../redux/selectors";
import { setColor } from "../../redux/actions";
import { color } from "../../redux/selectors";
import { addRate } from "../../redux/actions";
import { rate } from "../../redux/selectors";
import { setRate } from "../../redux/actions";
import { selectedRate } from "../../redux/selectors";
import { services } from "../../redux/selectors";
import { selectOptions } from "../../redux/actions";
import { dateFromSelector } from "../../redux/selectors";
import { dateToSelector } from "../../redux/selectors";

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
  const additionOptions = useSelector(services);
  const dateFrom = useSelector(dateFromSelector)
  const dateTo = useSelector(dateToSelector)

  const [startDate, setStartDate] = useState(dateFrom);
  const [endDate, setEndDate] = useState(dateTo);

  const handleClick = (color) => () => {
    dispatch(setColor(color));
  };

  useEffect(() => {
    getFunctions.getRate().then((data) => {
      const rate = data.data;
      dispatch(addRate(rate));
    });
    // getFunctions.getOrder().then((data) => {
    //   const order = data.data;
    //   console.log(Object.entries(order));
    // });
  }, []);

  const handleRate = (rate) => () => {
    dispatch(setRate(rate));
  };

  const selectCheckBox = (option) => () => {
    console.log([option]);
    dispatch(
      selectOptions({
        [option]: {
          name: additionOptions[option].name,
          checked: !additionOptions[option].checked,
        },
      })
    );
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
            <div
              className={styles.color}
              onClick={handleClick(color)}
              key={color + index}
            >
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
            className={styles.date_start}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="ru-RU"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
          />
        </div>
        <div className={styles.date_wrap}>
          <div className={styles.date_text}>По:</div>
          <DatePicker
            className={styles.date_end}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            locale="ru-RU"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
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
              key={item.id + index}
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
      <div className={styles.services}>
        <div className={styles.services_text}>Доп услуги</div>
        <div className={styles.services_wrapper}>
          {Object.entries(additionOptions).map(([option, value]) => (
            <div className={styles.checkbox} onClick={selectCheckBox(option)}>
              <div className={styles.checkbox_square}>
                {value.checked && <CheckMark className={styles.check_mark} />}
              </div>
              <div className={styles.checkbox_name}>{value.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
