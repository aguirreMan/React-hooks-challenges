import { useState, useEffect } from 'react'

export default function Weather() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        const fakeRequest = new Promise((resolve) => {
            setTimeout(() => {
                resolve({ city: 'New York', weather: 60, condition: 'windy' })
            }, 2000)
        })

        fakeRequest
            .then(data => setWeather(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className='weather'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <span>
                {weather && (
                    <div>
                        <p>City: {weather.city}</p>
                        <p>Weather: {weather.weather}</p>
                        <p>Condition: {weather.condition}</p>
                    </div>
                )}
            </span>
        </div>
    )
}