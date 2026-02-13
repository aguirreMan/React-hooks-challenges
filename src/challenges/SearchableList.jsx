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
    <div>
          <input
            type='text'
            value={filteredFruit}
            onChange={updateInput}
            placeholder="Search fruits..."
          />
          {/* Conditional rendering based on filteredList length */}
          {filteredList.length > 0 ? (
            <ul>
              {filteredList.map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))}
            </ul>
          ) : (
            // Display not found message
            <p>No fruits found matching '{filteredFruit}'.</p>
          )}
        </div>
  )
}
