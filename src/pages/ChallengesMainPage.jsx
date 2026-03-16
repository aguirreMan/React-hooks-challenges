import { Link } from 'react-router-dom'
import LevelBlock from '../components/LevelBlock'

export default function ChallengesMainPage() {
  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
      <Link to='level-one'>
        <LevelBlock level={{ title: 'Beginner', description: 'Learn the basics of React' }} />
      </Link>
      <Link to='level-two'>
        <LevelBlock level={{title: 'Intermediate', description: 'Learn more advanced React concepts'}} />
      </Link>
    </div>
  </>
  )
}
