import React, { PropTypes } from 'react';

function NumberDisplay(props) {
  return (
    <div>{props.numbers}</div>
  );
}

NumberDisplay.propTypes = {
  numbers: PropTypes.string.isRequired,
};

export default NumberDisplay;