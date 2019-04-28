// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import WeatherWidget from './components/WeatherWidget';
import SvgIcons from './components/SvgIcons';
import styles from './App.module.css';
import type WeatherWidgetProps from './components/WeatherWidget';

const App = (props: WeatherWidgetProps) => {
  return (
    <div className={styles.app}>
      <Helmet defaultTitle="TV2 Weather" titleTemplate="%s – TV2 Weather" />
      <SvgIcons />
      <WeatherWidget {...props} />
    </div>
  );
};

export default App;
