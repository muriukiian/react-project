import Acordian from "./components/accordian/Acordian.jsx";
import RandomColor from "./components/random-color/RandomColor.jsx";



function App(){
  return(
    <div className="app">
      {/*Accordian component*/}
      <Acordian />
      {/*Random color Component*/}
      <RandomColor />
    </div>
  );
}

export default App