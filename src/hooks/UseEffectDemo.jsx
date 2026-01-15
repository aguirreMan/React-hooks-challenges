import { useState, useEffect } from 'react'

export default function UseEffectDemo() {
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
        <div>
            <h2>useEffect Demo</h2>
            <p>Count: {count}</p>
            <button
                onClick={() => setCount(c => c + 1)}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
                Increment
            </button>
            <button
                onClick={() => setCount(c => c - 1)}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
                Decrement
            </button>
        </div>
    )
}
