import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
