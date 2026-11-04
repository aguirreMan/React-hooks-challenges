import type { ComponentType } from 'react'
import UseStatePage from './UseStatePage'
import UseEffectPage from './UseEffectPage'
import UseRefPage from './UseRefPage'
import UseContextPage from './UseContextPage'
import UseReducerPage from './UseReducerPage'
import UseMemoPage from './UseMemoPage'
import UseCallbackPage from './UseCallbackPage'

export interface HookLesson {
  slug: string
  title: string
  description: string
  Component: ComponentType
}

export interface HookEntry {
  slug: string
  name: string
  description: string
  Overview: ComponentType
  lessons?: readonly HookLesson[]
}

export const hooks: readonly HookEntry[] = [
  { slug: 'usestate', name: 'useState', description: 'Manage local component state.', Overview: UseStatePage },
  { slug: 'useeffect', name: 'useEffect', description: 'Run side effects after renders.', Overview: UseEffectPage },
  { slug: 'useref', name: 'useRef', description: 'Hold a mutable value or reference a DOM node.', Overview: UseRefPage },
  { slug: 'usecontext', name: 'useContext', description: 'Read a value from a React context.', Overview: UseContextPage },
  { slug: 'usereducer', name: 'useReducer', description: 'Manage complex state with actions.', Overview: UseReducerPage },
  { slug: 'usememo', name: 'useMemo', description: 'Memoize an expensive computed value.', Overview: UseMemoPage },
  { slug: 'usecallback', name: 'useCallback', description: 'Memoize a function reference.', Overview: UseCallbackPage },
]
