import './App.css'
import { useEffect, useState } from 'react';
import copy from "copy-to-clipboard";

const Box = (props) => {
    const [boxShadow, changeBoxShadow] = useState("");
    const titles = ["box-shadow:", "-webkit-box-shadow:", "-moz-box-shadow:"];
    const [copyText, setCopyText] = useState("");
    const [copyStr, setCopyStr] = useState('');

    
    useEffect(() => {
        changeBoxShadow(``);
        
        props.offsetTypes.map((range) => {
            changeBoxShadow(boxShadow => boxShadow + ` ${range["val"]}px` )
        });

        

    }, [props]);
    
    useEffect(() => {
        setCopyText(``);
        setCopyStr('');

        titles.map((title) => {
            setCopyText(copyText => <div> {copyText} <div className='box-text'>{title} {boxShadow} rgba({`${props.boxColor}`});</div></div>);
            setCopyStr(copyStr => `${copyStr} ${title} ${boxShadow} rgba(${props.boxColor}); \n`);
        });

    }, [boxShadow, props.boxColor]);

    const copyToClipboard = () => {
        copy(copyStr);
    };

    return (
        <div className='box-container'>
            <div className="box" style={{ boxShadow: `${boxShadow} rgba(${props.boxColor})` }}>
                {copyText}
            </div>
            <button type="button" className='copy-code' onClick={copyToClipboard}>Copy Code</button>
        </div>
    )
}

export default Box 