import { call, put, takeLatest } from 'redux-saga/effects';
import { cancelSaga } from '../../../../../utils/utils';
import { getWeatherForecastSuccess } from '../Main.actions';
import { ACTION_GET_WEATHER_FORECAST, ACTION_LEAVE_WEATHER_FORECAST, URL } from '../Main.constants';
import { groupDates, request } from '../Main.utils';

function* getWeatherForecast(action) {
  try {
    const { successCb } = action.payload;
    const response = yield call(request, URL);
    if (response.cod === '200') {
      const dates = groupDates(response.list);
      const dateKeys = Object.keys(dates);
      yield put(getWeatherForecastSuccess({ location: response.city, dates }));
      if (successCb && dateKeys.length) successCb(dateKeys[0]);
    } else {
      const { errorCb } = action.payload;
      if (errorCb) errorCb(response.message);
    }
  } catch (err) {
    const { errorCb } = action.payload;
    if (errorCb) errorCb(err.message);
  }
}

/**
 * Manages watcher lifecycle
 */
export default function* getWeatherForecastSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield takeLatest(ACTION_GET_WEATHER_FORECAST, getWeatherForecast);

  // Suspend execution until component unmounts
  yield takeLatest(ACTION_LEAVE_WEATHER_FORECAST, cancelSaga, watcher);
}
