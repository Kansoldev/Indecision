import React from 'react';

function Button(props) {
  return (
    <div className = "button-container">
      {props.children}
      <button
        className = "choose"
        onClick = {props.handleChoose}
        disabled = {!props.options.length > 0}
      >
        What Should I Do
      </button>
      <button className="choose" onClick={props.handleRemoveAll}>Remove All</button>
    </div>
  )
}

export default Button;
