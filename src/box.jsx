import './App.css'
import { useEffect, useState } from 'react';

const Box = (props) => {
    const [boxShadow, changeBoxShadow] = useState();

    useEffect(() => {
        changeBoxShadow(``)
        
        props.offsetTypes.map((range) => {
            changeBoxShadow(boxShadow => boxShadow + ` ${range["val"]}px` )
            // boxShadow = boxShadow + ` ${range["val"]}px`;
        });
        console.log(boxShadow)
    }, [props]);

    return (
        <div className="box" style={{ boxShadow: `${boxShadow} ${props.color}` }}>
            <div className='box-text'>box-shadow: {boxShadow} {props.color};</div>
            <div className='box-text'>-webkit-box-shadow: {boxShadow} {props.color};</div>
            <div className='box-text'>-moz-box-shadow: {boxShadow} {props.color};</div>
        </div>
    )
}

export default Box