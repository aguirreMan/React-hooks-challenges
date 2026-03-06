import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function DragonBallCharacterPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
      const data = await response.json()
      setCharacter(data)
    }
    fetchCharacter()
  }, [id])

  if (!character) return <div>Loading...</div>


  return (
    <div>
      <h1>Welcome to {character.name}</h1>
    </div>
  )
}
