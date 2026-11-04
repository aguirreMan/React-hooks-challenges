import { Link, useParams } from 'react-router-dom'
import { lessonCategories, lessons } from '../learn/catalog'

export default function LessonPage() {
  const { slug } = useParams()
  const lesson = lessons.find(entry => entry.slug === slug)

  return (
    <article className="space-y-5">
      <Link to="/learn" className="inline-block text-sm text-blue-400 underline">Back to Learn</Link>
      {lesson ? (
        <>
          <header>
            <p className="text-sm font-medium text-blue-400">{lessonCategories[lesson.category]}</p>
            <h1 className="mt-1 text-3xl font-bold text-white">{lesson.title}</h1>
            <p className="mt-2 text-slate-400">{lesson.description}</p>
          </header>
          <lesson.Component key={lesson.id} />
        </>
      ) : (
        <header>
          <h1 className="text-3xl font-bold text-white">Lesson not found</h1>
          <p className="mt-2 text-slate-400">Return to Learn to browse the available lessons.</p>
        </header>
      )}
    </article>
  )
}
