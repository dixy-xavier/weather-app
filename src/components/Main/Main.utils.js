/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
export const request = async url => {
  const response = await fetch(url);
  return await response.json();
};

/**
 *  url to fetch weather forecasts of the provided location
 */
export const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57';

/**
 *  This function takes list of weather forecast and
 *  group them according to dates
 */
export const groupDates = list => list.reduce((acc, item) => {
  const currentDate = getStartTime(item.dt);
  return { ...acc, [currentDate]: acc[currentDate] ? [...acc[currentDate], item] : [item] };
}, {});

/**
 *  This function takes date and returns the start
 *  time of the same date
 */
export const getStartTime = date => Date.parse(new Date(date * 1000).toDateString());

/**
 *  This function takes temperature in F and converts it to C
 */
export const convertTemperature = (temp, scale) => (scale === 'celsius' ? (temp - 273.15) : ((temp - 273.15) * (9 / 5) + 32)).toFixed(2);
