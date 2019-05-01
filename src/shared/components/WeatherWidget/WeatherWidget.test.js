import React from 'react';
import { shallow } from 'enzyme';
import WeatherWidget from './index';
import styles from './WeatherWidget.module.css';

jest.mock('../../utils/getCityData');
jest.mock('../../utils/getCityList');

describe('(Component) WeatherWidget', () => {
  let wrapper;

  const props = {
    city: 'Arhus',
    type: 'Clouds',
    description: 'broken clouds',
    temp: 11.46,
    tempMin: 10,
    tempMax: 12.78,
    humidity: 87,
    windSpeed: 7.2,
    windDirection: 270,
  };

  beforeEach(() => {
    wrapper = shallow(<WeatherWidget {...props} />);
  });

  it('should match snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch new data, change state and display when changing city', () => {
    wrapper.instance().onChangeCity('Skagen');
    setTimeout(() => {
      expect(wrapper.state().city).toBe('Skagen');
      expect(wrapper.find(styles.weatherWidget__header__label).text()).toBe('Skagen');
    });
  });

  it('should setup city list on mounting', () => {
    const dummyCityListLength = 6;
    setTimeout(() => {
      expect(wrapper.state().cityList.length).toBe(dummyCityListLength);
    });
  });
});
