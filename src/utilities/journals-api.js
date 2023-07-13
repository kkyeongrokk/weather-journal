import sendRequest from "./send-request";
const BASE_URL = "/api/journals";

export async function createJournal() {
  return sendRequest(`${BASE_URL}/createJournal?`);
}
