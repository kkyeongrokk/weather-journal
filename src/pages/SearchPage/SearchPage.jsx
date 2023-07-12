import { useState } from "react";
import * as weatherApi from "../../utilities/weather-api";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

export default function SearchPage() {
  const [formData, setFormData] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const addressData = await weatherApi.searchAddress(formData);
    setAddresses(addressData.results);
    console.log(addresses);
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
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(evt) => {
            setFormData(evt.target.value);
          }}
          placeholder="Address"
        />
        <button type="submit">Search</button>
      </form>
      {addresses.map((a) => (
        <div key={a.place_id}>
          <h3>Address: {a.formatted_address}</h3>
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
        <WeatherCard weather={selectedWeather} address={selectedAddress} />
      ) : (
        <></>
      )}
    </>
  );
}
