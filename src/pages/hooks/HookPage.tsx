import { Link, useParams } from 'react-router-dom'
import { hooks } from './catalog'

const backLinkClass = 'inline-block text-sm text-blue-400 underline'

export default function HookPage() {
  const { hook: hookSlug, lessonSlug } = useParams()
  const hook = hooks.find(entry => entry.slug === hookSlug?.toLowerCase())
  const lesson = hook?.lessons?.find(entry => entry.slug === lessonSlug)

  if (!hook || (lessonSlug && !lesson)) {
    return (
      <section>
        <h1 className="text-3xl font-bold text-white">{hook ? 'Hook lesson not found' : 'Hook not found'}</h1>
        <p className="mt-2 text-slate-400">Browse Hooks to find an overview or an available lesson.</p>
        <Link to="/hooks" className={`mt-4 ${backLinkClass}`}>Back to Hooks</Link>
      </section>
    )
  }

  if (lesson) {
    return (
      <article className="space-y-5">
        <Link to={`/hooks/${hook.slug}`} className={backLinkClass}>Back to {hook.name}</Link>
        <header>
          <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
          <p className="mt-2 text-slate-400">{lesson.description}</p>
        </header>
        <lesson.Component key={`${hook.slug}/${lesson.slug}`} />
      </article>
    )
  }

  return (
    <>
      <hook.Overview key={hook.slug} />
      <section className="space-y-3 border-t border-slate-800 pt-5" aria-labelledby="advanced-lessons">
        <h2 id="advanced-lessons" className="text-xl font-semibold">Advanced lessons</h2>
        {hook.lessons?.length ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {hook.lessons.map(({ slug, title, description }) => (
              <li key={slug}>
                <Link to={`/hooks/${hook.slug}/${slug}`} className="block h-full rounded-lg border border-slate-800 bg-slate-900 p-4 hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{description}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : <p className="text-sm text-slate-400">No advanced lessons yet.</p>}
      </section>
    </>
  )
}
