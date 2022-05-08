import React from "react";
import "./Hero.css";
import { FaCartArrowDown } from "react-icons/fa";
import bgImg from "../assets/hero-img.jpg";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";
import HeroReview from "../HeroReview/HeroReview";

const Hero = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useReviews();

  return (
    <div className="bg-hero w-full h-screen flex items-center justify-center bg-cover bg-center bg-hero--css ">
      <div className="text-white text-center    ">
        <h1 className="text-6xl font-mono font-extrabold text-grad">
          Buy Your Dream Laptop From Here
        </h1>
        <p className="mt-5 font-semibold tracking-widest text-xl ">
          Smile With Your Dream Laptop
        </p>
        <button className=" rounded-full  p-4  mt-8 ring ring-pink-500 ring-offset-2 ring-offset-pink-100 outline-4 hover:bg-pink-700 ease-in-out duration-1000 ">
          <div className="flex items-center justify-center">
            <p>Purchase It</p>
            <FaCartArrowDown className="mx-2"></FaCartArrowDown>
          </div>
        </button>

        <button
          className=" rounded-full  p-4  mt-8 ring ring-pink-500 ring-offset-2 ring-offset-pink-100 outline-4 hover:bg-pink-700 ease-in-out duration-1000 mx-4"
          onClick={() => navigate("/reviews")}
        >
          <p>See Reviews</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
