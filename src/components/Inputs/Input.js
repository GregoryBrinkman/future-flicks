import React from 'react';

function Input(props) {
  return (
    <div className="inputcontainer">
      <input id={props.name} name={props.name} type={props.type} onChange={props.change} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor={props.name}>Search for a movie</label>
    
      {props.loading && 
        <div className="icon-container">
          <i className="loader"></i>
        </div>
      }
    </div>
  );
}

export default Input;
