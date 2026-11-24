import { useState } from 'react'

const products = ['Apple', 'Avocado', 'Banana', 'Blueberry', 'Mango', 'Strawberry']

export default function DebouncedSearchStarter() {
  const [query, setQuery] = useState('')

  // TODO: Use useDebounceValue to delay the query used for filtering.
  const normalizedQuery = query.trim().toLowerCase()
  const results = products.filter(product => product.toLowerCase().includes(normalizedQuery))

  return (
    <div className="space-y-3">
      <label className="block">
        Filter products
        <input
          className="mt-1 block w-full rounded border border-slate-700 bg-slate-900 px-3 py-2"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </label>
      <p role="status">{results.length} products found</p>
      <ul className="list-disc pl-5">
        {results.map(product => <li key={product}>{product}</li>)}
      </ul>
    </div>
  )
}
