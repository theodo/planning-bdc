import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';

import PlanningForm from './form.jsx';
import Bdc from './chart.jsx';
import TrelloForm from './trello.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: moment().format('HH:mm'),
      end: moment().add(1, 'hours').format('HH:mm'),
      todo: 30,
      done: [],
    };
  }
  handleStartChangeBuilder () {
    return (start) => {
      this.setState({ start: start })
    }
  }
  handleEndChangeBuilder () {
    return (end) => {
      this.setState({ end: end })
    }
  }
  handleTodoChangeBuilder () {
    return (todo) => {
      this.setState({ todo: todo })
    }
  }
  onWatchHandler (doneScreenshot) {
    this.state.done.push(doneScreenshot)
    this.setState({
      done: this.state.done
    });
    console.log(doneScreenshot);
  }
  render () {
    return (
      <div>
        <TrelloForm
          onWatchHandler={this.onWatchHandler.bind(this)} />
        <PlanningForm
          start={this.state.start}
          end={this.state.end}
          todo={this.state.todo}
          onStartChangeHandler={this.handleStartChangeBuilder()}
          onEndChangeHandler={this.handleEndChangeBuilder()}
          onTodoChangeHandler={this.handleTodoChangeBuilder()} />
        <Bdc
          start={this.state.start}
          end={this.state.end}
          todo={this.state.todo}
          done={this.state.done} ></Bdc>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
