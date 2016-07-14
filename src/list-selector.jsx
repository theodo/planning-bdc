import React from 'react';

import Dropdown from 'react-toolbox/lib/dropdown';

class ListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null }
  }
  onChangeHandler (value) {
    this.props.onChangeHandler(value);
    this.setState({ value: value });
  }
  render () {
    const items = this.props.lists.map((list) => {
      return {
        label: list.name,
        value: list.id
      }
    });
    return (
      <Dropdown
        auto
        label='Select the list to watch'
        onChange={this.onChangeHandler.bind(this)}
        source={items}
        value={this.state.value} />
    );
  }
}

export default ListSelector;
