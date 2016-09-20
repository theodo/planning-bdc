import React from 'react';
import {render} from 'react-dom';
import { Layout, Panel, Sidebar, Checkbox, IconButton, AppBar } from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';

import moment from 'moment';

import PlanningForm from './form.jsx';
import Bdc from './chart.jsx';
import TrelloForm from './trello.jsx';

class LayoutTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarPinned: false,
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

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Layout>
        <Panel>
          <AppBar>
            <Button icon='add' floating accent onClick={this.toggleSidebar} />
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <Bdc
              start={this.state.start}
              end={this.state.end}
              todo={this.state.todo}
              done={this.state.done} ></Bdc>
          </div>
        </Panel>
        <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
          <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
          <div style={{ flex: 1 }}>
            <TrelloForm
              onWatchHandler={this.onWatchHandler.bind(this)} />
            <PlanningForm
              start={this.state.start}
              end={this.state.end}
              todo={this.state.todo}
              onStartChangeHandler={this.handleStartChangeBuilder()}
              onEndChangeHandler={this.handleEndChangeBuilder()}
              onTodoChangeHandler={this.handleTodoChangeBuilder()} />
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

render(<LayoutTest/>, document.getElementById('app'));
