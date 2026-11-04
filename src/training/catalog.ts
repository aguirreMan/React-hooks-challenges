import publishArticleSource from '../../challenge-fixtures/publish-article.ts?raw'
import IntervalCounter from './IntervalCounter'
import ProductSearchStarter from './ProductSearchStarter'
import ProfilePicker from './ProfilePicker'
import TaskQueueStarter from './TaskQueueStarter'
import type { TrainingExercise } from './types'
import TaskQueueStarterSource from './TaskQueueStarter.tsx?raw'
import ProductSearchStarterSource from './ProductSearchStarter.tsx?raw'
import IntervalCounterSource from './IntervalCounter.tsx?raw'
import ProfilePickerSource from './ProfilePicker.tsx?raw'

export const trainingExercises: TrainingExercise[] = [
  {
    id: 'build-task-queue',
    slug: 'task-queue',
    title: 'Task Queue',
    category: 'react-hooks',
    mode: 'build',
    difficulty: 'intermediate',
    description: 'Build a queue that lets you add, complete, and remove tasks.',
    objectives: ['Model state transitions with a typed reducer.'],
    requirements: ['Use useReducer and a discriminated union for actions.', 'Use stable IDs and update task state immutably.'],
    expectedBehavior: ['New tasks appear as incomplete.', 'Each row can be toggled or removed independently.'],
    edgeCases: ['Reject whitespace-only task names.', 'Two tasks with the same name can be changed independently.'],
    testCases: ['Add two tasks named Read, toggle the second, then remove the first. One completed task should remain.'],
    workspace: { kind: 'preview', Component: TaskQueueStarter, source: TaskQueueStarterSource, sourcePath: 'src/training/TaskQueueStarter.tsx' },
  },
  {
    id: 'build-product-search',
    slug: 'product-search',
    title: 'Debounced Product Search',
    category: 'custom-hooks',
    mode: 'build',
    difficulty: 'intermediate',
    description: 'Build a product filter that waits until the user pauses typing.',
    objectives: ['Extract reusable timing behavior into a custom hook.'],
    requirements: ['Create a generic useDebouncedValue hook with a configurable delay.', 'Use a 300 ms delay in the preview and derive the results from the debounced value.'],
    expectedBehavior: ['The input responds immediately.', 'Results update 300 ms after the last edit and match regardless of case.'],
    edgeCases: ['An empty query shows every product after the delay.', 'A query with no matches shows an empty state.', 'Leaving the page cancels pending work.'],
    workspace: { kind: 'preview', Component: ProductSearchStarter, source: ProductSearchStarterSource, sourcePath: 'src/training/ProductSearchStarter.tsx' },
  },
  {
    id: 'debug-interval-counter',
    slug: 'interval-counter',
    title: 'Interval Counter',
    category: 'react-hooks',
    mode: 'debug',
    difficulty: 'intermediate',
    description: 'Run the preview and watch the elapsed time for several seconds.',
    objectives: ['Make the timer satisfy the expected behavior.'],
    requirements: ['Keep the one-second interval and stop it when the preview unmounts.'],
    expectedBehavior: ['The counter starts at zero and increases by one every second until the preview stops.'],
    workspace: { kind: 'preview', Component: IntervalCounter, source: IntervalCounterSource, sourcePath: 'src/training/IntervalCounter.tsx' },
  },
  {
    id: 'debug-profile-picker',
    slug: 'profile-picker',
    title: 'Profile Picker',
    category: 'engineering',
    mode: 'debug',
    difficulty: 'advanced',
    description: 'Run the preview, select Ada, then quickly select Grace. Wait for both mock requests to finish.',
    objectives: ['Keep the displayed result consistent with the active selection.'],
    requirements: ['Keep both mock response delays and allow a second selection while the first request is pending.'],
    expectedBehavior: ['Once the selected profile loads, the displayed profile matches the latest selection.'],
    workspace: { kind: 'preview', Component: ProfilePicker, source: ProfilePickerSource, sourcePath: 'src/training/ProfilePicker.tsx' },
  },
  {
    id: 'debug-publish-article',
    slug: 'publish-article',
    title: 'Publish an Article',
    category: 'javascript',
    mode: 'debug',
    difficulty: 'intermediate',
    description: 'The publish function converts a draft article into a published article. Check the standalone source with the command below.',
    objectives: ['Make the implementation satisfy the Draft and Published contracts.'],
    requirements: ['Keep the existing type definitions and preserve the article title.'],
    expectedBehavior: ['A published article uses the supplied timestamp and its date can be formatted as an ISO string.'],
    workspace: { kind: 'source', source: publishArticleSource, sourcePath: 'challenge-fixtures/publish-article.ts' },
  },
]
