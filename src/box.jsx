import './App.css'

const Box = (props) => {
    console.log(props.offsetTypes);
    const values = []
    const pushingToArray = props.offsetTypes.map((range) => values.push(` ${range["val"]}px`))
    return (
        <div className="box">
            <div className='box-text'>box-shadow: {values};</div>
            <div className='box-text'>-webkit-box-shadow: {values};</div>
            <div className='box-text'>-moz-box-shadow: {values};</div>
        </div>
    )
}

export default Box