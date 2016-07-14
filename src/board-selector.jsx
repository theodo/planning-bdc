import React from 'react';

import Dropdown from 'react-toolbox/lib/dropdown';

class BoardSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null }
  }
  onChangeHandler (value) {
    this.props.onChangeHandler(value);
    this.setState({ value: value });
  }
  render () {
    const items = this.props.boards.map((board) => {
      return {
        label: board.name,
        value: board.id
      }
    });
    return (
      <Dropdown
        auto
        label='Select a Trello board'
        onChange={this.onChangeHandler.bind(this)}
        source={items}
        value={this.state.value} />
    );
  }
}

export default BoardSelector;
