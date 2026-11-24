import DebouncedFunctionSearch from '../challenges-v2/DebouncedFucntionSearch'
import functionSearchSource from '../challenges-v2/DebouncedFucntionSearch.tsx?raw'
import DebouncedSearchStarter from './DebouncedSearchStarter'
import searchStarterSource from './DebouncedSearchStarter.tsx?raw'
import type { TrainingExercise } from './types'

export const debounceExercises: TrainingExercise[] = [
  {
    id: 'debounced-function-search',
    slug: 'debounced-function-search',
    title: 'Debug a Debounced Search Callback',
    category: 'javascript',
    mode: 'debug',
    difficulty: 'intermediate',
    description: 'Use debounce() to run one search per burst of typing.',
    objectives: ['Find why rapid typing currently adds several entries to the search history.'],
    requirements: [
      'Keep the input controlled and update its text immediately.',
      'Reuse the same debounce() wrapper across renders so consecutive input events share a timer.',
    ],
    expectedBehavior: ['After 500 ms of inactivity, the history gains exactly one entry with the latest query.'],
    testCases: ['Type “react” quickly and wait. Expect one entry for “react”. Pause, then type again and expect one additional entry.'],
    workspace: {
      kind: 'preview',
      Component: DebouncedFunctionSearch,
      source: functionSearchSource,
      sourcePath: 'src/challenges-v2/DebouncedFucntionSearch.tsx',
    },
  },
  {
    id: 'debounced-search',
    slug: 'debounced-search',
    title: 'Build a Debounced Product Filter',
    category: 'custom-hooks',
    mode: 'build',
    difficulty: 'intermediate',
    description: 'Use useDebounceValue to delay product filtering while keeping the input responsive.',
    objectives: ['Separate the live input from the query used to derive the filtered list.'],
    requirements: [
      'Pass the live query and a 500 ms delay to useDebounceValue.',
      'Trim and lowercase the debounced query before filtering the products.',
      'Show a waiting message while the live and debounced queries differ.',
    ],
    expectedBehavior: ['The input updates immediately. The list updates 500 ms after typing stops.'],
    edgeCases: ['Clearing the input or entering only whitespace restores the full list after the delay.'],
    testCases: ['Type “  BLU  ” quickly. After the delay, Blueberry should be the only result.'],
    workspace: {
      kind: 'preview',
      Component: DebouncedSearchStarter,
      source: searchStarterSource,
      sourcePath: 'src/training/DebouncedSearchStarter.tsx',
    },
  },
]

export const trainingExercises: TrainingExercise[] = [...debounceExercises]
