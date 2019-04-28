// @flow

import React from 'react';
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

type Props = {
  type: string,
};

//
// Component
// --------------------------------------------------------------------

const WeatherImage = ({ type }: Props) => {
  switch (type) {
    case 'Ash':
      return <Ash />;
    case 'Clear':
      return <Clear />;
    case 'Clouds':
      return <Clouds />;
    case 'Drizzle':
      return <Drizzle />;
    case 'Dust':
      return <Dust />;
    case 'Fog':
      return <Fog />;
    case 'Haze':
      return <Haze />;
    case 'Mist':
      return <Mist />;
    case 'Rain':
      return <Rain />;
    case 'Sand':
      return <Sand />;
    case 'Smoke':
      return <Smoke />;
    case 'Snow':
      return <Snow />;
    case 'Squall':
      return <Squall />;
    case 'Thunderstorm':
      return <Thunderstorm />;
    case 'Tornado':
      return <Tornado />;
    default:
      return <Clear />;
  }
};

export default WeatherImage;
