import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import MainPage from "../main-page/main-page";
import OrderPage from "../order-page/order-page";
import styles from "./app.module.scss";
import Layout from "../layout";

import LocationStep from "../location-step";
import ModelStep from "../model-step";
import AdditionStep from "../addition-step";
import TotalStep from "../total-step";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="carsharing_app" element={<MainPage />} />
            <Route path="order/*" element={<OrderPage />}>
              <Route path="location" element={<LocationStep />} />
              <Route path="model" element={<ModelStep />} />
              <Route path="addition" element={<AdditionStep />} />
              <Route path="total" element={<TotalStep />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
