# Weather Widget

A simple weather widget for displaying current weather data across Denmark.

![Screenshot](readme.png?raw=true 'Screenshot')

## How to use the application

### Starting

Add a `.env` file to the root directory with your Open Weather Map API KEY.

For example:

```
WEATHER_API_KEY=YOUR_API_KEY
```

`yarn start` or `npm run start`

### Testing

`yarn test`

Unfortunately, though these are setup and a few tests are written, I didn't have time to throw
together an adequate test suite.

You'll see the coverage report and everything else is all there, but I couldn't get these up and
running and passing during the time allotted - and yeah, my girlfriend is currently hassling me to
go to this food-truck festival in Nørrebro.

### Building

Add a `.env` file to the root directory with your Open Weather Map API KEY.

For example:

```
WEATHER_API_KEY=YOUR_API_KEY
```

`yarn build` or `npm run build`

## Credits

The widget was built on a modified version of this boilerplate: https://github.com/manuelbieh/react-ssr-setup

And uses these free-for-commercial-use icons: https://www.iconfinder.com/iconsets/weather-and-forecast-free
