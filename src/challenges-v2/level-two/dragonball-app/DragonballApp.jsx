import { useState } from 'react'
import { useFetchCharacters } from '../../../Hooks/Dragonballz-hooks/useFetchCharacters'
import { CharacterCard } from '../../../components/dragonball-components/CharacterCard'
import CharacterSelect from '../../../components/dragonball-components/CharacterSelect'
import { Link } from 'react-router-dom'

export default function DragonBallApp() {
  const { characters, loading, error } = useFetchCharacters()
  const [searchTerm, setSearchTerm] = useState('')
  const [raceFilter, setRaceFilter] = useState('')

  const filterCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRace = raceFilter ? character.race === raceFilter : true
    return matchesSearch && matchesRace
  })

  const raceOptions = [
    ...Array.from(new Set(characters.map(character => character.race)))
      .map(race => ({
        value: race,
        label: race
      })),
    { value: 'reset', label: 'reset filter' }
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
          className='pt-4'
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 gap-3 h-full'>
        {filterCharacters.map(character => (
          <Link
            key={character.id}
            to={`/challenges/level-two/dragonball-app/character/${character.id}`}
            state={{ character}}
          >
            <CharacterCard character={character} />
          </Link>
        ))}
        <div className='pt-6 text-slate-400 col-span-full text-center'>
          {filterCharacters.length === 0 ? (
            <p className="pt-4 text-slate-300">No characters match your filters.</p>
          ) : filterCharacters.length === characters.length ? (
            <p className="pt-4 text-slate-300">Showing all characters.</p>
          ) : (
            <p className=" text-slate-300">
              Showing {filterCharacters.length} of {characters.length} characters.
            </p>
          )}
          {error && <p className="pt-4 text-slate-300">{error}</p>}
        </div>
      </div>
    </>
  )
}
