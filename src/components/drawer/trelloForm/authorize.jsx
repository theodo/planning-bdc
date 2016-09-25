import React from 'react';
import {Button} from 'react-toolbox/lib/button';

class AuthorizeButton extends React.Component {
  authorize () {
    return () => {
      window.Trello.authorize({
        type: 'popup',
        name: 'Planning BDC',
        scope: {
          read: true,
        },
        expiration: 'never',
        success: () => {
          this.props.onAuthorizeSuccessHandler()
        },
        error: () => {
          console.warn('Error during Trello authorization');
        }
      });
    }
  }
  render () {
    return (
      <Button onClick={this.authorize()} raised primary label='Connect To Trello' />
    );
  }
}

export default AuthorizeButton;
