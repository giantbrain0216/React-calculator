import * as ActionTypes from '../constants/constants';

const initialState = { numbers: '' };

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLEAR_NUMBERS :
      return {
        numbers: '',
      };
    case ActionTypes.PRESS_NUMBER :
      return {
        numbers: state.numbers + action.number,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
