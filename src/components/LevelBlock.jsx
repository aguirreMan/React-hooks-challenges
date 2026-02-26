//This component represents a level block in the React Playground.

export default function LevelBlock({ level }) {
    return (
        <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-bold">{level.title}</h3>
            <p className="text-gray-600">{level.description}</p>
        </div>
    )
}
