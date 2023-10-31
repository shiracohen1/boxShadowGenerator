import { useEffect, useState } from 'react'
import { useRef } from 'react'

const RangeSlider = (props) => {

    const inputRef = useRef(null)

    const [rangeval, setRangeval] = useState({
        "Horizontal Offset": 0,
        "Vertical Offset": 0,
        "Blur": 100,
        "Range": 100
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
            <span>{props.offType}</span>
            <span className='range-number'>{props.offType === "Opacity" ? `${rangeval[props.offType]}%` : `${rangeval[props.offType]}px`}</span>
        </div>
        <input type="range" className="custom-range" min={(props.offType === "Blur" || props.offType === "Range" || props.offType === "Opacity") ? "0" : "-200"} max={props.offType === "Opacity" ? "100" : "200"} ref={inputRef} defaultValue={(props.offType === "Blur" || props.offType === "Range") ? 100 : props.offType === "Opacity" ? 50 : 0} onChange={handleChange} />
    </div>
    );
  };


export default RangeSlider