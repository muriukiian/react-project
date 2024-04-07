import Acordian from "./components/accordian/Acordian.jsx";
import RandomColor from "./components/random-color/RandomColor.jsx";
import StarRating from "./components/star-rating/StarRating.jsx";



function App(){
  return(
    <div className="app">
      {/*Accordian component*/}
      {/*Random color Component*/}
      {/*Star-rating component*/}
      <StarRating noOfStars={5}/>
    </div>
  );
}

export default App