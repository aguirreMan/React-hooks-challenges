import { Link, useParams, useSearchParams } from 'react-router-dom'
import { beginnerExercises } from './beginnerExercises'
import { trainingExercises } from '../training/catalog'
import { challengeCategories, challengeModes } from '../training/types'
import type { ChallengeCategory } from '../training/types'

const completedTopics: Record<string, ChallengeCategory> = {
  counter: 'react-hooks',
  'character-counter': 'javascript',
  'filter-fruits': 'javascript',
  form: 'react-hooks',
  timer: 'react-hooks',
  'theme-toggle': 'react-hooks',
}

const completedExercises = beginnerExercises.map(exercise => ({
  ...exercise,
  category: completedTopics[exercise.slug],
  path: `/challenges/level-one/${exercise.slug}`,
}))

export default function ChallengesMainPage() {
  const { category } = useParams()
  const [search, setSearch] = useSearchParams()
  const requestedMode = search.get('mode')
  const mode = requestedMode && Object.hasOwn(challengeModes, requestedMode) ? requestedMode : ''
  const exercises = trainingExercises.filter(exercise =>
    (!category || exercise.category === category) && (!mode || exercise.mode === mode)
  )
  const completed = mode ? [] : completedExercises.filter(exercise => !category || exercise.category === category)
  const title = category && Object.hasOwn(challengeCategories, category)
    ? challengeCategories[category as ChallengeCategory]
    : category ? 'Topic unavailable' : 'All Topics'
  const cardClass = 'block rounded-lg border border-slate-800 bg-slate-900 p-4 hover:border-blue-400'

  return (
    <section aria-labelledby="challenge-topic">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 id="challenge-topic" className="text-2xl font-semibold">{title}</h2>
        <label className="flex items-center gap-2 text-sm">
          Mode
          <select value={mode ?? ''} className="rounded border border-slate-700 bg-slate-900 px-2 py-1"
            onChange={event => {
              const next = new URLSearchParams(search)
              if (event.target.value) next.set('mode', event.target.value)
              else next.delete('mode')
              setSearch(next)
            }}>
            <option value="">All modes</option>
            {Object.entries(challengeModes).map(([value, { label }]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      {exercises.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {exercises.map(exercise => {
            const modeStyle = challengeModes[exercise.mode]
            return (
              <li key={exercise.id}>
                <Link className={cardClass} to={{
                  pathname: `/challenges/topics/${exercise.category}/${exercise.slug}`,
                  search: search.toString(),
                }}>
                  <span className={`rounded px-2 py-1 text-xs font-medium ${modeStyle.color}`}>{modeStyle.label}</span>
                  <span className="ml-2 text-xs capitalize text-slate-400">{exercise.difficulty}</span>
                  <span className="mt-2 block font-semibold">{exercise.title}</span>
                  <span className="text-sm text-slate-400">{exercise.description}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : <p className="text-slate-400">No training challenges match this view.</p>}

      {completed.length > 0 && (
        <section className="mt-8">
          <h3 className="mb-3 text-lg font-semibold">Completed exercises</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {completed.map(exercise => (
              <li key={exercise.path}>
                <Link to={exercise.path} className={cardClass}>
                  <span className="block font-semibold">{exercise.title}</span>
                  <span className="text-sm text-slate-400">{exercise.pattern}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}
