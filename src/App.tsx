import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LearnPage from './pages/LearnPage'
import LessonPage from './pages/LessonPage'
import ChallengesMainPage from './pages/ChallengesMainPage'
import ChallengesLayout from './components/ChallengesLayout'
import TrainingChallengePage from './pages/TrainingChallengePage'
import HooksMainPage from './pages/HooksMainPage'
import LevelOne from './pages/LevelOne'
import HookPage from './pages/hooks/HookPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='learn' element={<LearnPage />} />
          <Route path='learn/:slug' element={<LessonPage />} />
          <Route path='hooks' element={<HooksMainPage />} />
          <Route path='hooks/:hook' element={<HookPage />} />
          <Route path='hooks/:hook/:lessonSlug' element={<HookPage />} />

          <Route path='challenges' element={<ChallengesLayout />}>
            <Route index element={<ChallengesMainPage />} />
            <Route path='topics/:category' element={<ChallengesMainPage />} />
            <Route path='topics/:category/:challengeSlug' element={<TrainingChallengePage />} />
            <Route path='level-one' element={<LevelOne />} />
            <Route path='level-one/:exerciseSlug' element={<LevelOne />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
