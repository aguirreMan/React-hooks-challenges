import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <Navbar />

      <main className='max-w-5xl mx-auto px-6 py-10'>
        <h1 className='text-3xl font-semibold mb-6'>
          React Playground
        </h1>

        <Outlet />
      </main>
    </div>
  )
}
