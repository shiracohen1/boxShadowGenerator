import { useEffect, useState, useRef, useReducer } from 'react'
import './App.css'
import Nav from './nav'
import Slider from './slider'
import ColorPicker from './colorPicker'
import Box from './box'

function App() {

  const offsetTypes = useRef([{
    "type": 'horizontal',
    "val": 0
  }, {
    "type": "vertical",
    "val": 0
  }, {
    "type": "blur",
    "val": 0
  }, {
    "type": "range",
    "val": 0
  }]);

  
  let ranges = [];
  const [vals, setVals] = useState([]);
  const [rangeTypes, setRangeTypes] = useState([]);
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  for (let i = 0; i < offsetTypes.current.length; i++) {
    ranges.push(<Slider key={offsetTypes.current[i]["type"]} offType={offsetTypes.current[i]["type"]} storeValue={storeValue} />);
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
          <ColorPicker />
        </div>
        <Box vals={vals} offsetTypes={offsetTypes.current} rangeTypes={rangeTypes} />
      </div>
    </div>
  )
}

export default App
