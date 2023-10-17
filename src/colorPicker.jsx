import './App.css'

const colorPicker = (props) => {

    function changeColor(event) {
        props.handleChange(event.currentTarget.value)
    }

    return (
        <div className="color">
            <input type="color" className='color-box' onChange={changeColor}></input>
        </div>
    )
}

export default colorPicker