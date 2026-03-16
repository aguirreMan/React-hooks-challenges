import { useState, useEffect } from 'react'

export function useFetchCharacters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDragonBallZ() {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=58')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        //console.log(data)
        setCharacters(data.items || [])
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDragonBallZ()
  }, [])

  return { characters, loading, error }
}
