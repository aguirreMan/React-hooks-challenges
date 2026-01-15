import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
            {/* Left: Brand */}
            <span className="text-lg font-semibold tracking-wide">
                React Playground
            </span>

            {/* Right: Links */}
            <div className="flex gap-6 text-sm font-medium">
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