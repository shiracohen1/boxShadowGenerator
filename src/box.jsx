import './App.css'
import { useEffect, useState } from 'react';

const Box = (props) => {
    const [boxShadow, changeBoxShadow] = useState();

    useEffect(() => {
        changeBoxShadow(``)
        
        props.offsetTypes.map((range) => {
            changeBoxShadow(boxShadow => boxShadow + ` ${range["val"]}px` )
        });
    }, [props]);

    return (
        <div className='box-container'>
            <div className="box" style={{ boxShadow: `${boxShadow} ${props.color}` }}>
                <div className='box-text'>box-shadow: {boxShadow} {props.color};</div>
                <div className='box-text'>-webkit-box-shadow: {boxShadow} {props.color};</div>
                <div className='box-text'>-moz-box-shadow: {boxShadow} {props.color};</div>
            </div>
            <button type="button" className='copy-code'>Copy Code</button>
        </div>
    )
}

export default Box