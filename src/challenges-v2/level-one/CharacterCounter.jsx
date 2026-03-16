import { useState } from 'react'
export default function CharacterCounter() {
  const maxLength = 20
  const [inputValue, setInputValue] = useState('')

  const remainingCharacters = maxLength - inputValue.length

  function updateCharacterChange(event) {
    setInputValue(event.target.value)
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        value={inputValue}
        onChange={updateCharacterChange}
        maxLength={maxLength}
        placeholder="Type something..."
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold tabular-nums text-white">{inputValue.length}</span>
        <span className={`text-sm font-medium ${remainingCharacters <= 5 ? 'text-red-400' : 'text-slate-400'}`}>
          {remainingCharacters} character{remainingCharacters !== 1 ? 's' : ''} remaining
        </span>
      </div>
      {inputValue.length === maxLength && (
        <p className="text-amber-400 text-sm font-medium">You hit the maximum number of characters</p>
      )}
    </div>
  )
}
