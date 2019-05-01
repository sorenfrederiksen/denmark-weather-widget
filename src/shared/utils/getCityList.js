import { get } from 'axios';

export default async function getCityList() {
  // This URL would obviously be set by other means; running locally, as '/get-city-list', with
  // this boilerplate works, but throws an ungainly error.
  const { data } = await get('http://localhost:8500/get-city-list');
  return data;
}
