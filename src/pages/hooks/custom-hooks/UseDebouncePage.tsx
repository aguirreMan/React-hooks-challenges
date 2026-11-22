import CodeBlock from '../../../components/CodeBlock'
import DebouncedSearch from '../../../challenges-v2/level-one/DebouncedSearch'
import UsernameAvailability from '../../../challenges-v2/level-one/UsernameAvailability'

import hookSource from '../../../hooks/useDebounceValue.ts?raw'
import searchSource from '../../../challenges-v2/level-one/DebouncedSearch.tsx?raw'
import usernameSource from '../../../challenges-v2/level-one/UsernameAvailability.tsx?raw'

const demoClass = 'rounded-lg border border-slate-800 bg-slate-900 p-5'
const sectionClass = 'space-y-4 border-t border-slate-800 pt-6'

export default function UseDebouncePage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">useDebounceValue</h1>
        <p className="text-slate-400">
          A reusable custom hook that delays value updates until
          a specified period of inactivity has passed.
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold">
          Understanding Debouncing
        </h2>

        <p className="text-slate-300">
          Frequent input changes can trigger unnecessary computations
          and network requests. Debouncing reduces these operations
          by waiting until the incoming value stops changing for a
          specified amount of time.
        </p>

        <p className="text-slate-300">
          Common use cases include search inputs, autocomplete,
          username validation, and automatically saving drafts.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold">
          Hook Implementation
        </h2>

        <p className="text-slate-300">
          The hook maintains a separate state value and schedules
          an update whenever the incoming value or delay changes.
          Effect cleanup cancels the previous timer before a new
          one is created or when the component unmounts.
        </p>

        <CodeBlock
          code={hookSource}
          language="typescript"
          filename="useDebounceValue.ts"
        />
      </section>

      <section className={sectionClass}>
        <header className="space-y-2">
          <span className="text-sm font-medium text-blue-400">
            Example 01 · Synchronous Operations
          </span>

          <h2 className="text-2xl font-semibold">
            Debounced Product Search
          </h2>

          <p className="text-slate-400">
            The input updates immediately, while the product list
            is filtered using the debounced query after 500 ms
            of inactivity.
          </p>
        </header>

        <div className={demoClass}>
          <DebouncedSearch />
        </div>

        <h3 className="text-lg font-semibold">
          Engineering Concepts
        </h3>

        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>Controlled inputs</li>
          <li>Derived state</li>
          <li>String normalization</li>
          <li>Timer creation and cleanup</li>
        </ul>

        <CodeBlock
          code={searchSource}
          language="tsx"
          filename="DebouncedSearch.tsx"
        />
      </section>

      <section className={sectionClass}>
        <header className="space-y-2">
          <span className="text-sm font-medium text-blue-400">
            Example 02 · Asynchronous Operations
          </span>

          <h2 className="text-2xl font-semibold">
            Username Availability
          </h2>

          <p className="text-slate-400">
            Check whether a username is available using a simulated
            API request. Debouncing reduces unnecessary requests,
            while effect cleanup prevents stale requests from
            updating component state after the debounced value changes.
          </p>
        </header>

        <div className={demoClass}>
          <UsernameAvailability />
        </div>

        <h3 className="text-lg font-semibold">
          Engineering Concepts
        </h3>

        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>Asynchronous state management</li>
          <li>Promise chaining and error handling</li>
          <li>Simulated network latency</li>
          <li>Race-condition protection</li>
          <li>Effect-local closures</li>
        </ul>

        <CodeBlock
          code={usernameSource}
          language="tsx"
          filename="UsernameAvailability.tsx"
        />
      </section>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold">
          Engineering Considerations
        </h2>

        <div className="space-y-5 text-slate-300">
          <div>
            <h3 className="font-semibold text-white">
              Why a ref is unnecessary
            </h3>
            <p className="mt-1">
              Each effect execution creates its own timer and
              cleanup function. JavaScript closures preserve access
              to the timer identifier without requiring a ref.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Function-valued state
            </h3>
            <p className="mt-1">
              Since the hook accepts a generic type, the incoming
              value could be a function. Wrapping the value in
              another function prevents React from interpreting it
              as a state initializer or updater.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Race conditions
            </h3>
            <p className="mt-1">
              Debouncing reduces how often requests are initiated,
              but does not guarantee that responses arrive in order.
              Stale responses must be ignored or cancelled separately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Request cancellation
            </h3>
            <p className="mt-1">
              Ignoring a stale response prevents unwanted state
              updates but does not cancel the underlying operation.
              AbortController can provide actual cancellation for
              asynchronous operations that support it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Runtime validation and reference equality
            </h3>
            <p className="mt-1">
              TypeScript does not guarantee that a delay is finite
              or non-negative. Additionally, objects and arrays
              passed by reference may restart the debounce timer
              when their identities change.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}