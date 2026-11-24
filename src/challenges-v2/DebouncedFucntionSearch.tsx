import { useState, useMemo } from 'react'
import { debounce } from '../concepts/debounce/debounce'

export default function Search() {
    const [query, setQuery] = useState('')
    const [searches, setSearches] = useState<string[]>([])

    const handleSearch = useMemo(() => {
        return debounce((value: string) => {
            const trimmed = value.trim()
            if (!trimmed) return

            setSearches(prev => [...prev, value])
        })
    }, [])

    return (
        <div className="space-y-3">
            <label className="block">
                Search query
                <input
                    className="mt-1 block w-full rounded border border-slate-700 bg-slate-900 px-3 py-2"
                    value={query}
                    onChange={event => {
                        const value = event.target.value
                        setQuery(value)
                        handleSearch(value)
                    }}
                />
            </label>
            <p>Searches run: {searches.length}</p>
            <ol aria-label="Search history" className="list-decimal pl-5">
                {searches.map((value, index) => <li key={index}>{value}</li>)}
            </ol>
        </div>
    )
}
