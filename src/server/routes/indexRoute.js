// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { DEFAULT_CITY } from '../utils/constants';
import { getCityWeather } from './getCityWeatherRoute';
import Html from '../components/HTML';
import App from '../../shared/App';

//
// Index route
// -----------------------------------------------------------------------

const indexRoute = () => {
  return async (req: express$Request, res: express$Response) => {
    const { city } = req.query;
    if (city === undefined) {
      res.redirect(`/?city=${DEFAULT_CITY}`);
      res.end();
    } else {
      try {
        const state = await getCityWeather(city);
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
      } catch (error) {
        console.log(error);
        return res.send(error.stack);
      }
    }
  };
};

export default indexRoute;
