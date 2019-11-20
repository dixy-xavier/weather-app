/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
export function* request(url) {
  try {
    const response = yield fetch(url);
    const responseJson = yield response.json();
    if (response.status === 200) {
      return responseJson;
    }
    return responseJson;
  } catch (err) {
    throw new Error(err);
  }
}

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
export const convertTemperature = (temp, scale) => scale === 'celsius' ? (temp - 273.15).toFixed(2) : ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
