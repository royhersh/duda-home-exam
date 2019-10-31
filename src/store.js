import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const saveStateToLocalStorage = store => next => action => {
  next(action);
  const { comments } = store.getState();
  localStorage.setItem('comments', JSON.stringify(comments));
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk, saveStateToLocalStorage))
  );
