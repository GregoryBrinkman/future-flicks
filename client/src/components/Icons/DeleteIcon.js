import React from 'react';
import Icon from './Icon';

function DeleteIcon(props) {
  return (
    <Icon handlePressed={props.handlePressed} iconClass="fa-trash" />
  );
}

export default DeleteIcon;
