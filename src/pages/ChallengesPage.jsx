import { Link } from 'react-router-dom'
import { levels } from '../levels'

export default function ChallengesPage() {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>Challenges</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {levels.map(({ label, path, description }) => (
          <Link
            key={path}
            to={path}
            className='rounded-lg bg-slate-900 p-6 shadow hover:bg-slate-800 transition-colors'
          >
            <h2 className='text-xl font-semibold'>{label}</h2>
            <p className='text-slate-400 mt-1'>{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
