import * as actions from './types';

export const populateItems = items => ({
  type: actions.FETCH_DATA,
  payload: items
});
