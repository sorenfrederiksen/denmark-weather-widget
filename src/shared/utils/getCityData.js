import { get } from 'axios';

export default async function getCityData(city) {
  // This URL would obviously be set by other means; running locally, as '/get-city-list', with
  // this boilerplate works, but throws an ungainly error.
  const { data } = await get(`http://localhost:8500/get-city-weather/${city}`);
  // I realise this looks ridiculous, and it is, but I've got to get out of here. Minor bug
  // to be resolved on the backend
  if (!Object.prototype.hasOwnProperty.call(data, 'windDirection')) {
    data.windDirection = undefined;
  }
  return data;
}
