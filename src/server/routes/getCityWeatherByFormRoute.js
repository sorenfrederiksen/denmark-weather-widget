// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { DEFAULT_CITY } from '../utils/constants';
import { getCityWeather } from './getCityWeatherRoute';
import Html from '../components/HTML';
import App from '../../shared/App';

//
// Get city weather by form route
// -----------------------------------------------------------------------

const getCityWeatherByFormRoute = () => {
  return async (req: express$Request, res: express$Response) => {
    const { city } = req.body;
    const targetCity = city || DEFAULT_CITY;
    res.redirect(`/?city=${encodeURIComponent(targetCity)}`);
  };
};

export default getCityWeatherByFormRoute;
