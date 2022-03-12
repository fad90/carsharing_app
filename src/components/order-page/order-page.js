import React from "react";
import styles from "./order-page.module.scss";
import location from "../../assets/svg/Group.svg";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { ReactComponent as Vector } from "../../assets/svg/Vector.svg";

import LocationStep from "../location-step";
import ModelStep from "../model-step";
import AdditionStep from "../addition-step";
import TotalStep from "../total-step";


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
        <nav className={styles.nav}>
          <Link to="location" className={styles.link}>
            Местоположение
          </Link>
          <Vector className={styles.vector} />
          <Link to="model" className={styles.link}>
            Модель
          </Link>
          <Vector className={styles.vector} />
          <Link to="addition" className={styles.link}>
            Дополнительно
          </Link>
          <Vector className={styles.vector} />
          <Link to="total" className={styles.link}>
            Итого
          </Link>
        </nav>
      </div>

      {/* <Routes> */}
        {/* <Route path="/" element={<BreadCrumbs />}> */}
          {/* <Route path="location" element={<LocationStep />} />
          <Route path="model" element={<ModelStep />} />
          <Route path="addition" element={<AdditionStep />} />
          <Route path="total" element={<TotalStep />} /> */}
        {/* </Route> */}
      {/* </Routes> */}

      <Outlet />

    </div>
  );
}
