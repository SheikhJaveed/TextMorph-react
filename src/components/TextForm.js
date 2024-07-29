import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //on change gives you an event which you can pass as parameter
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleFindOnChange = (event) => {
    console.log("On change");
    setFind(event.target.value);
  };

  

  const handleCopyClick = () => {
    console.log("copied text");
    var text = document.getElementById("my-box2");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  function countWords(str) {
    // Using regular expression to split the string by whitespace characters
    // and filtering out empty strings
    return str.trim().split(/\s+/).filter(Boolean).length;
  }
  const [text, setText] = useState("Enter text here"); //hooks in react
  // text="jksdsld" //wrong way to set text
  // setText="kshdkds" //correct way to set text
  const [find, setFind] = useState("Enter text to find");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="my-box" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="my-box"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>
          Remove extra space
        </button>
      </div>
      <div
        className="container  my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        {" "}
        {/*my-3 means margin from y = 3 */}
        <h1>Your Text Summary</h1>
        <p>
          {countWords(text)} words {text.length} charcters
        </p>
        {/* text.split(" ")-> counts every word as an array and gives its length */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>{" "}
        {/*Average person reads 125 words in one minute so 1/125=0.008*word.length= minutes read  */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  );
}
