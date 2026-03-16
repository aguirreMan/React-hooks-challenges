import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReadMore from '../components/dragonball-components/ReadMore'

export default function DragonBallCharacterPage() {
  const { id } = useParams()
  const location = useLocation()
  const characterId = location.state?.character

  const [character, setCharacter] = useState(characterId)

  useEffect(() => {
    if (!character) {
      fetch(`https://dragonball-api.com/api/characters/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data))
    }
  }, [character, id])


  if (!character) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-orange-400 text-2xl font-black uppercase tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
        Loading character...
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Title banner */}
        <div className="bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 p-[2px] rounded-xl mb-4 shadow-lg shadow-orange-500/30">
          <div className="bg-gray-950 rounded-xl px-6 py-5 flex items-center justify-center gap-3">
            <span className="text-yellow-400 text-3xl">★</span>
            <h1 className="text-4xl font-black text-center text-orange-400 tracking-widest uppercase drop-shadow-[0_0_14px_rgba(251,146,60,0.9)]">
              {character.name}
            </h1>
            <span className="text-yellow-400 text-3xl">★</span>
          </div>
        </div>

        {/* Card body */}
        <div className="border-2 border-orange-500 rounded-xl overflow-hidden shadow-2xl shadow-orange-500/30">

          <div className="flex flex-col md:flex-row">

            {/* Image panel */}
            <div className="md:w-1/2 bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center p-8 border-b-2 md:border-b-0 md:border-r-2 border-orange-500/40 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_70%)]" />
              <img
                src={character.image}
                alt={character.name}
                className="max-h-72 object-contain drop-shadow-[0_0_30px_rgba(251,146,60,0.6)] relative z-10"
              />
            </div>

            {/* Stats panel */}
            <div className="md:w-1/2 bg-gray-950 p-8 flex flex-col justify-center space-y-5">

              <div className="border-b border-orange-500/30 pb-4">
                <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-1">Race</p>
                <p className="text-yellow-300 text-xl font-bold">{character.race}</p>
              </div>

              <div className="border-b border-orange-500/30 pb-4">
                <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-1">Ki Power</p>
                <p className="text-yellow-300 text-xl font-bold">{character.ki}</p>
              </div>

              {character.affiliation && (
                <div className="border-b border-orange-500/30 pb-4">
                  <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-1">Affiliation</p>
                  <p className="text-yellow-300 text-xl font-bold">{character.affiliation}</p>
                </div>
              )}

              <div>
                <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-2">Description</p>
                <ReadMore text={character.description} amount={100} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
