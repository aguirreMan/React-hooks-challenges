import debounceSource from '../../concepts/debounce/debounce.ts?raw'
import CodeBlock from '../../components/CodeBlock'
import DebouncePracticeLinks from '../../components/DebouncePracticeLinks'

export default function DebouncePage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Debounce</h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          Use debounce() to call a function with the latest arguments after a pause.
          In React, useDebounceValue gives you a delayed value for rendering or effects.
        </p>
      </header>

      <DebouncePracticeLinks />

      <CodeBlock
        code={debounceSource}
        language="typescript"
        filename="debounce.ts"
      />
    </section>
  )
}
