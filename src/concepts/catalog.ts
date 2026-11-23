import type { ComponentType } from 'react'
import DebouncePage from '../pages/concepts/DebouncePage'

interface Concept {
  slug: string
  title: string
  description: string
  Component: ComponentType
}

export const concepts: readonly Concept[] = [
  {
    slug: 'debounce',
    title: 'Debounce',
    description: 'Wait for a pause before running a callback.',
    Component: DebouncePage,
  },
]
