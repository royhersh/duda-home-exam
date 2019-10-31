import React from 'react';
import CommentForm from './commentForm';

class Comment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }
  toggleEditMode = e => this.setState({ editMode: !this.state.editMode });

  render() {
    const { username, comment, avatar, onDelete, index } = this.props;
    const { editMode } = this.state;
    return (
      <div className="row">
        <div className="col sm12">
          <div className="comment">
            <img className="comment__avatar" src={avatar} alt="Avatar" />
            <div className="comment__content">
              <div className="comment__content__user">{username}</div>
              <div className="comment__content_comment">{comment}</div>
            </div>
            <div className="comment__interactions">
              <i
                className="fas fa-pencil-alt"
                onClick={this.toggleEditMode}></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => {
                  onDelete(index);
                }}></i>
            </div>
          </div>
        </div>
        {editMode && (
          <CommentForm
            btnCaption="Save"
            username={username}
            comment={comment}
          />
        )}
      </div>
    );
  }
}

export default Comment;
