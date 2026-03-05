import LevelBlock from '../components/LevelBlock'
import { Link } from 'react-router-dom'

export default function LevelTwo() {
  return (
    <div>
      <h1>Welcome to level 2 challenges</h1>
      <Link to='/dragonball-app'>
        <LevelBlock level={{ title: 'Intermediate', description: 'Learn more advanced React building a dragonball z app' }} />
      </Link>
    </div>
  )
}
