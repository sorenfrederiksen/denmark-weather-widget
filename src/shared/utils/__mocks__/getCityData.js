const dummyDataSetOne = {
  city: 'Copenhagen',
  type: 'Mist',
  description: 'mist',
  temp: 10.24,
  tempMin: 8.89,
  tempMax: 11.67,
  humidity: 81,
  windSpeed: 6.7,
  windDirection: 280,
};

const dummyDataSetTwo = {
  city: 'Arhus',
  type: 'Clouds',
  description: 'broken clouds',
  temp: 11.55,
  tempMin: 10,
  tempMax: 13.89,
  humidity: 87,
  windSpeed: 7.2,
  windDirection: 270,
};

export default async function getCityData(city) {
  let data;
  if (city === 'Copenhagen') {
    data = dummyDataSetOne;
  } else if (city === 'Arhus') {
    data = dummyDataSetTwo;
  } else {
    data = Object.assign({}, dummyDataSetOne);
    data.city = city;
  }
  return await new Promise((resolve) => resolve(data));
}
