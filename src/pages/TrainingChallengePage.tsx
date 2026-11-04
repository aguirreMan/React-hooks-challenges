import { Component, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { trainingExercises } from '../training/catalog'
import { challengeModes } from '../training/types'
import type { TrainingExercise } from '../training/types'

class PreviewBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <p role="alert" className="text-rose-300">Preview failed. {this.state.error.message}</p>
    }
    return this.props.children
  }
}

function ChallengeWorkspace({ exercise }: { exercise: TrainingExercise }) {
  const [running, setRunning] = useState(false)
  const { workspace } = exercise

  return (
    <section className="space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h3 className="text-lg font-semibold">{exercise.mode === 'build' ? 'Starter workspace' : 'Challenge workspace'}</h3>
      <p className="mt-2 break-all text-sm text-slate-400">Edit <code>{workspace.sourcePath}</code> in your project.</p>
      {workspace.kind === 'source' ? (
        <>
          <p className="mt-3 text-sm text-slate-300">Run this standalone check from the project root.</p>
          <CodeBlock code={`npx tsc --noEmit --strict --skipLibCheck ${workspace.sourcePath}`} language="bash" />
        </>
      ) : (
        <>
          <button type="button" onClick={() => setRunning(value => !value)}
            className="mt-3 rounded bg-blue-600 px-3 py-2 text-sm font-semibold hover:bg-blue-500">
            {running ? 'Stop preview' : 'Run preview'}
          </button>
          {running && (
            <div className="mt-4 rounded border border-slate-700 bg-slate-950 p-4">
              <PreviewBoundary><workspace.Component /></PreviewBoundary>
            </div>
          )}
        </>
      )}
      <CodeBlock
        code={workspace.source}
        language={workspace.kind === 'preview' ? 'tsx' : 'typescript'}
        filename={workspace.sourcePath.split('/').pop()}
      />
    </section>
  )
}

export default function TrainingChallengePage() {
  const { category, challengeSlug } = useParams()
  const { search } = useLocation()
  const exercise = trainingExercises.find(item => item.category === category && item.slug === challengeSlug)

  if (!exercise) {
    return (
      <section>
        <h2 className="text-xl font-semibold">Challenge unavailable</h2>
        <Link to="/challenges" className="mt-3 inline-block text-blue-400 underline">Browse challenges</Link>
      </section>
    )
  }

  const mode = challengeModes[exercise.mode]
  const sections = [
    { title: 'Objectives', items: exercise.objectives },
    { title: 'Technical requirements', items: exercise.requirements },
    { title: 'Expected behavior', items: exercise.expectedBehavior },
    { title: 'Edge cases', items: exercise.edgeCases },
    { title: 'Optional test cases', items: exercise.testCases },
  ]

  return (
    <article className="space-y-5">
      <Link to={{ pathname: `/challenges/topics/${exercise.category}`, search }} className="text-sm text-blue-400 underline">Back to topic</Link>
      <header>
        <span className={`rounded px-2 py-1 text-xs font-medium ${mode.color}`}>{mode.label}</span>
        <span className="ml-2 text-sm capitalize text-slate-400">{exercise.difficulty}</span>
        <h2 className="mt-2 text-2xl font-semibold">{exercise.title}</h2>
        <p className="mt-2 text-slate-300">{exercise.description}</p>
      </header>
      {sections.map(({ title, items }) => items?.length ? (
        <section key={title}>
          <h3 className="font-semibold">{title}</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ) : null)}
      <ChallengeWorkspace key={exercise.id} exercise={exercise} />
    </article>
  )
}
