import React from "react";
import styles from "./city-search.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";

import { cities } from "../../redux/selectors";
import { cityOpen } from "../../redux/selectors";
import { addCities } from "../../redux/actions";
import { openCity } from "../../redux/actions";
import { inputCity } from "../../redux/selectors";
import { cityText } from "../../redux/actions";
import { addCity } from "../../redux/actions";

export default function CitySearch() {
  const dispatch = useDispatch();
  const allCities = useSelector(cities);
  const isOpen = useSelector(cityOpen);
  const input = useSelector(inputCity);

  const changeHandler = (event) => {
    const target = event.target.value;
    dispatch(cityText(target));
  };

  useEffect(() => {
    getFunctions.getCities().then((data) => {
      const allCities = data.data;
      dispatch(addCities(allCities));
    });
  }, []);

  const openMenu = () => {
    dispatch(openCity());
  };

  const selectCity = (e) => {
    const selectedCity = e.target.innerText;
    dispatch(cityText(selectedCity));
    dispatch(openCity());
    dispatch(addCity(selectedCity))
  };

  return (
    <div className={styles.city}>
      <p className={styles.text_city}>Город</p>
      <input
        type="text"
        value={input}
        placeholder="Начните вводить пункт"
        onChange={changeHandler}
        className={styles.input_city}
        onClick={openMenu}
      />
      <div
        className={
          isOpen
            ? `${styles.dropdown_city} ${styles.active}`
            : `${styles.dropdown_city}`
        }
      >
        {allCities.map((item, index) => (
          <div
            className={styles.dropdown_item}
            key={`${item.id}${index}`}
            onClick={selectCity}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
