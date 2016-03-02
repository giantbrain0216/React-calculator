import { combineReducers } from 'redux';
import postReducer from './postReducer';
import calculatorReducer from './calculatorReducer';

const rootReducer = combineReducers({
  postReducer,
  calculatorReducer,
});

export default rootReducer;
