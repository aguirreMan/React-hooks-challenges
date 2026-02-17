import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Hooks from './pages/hooks'
import Challenges from './pages/Challenges'
import LevelTwoChallenges from './pages/LevelTwoChallenges'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/hooks', element: <Hooks /> },
      {
        path: '/challenges',
        element: <Challenges />,
        children: [
          { index: true, element: <Challenges /> }, // default page
          { path: 'level-2', element: <LevelTwoChallenges /> },
        ],
      },
    ],
  },
])
