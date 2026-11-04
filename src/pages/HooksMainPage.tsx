import { Link } from 'react-router-dom'
import { hooks } from './hooks/catalog'

export default function HooksMainPage() {
  return (
    <div className="py-10">
      <div className="mb-2 text-sm font-medium text-blue-400 uppercase tracking-widest">
        Hooks
      </div>
      <h1 className="text-3xl font-bold text-white mb-3">React Hooks Practice</h1>
      <p className="text-slate-400 text-lg mb-10">
        Interactive playgrounds for the most-used React hooks.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {hooks.map((hook) => (
          <Link
            key={hook.slug}
            to={`/hooks/${hook.slug}`}
            className="rounded-lg border border-slate-800 bg-slate-900 p-6 flex flex-col gap-4 hover:border-slate-600 transition-colors"
          >
            <div>
              <span className="inline-block rounded-md bg-blue-500/10 px-2.5 py-1 text-sm font-mono font-medium text-blue-400 mb-2">
                {hook.name}
              </span>
              <p className="text-slate-400 text-sm">{hook.description}</p>
            </div>

            <div className="flex-1 rounded-md border border-slate-800 bg-slate-950 p-4 text-slate-600 text-sm">
              Demo coming soon...
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
