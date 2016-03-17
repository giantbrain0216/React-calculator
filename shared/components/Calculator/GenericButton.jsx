import React, { PropTypes } from 'react';

function GenericButton(props) {
  return (
    <button onClick={() => props.press(props.val)}>{props.val}</button>
  );
}

GenericButton.propTypes = {
  val: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
};

export default GenericButton;