// @flow

import React from 'react';
import { DEFAULT_CITY } from '../utils/constants';

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
