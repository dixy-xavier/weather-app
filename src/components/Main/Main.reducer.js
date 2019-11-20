import { ACTION_GET_WEATHER_FORECAST_SUCCESS, ACTION_LEAVE_WEATHER_FORECAST } from './Main.constants';

const initialState = {
  location: {},
  dates: {},
};

function mainApp(state = initialState, action = {}) {
  const { type = '', payload = {} } = action;
  switch (type) {
    case ACTION_GET_WEATHER_FORECAST_SUCCESS:
      return { location: payload.location, dates: payload.dates };
    case ACTION_LEAVE_WEATHER_FORECAST:
      return { location: {}, dates: {} };
    default:
      return state
  }
}

export default mainApp;
