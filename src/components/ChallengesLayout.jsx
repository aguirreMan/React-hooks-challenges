import { Outlet } from 'react-router-dom'

export default function ChallengesLayout() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-6'>React Challenges</h1>

      {/* The nested route content goes here */}
      <Outlet />
    </div>
  )
}
