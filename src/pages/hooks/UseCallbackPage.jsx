import { useState, useEffect, useCallback } from 'react'

export default function UseCallbackPage() {
  const [dragonBallCharacter, setDragonBallCharacter] = useState(null)
  const [currentCharacterId, setCurrentCharacterId] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchDragonBallCharacter = useCallback(() => {
    setLoading(true)
    setError(null)
    fetch(`https://dragonball-api.com/api/characters/${currentCharacterId}`)
      .then((res) => res.json())
      .then((data) => {
        setDragonBallCharacter(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [currentCharacterId])

  // Only re-runs when fetchDragonBallCharacter changes (i.e. when currentCharacterId changes)
  useEffect(() => {
    fetchDragonBallCharacter()
  }, [fetchDragonBallCharacter])

  return (
    <div className="py-10">
      <div className="mb-2 text-sm font-medium text-blue-400 uppercase tracking-widest">useCallback</div>
      <h1 className="text-3xl font-bold text-white mb-3">useCallback</h1>
      <p className="text-slate-400 text-lg mb-10">
        Memoize a function so it keeps the same reference between renders — preventing unnecessary effect re-runs or child re-renders.
      </p>

      {/* Character viewer demo */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400 text-sm mb-4">
          <span className="text-blue-400 font-mono">fetchDragonBallCharacter</span> is wrapped in{' '}
          <span className="text-blue-400 font-mono">useCallback</span> so the{' '}
          <span className="text-blue-400 font-mono">useEffect</span> only fires when{' '}
          <span className="text-blue-400 font-mono">currentCharacterId</span> changes.
        </p>

        {/* Nav buttons */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setCurrentCharacterId((id) => Math.max(1, id - 1))}
            disabled={currentCharacterId === 1 || loading}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            ← Prev
          </button>
          <span className="text-slate-500 text-sm font-mono">ID: {currentCharacterId}</span>
          <button
            onClick={() => setCurrentCharacterId((id) => id + 1)}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center gap-2 text-slate-400 text-sm animate-pulse">
            <div className="w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
            Fetching character...
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-lg border border-red-800 bg-red-900/20 p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Character card */}
        {dragonBallCharacter && !loading && (
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={dragonBallCharacter.image}
              alt={dragonBallCharacter.name}
              className="w-40 h-40 object-contain rounded-lg bg-slate-800 border border-slate-700"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-white">{dragonBallCharacter.name}</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {dragonBallCharacter.race && (
                  <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {dragonBallCharacter.race}
                  </span>
                )}
                {dragonBallCharacter.affiliation && (
                  <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {dragonBallCharacter.affiliation}
                  </span>
                )}
                {dragonBallCharacter.gender && (
                  <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {dragonBallCharacter.gender}
                  </span>
                )}
              </div>
              {dragonBallCharacter.ki && (
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-500">Ki: </span>
                  <span className="text-yellow-400 font-mono">{dragonBallCharacter.ki}</span>
                </p>
              )}
              {dragonBallCharacter.maxKi && (
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-500">Max Ki: </span>
                  <span className="text-orange-400 font-mono">{dragonBallCharacter.maxKi}</span>
                </p>
              )}
              {dragonBallCharacter.description && (
                <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                  {dragonBallCharacter.description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
