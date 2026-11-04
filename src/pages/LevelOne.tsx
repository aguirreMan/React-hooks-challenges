import { Link, useParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { beginnerExercises } from './beginnerExercises'

export default function LevelOne() {
  const { exerciseSlug } = useParams()

  if (!exerciseSlug) {
    return (
      <section>
        <h2 className="text-2xl font-semibold">Beginner Challenges</h2>
        <p className="mt-2 text-slate-400">Choose an exercise to practice one React pattern at a time.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {beginnerExercises.map(({ slug, title, pattern }) => (
            <li key={slug}>
              <Link to={slug} className="block rounded-lg border border-slate-800 bg-slate-900 p-4 hover:border-blue-400">
                <span className="block font-semibold">{title}</span>
                <span className="text-sm text-slate-400">{pattern}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  const exercise = beginnerExercises.find(({ slug }) => slug === exerciseSlug)
  if (!exercise) {
    return (
      <section>
        <h2 className="text-xl font-semibold">Challenge unavailable</h2>
        <Link to="/challenges/level-one" className="mt-3 inline-block text-blue-400 underline">Browse beginner challenges</Link>
      </section>
    )
  }

  const { Component, title, pattern, explanation, sources } = exercise
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <p className="text-sm font-medium text-blue-400">{pattern}</p>
      <h2 className="mb-5 mt-1 text-2xl font-semibold">{title}</h2>
      <Component key={exerciseSlug} />
      <section className="mt-8 space-y-3 border-t border-slate-800 pt-6">
        <h3 className="text-lg font-semibold">How it works</h3>
        <p className="text-sm leading-relaxed text-slate-300">{explanation}</p>
        {sources.map(({ filename, code }) => (
          <CodeBlock key={filename} code={code} language={filename.endsWith('.tsx') ? 'tsx' : 'jsx'} filename={filename} />
        ))}
      </section>
    </section>
  )
}
