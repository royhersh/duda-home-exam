import React from 'react';
import imgGen from '@dudadev/random-img';
// imgGen().then(avatarURL => {...});

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      comment: ''
    };
  }

  async componentDidMount() {
    this.setState({ avatarUrl: await imgGen() });
  }

  handleUserNameChange = e => this.setState({ userName: e.target.value });
  handleCommentChange = e => this.setState({ comment: e.target.value });
  handleSubmit = e => {
    const { btnCallback } = this.props;
    const { userName, comment } = this.state;

    e.preventDefault();
    btnCallback(userName, comment);
    this.setState({
      userName: '',
      comment: ''
    });
  };
  render() {
    const { btnCaption } = this.props;
    const { userName, comment } = this.state;
    return (
      <div className="row">
        <form className="comment-form">
          <input
            className="comment__username"
            type="text"
            name="userName"
            placeholder="Your name"
            onChange={this.handleUserNameChange}
            value={userName}
          />

          <input
            className="comment"
            type="text"
            placeholder="Your comment"
            onChange={this.handleCommentChange}
            value={comment}
          />
          <button onClick={this.handleSubmit}>{btnCaption}</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
