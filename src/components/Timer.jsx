import { useState, useEffect } from 'react'


export default function Timer() {
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
            <div>
                <h3>{time}</h3>
                <button onClick={startTimer}>start</button>
                <button onClick={pauseTimer}>pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}
