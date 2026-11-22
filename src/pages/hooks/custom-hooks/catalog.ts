import type { HookEntry } from '../catalog'
import UseDebouncePage from './UseDebouncePage'

export const customHooks: readonly HookEntry[] = [
  {
    slug: 'use-debounce',
    name: 'useDebounceValue',
    description: 'Wait for a pause in typing before filtering a list.',
    Overview: UseDebouncePage,
  },
]
