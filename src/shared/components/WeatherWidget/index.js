// @flow
import React, { Component } from 'react';
import { get } from 'axios';
import styles from './WeatherWidget.module.css';
import WeatherImage from '../WeatherImage';
import Autocomplete from '../Autocomplete';
import cityList from '../../assets/data/cityList.json';
import { ReactComponent as WindDirectionIndicator } from '../../assets/images/WindDirectionIndicator.svg';

//
// Types
// --------------------------------------------------------------------

export type WeatherWidgetProps = {
  city: string,
  type: string,
  description: string,
  temp: number,
  tempMin: number,
  tempMax: number,
  humidity: number,
  windSpeed: number,
  windDirection: number,
};

type State = {
  cityList: Array<string>,
};

type BodyListItemProps = {
  label: string,
  value: string,
};

type WindSpeedIndicatorProps = {
  windSpeed: number,
  windowDirection?: number,
};

//
// Helpers
// --------------------------------------------------------------------

const BodyListItem = ({ label, value }: BodyListItemProps) => (
  <li className={styles.weatherWidget__body__list__item}>
    <span className={styles.weatherWidget__body__list__item__label}>{label}</span>
    <span className={styles.weatherWidget__body__list__item__value}>{value}</span>
  </li>
);

const WindSpeedIndicator = ({ windSpeed, windDirection }: WindSpeedIndicatorProps) => (
  <span>
    <span className={styles.weatherWidget__body__list__item__weatherSpeed}>{`${windSpeed} m/s`}</span>
    {windDirection !== undefined ? (
      <span
        className={styles.weatherWidget__body__list__item__weatherDirection}
        style={{
          transform: `rotate(${windDirection}deg)`,
        }}
      >
        <WindDirectionIndicator />
      </span>
    ) : null}
  </span>
);

const setUrlForCity = (city) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const { title } = document;
    const { origin } = window.location;
    const newUrl = `${origin}?city=${city}`;
    window.history.replaceState({}, document.title, newUrl);
  }
};

//
// Component
// --------------------------------------------------------------------

class WeatherWidget extends Component<WeatherWidgetProps, State> {
  constructor(props: WeatherWidgetProps) {
    super(props);
    const { city, type, description, temp, tempMin, tempMax, humidity, windSpeed, windDirection } = props;

    this.state = { ...props, cityList: [] };
  }

  getCityList = async () => {
    try {
      const { data } = await get('http://localhost:8500/get-city-list');
      this.setState({ cityList: data });
    } catch (error) {
      throw error;
    }
  };

  getCityData = async (city) => {
    try {
      const { data } = await get(`http://localhost:8500/get-city-weather/${city}`);
      // I realise this looks ridiculous, and it is, but I've got to get out of here. Minor bug
      // to be resolved on the backend
      if (!Object.prototype.hasOwnProperty.call(data, 'windDirection')) {
        data.windDirection = undefined;
      }
      this.setState({ ...data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  onChangeCity = (newCity) => {
    this.getCityData(newCity);
    setUrlForCity(newCity);
  };

  componentDidMount() {
    this.getCityList();
  }

  render() {
    const {
      city,
      type,
      description,
      temp,
      tempMin,
      tempMax,
      humidity,
      windSpeed,
      windDirection,
      cityList,
    } = this.state;
    return (
      <div className={styles.weatherWidget}>
        <header className={styles.weatherWidget__header}>
          <div className={styles.weatherWidget__header__label}>Vejret</div>
          <div className={styles.weatherWidget__header__search}>
            <Autocomplete
              elementId="weather-widget-search"
              initialText={city}
              placeholderText="Enter a Danish city's name"
              options={cityList}
              onChangeValue={this.onChangeCity}
            />
          </div>
        </header>
        <div className={styles.weatherWidget__body}>
          <div className={styles.weatherWidget__body__icon}>
            <WeatherImage type={type} />
          </div>
          <ul className={styles.weatherWidget__body__list}>
            <BodyListItem label="Temperature" value={`${Math.round(temp)}°`} />
            <BodyListItem label="Humidity" value={`${humidity}%`} />
            <BodyListItem
              label="Wind"
              value={<WindSpeedIndicator windSpeed={windSpeed} windDirection={windDirection} />}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
