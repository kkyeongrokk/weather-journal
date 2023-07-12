import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
