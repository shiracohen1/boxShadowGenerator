import './App.css'
import { ChromePicker } from "react-color";
import { useEffect, useState } from 'react'

const colorPicker = (props) => {

    const [boxColor, setBoxColor] = useState({r: 0, g: 0, b: 0, a: 1});
    const [colorArray, setColorArray] = useState([0 , 0 , 0 , 1]);

    function changeColor(newColor) {
        setBoxColor(newColor.rgb);
    }
    
    useEffect(() => {
        setColorArray([])
    
        Object.values(boxColor).map((value) => {
            setColorArray(colorArray => [...colorArray, value]);
        })
    }, [boxColor]);

    useEffect(() => {
        props.updateColor(colorArray);
    }, [colorArray])

    return (
        <div className="color">
        <ChromePicker
            color={boxColor}
            onChange={changeColor}
        />
        </div>
    )
}

export default colorPicker