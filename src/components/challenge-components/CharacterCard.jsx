export function CharacterCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Ki: {character.ki}</p>
    </div>
  )
}
