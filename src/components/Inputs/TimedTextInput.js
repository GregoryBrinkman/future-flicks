import React, { useState } from 'react';
import Input from './Input';

function TimedTextInput(props) {
  const [loading, setLoading] = useState(false);
  const [stateTimeout, setStateTimeout] = useState(-1);
  const TIMEOUT = 2000; //2 seconds

  const timedFetch = (event) => {
    window.clearTimeout(stateTimeout);
    const value = event.target.value;

    if(value !== '') {
      setLoading(true);
      const timeout = window.setTimeout(() => {
        props.passValue(value);
        setLoading(false);
      }, TIMEOUT);
      setStateTimeout(timeout);
    } else {
      setLoading(false);
    }
  }

  return (
    <Input type="text" name={props.name} change={timedFetch} loading={loading} />
  );
}

export default TimedTextInput;
