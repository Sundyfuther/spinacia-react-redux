import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Connect } from './connect';
import './style.less';


class Main extends Component {

  constructor(props, context) {
    super(props, context);
    const { actions } = this.props;
    actions.initMainPage();
    document.title = 'spinacia-react-redux';
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div></div>
    )}
}

Main.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default Connect(Main);
