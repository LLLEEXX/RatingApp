import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function ButtonsRatings() {
  const [selectedRating, setSelectedRating] = useState(null);
  const navigate = useNavigate();

  const handleSelectedRating = (rating) => {
    setSelectedRating((prevSel) => (prevSel === rating ? null : rating));
  };

  // Check if user has selected a rating or not.
  const handleClickedSubmit = () => {
    if (selectedRating === null) {
      alert("Please select a rating before submitting.");
    } else {
      navigate(`/ThankYou?rating=${selectedRating}`);
    }
  };

  return (
    <>
      <div id="buttons">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            className={`ratings ${selectedRating === rating ? "selected" : ""}`}
            onClick={() => handleSelectedRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <div id="submitButtonBody">
        <button id="submitButton" onClick={handleClickedSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default ButtonsRatings;
