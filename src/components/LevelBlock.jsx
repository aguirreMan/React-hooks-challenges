export default function LevelBlock({ level }) {
    return (
        <div className="bg-green-600 rounded-lg p-4 pb-4">
            <h3 className="text-lg font-bold ">{level.title}</h3>
            <p className="text-lg">{level.description}</p>
        </div>
    )
}
