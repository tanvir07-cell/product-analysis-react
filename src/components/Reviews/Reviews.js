import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="reviews-container grid md:grid-cols-2 gap-8 ">
      {reviews?.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
