import React , {useState} from 'react';

export default function TextForm(props) {
    const [text , setText] = useState( '');
    const handleUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","Success");
    }
    const handleLowCase = ()=>{
        let lowcase = text.toLowerCase();
        setText(lowcase);
        props.showAlert("Converted to Lowercase!","Success");

    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Text cleared!","Success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!","Success");
    }
    const removeExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!","Success");
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const onchange = (event)=>{
        setText(event.target.value);
    }
  return (
   <>
   <div className="container my-3" style={{color: props.showMode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter text here' value={text} onChange={onchange} rows="8" style={{backgroundColor : props.showMode === "dark"? "#494F55" :"#FFFFF0", color: props.showMode === 'dark'?'white':'black' , border: props.showMode === 'dark'?'2px solid white':'2px solid black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase} >{props.buttonText1} </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowCase}>{props.buttonText2}</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>{props.buttonText3}</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>Remove Extra Space</button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container" style={{color: props.showMode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text:"Nothing to Preview"}</p>
    </div>
   </>
    
  );
}
TextForm.defaultProps = {
    heading : "Enter your Text to analyze",
    buttonText1 : "convert to upper case" ,
    buttonText2 : "convert to lower case",
    buttonText3 : "clear text"
}
