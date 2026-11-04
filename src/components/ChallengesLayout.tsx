import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { challengeCategories } from '../training/types'

interface LinkClassProps {
  isActive: boolean
}

function linkClass({ isActive }: LinkClassProps) {
  return `block rounded-md px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-blue-400 ${isActive ? 'bg-blue-500/15 text-blue-300' : 'text-slate-300 hover:bg-slate-800'
    }`
}

export default function ChallengesLayout() {
  const { search } = useLocation()

  return (
    <div className="w-full">
      <div className="w-full mb-8 pb-6 border-b border-slate-800">
        <div className="mb-1 text-sm font-medium text-blue-400 uppercase tracking-widest">Practice</div>
        <h1 className="text-3xl font-bold text-white">React Gym</h1>
        <p className="mt-1 text-slate-400">Build from a starter, debug a broken example, or revisit a completed exercise.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[13rem_minmax(0,1fr)]">
        <nav aria-label="Challenge topics" className="self-start rounded-lg border border-slate-800 p-3">
          <NavLink to={{ pathname: '/challenges', search }} end className={linkClass}>All Topics</NavLink>
          <ul>
            {Object.entries(challengeCategories).map(([category, label]) => (
              <li key={category}>
                <NavLink to={{ pathname: `/challenges/topics/${category}`, search }} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
