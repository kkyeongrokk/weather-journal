import { useState } from "react";
import * as journalsAPI from "../../utilities/journals-api";

export default function JournalCard({ journal, setAllUserJournals }) {
    const [isEdit, setIsEdit] = useState(false);
    const [updateJournal, setUpdateJournal] = useState(journal.journal);

    async function handleDeleteJournal(journalId) {
        const usersJournals = await journalsAPI.deleteJournal(journalId);
        setAllUserJournals(usersJournals);
    }

    async function handleSubmitPost(evt) {
        evt.preventDefault();
        const body = {
            journal: updateJournal,
        };

        const allUserJournals = await journalsAPI.updateJournal(
            journal._id,
            body
        );
        setAllUserJournals(allUserJournals);
        setIsEdit(!isEdit);
    }

    return (
        <div>
            <h2>{journal.weather.location}</h2>
            {isEdit ? (
                <form className="JournalForm" onSubmit={handleSubmitPost}>
                    <input
                        onChange={(evt) => {
                            setUpdateJournal(evt.target.value);
                        }}
                        value={updateJournal}
                        type="text"
                        placeholder="Update your journal"
                        required
                        minLength={6}
                    />
                    <button type="submit">Update</button>
                </form>
            ) : (
                <h5>{journal.journal}</h5>
            )}
            <ul>
                <li>Date: {journal.weather.date}</li>
                <li>Avg Temp: {journal.weather.avgTemp}</li>
                <li>Max Temp: {journal.weather.maxTemp}</li>
                <li>Min Temp: {journal.weather.minTemp}</li>
                <li>Humidity: {journal.weather.humidity}</li>
            </ul>
            <button onClick={() => handleDeleteJournal(journal._id)}>
                Delete
            </button>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        </div>
    );
}
