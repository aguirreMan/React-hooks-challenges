import { Outlet } from 'react-router-dom'

export default function ChallengesLayout() {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="w-full mb-8 pb-6 border-b border-slate-800">
        <div className="mb-1 text-sm font-medium text-blue-400 uppercase tracking-widest">Practice</div>
        <h1 className='text-3xl font-bold text-white'>React Challenges</h1>
        <p className="mt-1 text-slate-400">Pick a level and start building.</p>
      </div>

      {/* The nested route content goes here */}
      <Outlet />
    </div>
  )
}
