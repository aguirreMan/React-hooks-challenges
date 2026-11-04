import type { ComponentType } from 'react'

export const challengeModes = {
  build: { label: 'Build', color: 'bg-emerald-500/15 text-emerald-300' },
  debug: { label: 'Debug', color: 'bg-amber-500/15 text-amber-300' },
}

export const challengeCategories = {
  'react-hooks': 'React Hooks',
  'custom-hooks': 'Custom Hooks',
  javascript: 'JavaScript',
  engineering: 'Engineering',
  'mini-projects': 'Mini Projects',
}

export type ChallengeMode = keyof typeof challengeModes
export type ChallengeCategory = keyof typeof challengeCategories

export interface Challenge {
  id: string
  slug: string
  title: string
  category: ChallengeCategory
  mode: ChallengeMode
  difficulty: 'intermediate' | 'advanced'
  description: string
  objectives: string[]
  requirements: string[]
}

export type TrainingExercise = Challenge & {
  expectedBehavior: string[]
  edgeCases?: string[]
  testCases?: string[]
  workspace:
    | { kind: 'preview'; Component: ComponentType; source: string; sourcePath: string }
    | { kind: 'source'; source: string; sourcePath: string }
}
