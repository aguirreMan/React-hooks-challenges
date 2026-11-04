import { useEffect, useState } from 'react'

function loadProfile(name: string) {
  return new Promise<string>(resolve => {
    window.setTimeout(() => resolve(name), name === 'Ada' ? 1200 : 200)
  })
}

export default function ProfilePicker() {
  const [selection, setSelection] = useState('')
  const [profile, setProfile] = useState('')

  useEffect(() => {
    if (selection) loadProfile(selection).then(setProfile)
  }, [selection])

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {['Ada', 'Grace'].map(name => (
          <button key={name} type="button" onClick={() => setSelection(name)}
            className="rounded border border-slate-600 px-3 py-1">
            {name}
          </button>
        ))}
      </div>
      <p>Selected: {selection || 'None'}</p>
      <p>Profile: {profile || 'None loaded'}</p>
    </div>
  )
}
