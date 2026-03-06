export function CharacterCard({ character }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-slate-500 transition-all duration-200">

      {character.image && (
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-48 object-contain bg-slate-800"
        />
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          {character.name}
        </h2>

        <div className="space-y-1 text-sm text-slate-300">
          <p>
            <span className="text-slate-400">Race:</span> {character.race}
          </p>

          <p>
            <span className="text-slate-400">Ki:</span> {character.ki}
          </p>
        </div>
      </div>

    </div>
  )
}
