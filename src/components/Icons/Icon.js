import React from 'react';

function Icon(props) {
  return (
    <div className="Icon" onClick={props.handlePressed}>
      <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
    </div>
  );
}

export default Icon;
