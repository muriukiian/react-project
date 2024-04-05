import React, {useState, useEffect} from 'react';

function RandomColor(){

  const [typeOfColor, setTypeOfColor] = useState('hex');

  const [colors, setColors] = useState(`#000000`);
  
  function updateRandomColor(length){
    return Math.floor(Math.random() * length)
  }

  function updateHexColor() {
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = '#';
    
    for(let i = 0; i < 6; i++){
      hexColor += hex[updateRandomColor(hex.length)]
    }
    setColors(hexColor);

  }
  function updateRgbColor(){
    const r = updateRandomColor(256);
    const g = updateRandomColor(256);
    const b = updateRandomColor(256);

    setColors(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if(typeOfColor === 'rgb') updateRgbColor();
    else updateHexColor();

  }, [typeOfColor]);


  return(
    <div style={{
      width: '100vw',
      height: '100vh',
      background: colors,

    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor === 'hex' ? updateHexColor : updateRgbColor}>Generate Random Color</button>
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color : '#fff',
        fontSize: '60px',
        marginTop : '50px',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
        <h1>{colors}</h1>
      </div>
    </div>
  );
}

export default RandomColor