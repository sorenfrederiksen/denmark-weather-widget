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
    } catch (err) {
      throw err;
    }
  };
}

export default getCityListRoute;
