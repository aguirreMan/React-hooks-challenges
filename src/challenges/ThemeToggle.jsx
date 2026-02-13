export default function ThemeToggle({currentTheme, onThemeChange}) {

  const toggleClasses = currentTheme === 'dark' ? 'bg-gray-700' : 'bg-blue-500'
  const indicatorClasses = currentTheme === 'dark'? 'translate-x-full' : 'translate-x-0'
  return (
    <div className="flex items-center gap-2">
          {/* Label for 'light' theme */}
          <span className={`text-sm font-medium ${currentTheme === 'light'? 'text-blue-500' : 'text-gray-400'}`}>Light</span>
          <div
            className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${toggleClasses}`}
            onClick={onThemeChange}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${indicatorClasses}`}
            />
          </div>
          {/* Label for 'dark' theme */}
          <span className={`text-sm font-medium ${currentTheme === 'dark'? 'text-gray-300' : 'text-gray-600'}`}>Dark</span>
        </div>
  )
}
