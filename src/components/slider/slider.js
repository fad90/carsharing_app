import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./slider.module.scss";
import arrowLeft from "../../assets/svg/Vector_left.svg";
import arrowRight from "../../assets/svg/Vector_right.svg";
import dataSlider from "./sliderData";

import { nextSlide } from "../../redux/actions";
import { prevSlide } from "../../redux/actions";
import { dotSlide } from "../../redux/actions";
import { current } from "../../redux/selectors";
import { firstSlide } from "../../redux/actions";
import { lastSlide } from "../../redux/actions";

export default function Slider() {
  const dispatch = useDispatch();
  const last = dataSlider.length - 1;
  const first = 0;
  const active = useSelector(current);
  console.log(active);

  const nextImg = () => {
    active === last ? dispatch(firstSlide(first)) : dispatch(nextSlide());
  };

  const prevImg = () => {
    active === first ? dispatch(lastSlide(last)) : dispatch(prevSlide());
  };

  const dotClick = (index) => () => {
    dispatch(dotSlide(index));
  };

  const btnColors = {
    background: `linear-gradient(90deg, ${dataSlider[active].btnColors[0]} 0%, ${dataSlider[active].btnColors[1]} 100%)`,
  };

  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <button className={styles.btnLeft} onClick={prevImg}>
          <img src={arrowLeft} alt="arrow" />
        </button>

        {dataSlider.map((item, index) => {
          return (
            <img
              key={dataSlider[index].id}
              src={dataSlider[index].img}
              className={
                index === active
                  ? `${styles.slide} ${styles.active}`
                  : `${styles.slide}`
              }
            />
          );
        })}

        <div className={styles.content}>
          <h3 className={styles.title}>{dataSlider[active].title}</h3>
          <p className={styles.text}>{dataSlider[active].text}</p>
          <button className={styles.button} style={btnColors}>
            Подробнее
          </button>
        </div>

        <button className={styles.btnRight} onClick={nextImg}>
          <img src={arrowRight} alt="arrow" />
        </button>
        <div className={styles.dots}>
          {dataSlider.map((item, index) => (
            <button
              key={index}
              className={
                index === active
                  ? `${styles.dot} ${styles.active_dot}`
                  : `${styles.dot}`
              }
              onClick={dotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
