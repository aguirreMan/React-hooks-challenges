import { useState, useEffect } from 'react'

export default function WeatherChallenge() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fakeRequest = new Promise(resolve => {
            setTimeout(() => {
                resolve({ city: 'New York', weather: 60, condition: 'windy' })
            }, 2000)
        })

        fakeRequest.then(data => {
            setWeather(data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <h2>Weather</h2>

            {loading && <p>Loading...</p>}

            {weather && (
                <>
                    <p>City: {weather.city}</p>
                    <p>Temp: {weather.weather}</p>
                    <p>Condition: {weather.condition}</p>
                </>
            )}
        </div>
    )
}
