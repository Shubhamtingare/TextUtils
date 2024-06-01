import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.showMode === 'dark'? 'white':'black',
    backgroundColor: props.showMode === 'dark'?'black': 'white'
  }
  let myBody = {
    color: props.showMode === 'dark'? 'white':'black',
    backgroundColor: props.showMode === 'dark'?'#3b1c21': '#e6d9db'
  }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myBody}>
              <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myBody}>
              <strong>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
            Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myBody}>
              <strong>This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , Safari , Opera . It suits to count characters in facebook , blog ,books , excel document , pdf document , essays , etc.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
