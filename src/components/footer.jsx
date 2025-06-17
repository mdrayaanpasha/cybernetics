import { useDarkModeStore } from "../stores/darkmode";

export default function Footer() {
    const { darkMode } = useDarkModeStore();

    return (
        <footer
            className={`mt-20 text-center transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                }`}
        >
            <div className="flex justify-center space-x-8 mb-6">
                {["GitHub", "X", "LinkedIn", "Discord"].map((platform, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`font-mono transition-colors ${darkMode
                            ? "hover:text-cyan-400 text-gray-300"
                            : "hover:text-cyan-600 text-gray-700"
                            }`}
                    >
                        {platform}
                    </a>
                ))}
            </div>
            <p className={`transition-opacity ${darkMode ? "opacity-60" : "opacity-80"}`}>
                CYBERNETICS @ 2025 — ARCHITECTING TOMORROW
            </p>
        </footer>
    );
}
