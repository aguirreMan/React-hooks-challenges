import debounceSource from '../../concepts/debounce/debounce.ts?raw'
import CodeBlock from '../../components/CodeBlock'

export default function DebouncePage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Debounce</h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          Reusable Typescript utility used for implementing debouncing of functions
        </p>
      </header>

      <CodeBlock
        code={debounceSource}
        language="typescript"
        filename="debounce.ts"
      />
    </section>
  )
}