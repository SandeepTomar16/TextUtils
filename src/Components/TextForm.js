import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to upper case", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to Lower case", "success");
    };

    const handleClearClick = () => {
        setText("")
        props.showAlert(": Text Cleared", "success");
    };

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(":  Text copied to clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
         props.showAlert(": Extra spaces removed", "success");
      }
      

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    const [text, setText] = useState('Enter text here');
    return (

        <div className="mb-3 my-4  ">
            <h2 className='d-flex my-4'>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

            <button type="button" className="btn btn-primary m-3" onClick={handleUpClick} >Convert to UpperCase</button>
            <button type="button" className="btn btn-primary m-3" onClick={handleLoClick} >Convert to LowerCase</button>
            <button type="button" className="btn btn-primary m-3" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-primary m-3" onClick={handleExtraSpaces} >Remove Extra Space</button>
            <button type="button" className="btn btn-success m-3" onClick={handleClearClick} >Clear Text</button>

        <h2 className='preview my-3 d-flex'>Preview your text</h2>
        <p className='d-flex' >{text.split(" ").length} words and {text.length} characters</p>
        <p className='d-flex'>{.008 * text.split(" ").length} Minutes read</p>
        <h4 className='d-flex'>Your Text Preview</h4>
        <p className='d-flex'>{text.length>0 ? text: 'Enter something above to preview here'}</p>
        </div>
    )
}
