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
  if(loading) return (
    <div className="flex items-center gap-2 text-slate-400 py-4">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400"></div>
      Loading Dragon Ball Z characters...
    </div>
  )
  return (
    <div className="flex flex-col gap-4">
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search character...'
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filterCharacters.map(character => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
    </div>
  )
}
