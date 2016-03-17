import * as ActionTypes from '../constants/constants';

const initialState = { numbers: '' };

function evalExpression(expression){
  return 'yolo';
}
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
    case ActionTypes.GENERIC_PRESS :
      var new_numbers = state.numbers + action.val;
      if(action.val == 'clear'){
        new_numbers = '';
      }
      if(action.val == 'compute'){
        new_numbers = evalExpression(new_numbers);
      }
      return {
        numbers: new_numbers
      }
    default:
      return state;
  }
};

export default calculatorReducer;
