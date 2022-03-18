import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import BurgerMenu from "../burger-menu";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <BurgerMenu />
    </>
  );
}
