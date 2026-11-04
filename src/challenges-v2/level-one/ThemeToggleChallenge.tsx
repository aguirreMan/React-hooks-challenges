import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function ThemeToggleChallenge() {
  const [sectionTheme, setSectionTheme] = useState<'light' | 'dark'>(
    () => localStorage.getItem('preffered-theme') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    localStorage.setItem('preffered-theme', sectionTheme)
  }, [sectionTheme])

  function toggleTheme() {
    setSectionTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`rounded-lg p-4 ${sectionTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <ThemeToggle currentTheme={sectionTheme} onThemeChange={toggleTheme} />
      <p className="mt-4">This text's color changes with the theme toggle above!</p>
    </div>
  )
}
