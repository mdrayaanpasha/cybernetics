import { useDarkModeStore } from "../stores/darkmode";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkModeStore();

    const navItems = [
        { name: "Home", href: "#" },
        { name: "Events", href: "#events" },
        { name: "Projects", href: "#projects" },
        { name: "Team", href: "#team" },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors ${darkMode ? "bg-black/60" : "bg-white/10"} border-b border-white/10`}>
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* 🚀 Logo */}
                <a
                    href="#"
                    className="text-2xl font-extrabold tracking-tighter font-clash-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
                >
                    CYBERNETICS
                </a>

                {/* 🛰️ Nav Links */}
                {/* <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`relative px-2 py-1 transition-all duration-200 ${darkMode
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-700 hover:text-black"
                                    }`}
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-cyan-400 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300" />
                            </a>
                        </li>
                    ))}
                </ul> */}

                {/* 🧠 Right Side */}
                <div className="flex items-center gap-4">


                    {/* 🧬 Join CTA */}
                    <a
                        href="#join"
                        className="hidden sm:inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105 transition-transform shadow"
                    >
                        Join Us
                    </a>
                    {/* 🌓 Dark Mode Toggle */}

                    <button

                        onClick={toggleDarkMode}
                        className="p-2 text-xl bg-black/20 rounded-full backdrop-blur-md hover:scale-110 transition-transform"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </nav>
        </header>
    );
}
