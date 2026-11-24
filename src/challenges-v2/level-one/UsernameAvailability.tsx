import { useState, useEffect } from 'react'
import { useDebounceValue } from '../../hooks/useDebounceValue'

const existingUsernames = [
  'admin',
  'satoshi',
  'bitcoin_trader',
  'solana',
  'crypto_whale',
  'react_dev',
]

function checkUsernameAvailability(username: string, shouldFail?: boolean, delay = 1000): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network error: Failed to verify username"))
        return
      }

      const normalized = username.trim().toLowerCase()
      if (!normalized) {
        resolve(false)
        return
      }

      const isAvailable = !existingUsernames.includes(normalized)
      resolve(isAvailable)
    }, delay)
  })
}


export default function UsernameAvailability() {
  const [username, setUsername] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const debouncedUsername = useDebounceValue(username, 500)

  useEffect(() => {
    let latestRequest = false

    if (!debouncedUsername.trim()) {
      setIsAvailable(null)
      setError(null)
      return
    }

    setIsChecking(true)
    setIsAvailable(null)
    setError(null)

    checkUsernameAvailability(debouncedUsername)
      .then((available) => {
        if (latestRequest) return

        setIsAvailable(available)
      })
      .catch((error) => {
        if (!latestRequest) {
          setError(error.message)
          setIsAvailable(null)
        }

      })
      .finally(() => {
        if (latestRequest) return
        setIsChecking(false)
      })

    return () => {
      latestRequest = true
    }

  }, [debouncedUsername])
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      {isChecking && <p>Checking...</p>}
      {error && <p>{error}</p>}
      {isAvailable === true && <p>Username available</p>}
      {isAvailable === false && <p>Username taken</p>}
    </div>
  )
}
