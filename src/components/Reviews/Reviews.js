import React, { useEffect, useState } from "react";
// import useReview from "../../hooks/useReview";

const Review = () => {
  // load data from the custom use hook(useReview()):

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log()

  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
    </div>
  );
};

export default Review;
