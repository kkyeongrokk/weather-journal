import sendRequest from "./send-request";
const BASE_URL = "/api/journals";

export async function createJournal(body) {
    return sendRequest(BASE_URL, "POST", body);
}

export async function getUsersJournals() {
    return sendRequest(BASE_URL);
}

export async function deleteJournal(journalId) {
    return sendRequest(`${BASE_URL}/${journalId}/delete`, "DELETE");
}

export async function updateJournal(journalId, body) {
    return sendRequest(`${BASE_URL}/${journalId}`, "PUT", body);
}
