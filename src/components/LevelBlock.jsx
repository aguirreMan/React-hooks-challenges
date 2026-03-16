export default function LevelBlock({ level }) {
    return (
        <div className="group rounded-xl border border-slate-700 bg-slate-900 p-5 hover:border-blue-500 hover:bg-slate-800 transition-all duration-200 cursor-pointer">
            <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">{level.title}</h3>
            </div>
            <p className="text-sm text-slate-400">{level.description}</p>
        </div>
    )
}
