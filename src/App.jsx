import Acordian from "./components/accordian/Acordian.jsx";
import RandomColor from "./components/random-color/RandomColor.jsx";
import StarRating from "./components/star-rating/StarRating.jsx";
import ImageSlider from "./components/image-slider/ImageSlider.jsx";
import LoadMore from "./components/load-more/LoadMore.jsx";


function App(){
  return(
    <div className="app">
      {/*Accordian component*/}
      {/*Random color Component*/}
      {/*Star-rating component*/}
      {/*ImageSlider component*/}
      { /*<ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}
      {/*Load more products component*/}
      <LoadMore />
    </div>
  );
}

export default App