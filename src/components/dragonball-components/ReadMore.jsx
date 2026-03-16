import { useState } from 'react'

export default function ReadMore({ text, amount = 50 }) {
  const [readMore, setReadMore] = useState(false)

  function toggleReadMore() {
    setReadMore(!readMore)
  }
  return (
    <p className="text-gray-300 text-sm leading-relaxed">
      {readMore ? text : text.slice(0, amount)}
      {text.length > amount && (
        <button
          onClick={toggleReadMore}
          className="ml-2 text-orange-400 font-black uppercase tracking-wider text-xs hover:text-yellow-400 transition-colors duration-200 border border-orange-500/50 hover:border-yellow-400/70 rounded px-2 py-0.5"
        >
          {readMore ? '▲ Less' : '▼ More'}
        </button>
      )}
    </p>
  )
}
