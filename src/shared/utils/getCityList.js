import { get } from 'axios';

export default async function getCityList() {
  const { data } = await get('http://localhost:8500/get-city-list');
  return data;
}
