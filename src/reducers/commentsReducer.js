import * as actions from '../actions/types';

const initialState = () => {
  return JSON.parse(localStorage.getItem('comments')) || [];
};
export default (state = initialState(), action) => {
  switch (action.type) {
    case actions.ADD_COMMENT:
      return [...state, action.payload];

    case actions.DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.payload);

    case actions.EDIT_COMMENT:
      return state.map((comment, index) => {
        if (index !== action.payload.index) return comment;
        return {
          ...comment,
          username: action.payload.username,
          comment: action.payload.comment
        };
      });
    default:
      return state;
  }
};
