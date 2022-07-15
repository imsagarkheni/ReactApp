
import React, { useState } from 'react'

const Textbox = (props) => {
    const [text, setText] = useState("");
    

    const change = (event) => {
        setText(event.target.value);
    }

    const click = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickToLow = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clickToClear=()=>{
        let newText= '';
        setText(newText);
    }




    
    return (
        <div className='container'>
            <h1 className='my-3'><em>Enter the Text to Analyze below :</em></h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={change} value={text} placeholder="Enter Value..." rows="4" id="mybox"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-3' onClick={click}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-3' onClick={clickToLow}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-3' onClick={clickToClear}>Clear</button>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p><b>{ text.split(" ").length } </b>Words and<b> {text.length}</b> Characters</p>
                
            </div>


        </div>


    )
}

export default Textbox;
