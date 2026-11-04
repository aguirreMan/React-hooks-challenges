import type { ComponentType } from 'react'
import LessonPlaceholder from './LessonPlaceholder'

export const lessonCategories = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  'browser-apis': 'Browser APIs',
  engineering: 'Engineering',
}

export interface Lesson {
  id: string
  slug: string
  title: string
  category: keyof typeof lessonCategories
  description: string
  Component: ComponentType
}

export const lessons: readonly Lesson[] = [
  {
    id: 'learn-placeholder',
    slug: 'lesson-placeholder',
    title: 'Lesson Placeholder',
    category: 'javascript',
    description: 'A sample lesson page with a syntax-highlighted code block.',
    Component: LessonPlaceholder,
  },
]
