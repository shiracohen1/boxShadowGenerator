import { useEffect, useState, useRef, useReducer } from 'react'
import './App.css'
import Nav from './nav'
import Slider from './slider'
import ColorPicker from './colorPicker'
import Box from './box'

function App() {

  const offsetTypes = useRef([{
    "type": 'Horizontal Offset',
    "val": 0
  }, {
    "type": "Vertical Offset",
    "val": 0
  }, {
    "type": "Blur",
    "val": 100
  }, {
    "type": "Range",
    "val": 0
  }]);

  
  let ranges = [];
  let [boxColor, setColor] = useState(`#000000`);
  // const [vals, setVals] = useState([]);
  // const [rangeTypes, setRangeTypes] = useState([]);
  const [_, forceUpdate] = useReducer(x => x + 1, 0);
  

  for (let i = 0; i < offsetTypes.current.length; i++) {
    ranges.push(<Slider key={offsetTypes.current[i]["type"]} offType={offsetTypes.current[i]["type"]} storeValue={storeValue} />);
  }

  function updateColor(newColor) {
    setColor(newColor);
    forceUpdate();
  }
  
  function storeValue(name, value) {   

    for (var i = 0; i < offsetTypes.current.length; i++) {
      
      if (offsetTypes.current[i]["type"] === name) {
        offsetTypes.current[i]["val"] = Number(value); 
        forceUpdate();
      }
    }

  }

  return (
    <div>
      <div className='nav'>
        <Nav />
      </div>
      <div className='actual-body'>
        <div className='all-ranges'>
          {ranges} 
          <ColorPicker handleChange={updateColor}/>
        </div>
        <Box color={boxColor} offsetTypes={offsetTypes.current} />
      </div>
    </div>
  )
}

export default App
