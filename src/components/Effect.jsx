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
    return (
        <div style={{ padding: '20px' }}>
            <h2>Useeffect demo</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
