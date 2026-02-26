import { Link } from 'react-router-dom'
import LevelBlock from '../components/LevelBlock'

export default function ChallengesMainPage() {
  return (
    <div className="flex flex-col items-center">
      <h1>Choose your level of challenge</h1>
      <Link to='level-one'>
        <LevelBlock level={{ title: 'Beginner', description: 'Learn the basics of React' }} />
    </Link>
    </div>
  )
}
