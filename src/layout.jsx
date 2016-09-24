import React from 'react';
import {render} from 'react-dom';
import { Layout, Panel, Sidebar, Checkbox, IconButton, AppBar } from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';

import moment from 'moment';

import PlanningForm from './form.jsx';
import Bdc from './chart.jsx';
import TrelloForm from './trello.jsx';

import 'react-toolbox/lib/commons.scss';
import style from './style.scss';

class LayoutTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playground: false,
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
  }

  toggleSidebar = () => {
    this.setState({ playground: !this.state.playground });
  };

  render() {
    let className = style.root;
    if (this.state.playground) className += ` ${style['with-playground']}`;

    return (
      <Layout>
        <Panel className={className}>
          <AppBar>
          </AppBar>
          <Button
            accent
            floating
            className={style['playground-button']}
            icon={this.state.playground ? 'close' : 'code'}
            onClick={this.toggleSidebar}
          />
          <div className={style.documentation}>
            <Bdc
              start={this.state.start}
              end={this.state.end}
              todo={this.state.todo}
              done={this.state.done} ></Bdc>
          </div>
          <aside className={style.playground} ref='playground'>
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
          </aside>
        </Panel>
      </Layout>
    );
  }
}

render(<LayoutTest/>, document.getElementById('app'));
