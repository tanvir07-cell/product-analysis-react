import { Close } from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex flex-col items-center justify-center md:hidden fixed inset-0  gap-8 bg-black/40 backdrop-blur-lg z-auto"
          : "hidden"
      }
    >
      <Close
        onClick={showMenu}
        className="cursor-pointer absolute right-6 top-6 scale-150  animate-bounce"
      ></Close>

      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-rose-400" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/review"
          className={({ isActive }) => (isActive ? "text-rose-400" : undefined)}
        >
          Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashbord"
          className={({ isActive }) => (isActive ? "text-rose-400" : undefined)}
        >
          Dashbord
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-rose-400" : undefined)}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <DarkMode></DarkMode>
      </li>
    </ul>
  );
};

export default MenuItems;
