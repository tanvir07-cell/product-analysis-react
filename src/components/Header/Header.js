import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

import MenuItems from "../MenuItems/MenuItems";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="  flex items-center justify-between p-4 fixed w-full text-white ">
      <div>
        <NavLink to="/">
          <h1 className="uppercase font-bold text-3xl text-white-800 tracking-widest italic hover:not-italic drop-shadow-lg  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Tanvir Rifat
          </h1>
        </NavLink>
      </div>

      <nav>
        {/* menu icon : */}
        <div className="absolute right-6 top-6 scale-150 md:hidden">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer animate-bounce"
          ></MenuOutlined>
        </div>
        {/* menu icon end: */}

        <ul
          className="hidden md:flex items-center gap-4 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase Class
Properties
drop-shadow-sm bg-blend-darken rounded-xl brightness-75"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-rose-400" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/review"
              className={({ isActive }) =>
                isActive ? "text-rose-400" : undefined
              }
            >
              Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord"
              className={({ isActive }) =>
                isActive ? "text-rose-400" : undefined
              }
            >
              Dashbord
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-rose-400" : undefined
              }
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <DarkMode></DarkMode>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active}></MenuItems>
      </nav>
    </div>
  );
};

export default Header;
