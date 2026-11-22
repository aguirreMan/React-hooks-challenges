import { useState } from 'react'
import { useDebounceValue } from '../../hooks/useDebounceValue'

const products = ['React Typescript Patterns', 'Modern Next.js', 'Node.js masterclass', 'Modern Tailwind CSS']

export default function DebouncedSearch() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounceValue(query, 500)
  const normalizedQuery = debouncedQuery.trim().toLowerCase()
  const results = products.filter(product => product.toLowerCase().includes(normalizedQuery))

  return (
    <section aria-label="Product search" className="space-y-3">
      <label className="grid max-w-sm gap-1">
        Search products
        <input
          type="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="rounded border border-slate-600 px-3 py-2"
        />
      </label>
      <p role="status" className="text-sm text-slate-400">
        {query !== debouncedQuery ? 'Waiting for you to finish typing…' : `${results.length} products found`}
      </p>
      {results.length > 0 ? (
        <ul className="list-inside list-disc">
          {results.map(product => <li key={product}>{product}</li>)}
        </ul>
      ) : <p>No products match your search.</p>}
    </section>
  )
}
