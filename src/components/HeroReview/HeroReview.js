import React from "react";
import "./HeroReview.css";

const HeroReview = (props) => {
  const { name, img, feedback, ratings } = props.review;
  return (
    <div className="review">
      <div>
        <img src={img} alt="" />
        <p className="feedback-author">Name : {name}</p>
        <p>
          <span className="feedback">Feedback : </span>
          {feedback}
        </p>
        <p>Ratings : {ratings}</p>
      </div>
    </div>
  );
};

export default HeroReview;
