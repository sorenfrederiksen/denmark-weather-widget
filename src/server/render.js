import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Html from '../components/HTML';
import App from '../../shared/App';

//
// Server renderer
// --------------------------------------------------------------------

const serverRenderer = () => (req, res) => {
  const city = req.query.q === undefined ? 'Copenhagen' : req.query.q;
  const state = { city };
  const content = renderToString(
    <Router location={req.url} context={{}}>
      <App {...state} />
    </Router>
  );

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
          scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
          state={state}
        >
          {content}
        </Html>
      )
  );
};

export default serverRenderer;
