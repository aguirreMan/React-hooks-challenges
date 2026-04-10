import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChallengesMainPage from './pages/ChallengesMainPage'
import ChallengesLayout from './components/ChallengesLayout'
import HooksMainPage from './pages/HooksMainPage'
import LevelOne from './pages/LevelOne'
import LevelTwo from './pages/LevelTwo'
import DragonBallApp from './challenges-v2/level-two/dragonball-app/DragonballApp'
import DragonBallCharacterPage from './pages/DragonBallCharacterPage'
import UseStatePage from './pages/hooks/UseStatePage'
import UseEffectPage from './pages/hooks/UseEffectPage'
import UseRefPage from './pages/hooks/UseRefPage'
import UseContextPage from './pages/hooks/UseContextPage'
import UseReducerPage from './pages/hooks/UseReducerPage'
import UseMemoPage from './pages/hooks/UseMemoPage'
import UseCallbackPage from './pages/hooks/UseCallbackPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hooks' element={<HooksMainPage />} />
          <Route path='hooks/usestate' element={<UseStatePage />} />
          <Route path='hooks/useeffect' element={<UseEffectPage />} />
          <Route path='hooks/useref' element={<UseRefPage />} />
          <Route path='hooks/usecontext' element={<UseContextPage />} />
          <Route path='hooks/usereducer' element={<UseReducerPage />} />
          <Route path='hooks/usememo' element={<UseMemoPage />} />
          <Route path='hooks/usecallback' element={<UseCallbackPage />} />

          <Route path='challenges' element={<ChallengesLayout />}>
            <Route index element={<ChallengesMainPage />} />
            <Route path='level-one' element={<LevelOne />} />
            <Route path='level-two' element={<LevelTwo />} />
            <Route path="level-two/dragonball-app" element={<DragonBallApp />} />
            <Route path="level-two/dragonball-app/character/:id" element={<DragonBallCharacterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
