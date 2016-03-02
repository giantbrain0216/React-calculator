import React, { PropTypes } from 'react';

function NumberButton(props) {
  return (
    <button onClick={() => props.press(props.number)}>{props.number}</button>
  );
}

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  press: PropTypes.func.isRequired,
};

export default NumberButton;