import CodeBlock from '../../components/CodeBlock'

const example = `import { useMemo } from 'react'

type Product = {
  id: string
  name: string
}

export function ProductResults({ products, query }: {
  products: Product[]
  query: string
}) {
  const matches = useMemo(() => {
    const search = query.trim().toLowerCase()
    return products.filter(product => product.name.toLowerCase().includes(search))
  }, [products, query])

  return (
    <ul>
      {matches.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>
  )
}`

export default function UseMemoPage() {
  return (
    <div className="py-10">
      <div className="mb-2 text-sm font-medium text-blue-400 uppercase tracking-widest">useMemo</div>
      <h1 className="mb-3 text-3xl font-bold text-white">useMemo</h1>
      <p className="mb-6 text-lg text-slate-400">
        Cache a calculation between renders. In this example, React can reuse the filtered list
        while the products array and search query stay the same.
      </p>
      <CodeBlock code={example} language="tsx" filename="ProductResults.tsx" />
    </div>
  )
}
