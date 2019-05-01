import React from 'react';
import { shallow } from 'enzyme';
import WeatherImage from './index';

describe('(Component) WeatherImage', () => {
  let wrapper;

  const props = {
    type: 'Clear',
  };

  beforeEach(() => {
    wrapper = shallow(<WeatherImage {...props} />);
  });

  it('should match snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
