import { Link, useParams } from 'react-router-dom'
import { concepts } from '../concepts/catalog'

export default function ConceptsPage() {
  const { slug } = useParams()

  if (slug) {
    const concept = concepts.find(entry => entry.slug === slug)

    return (
      <article className="space-y-5">
        <Link to="/concepts" className="text-sm text-blue-400 underline">Back to Concepts</Link>
        {concept ? <concept.Component key={concept.slug} /> : <h1 className="text-3xl font-bold">Concept not found</h1>}
      </article>
    )
  }

  return (
    <section className="space-y-5" aria-labelledby="concepts-title">
      <header>
        <h1 id="concepts-title" className="text-3xl font-bold">Concepts</h1>
        <p className="mt-2 text-slate-400">Practice framework-independent JavaScript and TypeScript patterns.</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {concepts.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link
              to={slug}
              className="block h-full rounded-lg border border-slate-800 bg-slate-900 p-5 hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
