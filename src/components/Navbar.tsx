import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/learn', label: 'Learn' },
  { to: '/concepts', label: 'Concepts' },
  { to: '/hooks', label: 'React Hooks' },
  { to: '/custom-hooks', label: 'Custom Hooks' },
  { to: '/components', label: 'Components' },
  { to: '/challenges', label: 'Challenges' },
]

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-6 py-4 text-white shadow-sm">
      <span className="text-lg font-semibold tracking-wide">React Playground</span>
      <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-6">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'text-blue-400' : 'text-slate-300 transition-colors hover:text-white'}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
