import { Link } from 'react-router-dom'
import LevelBlock from '../components/LevelBlock'

export default function ChallengesMainPage() {
  return (
    <>
    <div className="flex flex-row justify-content gap-4">
        <div className ='pb-6'>
      <Link to='level-one'>
        <LevelBlock level={{ title: 'Beginner', description: 'Learn the basics of React' }} />
    </Link>
    </div>
    <Link to='level-two'>
      <LevelBlock level={{title: 'intermediate', description: 'learn more react concepts'}} />
      </Link>
    </div>
    </>
  )
}
