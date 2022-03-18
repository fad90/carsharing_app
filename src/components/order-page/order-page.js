import React from "react";
import styles from "./order-page.module.scss";
import location from "../../assets/svg/Group.svg";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Vector } from "../../assets/svg/Vector.svg";

import LocationStep from "../location-step";
import ModelStep from "../model-step";
import AdditionStep from "../addition-step";
import TotalStep from "../total-step";
import OrderDetail from "../order-detail/order-detail";

const setActive = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;
export default function OrderPage() {
  return (
    <div className={styles.order}>
      <header className={styles.header}>
        <div className={styles.logo}>Need for drive</div>
        <div className={styles.location}>
          <div>
            <img src={location} alt="location" />
          </div>
          <div className={styles.location_text}>Ульяновск</div>
        </div>
      </header>

      <div className={styles.menu}>
        <div className={styles.line}></div>
        <nav className={styles.nav}>
          <NavLink to="location" className={setActive}>
            Местоположение
          </NavLink>
          <Vector className={styles.vector} />
          <NavLink to="model" className={setActive}>
            Модель
          </NavLink>
          <Vector className={styles.vector} />
          <NavLink to="addition" className={setActive}>
            Дополнительно
          </NavLink>
          <Vector className={styles.vector} />
          <NavLink to="total" className={setActive}>
            Итого
          </NavLink>
        </nav>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <Outlet />
        <div className={styles.line_vertical}></div>
        <OrderDetail />
      </div>
    </div>
  );
}
