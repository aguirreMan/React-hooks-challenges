import { useState, useEffect } from 'react '

export default function Weather() {
    const [city, setCity] = useState('')
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
            fakeRequest
                .then(data => {
                    setCity(data.city)
                    setWeather(data)
                })
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        })
    }, [])

    function changeCity(event) {
        setCity(event.target.value)
    }

    return (
        <div className='weather'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <input type='text' value={city} placeholder='search city' onChange={changeCity} />
            <span>
                {weather && (
                    <div>
                        <p>city: {weather.city}</p>
                        <p>weather : {weather.weather}</p>
                        <p>condition: {weather.condition}</p>
                    </div>
                )}
            </span>
        </div>
    )
}
