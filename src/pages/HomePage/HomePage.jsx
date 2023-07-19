import { useState } from "react";
import "./HomePage.css";
import * as weatherAPI from "../../utilities/weather-api";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Weather from "../../../models/weather";

export default function HomePage() {
    // const [curLocWeather, setCurLocWeather] = useState(null);
    // async function curLocCoordinates() {
    //     const successCallback = (position) => {
    //         console.log(position);
    //     };

    //     const errorCallback = (error) => {
    //         console.log(error);
    //     };

    //     const currentLocation = navigator.geolocation.getCurrentPosition(
    //         successCallback,
    //         errorCallback
    //     );

    //     const coordinates = {
    //         lat: currentLocation.latitude,
    //         lon: currentLocation.longitude,
    //     };

    //     const addressData = await weatherApi.searchAddress(formData);
    //     setAddresses(addressData.results);

    //     setCurLocWeather(await weatherAPI.getWeather(coordinates));
        
    }

    return (
        <main>
            <h1>Welcome to My Weather Journal!</h1>
            {/* <WeatherCard weather={curLocWeather}  address={}/> */}
        </main>
    );
}
