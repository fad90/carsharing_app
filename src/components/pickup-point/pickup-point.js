import React from "react";
import styles from "./pickup-point.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";

import { points } from "../../redux/selectors";
import { pointOpen } from "../../redux/selectors";
import { addPoints } from "../../redux/actions";
import { openPoint } from "../../redux/actions";
import { inputCity } from "../../redux/selectors";

export default function PickupPoint() {
  const dispatch = useDispatch();
  const AllPoints = useSelector(points);
  const isOpen = useSelector(pointOpen);
  const selectedCity = useSelector(inputCity);

  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    getFunctions.getPoints().then((data) => {
      const allPoints = data.data;
      dispatch(addPoints(allPoints));
    });
  }, []);

  console.log(
    AllPoints.filter((city) => city.cityId && city.cityId.name === selectedCity)
  );

  const openMenu = () => {
    dispatch(openPoint());
  };

  return (
    <div className={styles.point}>
      <p className={styles.text_point}>Пункт выдачи</p>
      <input
        type="text"
        value={input}
        placeholder="Начните вводить пункт"
        onChange={changeHandler}
        className={styles.input_point}
        onClick={openMenu}
      />
      <div
        className={
          isOpen
            ? `${styles.dropdown_point} ${styles.active}`
            : `${styles.dropdown_point}`
        }
      >
        {isOpen && selectedCity
          ? AllPoints.filter(
              (city) => city.cityId && city.cityId.name === selectedCity
            ).map((item, index) => (
              <div className={styles.dropdown_item} key={`${item.id}${index}`}>
                {item.address}
              </div>
            ))
          : AllPoints.map((item, index) => (
              <div className={styles.dropdown_item} key={`${item.id}${index}`}>
                {item.address}
              </div>
            ))}
      </div>
    </div>
  );
}
