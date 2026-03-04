import { useState, useRef } from 'react'

export default function UseRefDemo() {
  const [count, setCount] = useState(0)
   const countRef = useRef(0)

  //console.log("Component render - count:", count)

  function incrementCount() {
    setCount(prev => prev + 1)
    countRef.current++
    console.log(countRef.current)
    //console.log(count)
  }


  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={incrementCount}>Incrmement</button>
    </div>
  )
}
