import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import * as journalsAPI from "../../utilities/journals-api";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";
import JournalPage from "../JournalPage/JournalPage";

export default function App() {
    const [user, setUser] = useState(getUser());
    const [allUserJournals, setAllUserJournals] = useState([]);

    useEffect(() => {
        if (!user) {
            setAllUserJournals([]);
            return;
        }
        async function getJournals() {
            const journals = await journalsAPI.getUsersJournals();
            setAllUserJournals(journals);
        }

        getJournals();
    }, [user]);

    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage setUser={setUser} />} />
                <Route
                    path="/search"
                    element={
                        <SearchPage setAllUserJournals={setAllUserJournals} />
                    }
                />
                <Route
                    path="/journal"
                    element={
                        <JournalPage
                            allUserJournals={allUserJournals}
                            user={user}
                        />
                    }
                />
            </Routes>
            <footer>&copy;</footer>
        </>
    );
}
