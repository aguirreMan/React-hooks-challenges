export function CharacterCard({ character }) {
  console.log(character)
  return (
    <div className="bg-gray-950 border-2 border-orange-500 rounded-lg overflow-hidden shadow-lg shadow-orange-500/20 hover:shadow-orange-500/50 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-pointer">

      {character.image && (
        <div className="relative">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 object-contain bg-linear-to-b from-gray-900 to-gray-950"
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-4 border-t border-orange-500/30">
        <h2 className="text-lg font-black text-orange-400 mb-3 tracking-wide uppercase">
          {character.name}
        </h2>

        <div className="space-y-1 text-sm">
          <p>
            <span className="text-orange-500 font-bold">Race: </span>
            <span className="text-yellow-300">{character.race}</span>
          </p>
          <p>
            <span className="text-orange-500 font-bold">Ki: </span>
            <span className="text-yellow-300">{character.ki}</span>
          </p>
        </div>
      </div>

    </div>
  )
}
