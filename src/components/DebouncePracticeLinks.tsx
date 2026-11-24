import { NavLink } from 'react-router-dom'
import { debounceExercises } from '../training/catalog'

const links = [
  { path: '/concepts/debounce', label: 'Debounce concept' },
  { path: '/custom-hooks/use-debounce', label: 'useDebounceValue hook' },
  ...debounceExercises.map(({ category, slug, title }) => ({
    path: `/challenges/topics/${category}/${slug}`,
    label: title,
  })),
]

export default function DebouncePracticeLinks() {
  return (
    <nav aria-label="Debounce practice" className="rounded-lg border border-slate-800 p-4">
      <h2 className="font-semibold">Debounce practice</h2>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink end to={path} className={({ isActive }) =>
              isActive ? 'font-semibold text-slate-200' : 'text-blue-400 underline'
            }>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
