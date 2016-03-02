import React, { PropTypes } from 'react';

function ClearButton(props) {
  return (
    <button onClick={() => props.press()}>Clear</button>
  );
}

ClearButton.propTypes = {
  press: PropTypes.func.isRequired
};

export default ClearButton;