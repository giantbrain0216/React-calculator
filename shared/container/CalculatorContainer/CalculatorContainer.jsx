
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

import NumberButton from '../../components/Calculator/NumberButton';
import NumberDisplay from '../../components/Calculator/NumberDisplay';
import ClearButton from '../../components/Calculator/ClearButton';
import GenericButton from '../../components/Calculator/GenericButton';
import _ from 'lodash';



class CalculatorContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleGenericPress = this.handleGenericPress.bind(this);
    var numberVals = _.map(_.range(10), function(x){ return x.toString() });
    var operatorVals = ['*', '+', '-'];
    var otherVals = ['clear', 'compute'];
    this.buttonVals = numberVals.concat(operatorVals).concat(otherVals);
  }

  handleNumberPress(number) {
    this.props.dispatch(Actions.pressNumber(number));
  }

  handleClearPress() {
    this.props.dispatch(Actions.clearNumbers());
  }

  handleGenericPress(val){
    this.props.dispatch(Actions.genericPress(val));
  }

  

  render() {
     let buttons = _.range(this.buttonVals.length).map((_, i) => <GenericButton val={this.buttonVals[i]} key={i} press={this.handleGenericPress} />);
    return (
      <div>
        { buttons }
        <NumberDisplay numbers = {this.props.numbers} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    numbers: (store.calculatorReducer.numbers),
  }
}
export default connect(mapStateToProps)(CalculatorContainer);