import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Challenges from './pages/Challenges'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/challenges' element={<Challenges />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
