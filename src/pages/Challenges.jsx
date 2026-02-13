import { useState, useEffect } from 'react'

import WeatherChallenge from '../challenges/WeatherChallenge'
import TimerChallenge from '../challenges/TimerChallenge'
import FormChallenge from '../challenges/FormChallenge'
import Counter from '../challenges/Counter'
import CharacterCounter from '../challenges/CharacterCounter'
import SearchableList from '../challenges/SearchableList'
import ThemeToggle from '../challenges/ThemeToggle'


export default function Challenges() {
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
                <h2 className='mb-4 text-xl font-semibold'>Weather Challenge</h2>
                <WeatherChallenge />
            </section>

            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Timer Challenge</h2>
                <TimerChallenge />
            </section>

            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Form Challenge</h2>
                <FormChallenge />
            </section>
        </div>
    )
}
