import React,{useState} from 'react';
import data from './data.js';
import './styles.css';

//single selection
//multiple selection

function Acordian(){
  
  const [selected, setSelected] = useState(null);

  function handleChange1(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }
  return(
    <div className='wrapper'>
      <div className='accordian'>
        <h1>Accordian</h1>
        {
          data && data.length > 0 ? 
          data.map((dataItem) => <div className='item'>
            <div>
              <h3 className='title' onClick={() => handleChange1(dataItem.id)}>{dataItem.title}</h3>
              <span>+</span>
              <div>
                {
                  selected === dataItem.id ? 
                  <div className='content'>{dataItem.content}</div>
                  : null
                }
              </div>
            </div>
          </div>)
          : <div>No data found ! </div>
        }
      </div>
    </div>
  );
}

export default Acordian;