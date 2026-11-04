import { Link } from 'react-router-dom'
import { lessonCategories, lessons } from '../learn/catalog'

export default function LearnPage() {
  return (
    <section aria-labelledby="learn-title">
      <h1 id="learn-title" className="text-3xl font-bold text-white">Learn</h1>
      <p className="mt-2 text-slate-400">Browse lessons by topic.</p>

      {lessons.length === 0 ? (
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900 p-5">
          <h2 className="font-semibold">No lessons yet</h2>
          <p className="mt-1 text-sm text-slate-400">
            Add a lesson component and register it in <code>src/learn/catalog.ts</code> to get started.
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {lessons.map(({ id, slug, category, title, description }) => (
            <li key={id}>
              <Link to={slug} className="block h-full rounded-lg border border-slate-800 bg-slate-900 p-5 hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400">
                <p className="text-sm font-medium text-blue-400">{lessonCategories[category]}</p>
                <h2 className="mt-1 text-lg font-semibold">{title}</h2>
                <p className="mt-1 text-sm text-slate-400">{description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
