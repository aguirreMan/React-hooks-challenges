import { useState, useEffect } from 'react'
import TimerChallenge from '../challenges-v2/level-one/TimerChallenge'
import FormChallenge from '../challenges-v2/level-one/FormChallenge'
import Counter from '../challenges-v2/level-one/Counter'
import CharacterCounter from '../challenges-v2/level-one/CharacterCounter'
import SearchableList from '../challenges-v2/level-one/SearchableList'
import ThemeToggle from '../challenges-v2/level-one/ThemeToggle'
import UserList from '../challenges-v2/level-one/UserList'
import UserPosts from '../challenges-v2/level-one/UserPosts'
import LevelOneFinals from '../challenges-v2/level-one/LevelOneFinals'

export default function LevelOne() {
  const [sectionTheme, setSectionTheme] = useState('light')

  useEffect(() => {
    const savedSectionTheme = localStorage.getItem('preffered-theme')
    if (savedSectionTheme) {
      setSectionTheme(savedSectionTheme)
    }
  }, []) // So here we do not initialize anything in the array meaning only once will this effect run

  useEffect(() => {
    localStorage.setItem('preffered-theme', sectionTheme)
  }, [sectionTheme])

  function toggleTheme() {
    setSectionTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }
    return (
      <div className='space-y-8'>

        <section className={`rounded-lg p-6 shadow ${
                    sectionTheme === 'dark'? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}>
                    <h2 className='mb-4 text-xl font-semibold'>Theme Toggle</h2>
                    {/*pass in the theme  */}
                    <ThemeToggle currentTheme={sectionTheme} onThemeChange={toggleTheme} />
                    <p className="mt-4">This text's color changes with the theme toggle above!</p>
                </section>

        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>Filter fruits</h2>
            <SearchableList />
        </section>

        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>Character Counter</h2>
            <CharacterCounter />
        </section>

        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>Counter</h2>
            <Counter />
        </section>


            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Timer Challenge</h2>
                <TimerChallenge />
            </section>

            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Form Challenge</h2>
                <FormChallenge />
        </section>

        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>User List</h2>
            <UserList />
        </section>
        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>User Posts</h2>
            <UserPosts />
        </section>

        <section className='rounded-lg bg-slate-900 p-6 shadow'>
            <h2 className='mb-4 text-xl font-semibold'>Level one finals</h2>
            <LevelOneFinals />
        </section>

        </div>
    )
}
