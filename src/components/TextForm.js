import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
        const handleLoClick=()=>{
        // console.log("Uppercase clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

      const handleTitClick=()=>{
        const str= text;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        setText(str2);
        props.showAlert("Converted to First Letter Capitalized","success");
      }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const[text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#29465B':'white',color:props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
  <button className="btn btn-primary mx-1" onClick={handleTitClick}>Make First Letter Capital</button>



    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{0.008*text.split(" ").length}Minutes Read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Your Text"}</p>
    </div>
    </>
  )
}
