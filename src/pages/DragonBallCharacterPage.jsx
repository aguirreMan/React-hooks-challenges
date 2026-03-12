import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function DragonBallCharacterPage() {
  const { id } = useParams()

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setLoading(true)
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)

        if (!response.ok) {
          throw new Error('Character not found')
        }
        const data = await response.json()
        setCharacter(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacter()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>


  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
}
