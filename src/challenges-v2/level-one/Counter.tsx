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
    <div className="flex flex-col items-center gap-4">
      <span className="text-6xl font-bold tabular-nums text-white">{baseNumber}</span>
      {baseNumber === 10 && <p className="text-amber-400 text-sm font-medium">You hit your limit — resetting soon...</p>}
      {baseNumber < 0 && <p className="text-red-400 text-sm font-medium">Can't go below 0</p>}
      <div className="flex gap-3">
        <button
          className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          onClick={incrementCounter}
          disabled={baseNumber === 10}
        >
          Increment
        </button>
        <button
          className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-medium text-white hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          onClick={decrementCounter}
          disabled={baseNumber <= 0}
        >
          Decrement
        </button>
        <button
          className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
