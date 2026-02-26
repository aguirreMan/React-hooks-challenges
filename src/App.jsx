import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChallengesMainPage from './pages/ChallengesMainPage'
import ChallengesLayout from './components/ChallengesLayout'
import HooksMainPage from './pages/HooksMainPage'
import LevelOne from './pages/LevelOne'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/hooks' element={<HooksMainPage />} />

          <Route path='challenges' element={<ChallengesLayout />}>
            <Route index element={<ChallengesMainPage />} />
            <Route path='level-one' element={<LevelOne />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
