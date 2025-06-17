import { useDarkModeStore } from "../stores/darkmode";
export default function Homepagelanding() {
    const { darkMode, toggleDarkMode } = useDarkModeStore();

    return (
        <>
            <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
                {/* 🔮 Animated Gradient Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-700/20 opacity-30"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                {/* 🧬 Matrix Glyphs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-green-400 opacity-20"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                fontSize: `${Math.random() * 24 + 8}px`,
                                animation: `fall ${Math.random() * 10 + 5}s linear infinite`
                            }}
                        >
                            {String.fromCharCode(0x30A0 + Math.random() * 96)}
                        </div>
                    ))}
                </div>

                <button
                    onClick={toggleDarkMode}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/20 backdrop-blur-lg z-10"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>


                {/* 🧠 Main Hero Content */}
                <div className="relative z-10 text-center">
                    {/* Glitched Title */}
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-clash-display font-extrabold tracking-tight relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            CYBERNETICS
                        </span>
                        <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-glitch pointer-events-none">
                            CYBERNETICS
                        </span>
                    </h1>

                    {/* 💻 Animated Tagline */}
                    <div className="mt-6 text-lg sm:text-xl text-gray-400 font-mono">
                        <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white pr-2">
                            Initializing human-machine symbiosis...
                        </span>
                    </div>

                    {/* 🧠 Lore Drop */}
                    <p className="mt-6 text-xl sm:text-2xl text-gray-800 dark:text-white/80 max-w-xl mx-auto">
                        A collective of minds at the edge of artificial intelligence, ethics, and systems design.
                    </p>


                    {/* 🚀 CTA Button */}
                    <button className="mt-10 px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg">
                        Enter the Nexus
                    </button>
                </div>
            </section>

        </>
    )
}