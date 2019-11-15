/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */

export const request = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57';
