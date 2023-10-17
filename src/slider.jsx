import { useEffect, useState } from 'react'
import { useRef } from 'react'

const RangeSlider = (props) => {

    const inputRef = useRef(null)

    const [vals, setVals] = useState({
        "max": 200,
        "min": -200,
    }) 

    const [rangeval, setRangeval] = useState({
        "horizontal": 0,
        "vertical": 0,
        "blur": 100,
        "range": 0
      });

    function handleChange(event) {
        setRangeval(prevRangeval => {
            return {
                ...prevRangeval,
                [`${props.offType}`] : inputRef.current.value 
            }
        })
        props.storeValue(props.offType, inputRef.current.value)
    }


    
    return (
    <div className='range'>
        <div className='text-range'>
            <span>{props.offType} offset</span>
            <span className='range-number'>{rangeval[props.offType]}px</span>
        </div>
        <input type="range" className="custom-range" min={props.offType === "blur" ? "0" : "-200"} max="200" ref={inputRef} defaultValue={props.offType === "blur" ? 100 : 0} onChange={handleChange} />
    </div>
    );
  };


export default RangeSlider