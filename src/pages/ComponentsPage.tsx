import { Link, useParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { DisclosureDemo, RatingPickerDemo } from './components/ComponentDemos'
import disclosureSource from './components/Disclosure.tsx?raw'
import ratingPickerSource from './components/RatingPicker.tsx?raw'

const lessons = [
  {
    slug: 'props-and-composition',
    title: 'Props and Composition',
    description: 'Reuse a disclosure with different labels and children. Open both panels to see how each instance manages its own state.',
    Demo: DisclosureDemo,
    code: disclosureSource,
    filename: 'Disclosure.tsx',
  },
  {
    slug: 'controlled-components',
    title: 'Controlled Components',
    description: 'The parent owns the selected rating. Try choosing a rating and then resetting it from the parent.',
    Demo: RatingPickerDemo,
    code: ratingPickerSource,
    filename: 'RatingPicker.tsx',
  },
]

export default function ComponentsPage() {
  const { lessonSlug } = useParams()
  const lesson = lessons.find(item => item.slug === lessonSlug)

  if (lessonSlug) {
    return (
      <article className="space-y-5">
        <Link to="/components" className="text-sm text-blue-400 underline">Back to Components</Link>
        <h1 className="text-3xl font-bold">{lesson?.title ?? 'Component lesson not found'}</h1>
        {lesson && (
          <>
            <p className="text-slate-400">{lesson.description}</p>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <lesson.Demo />
            </div>
            <CodeBlock code={lesson.code} language="tsx" filename={lesson.filename} />
          </>
        )}
      </article>
    )
  }

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="mt-2 text-slate-400">Practice composing reusable React components and deciding where state belongs.</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {lessons.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link to={slug} className="block h-full rounded-lg border border-slate-800 bg-slate-900 p-5 hover:border-blue-400">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
