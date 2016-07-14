import React from 'react';

import AuthorizeButton from './authorize.jsx';
import BoardSelector from './board-selector.jsx';
import ListSelector from './list-selector.jsx';

class TrelloForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: null,
      lists: null
    };
  }
  getBoards () {
    window.Trello.get('/member/me/boards', (response) => {
      this.setState({boards: response});
    });
  }
  getLists () {
    return (boardId) => {
      if (!boardId) {
        return;
      }
      window.Trello.get('/boards/' + boardId + '/lists', (response) => {
        this.setState({lists: response});
      });
    }
  }
  watchList (listId) {
    console.log(listId);
  }
  onAuthorizeSuccessHandler () {
    return () => {
      this.getBoards();
    }
  }
  render () {
    var boardList = null;
    if (Array.isArray(this.state.boards)) {
      boardList = <BoardSelector boards={this.state.boards} onChangeHandler={this.getLists()} />;
    }

    var listList = null;
    if (Array.isArray(this.state.lists)) {
      listList = <ListSelector lists={this.state.lists} onChangeHandler={this.watchList.bind(this)} />;
    }
    return (
      <div>
        <AuthorizeButton onAuthorizeSuccessHandler={this.onAuthorizeSuccessHandler()} />
        {boardList}
        {listList}
      </div>
    );
  }
}

export default TrelloForm;
