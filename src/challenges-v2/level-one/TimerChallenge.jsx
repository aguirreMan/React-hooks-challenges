import { useState, useEffect } from 'react'


export default function TimerChallenge() {
    const [time, setTime] = useState(0)
    const [isRunning, setisRunning] = useState(false)

    useEffect(() => {
        let intervalId
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [isRunning])

    function startTimer() {
        setisRunning(true)
    }

    function pauseTimer() {
        setisRunning(false)
    }

    function resetTimer() {
        setisRunning(false)
        setTime(0)
    }


    return (
        <div className="flex flex-col gap-5">
            <span className="text-6xl font-bold tabular-nums text-white">{time}<span className="ml-2 text-xl font-normal text-slate-400">s</span></span>
            <div className='flex gap-3'>
                <button
                  className="rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-500 transition-colors"
                  onClick={startTimer}
                >
                  Start
                </button>
                <button
                  className="rounded-lg bg-amber-600 px-5 py-2 text-sm font-medium text-white hover:bg-amber-500 transition-colors"
                  onClick={pauseTimer}
                >
                  Pause
                </button>
                <button
                  className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
                  onClick={resetTimer}
                >
                  Reset
                </button>
            </div>
        </div>
    )
}
