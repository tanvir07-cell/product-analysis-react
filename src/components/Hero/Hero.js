import React from "react";
import "./Hero.css";
import { FaCartArrowDown } from "react-icons/fa";
import bgImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div className="bg-hero w-full h-screen flex items-center justify-center bg-cover bg-center bg-hero--css ">
      <div className="text-white text-center    ">
        <h1 className="text-6xl font-mono font-extrabold">
          Learning Code EveryDay
        </h1>
        <p className="mt-5 font-semibold tracking-widest text-xl ">
          Passion and Passion Makes a man see their's vission
        </p>
        <button className=" rounded-full  p-4  mt-8 ring ring-pink-500 ring-offset-2 ring-offset-pink-100 outline-4 hover:bg-pink-700 ease-in-out duration-1000 ">
          <div className="flex items-center justify-center">
            <p>Purchase It</p>
            <FaCartArrowDown className="mx-2"></FaCartArrowDown>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
