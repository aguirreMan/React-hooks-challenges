import type { ComponentType } from 'react'
import TimerChallenge from '../challenges-v2/level-one/TimerChallenge'
import FormChallenge from '../challenges-v2/level-one/FormChallenge'
import Counter from '../challenges-v2/level-one/Counter'
import CharacterCounter from '../challenges-v2/level-one/CharacterCounter'
import SearchableList from '../challenges-v2/level-one/SearchableList'
import ThemeToggleChallenge from '../challenges-v2/level-one/ThemeToggleChallenge'
import TimerChallengeSource from '../challenges-v2/level-one/TimerChallenge.tsx?raw'
import FormChallengeSource from '../challenges-v2/level-one/FormChallenge.tsx?raw'
import CounterSource from '../challenges-v2/level-one/Counter.tsx?raw'
import CharacterCounterSource from '../challenges-v2/level-one/CharacterCounter.jsx?raw'
import SearchableListSource from '../challenges-v2/level-one/SearchableList.tsx?raw'
import ThemeToggleChallengeSource from '../challenges-v2/level-one/ThemeToggleChallenge.tsx?raw'
import ThemeToggleSource from '../challenges-v2/level-one/ThemeToggle.tsx?raw'

type Exercise = {
  slug: string
  title: string
  pattern: string
  Component: ComponentType
  explanation: string
  sources: { filename: string; code: string }[]
}

export const beginnerExercises: Exercise[] = [
  {
    slug: 'counter',
    title: 'Counter',
    pattern: 'Local state',
    Component: Counter,
    explanation: 'Increment and Decrement update the previous count. At 10, an effect schedules a reset after three seconds. Changing the count before then cancels the pending reset.',
    sources: [{ filename: 'Counter.tsx', code: CounterSource }],
  },
  {
    slug: 'character-counter',
    title: 'Character Counter',
    pattern: 'Derived state',
    Component: CharacterCounter,
    explanation: 'The input stores only the text. The displayed count and remaining characters are calculated from its length on every render.',
    sources: [{ filename: 'CharacterCounter.jsx', code: CharacterCounterSource }],
  },
  {
    slug: 'filter-fruits',
    title: 'Filter Fruits',
    pattern: 'List rendering and filtering',
    Component: SearchableList,
    explanation: 'Typing updates the search state. Each render filters the original fruit list using a case-insensitive match and displays either the results or an empty state.',
    sources: [{ filename: 'SearchableList.tsx', code: SearchableListSource }],
  },
  {
    slug: 'form',
    title: 'Form Challenge',
    pattern: 'Controlled inputs',
    Component: FormChallenge,
    explanation: 'Each field writes to React state as you type. On submit, the handler validates the current values, displays any errors, and clears the fields after a successful submission.',
    sources: [{ filename: 'FormChallenge.tsx', code: FormChallengeSource }],
  },
  {
    slug: 'timer',
    title: 'Timer Challenge',
    pattern: 'Effects and cleanup',
    Component: TimerChallenge,
    explanation: 'Start sets isRunning to true, which starts the interval. Each tick increments the previous count. Pausing, resetting, or leaving the page clears the interval.',
    sources: [{ filename: 'TimerChallenge.tsx', code: TimerChallengeSource }],
  },
  {
    slug: 'theme-toggle',
    title: 'Theme Toggle',
    pattern: 'Lifting and persisting state',
    Component: ThemeToggleChallenge,
    explanation: 'The parent owns the theme and passes it and a change handler to the toggle. The initial value comes from localStorage, and an effect saves changes.',
    sources: [{ filename: 'ThemeToggleChallenge.tsx', code: ThemeToggleChallengeSource }, { filename: 'ThemeToggle.tsx', code: ThemeToggleSource }],
  },
]
