import * as actions from './types';
import imgGen from '@dudadev/random-img';
// imgGen().then(avatarURL => {...});

export const addComment = (username, comment) => async dispatch => {
  const avatarURL = await imgGen();
  dispatch({
    type: actions.ADD_COMMENT,
    payload: {
      username,
      comment,
      avatarURL
    }
  });
};

export const deleteComment = index => {
  return {
    type: actions.DELETE_COMMENT,
    payload: index
  };
};

export const edit = (index, username, comment) => {
  return {
    type: actions.ADD_COMMENT,
    payload: {
      index,
      username,
      comment
    }
  };
};
