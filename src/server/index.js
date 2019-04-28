import express from 'express';
import cors from 'cors';
import path from 'path';
import chalk from 'chalk';
import manifestHelpers from './middleware/manifest-helpers';
import bodyParser from 'body-parser';
import indexRoute from './routes/indexRoute';
import getCityWeatherRoute from './routes/getCityWeatherRoute';
import getCityListRoute from './routes/getCityListRoute';
import getCityWeatherByFormRoute from './routes/getCityWeatherByFormRoute';
import paths from '../../config/paths';

require('dotenv').config();

const app = express();

//
// Middleware
// --------------------------------------------------------------------

app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
app.use('/favicon.ico', (req, res) => {
  res.send('');
});
app.use(cors());
app.use(bodyParser.json());
const manifestPath = path.join(paths.clientBuild, paths.publicPath);
app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`,
  })
);

//
// Routes
// --------------------------------------------------------------------

app.get('/', indexRoute());
app.get('/get-city-weather/:city', getCityWeatherRoute());
app.get('/get-city-list', getCityListRoute());
app.post('/get-city-weather-by-form', express.urlencoded(), getCityWeatherByFormRoute());

//
// Errors
// --------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { message, stack } = err;
  return res.status(404).json({
    status: 'error',
    message,
    stack:
      // print a nicer stack trace by splitting line breaks and making them array items
      process.env.NODE_ENV === 'development' &&
      (stack || '')
        .split('\n')
        .map((line) => line.trim())
        .map((line) => line.split(path.sep).join('/'))
        .map((line) =>
          line.replace(
            process
              .cwd()
              .split(path.sep)
              .join('/'),
            '.'
          )
        ),
  });
});

//
// Listen
// --------------------------------------------------------------------

app.listen(process.env.PORT || 8500, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`Weather widget is running 📺: ${process.env.HOST || 'http://localhost'}:${process.env.PORT || 8500}`)
  );
});

export default app;
