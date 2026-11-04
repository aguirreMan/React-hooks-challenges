import { useEffect, useState } from 'react'

export default function IntervalCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setCount(count + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return <p>Elapsed seconds: <output>{count}</output></p>
}
