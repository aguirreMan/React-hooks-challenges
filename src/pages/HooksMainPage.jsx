import { Link } from 'react-router-dom'

const hooks = [
  { name: 'useState',    description: 'Manage local component state.',               path: 'usestate' },
  { name: 'useEffect',   description: 'Run side effects after renders.',              path: 'useeffect' },
  { name: 'useRef',      description: 'Hold a mutable value or reference a DOM node.', path: 'useref' },
  { name: 'useContext',  description: 'Read a value from a React context.',           path: 'usecontext' },
  { name: 'useReducer',  description: 'Manage complex state with actions.',           path: 'usereducer' },
  { name: 'useMemo',     description: 'Memoize an expensive computed value.',         path: 'usememo' },
  { name: 'useCallback', description: 'Memoize a function reference.',               path: 'usecallback' },
]

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
            key={hook.name}
            to={`/hooks/${hook.path}`}
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
