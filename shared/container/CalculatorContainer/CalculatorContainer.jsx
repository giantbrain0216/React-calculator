
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

import NumberButton from '../../components/Calculator/NumberButton';
import NumberDisplay from '../../components/Calculator/NumberDisplay';
import ClearButton from '../../components/Calculator/ClearButton';
import _ from 'lodash';

class CalculatorContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
  }

  handleNumberPress(number) {
    console.log(this);
    this.props.dispatch(Actions.pressNumber(number));
  }

  handleClearPress() {
    console.log(this);
    this.props.dispatch(Actions.clearNumbers());
    console.log("handling clear press");
  }

  render() {
     let buttons = _.range(10).map((_, i) => <NumberButton number={i} key={i} press={this.handleNumberPress} />);
     let clearButton = <ClearButton press = {this.handleClearPress}/>;
    return (
      <div>
        { buttons }
        { clearButton }
        <NumberDisplay numbers={this.props.numbers} />
      </div>
    );
  }
}

// export default CalculatorContainer;
// export default connect()(CalculatorContainer);
function mapStateToProps(store) {
  return {
    numbers: (store.calculatorReducer.numbers),
  }
}
export default connect(mapStateToProps)(CalculatorContainer);