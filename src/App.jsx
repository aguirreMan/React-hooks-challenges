import { useState } from 'react'
import Effect from './components/effect'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hello')
  const [inputValue, setInputValue] = useState('')
  const [displayValue, setDisplayValue] = useState([])

  function handleMessageChange() {
    setMessage(message === 'hello' ? 'goodbye' : 'hello')
  }

  function handleDisplayChange() {
    setDisplayValue([...displayValue, inputValue])
    setInputValue('')
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 2)}>
          +2
        </button>
        <button onClick={() => setCount((count) => count - 2)}>
          -2
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className='challenge-2'>
        <button onClick={() => setMessage(handleMessageChange)}>{message}</button>
      </div>
      <div className='challenge-3'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleDisplayChange()}>Add to list</button>
        <button onClick={() => setDisplayValue([])}>Clear list</button>
      </div>
      <ul>
        {displayValue.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <Effect />
    </>
  )
}

export default App
