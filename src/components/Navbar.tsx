import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
            {/* Left: Brand */}
            <span className="text-lg font-semibold tracking-wide">
                React Playground
            </span>

            {/* Right: Links */}
            <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-400'
                            : 'text-slate-300 hover:text-white transition-colors'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/learn"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-400'
                            : 'text-slate-300 hover:text-white transition-colors'
                    }
                >
                    Learn
                </NavLink>

                <NavLink
                    to="/hooks"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-400'
                            : 'text-slate-300 hover:text-white transition-colors'
                    }
                >
                    Hooks
                </NavLink>

                <NavLink
                    to="/challenges"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-400'
                            : 'text-slate-300 hover:text-white transition-colors'
                    }
                >
                    Challenges
          </NavLink>
            </div>
        </nav>
    )
}
