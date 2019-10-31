import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';

import Header from './components/header';
import CommentForm from './components/commentForm';
import Comment from './components/comment';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddComment(username, comment) {
    this.props.addComment(username, comment);
  }

  handleDelete(index) {
    this.props.deleteComment(index);
  }

  renderComments() {
    const { comments } = this.props;
    if (comments.length === 0) return null;

    return comments.map((comment, index) => (
      <Comment
        key={comment.username + comment.comment}
        index={index}
        onDelete={this.handleDelete}
        username={comment.username}
        comment={comment.comment}
        avatar={comment.avatarURL}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.renderComments()}
        <CommentForm btnCaption="add" btnCallback={this.handleAddComment} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  actionCreators
)(App);
