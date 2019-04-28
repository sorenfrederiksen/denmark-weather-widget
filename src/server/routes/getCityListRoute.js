// @flow

import cityList from '../../shared/assets/data/cityList.json';

//
// Get city list
// -----------------------------------------------------------------------------

export function getCityListRoute() {
  return async (req: express$Request, res: express$Response) => {
    try {
      res.send(cityList);
      res.end();
    } catch (error) {
      console.log(`[ERR] Get city list route: ${error.toString()}`);
      return res.send('There was an error (see logs).');
    }
  };
}

export default getCityListRoute;
