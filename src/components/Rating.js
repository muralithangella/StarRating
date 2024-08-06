import { FaAlignJustify, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const Rating = ({ limit, initialrating }) => {
  const [rating, setRating] = useState(initialrating);
  const handleClick = (index, e) => {
    e.preventDefault();
    setRating(index + 1);
  };
  return (
    <div>
      <header>
        <h1 style={{ color: "red", justifyContent: "center" }}>
          Rating Component
        </h1>
      </header>
      {[...Array(limit)].map((_, index) => (
        <span key={index} onClick={(e) => handleClick(index, e)}>
          {index < rating ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
};
export default Rating;
