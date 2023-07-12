import sendRequest from "./send-request";
const BASE_URL = "/api/weather";

export async function searchAddress(query) {
  return sendRequest(`${BASE_URL}/searchAddress?q=${query}`);
}

export async function getWeather(coordinates) {
  return sendRequest(
    `${BASE_URL}/getWeather?lat=${coordinates.lat}&lon=${coordinates.lon}`
  );
}
