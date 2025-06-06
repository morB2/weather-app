
const weatherCard = (name, description, temp, like_feels, humidity) => {
    return (
        <div className="weather-card">
            <h1 className="weather-card-title">{name}</h1>
            <p className="weather-card-description">{description}</p>
            <table className="weather-card-table">
                <tbody>
                    <tr>
                        <td className="weather-card-label">טמפ' נמדדת</td>
                        <td className="weather-card-value">{temp}°C</td>
                    </tr>
                    <tr>
                        <td className="weather-card-label">טמפ' מורגשת</td>
                        <td className="weather-card-value">{like_feels}°C</td>
                    </tr>
                    <tr>
                        <td className="weather-card-label">לחות</td>
                        <td className="weather-card-value">{humidity}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}