// @flow
import { get } from 'axios';
import { WEATHER_API_KEY } from '../utils/constants';

//
// Helpers
// -----------------------------------------------------------------------------

function makeApiRequestUrl(city: string) {
  const encodedCity = encodeURIComponent(city);
  return `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity},dk&appid=${WEATHER_API_KEY}&units=metric`;
}

function simplifyWeatherData(weatherData) {
  // Get required data
  const { weather, main, wind, name } = weatherData;
  let type;
  let description;

  if (weather.length > 0) {
    type = weather[0].main;
    description = weather[0].description;
  }
  // eslint-disable-next-line camelcase
  const { temp, temp_min, temp_max, humidity } = main;
  const { speed, deg } = wind;
  // Simplify
  return {
    city: name,
    type,
    description,
    temp,
    tempMin: temp_min,
    tempMax: temp_max,
    humidity,
    windSpeed: speed,
    windDirection: deg || undefined,
  };
}

export async function getCityWeather(city: string) {
  try {
    const { data } = await get(makeApiRequestUrl(city));
    const simplifiedData = simplifyWeatherData(data);
    return simplifiedData;
  } catch (error) {
    return error;
  }
}

//
// Get city weather route
// -----------------------------------------------------------------------------

export function getCityWeatherRoute() {
  return async (req: express$Request, res: express$Response) => {
    const { city } = req.params;
    try {
      const cityWeather = await getCityWeather(city);
      res.send(cityWeather);
      res.end();
    } catch (error) {
      res.send(error);
      return error;
    }
  };
}

export default getCityWeatherRoute;
