import React from 'react'

function CharacterControls({ getNextCharacter, previousCharacter, characterId, loading }) {
  console.log(
    'CharacterControls rendered',
    { characterId, loading }
  )
  return (
    <div className='flex gap-4'>
      <button onClick={previousCharacter} disabled={characterId === 1 || loading}>
        Previous
      </button>
      <span>ID: {characterId}</span>
      <button onClick={getNextCharacter} disabled={loading}>
        Next
      </button>
    </div>
  )
}
export default React.memo(CharacterControls)
