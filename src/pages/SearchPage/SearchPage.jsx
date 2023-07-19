import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as weatherApi from "../../utilities/weather-api";
import * as journalsApi from "../../utilities/journals-api";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./SearchPage.css";

export default function SearchPage({ setAllUserJournals }) {
    const [formData, setFormData] = useState("");
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [selectedWeather, setSelectedWeather] = useState(null);
    const [journal, setJournal] = useState("");
    const navigate = useNavigate();

    async function handleSubmitCity(evt) {
        evt.preventDefault();
        const addressData = await weatherApi.searchAddress(formData);
        setAddresses(addressData.results);
    }

    async function getWeatherData(address) {
        setSelectedAddress(address);
        const coordinates = {
            lat: address.geometry.location.lat,
            lon: address.geometry.location.lng,
        };

        // wipe out addresses
        setAddresses([]);
        setSelectedWeather(await weatherApi.getWeather(coordinates));
        console.log(await selectedWeather);
    }

    async function handleSubmitPost(evt) {
        evt.preventDefault();
        const body = {
            weather: {
                location: selectedAddress.formatted_address,
                lat: selectedAddress.geometry.location.lat,
                lon: selectedAddress.geometry.location.lng,
                weatherDescription: selectedWeather.weather[0].description,
                avgTemp: selectedWeather.main.temp,
                maxTemp: selectedWeather.main.temp_max,
                minTemp: selectedWeather.main.temp_min,
                humidity: selectedWeather.main.humidity,
                icon: selectedWeather.weather[0].icon,
            },
            journal: {
                journal: journal,
            },
        };

        console.log(body.weather.icon);

        const allUserJournals = await journalsApi.createJournal(body);
        setAllUserJournals(allUserJournals);
        navigate("/journal");
    }

    return (
        <main className="SearchPage">
            <form
                className="SearchCity SearchPageEls"
                onSubmit={handleSubmitCity}
            >
                <label>Enter Address: </label>
                <div>
                    <input
                        type="text"
                        onChange={(evt) => {
                            setFormData(evt.target.value);
                        }}
                        placeholder="Address"
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
            {addresses.map((a) => (
                <div className="SearchPageEls" key={a.place_id}>
                    <h3>{a.formatted_address}</h3>
                    <button
                        onClick={() => {
                            getWeatherData(a);
                        }}
                    >
                        Select Address
                    </button>
                </div>
            ))}

            {selectedAddress && selectedWeather ? (
                <div className="SearchPageEls">
                    <WeatherCard
                        weather={selectedWeather}
                        address={selectedAddress}
                    />
                    <form className="JournalForm" onSubmit={handleSubmitPost}>
                        <textarea
                            onChange={(evt) => {
                                setJournal(evt.target.value);
                            }}
                            rows="4"
                            cols="50"
                            value={journal}
                            placeholder="Write your journal"
                            required
                            minLength={6}
                        />
                        <button type="submit">Post</button>
                    </form>
                </div>
            ) : (
                <></>
            )}
        </main>
    );
}
