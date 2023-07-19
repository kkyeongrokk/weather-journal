import { useState } from "react";
import * as journalsAPI from "../../utilities/journals-api";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

import "./JournalCard.css";

export default function JournalCard({ journal, setAllUserJournals }) {
    const [isEdit, setIsEdit] = useState(false);
    const [updateJournal, setUpdateJournal] = useState(journal.journal);
    const [dropdown, setDropdown] = useState(false);

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
        <div className="JournalCard">
            <h2>
                <strong>{journal.weather.location}</strong>
            </h2>
            {isEdit ? (
                <form onSubmit={handleSubmitPost}>
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
                <h4>{journal.journal}</h4>
            )}
            <img
                src={`http://openweathermap.org/img/wn/${journal.weather.icon}@2x.png`}
            />
            {dropdown ? <WeatherDetail journal={journal} /> : <></>}
            <button onClick={() => setDropdown(!dropdown)}>Detail</button>
            <button onClick={() => handleDeleteJournal(journal._id)}>
                Delete
            </button>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        </div>
    );
}
