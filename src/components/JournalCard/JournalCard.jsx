export default function JournalCard({ journal }) {
    return (
        <div>
            <h2>{journal.weather.location}</h2>
            <ul>
                <li>Date: {journal.weather.date}</li>
                <li>Avg Temp: {journal.weather.avgTemp}</li>
                <li>Max Temp: {journal.weather.maxTemp}</li>
                <li>Min Temp: {journal.weather.minTemp}</li>
                <li>Humidity: {journal.weather.humidity}</li>
            </ul>
        </div>
    );
}
