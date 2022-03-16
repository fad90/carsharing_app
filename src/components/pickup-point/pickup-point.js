import React from 'react';
import styles from "./pickup-point.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as getFunctions from "../../fetch";
import { points } from "../../redux/selectors";
import { addPoints } from "../../redux/actions"

export default function PickupPoint() {
  const dispatch = useDispatch();
  const AllPoints = useSelector(points);

  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    getFunctions.getPoints().then((data) => {
      const allPoints = data.data;
      dispatch(addPoints(allPoints));
      console.log(allPoints)
    });
  }, []);

  return (
    <div className={styles.point}>
    <p className={styles.text_point}>Пункт выдачи</p>
    <input
      type="text"
      value={input}
      placeholder="Начните вводить пункт"
      onChange={changeHandler}
      className={styles.input_point}
    />
    {/* <div className={styles.dropdown_point}>
      {AllPoints.map((item) => (
        <div className={styles.dropdown_item} key={item.id}>
          {item.address}
        </div>
      ))}
    </div> */}
  </div>
  )
}
