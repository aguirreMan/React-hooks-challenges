import { useState, useEffect } from 'react'
import { CharacterCard } from '../../components/dragonball-components/CharacterCard'

export default function LevelOneFinals() {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDragonBallZ() {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=50')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        setCharacters(data.items || [])
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch', error)
        setLoading(false)
      }
    }
    fetchDragonBallZ()

  }, [])
  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
  if(loading) return <div>...Loading Dragon Ball Z characters</div>
  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='search character'
      />
      <div>
        {filterCharacters.map(character => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
    </div>
  )
}
