import { useState, useEffect } from 'react'

export default function Effect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('NO array runs on every render')
    })

    useEffect(() => {
        console.log('empty array runs only on first render')
    }, [])

    useEffect(() => {
        console.log('count array runs only when count changes')
    }, [count])
    //Challenge 2
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)

        }
    }, [])

    //challenge 3
    const [input, setInput] = useState('')
    const [upperCase, setUpperCase] = useState('')

    useEffect(() => {
        if (input.length > 3) {
            setUpperCase(input.toUpperCase())
        } else {
            setUpperCase(input)
        }
    }, [input])

    function clearInput() {
        setInput('')
    }

    //challenge 4 useeffect simulating api calls
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        const fetchFake = new Promise((resolve) => {
            setTimeout(() => {
                resolve(['apples', 'oranges', 'strawberries'])

            }, 2000)
        })
        fetchFake
            .then(fruits => setData(fruits))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])



    return (
        <div style={{ padding: '20px' }}>
            <h2>Useeffect demo</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <div className='challenge-2'>
                <h1>UseEffect with a interval</h1>
                <div>
                    <button>{timer}</button>
                </div>
            </div>
            <div className='challenge-3'>
                <input type='text' value={input} onChange={event => setInput(event.target.value)} />
                <p>Uppercase: {upperCase}</p>
                <button onClick={clearInput}>Clear</button>
            </div>
            <div className='challenge-4'>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ul>
                    {data.map((fruit, index) => <li key={index}>{fruit}</li>)}
                </ul>
            </div>
        </div>
    )
}
