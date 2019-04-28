import dotenv from 'dotenv';

dotenv.config();

export const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'You need to add an `.env` with the weather API key';
export const DEFAULT_CITY = 'Copenhagen';

export default {
  WEATHER_API_KEY,
  DEFAULT_CITY,
};
