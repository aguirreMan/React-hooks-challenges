import { useState, useRef, useEffect } from 'react'

export default function CharacterSelect({ value, options, onChange, placeHolder, resetFilter}) {
  const [select, setSelect] = useState(false)
  const selectRef = useRef(null)

  function selectCharacterRace(option) {
    if (!option) return
    // so ideally we need a reset option right
    if (option.value === 'reset') {
      resetFilter()
    } else {
      onChange(option.value)
    }
    if (value === option.value) return

    setSelect(false)
  }
  // here we need an effect that runs when the select is going to change
  useEffect(() => {
    function clearSelect(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSelect(false)
      }
    }
    if (select) {
      document.addEventListener('mousedown', clearSelect)
    }
    return () =>  document.removeEventListener('mousedown', clearSelect)
  }, [select])

  return (
    <div ref={selectRef} className='relative cursor-pointer'>
      <div className='p-3 bg-gray-800 border border-gray-700 text-white rounded-lg flex
        justify-between items-center hover:bg-gray-750 transition-colors min-w-35'
        onClick={() => setSelect(prev => !prev)}
      >
        <span className='text-sm font-medium'>
          {value ? options.find(option => option.value === value)?.label : placeHolder || 'Select an option'}
        </span>
        <span className='ml-2 text-gray-400 transform transition-transform duration-200' style={{ transform: select ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </div>
      {select && (
        <div className='absolute top-full left-0 w-full z-10 mt-1'>
          <ul className='bg-gray-800 border border-gray-700 shadow-xl rounded-lg overflow-hidden'>
            {options?.map(option => (
              <li className={`px-4 py-2 text-sm cursor-pointer transition-colors ${option.value === 'reset'
                  ? 'text-red-400 hover:bg-red-900/20 border-t border-gray-700'
                  : value === option.value
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
                }`}
              key={option.value}
                onClick={() => selectCharacterRace(option)}
              >
              {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

}
