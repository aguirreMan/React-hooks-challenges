import { useState } from 'react'

export default function SearchableList() {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Watermelon"
  ]
  const [filteredFruit, setFilteredFruit] = useState('')

  function updateInput(event) {
    setFilteredFruit(event.target.value)
  }
  const filteredList = fruits.filter(fruit => {
    return fruit.toLowerCase().includes(filteredFruit.toLowerCase())
  })

  return (
    <div className="flex flex-col gap-3">
      <input
        type='text'
        value={filteredFruit}
        onChange={updateInput}
        placeholder="Search fruits..."
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {filteredList.length > 0 ? (
        <ul className="divide-y divide-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {filteredList.map((fruit, index) => (
            <li key={index} className="px-4 py-2.5 text-slate-200 hover:bg-slate-800 transition-colors">
              {fruit}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-400 text-sm py-2">No fruits found matching <span className="text-white">'{filteredFruit}'</span>.</p>
      )}
    </div>
  )
}
