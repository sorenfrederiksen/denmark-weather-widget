import React from 'react';
import { shallow } from 'enzyme';
import WeatherImage from './index';
import { ReactComponent as Ash } from '../../assets/images/Ash.svg';
import { ReactComponent as Clear } from '../../assets/images/Clear.svg';
import { ReactComponent as Clouds } from '../../assets/images/Clouds.svg';
import { ReactComponent as Drizzle } from '../../assets/images/Drizzle.svg';
import { ReactComponent as Dust } from '../../assets/images/Dust.svg';
import { ReactComponent as Fog } from '../../assets/images/Fog.svg';
import { ReactComponent as Haze } from '../../assets/images/Haze.svg';
import { ReactComponent as Mist } from '../../assets/images/Mist.svg';
import { ReactComponent as Rain } from '../../assets/images/Rain.svg';
import { ReactComponent as Sand } from '../../assets/images/Sand.svg';
import { ReactComponent as Smoke } from '../../assets/images/Smoke.svg';
import { ReactComponent as Snow } from '../../assets/images/Snow.svg';
import { ReactComponent as Squall } from '../../assets/images/Squall.svg';
import { ReactComponent as Thunderstorm } from '../../assets/images/Thunderstorm.svg';
import { ReactComponent as Tornado } from '../../assets/images/Tornado.svg';

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
