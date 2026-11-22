import { Link, useParams } from 'react-router-dom'
import { customHooks } from './hooks/custom-hooks/catalog'

export default function CustomHooksPage() {
  const { hook } = useParams()

  if (!hook) {
    return (
      <section className="space-y-5">
        <header>
          <h1 className="text-3xl font-bold">Custom Hooks</h1>
          <p className="mt-2 text-slate-400">Extract reusable stateful logic and practice using it in components.</p>
        </header>
        {customHooks.map(({ slug, name, description }) => (
          <Link
            key={slug}
            to={slug}
            className="block rounded-lg border border-slate-800 bg-slate-900 p-5 hover:border-blue-400"
          >
            <h2 className="font-mono text-lg font-semibold text-blue-400">{name}</h2>
            <p className="mt-1 text-sm text-slate-400">{description}</p>
          </Link>
        ))}
      </section>
    )
  }

  const entry = customHooks.find(({ slug }) => slug === hook)

  return (
    <article className="space-y-5">
      <Link to="/custom-hooks" className="text-sm text-blue-400 underline">Back to Custom Hooks</Link>
      {entry ? <entry.Overview key={entry.slug} /> : <h1 className="text-3xl font-bold">Custom hook not found</h1>}
    </article>
  )
}
