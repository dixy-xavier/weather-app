import {
  ACTION_GET_WEATHER_FORECAST,
  ACTION_GET_WEATHER_FORECAST_SUCCESS,
  ACTION_LEAVE_WEATHER_FORECAST,
} from './Main.constants';

export const getWeatherForecast = payload => ({ type: ACTION_GET_WEATHER_FORECAST, payload });
export const getWeatherForecastSuccess = payload => ({ type: ACTION_GET_WEATHER_FORECAST_SUCCESS, payload });

export const leaveWeatherForecast = () => ({ type: ACTION_LEAVE_WEATHER_FORECAST });
