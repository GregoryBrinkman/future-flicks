import React from 'react';
import Icon from './Icon';

function AddIcon(props) {
  return (
    <Icon handlePressed={props.handlePressed} iconClass="fa-plus" />
  );
}

export default AddIcon;
