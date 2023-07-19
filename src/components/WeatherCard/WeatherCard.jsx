export default function WeatherCard({ weather, address }) {
    return (
        <>
            <h3>{address.formatted_address}</h3>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <ul>
                <li>Weather: {weather.weather[0].main}</li>
                <li>Avg Temperature: {weather.main.temp}F</li>
                <li>Max Temperature: {weather.main.temp_max}F</li>
                <li>Min Temperature: {weather.main.temp_min}F</li>
                <li>Humidity: {weather.main.humidity}%</li>
            </ul>
        </>
    );
}
