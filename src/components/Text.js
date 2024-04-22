import React, {useState} from 'react'

export default function Text(props) {

  const ConvertUpperCase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const ConvertLowerCase=()=>{
    let newText=text.toLocaleLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const Copytext = () =>{
    var text1=document.getElementById('textBox');
    text1.select();
    navigator.clipboard.writeText(text1.value);
  }
  const Cleartext = () =>{
     setText("");
  }
  const RemoveExtraSpc = () => {
   let newText = text.replace(/\s{2,}/g, ' ').trim()
   setText(newText);
  }
  const[text, setText]=useState('Enter text here');
  return (
        <>
        <div>
        <h3>{props.heading}</h3>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
              <button className='btn btn-primary mx-1 my-2' onClick={ConvertUpperCase}>Convert UpperCase</button>
              <button className='btn btn-primary mx-1' onClick={ConvertLowerCase}>Convert LowerCase</button>
              <button className='btn btn-primary mx-1' onClick={Copytext}>Copy text</button>
              <button className='btn btn-primary mx-1' onClick={Cleartext}>Clear text</button>
              <button className='btn btn-primary mx-1' onClick={RemoveExtraSpc}>Remove extra space</button>
          </div> 
        </div>
        <div className='container' my-2>
          Your text summary
          <p>Words = {text.split(" ").length}, Characters = {text.length}</p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>
        </>
  )
}