export default function WeatherDetail({ journal }) {
    return (
        <>
            <h3>{journal.weather.weatherDescription}</h3>
            <ul>
                <li>Date: {journal.weather.date.slice(0, 10)}</li>
                <li>Avg Temp: {journal.weather.avgTemp}</li>
                <li>Max Temp: {journal.weather.maxTemp}</li>
                <li>Min Temp: {journal.weather.minTemp}</li>
                <li>Humidity: {journal.weather.humidity}</li>
            </ul>
        </>
    );
}
