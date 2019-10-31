import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import generateStore from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

const store = generateStore();

// eslint-disable-next-line import/prefer-default-export
export const ConnectedApp = ({ testingStore }) => (
  <>
    <CssBaseline />
    <Provider store={testingStore || store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </>
);

const $root = document.getElementById('root');
if ($root !== null) {
  ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
}
