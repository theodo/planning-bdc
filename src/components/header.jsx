import React from 'react';
import {render} from 'react-dom';
import { AppBar } from 'react-toolbox';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';
import Dialog from 'react-toolbox/lib/dialog';
import Button from 'react-toolbox/lib/button';
import Timer from './timer.jsx';
import headerStyle from './header.scss';
import dialogStyle from './dialog.scss';

const TooltipLink = Tooltip(Link);

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false,
    };
  };
  isChrome () {
    return !!window.chrome && !!window.chrome.webstore;
  }
  getExtensionLink () {
    if (this.isChrome()) {
      return 'https://chrome.google.com/webstore/detail/keep-awake/bijihlabcfdnabacffofojgmehjdielb'
    }
  }
  handleToggle = () => {
    this.setState({active: !this.state.active});
  }
  render () {
    var extensionButton = null;
    const dialogActions = [
    { label: "Cancel", onClick: this.handleToggle },
    ];
    if (this.isChrome()) {
      extensionButton = <TooltipLink
        href={this.getExtensionLink ()}
        icon='wb_sunny'
        theme={headerStyle}
        target='_blank'
        tooltipPosition='right'
        tooltip='Keep awake with browser extension'/>;
    }

    return (
      <AppBar>
        {extensionButton}
        <Link
          onClick={this.handleToggle}
          theme={headerStyle}
          icon='info_outline' />
        <Dialog
          actions={dialogActions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='About BDC Planning'
          theme={dialogStyle}
        >
          <p><a href="https://en.wikipedia.org/wiki/Scrum_(software_development)" target="_blank">Scrum</a> instruction is to perform a one week sprint planning in maximum two hours.
          This can be challenging: I've often seen plannings overlaping this timebox.</p>

          <p>BDC Planning is measuring in real time if you're on time during your planning. To do so, it watchs a configurable Trello column and sums the estimated card points (it requires using <a  target="_blank" href="https://chrome.google.com/webstore/detail/scrum-for-trello/jdbcdblgjdpmfninkoogcfpnkjmndgje">Scrum For Trello</a> extension). The progression is displayed on a <a href="https://en.wikipedia.org/wiki/Burn_down_chart" target="_blank">burn down chart</a>.</p>

          <p>If you're late you can react to catch up the delay. For example you can ask your teamates
          to stand up until the delay is catched or you can split the team in
          several groups so that you plan in parallel. Anyway the idea is to be able
          to track the team is late so that it can adapt the way of planning.</p>
        </Dialog>
        <Timer end={this.props.end} />
      </AppBar>

    )
  }
}

export default Header;
