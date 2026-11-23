import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
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
import CustomHooksPage from './pages/CustomHooksPage'
import ComponentsPage from './pages/ComponentsPage'
import ConceptsPage from './pages/ConceptsPage'

function ProductSearchRedirect() {
  const { search, hash } = useLocation()
  return <Navigate replace to={{ pathname: '/challenges/topics/custom-hooks/debounced-search', search, hash }} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='learn' element={<LearnPage />} />
          <Route path='learn/:slug' element={<LessonPage />} />
          <Route path='concepts/:slug?' element={<ConceptsPage />} />
          <Route path='hooks' element={<HooksMainPage />} />
          <Route path='hooks/:hook' element={<HookPage />} />
          <Route path='hooks/:hook/:lessonSlug' element={<HookPage />} />
          <Route path='custom-hooks/:hook?' element={<CustomHooksPage />} />
          <Route path='components/:lessonSlug?' element={<ComponentsPage />} />

          <Route path='challenges' element={<ChallengesLayout />}>
            <Route index element={<ChallengesMainPage />} />
            <Route path='topics/:category' element={<ChallengesMainPage />} />
            <Route path='topics/custom-hooks/product-search' element={<ProductSearchRedirect />} />
            <Route path='topics/:category/:challengeSlug' element={<TrainingChallengePage />} />
            <Route path='level-one' element={<LevelOne />} />
            <Route path='level-one/:exerciseSlug' element={<LevelOne />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
