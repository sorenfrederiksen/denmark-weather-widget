import React from 'react';
import { shallow } from 'enzyme';
import WeatherWidget from './index';

describe('(Component) WeatherWidget', () => {
  let wrapper;

  const props = {};

  beforeEach(() => {
    wrapper = shallow(<WeatherWidget {...props} />);
  });

  it('should match snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
