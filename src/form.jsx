import React from 'react';
import {Input} from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

class PlanningForm extends React.Component {
  render () {
    return (
      <div>
        <Input
          label="Start"
          name="start"
          type="time"
          value={this.props.start}
          onChange={this.props.onStartChangeHandler} />
        <Input
          label="End"
          name="end"
          type="time"
          value={this.props.end}
          onChange={this.props.onEndChangeHandler} />
        <Input
          label="Todo"
          name="todo"
          type="number"
          value={this.props.todo}
          onChange={this.props.onTodoChangeHandler} />
      </div>
    );
  }
}

export default PlanningForm;
