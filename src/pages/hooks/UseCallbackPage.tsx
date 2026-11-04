import { memo, useCallback, useState } from 'react'

const examples = ['Local state', 'Derived state', 'Controlled inputs']

const ExampleControls = memo(function ExampleControls({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void
  onNext: () => void
}) {
  return (
    <div className="flex gap-3">
      <button type="button" className="rounded border border-slate-600 px-3 py-1" onClick={onPrevious}>Previous</button>
      <button type="button" className="rounded border border-slate-600 px-3 py-1" onClick={onNext}>Next</button>
    </div>
  )
})

export default function UseCallbackPage() {
  const [index, setIndex] = useState(0)
  const previous = useCallback(() => setIndex(current => Math.max(0, current - 1)), [])
  const next = useCallback(() => setIndex(current => Math.min(examples.length - 1, current + 1)), [])

  return (
    <section className="py-10">
      <h1 className="mb-3 text-3xl font-bold text-white">useCallback</h1>
      <p className="mb-6 text-slate-400">
        Browse the examples. The memoized controls receive the same callback references as the selection changes.
      </p>
      <div className="space-y-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
        <p aria-live="polite">{examples[index]} ({index + 1} of {examples.length})</p>
        <ExampleControls onPrevious={previous} onNext={next} />
      </div>
    </section>
  )
}
