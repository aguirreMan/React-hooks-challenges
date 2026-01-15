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
        <div>
            <h1>Mini timer project</h1>
            <div className='flex flex-row gap-5'>
                <h3>{time}</h3>
                <button className='bg-green-700 px-4' onClick={startTimer}>start</button>
                <button className='bg-green-700 px-4' onClick={pauseTimer}>pause</button>
                <button className='bg-green-700 px-4' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}
