import { useState } from 'react'
export default function CharacterCounter() {
  const maxLength = 20
  const [inputValue, setInputValue] = useState('')

  const remainingCharacters = maxLength - inputValue.length

  function updateCharacterChange(event) {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={updateCharacterChange}
        maxLength={maxLength}
      />
      <h1>{inputValue.length}</h1>
      <p style={{ color: remainingCharacters <= 5 ? 'red' : 'white' }}>
        {remainingCharacters} character{remainingCharacters !== 1 ? 's' : ''} remain
      </p>

      {inputValue.length === maxLength && (
        <p>You hit the maximum number of characters</p>
      )}
    </div>
  )
}
