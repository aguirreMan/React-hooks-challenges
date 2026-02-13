import { useState, useEffect } from 'react'

export default function Counter() {
  const [baseNumber, setBaseNumber] = useState(0)

  function incrementCounter() {
    setBaseNumber(prev => prev + 1)
  }

  function decrementCounter() {
    setBaseNumber(prev => prev - 1)
  }

  function resetCounter() {
    setBaseNumber(0)
  }

  useEffect(() => {
    if (baseNumber === 10) {
      const timeOutId = setTimeout(() => {
        setBaseNumber(0)
      }, 3000)
      return () => clearTimeout(timeOutId)

    }
  }, [baseNumber])


  return (
    <div>
      <h1>{baseNumber}</h1>
      {baseNumber === 10 && <p>You hit your limit</p>}
      {baseNumber < 0 && <p>You cant click below 0</p>}
      <button className='m-4 py-4' onClick={incrementCounter} disabled={baseNumber === 10}>Increment</button>
      <button className='m-4 py-4' onClick={decrementCounter} disabled={baseNumber <= 0}>Decrement</button>
      <button className='m-4 py-4' onClick={resetCounter}>Reset</button>
    </div>
  )
}
