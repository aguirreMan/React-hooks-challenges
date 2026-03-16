export default function Home() {
    return (
        <section className="py-16">
            <div className="mb-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                React Learning Platform
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
                Welcome to{' '}
                <span className="text-blue-400">React Playground</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
                Deep dives into modern React best practices — tailored for any level,
                from complete beginners to advanced developers.
            </p>
            <div className="mt-8 flex gap-4">
                <a
                    href="/challenges"
                    className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
                >
                    Start Challenges
                </a>
                <a
                    href="/hooks"
                    className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                    Learn Hooks
                </a>
            </div>
        </section>
    )
}
