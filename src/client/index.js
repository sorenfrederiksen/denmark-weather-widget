import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../shared/App';
import createHistory from '../shared/utils/history';

const browserHistory = createHistory();
const state = window.state || window.__PRELOADED_STATE__;

//
// Component
// --------------------------------------------------------------------

hydrate(
  <Router history={browserHistory}>
    <App {...state} />
  </Router>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
