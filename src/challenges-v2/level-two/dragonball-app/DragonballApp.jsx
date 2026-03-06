import { useState, useEffect } from 'react'
import { CharacterCard } from '../../../components/dragonball-components/CharacterCard'
import CharacterSelect from '../../../components/dragonball-components/CharacterSelect'
import { Link } from 'react-router-dom'

export default function DragonBallApp() {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [raceFilter, setRaceFilter] = useState('')

  useEffect(() => {
    async function fetchDragonBallZ() {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=50')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        //console.log(data)
        setCharacters(data.items || [])
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch', error)
        setLoading(false)
      }
    }
    fetchDragonBallZ()
  }, [])
  //filter characters



  const filterCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRace = raceFilter ? character.race === raceFilter : true
    return matchesSearch && matchesRace
  })


  const raceOptions = [
    { value: 'reset', label: 'All Races' },
    ...Array.from(new Set(characters.map(character => character.race)))
      .map(race => ({
        value: race,
        label: race
      }))
  ]

  if (loading) return <div>...Loading Dragon Ball Z characters</div>


  return (
    <>
    <input
      className='bg-amber-50 py-2 text-black pb-4 rounded w-full max-w-sm'
      type='text'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder='search dragonball character'
      />
      <div>
        <CharacterSelect
          value={raceFilter}
          options={raceOptions}
          onChange={setRaceFilter}
          resetFilter={() => setRaceFilter('')}
        />
      </div>
      <div className='grid grid-cols-4 gap-4 pt-6'>
        {filterCharacters.map(character => (
          <Link key={character.id} to={`/challenges/level-two/dragonball-app/character/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </>
  )
}
