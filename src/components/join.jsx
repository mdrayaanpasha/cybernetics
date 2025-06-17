import { useDarkModeStore } from "../stores/darkmode";

export default function Join() {
    const { darkMode } = useDarkModeStore();

    return (
        <section className="py-20 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-2xl">
                <div
                    className={`rounded-3xl p-12 text-center transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                        }`}
                >
                    <h2 className="text-4xl font-bold mb-6">Plug Into Cybernetics</h2>

                    <button
                        type="submit"
                        className="cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:opacity-90 transition-opacity rounded-full font-bold mt-6 inline-flex items-center"
                    >
                        <span>Initiate Connection</span>
                        <span className="ml-3 animate-pulse">⟳</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
