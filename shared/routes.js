import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import CalculatorContainer from './container/CalculatorContainer/CalculatorContainer';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={CalculatorContainer} />
  </Route>
);

export default routes;
