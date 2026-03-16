import LevelBlock from '../components/LevelBlock'
import { Link } from 'react-router-dom'

export default function LevelTwo() {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div>
        <div className="mb-1 text-sm font-medium text-blue-400 uppercase tracking-widest">Level 2</div>
        <h1 className="text-2xl font-bold text-white">Intermediate Challenges</h1>
      </div>
      <Link to='dragonball-app'>
        <LevelBlock level={{ title: 'Intermediate', description: 'Learn more advanced React building a dragonball z app' }} />
      </Link>
    </div>
  )
}
