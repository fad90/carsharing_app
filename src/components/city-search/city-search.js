import React from "react";
import styles from "./city-search.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";
import { cities } from "../../redux/selectors";
import { addCities } from "../../redux/actions";

export default function CitySearch() {
    const dispatch = useDispatch();
    const allCities = useSelector(cities);
  
    const [input, setInput] = useState("");
  
    const changeHandler = (event) => {
      setInput(event.target.value);
    };
  
    useEffect(() => {
      getFunctions.getCities().then((data) => {
        const allCities = data.data;
        dispatch(addCities(allCities));
      });
    }, []);

  return (
    <div className={styles.city}>
      <p className={styles.text_city}>Город</p>
      <input
        type="text"
        value={input}
        placeholder="Начните вводить пункт"
        onChange={changeHandler}
        className={styles.input_city}
      />
      {/* <div className={styles.dropdown_city}>
        {allCities.map((item) => (
          <div className={styles.dropdown_item} key={item.id}>
            {item.name}
          </div>
        ))}
      </div> */}
    </div>
  );
}
