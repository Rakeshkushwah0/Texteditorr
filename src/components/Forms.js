import React, {useState} from "react";

export default function Forms(props) {
  const [text, settext] = useState('');

    const handleupclick = () =>{
        // console.log("on click event is fired")
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("converted to uppercase","success")
        // console.log(text);
    }
    
    const handlelowclick = () =>{
        // console.log("on click event is fired")
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("converted to lowercase","success")
        // console.log(text);
    }
    const handleclrtxt = () =>{
      let newtext = "";
      settext(newtext);
      props.showalert("Text cleared","success")
    }

    const handleonchange = (event) =>{
        // console.log("on change")
        
        settext(event.target.value);
    }
    const handlecopy = () =>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("copy to clipboard","success")
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      settext(newText.join(" "));
      props.showalert("Extra space removed","success")
    }

   
   
    // text = "new text";  // wrong way to update state
    // settext("newtext");  // correct wat to update state
  return (
  <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
    <h2 >{props.heading}</h2>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode==="light"?"white":"darkgrey",color: props.mode==="light"?"black":"white"}}
          value = {text}
          onChange={handleonchange}
          id="myBox"
          rows="9"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Change to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Change to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclrtxt}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove extra spaces</button>

    </div>

    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h3 >Your text summary</h3>
        <p >{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p >{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h4 >preview</h4>
        <p>{text.length>0?text:"Enter something in textbox above to preview"}</p>
    </div>
  </> 
  );
}
