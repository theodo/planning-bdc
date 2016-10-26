import React from 'react';
import {render} from 'react-dom';

import moment from 'moment';

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timeToEnd: null,
      intervalId: null
    }
  }
  componentWillReceiveProps (props) {
    window.clearInterval(this.state.intervalId);
    const intervalId = window.setInterval(
      (end) => {
        this.setState({timeToEnd: parseInt(moment.duration(moment(end).diff(moment())).asMinutes())})
      }
      , 1000, props.end
    );
    this.setState({ intervalId: intervalId })
  }
  componentWillMount () {
    const intervalId = window.setInterval(
      (end) => {
        this.setState({timeToEnd: parseInt(moment.duration(moment(end).diff(moment())).asMinutes())})
      }
      , 1000, this.props.end
    );
    this.setState({ intervalId: intervalId })
  }
  componentWillUnmount () {
    window.clearInterval(this.state.intervalId);
  }
  render () {
    return (
      <h2>{this.state.timeToEnd} minutes left</h2>
    )
  }
}

export default Timer;
