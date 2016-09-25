import React from 'react';
import {render} from 'react-dom';
import { AppBar } from 'react-toolbox';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';

const TooltipLink = Tooltip(Link);

class Header extends React.Component {
  isChrome () {
    return !!window.chrome && !!window.chrome.webstore;
  }
  getExtensionLink () {
    if (this.isChrome()) {
      return 'https://chrome.google.com/webstore/detail/keep-awake/bijihlabcfdnabacffofojgmehjdielb'
    }
  }
  render () {
    var extensionButton = null;
    if (this.isChrome()) {
      extensionButton = <TooltipLink
        href={this.getExtensionLink ()}
        icon='wb_sunny'
        target='_blank'
        tooltipPosition='right'
        tooltip='Keep awake with browser extension'/>;
    }

    return (
      <AppBar>
        {extensionButton}
      </AppBar>

    )
  }
}

export default Header;
