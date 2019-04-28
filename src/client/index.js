import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

// const browserHistory = createHistory();
const state = window.state || window.__PRELOADED_STATE__;

//
// Component
// --------------------------------------------------------------------

hydrate(<App {...state} />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
