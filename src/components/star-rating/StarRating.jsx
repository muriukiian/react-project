import {FaStar} from 'react-icons/fa';
import React, {useState} from 'react';
import './styles.css';

function StarRating({noOfStars}){
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();

  const handleClick = (currentIndex) =>{
    setRating(currentIndex);
  }

  const hoverIn = (currentIndex) => {
    setHover(currentIndex);
  }

  const hoverOut = () => {
    setHover(rating);
  }

  return(
    <div>
      {
        [...Array(noOfStars)].map((_,i) => 
            <FaStar key={i} size={60} onClick={() => handleClick(i)} onMouseEnter={() => hoverIn(i)} onMouseLeave={() => hoverOut(i)} className={i <= (rating || hover) ? "active":"inactive"}/>
        )
      }
    </div>
  );
}
export default StarRating