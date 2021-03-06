import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, img, ratings, feedback } = props.review;
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

export default Review;
