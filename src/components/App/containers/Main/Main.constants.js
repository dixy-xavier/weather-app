export const temperatureScales = [
  {
    key: 'celsius',
    label: 'Celsius',
    active: false,
  },
  {
    key: 'fahrenheit',
    label: 'Fahrenheit',
    active: true,
  },
];

/**
 *  url to fetch weather forecasts of the provided location
 */
export const URL = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57';

export const ACTION_GET_WEATHER_FORECAST = 'optile/GET_WEATHER_FORECAST';
export const ACTION_GET_WEATHER_FORECAST_SUCCESS = 'optile/GET_WEATHER_FORECAST_SUCCESS';
export const ACTION_LEAVE_WEATHER_FORECAST = 'optile/LEAVE_WEATHER_FORECAST';
