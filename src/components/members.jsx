import { useState } from 'react'; // Import useState for interactive elements
import { useDarkModeStore } from "../stores/darkmode";

export default function Members() {
    const { darkMode } = useDarkModeStore();
    const [activeCard, setActiveCard] = useState(null); // State to manage active card for hover effects

    // Mock image imports - replace with actual imports
    const memberImages = [
        "https://via.placeholder.com/150/6366f1/ffffff?text=M", // Monisha
        "https://via.placeholder.com/150/8b5cf6/ffffff?text=T", // Tushar
        "https://via.placeholder.com/150/ec4899/ffffff?text=S", // Sodagum
        "https://via.placeholder.com/150/14b8a6/ffffff?text=A", // Aniketh
        "https://via.placeholder.com/150/f43f5e/ffffff?text=G", // Gopika
        "https://via.placeholder.com/150/0ea5e9/ffffff?text=S", // Shashwat
        "https://via.placeholder.com/150/a855f7/ffffff?text=S", // Simra
        "https://via.placeholder.com/150/ef4444/ffffff?text=A", // Abinav
        "https://via.placeholder.com/150/f97316/ffffff?text=A", // Aashika
        "https://via.placeholder.com/150/10b981/ffffff?text=A", // Anandita
        "https://via.placeholder.com/150/3b82f6/ffffff?text=R", // Renu
        "https://via.placeholder.com/150/f59e0b/ffffff?text=M", // Mohammad
        "https://via.placeholder.com/150/06b6d4/ffffff?text=A", // Abel
        "https://via.placeholder.com/150/d946ef/ffffff?text=A", // Aqeel
        "https://via.placeholder.com/150/84cc16/ffffff?text=A", // Anitha
        "https://via.placeholder.com/150/64748b/ffffff?text=A", // Allendon
    ];

    const coreMembers = [
        { role: "President", name: "Monisha S", quote: "Let’s build legacies, not just projects." },
        { role: "Vice President", name: "Tushar Tiwari", quote: "If it runs on logic and chaos, count me in." },
        { role: "General Secretary", name: "Sodagum Venkata Kaushik", quote: "Paperwork, pipelines, progress." },
        { role: "General Secretary", name: "Aniketh B", quote: "Imagination is the root protocol." },
        { role: "General Secretary", name: "Gopika", quote: "Where logic meets aesthetic... we exist." },
        { role: "Treasurer", name: "Shashwat Kumar Jha", quote: "Budgeting caffeine, chaos, and code since 2023." },
        { role: "Head of Operations", name: "Simra Fatima", quote: "I make sure madness makes it to the stage." },
        { role: "Head of Operations", name: "Abinav Shukla", quote: "Everything that works — blame me. Everything that breaks — still me." },
        { role: "Head of PR & Marketing", name: "Aashika Menon", quote: "A brand is a vibe. Cybernetics? That’s a whole frequency." },
        { role: "Head of Graphic Design", name: "Anandita Malik", quote: "Pixels speak louder than words." },
        { role: "Head of IT", name: "Renu Thomas", quote: "We debug reality, one script at a time." },
        { role: "Head of IT", name: "Mohammad Ryan Pasha", quote: "Ship fast. Break myths. Automate the boring." },
        { role: "Head of Social Media", name: "Abel Philip", quote: "Turning moments into momentum." },
        { role: "Head of Logistics", name: "Aqeel", quote: "Behind every great event is a spreadsheet running on fumes." },
        { role: "Head of Documentation", name: "Anitha Patel", quote: "Chaos documented is history in the making." },
        { role: "Head of Art & Decor", name: "Allendon X Bernard", quote: "We don’t decorate — we dimensionalize." },
    ];

    return (
        <section
            className={`py-24 px-4 relative overflow-hidden transition-colors duration-500
                ${darkMode ? "bg-gradient-to-br from-[#05050a] to-[#0f0f1a]" : "bg-gradient-to-br from-[#f0f5ff] to-[#e6f0ff]"}`
            }
        >
            {/* Cosmic background elements with enhanced glow and movement */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(192, 132, 252, 0.2) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '0s'
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(56, 189, 248, 0.2) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '-4s'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '-8s'
                    }}
                />
                <div
                    className={`absolute inset-0 bg-[url('/grid.svg')] ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.1]'}`}
                    style={{ mixBlendMode: 'soft-light' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto"> {/* Increased max-width */}
                <div className="text-center mb-16">
                    <h2
                        className="text-5xl md:text-7xl font-extrabold font-clash-display tracking-tight leading-tight"
                        style={{
                            background: 'linear-gradient(to right, #0ea5e9, #8b5cf6, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        ⚡ Meet the Core
                    </h2>
                    <p className={`mt-5 text-xl md:text-2xl max-w-3xl mx-auto font-medium ${darkMode ? "text-cyan-100/90" : "text-indigo-900/90"}`}>
                        The Cybernetics Association, 2025–26. Not just a committee — a <span className="font-extrabold" style={{
                            background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>command line</span>.
                    </p>
                </div>

                {/* Horizontal scroll container */}
                <div className="relative">
                    <div className="flex overflow-x-auto pb-10 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
                        {coreMembers.map((member, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-72 md:w-80 lg:w-96 mx-4 snap-center group" // Slightly wider cards, added group
                                onMouseEnter={() => setActiveCard(i)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div
                                    className={`h-full p-6 rounded-3xl transition-all duration-500 transform ${activeCard === i ? 'scale-[1.02] shadow-3xl' : 'scale-100'} ${darkMode ? 'bg-gray-900/40 border border-transparent hover:border-blue-500/30' : 'bg-white/70 border border-transparent hover:border-purple-500/20'}`}
                                    style={{
                                        backdropFilter: 'blur(15px)',
                                        boxShadow: activeCard === i
                                            ? darkMode
                                                ? '0 25px 50px rgba(0,0,0,0.6), inset 0 0 40px rgba(56, 189, 248, 0.15)'
                                                : '0 25px 50px rgba(0,0,0,0.2), inset 0 0 40px rgba(192, 132, 252, 0.1)'
                                            : darkMode
                                                ? '0 10px 20px rgba(0,0,0,0.3)'
                                                : '0 10px 20px rgba(0,0,0,0.08)'
                                    }}
                                >
                                    {/* Member image */}
                                    <div className="relative mb-6">
                                        <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 transform transition-transform duration-500 group-hover:scale-105"
                                            style={{
                                                borderColor: activeCard === i
                                                    ? (darkMode ? 'rgba(56, 189, 248, 0.6)' : 'rgba(139, 92, 246, 0.4)')
                                                    : (darkMode ? 'rgba(56, 189, 248, 0.3)' : 'rgba(139, 92, 246, 0.2)'),
                                                boxShadow: activeCard === i ? '0 0 20px rgba(56, 189, 248, 0.4)' : 'none'
                                            }}
                                        >
                                            <img
                                                src={memberImages[i]}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-110"
                                            />
                                        </div>
                                        <div
                                            className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform duration-500 ${activeCard === i ? 'scale-110 rotate-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'scale-90 bg-white/20 text-gray-400'
                                                }`}
                                            style={{
                                                backdropFilter: 'blur(8px)',
                                            }}
                                        >
                                            <span className="opacity-90">🚀</span>
                                        </div>
                                    </div>

                                    {/* Member info */}
                                    <div className="text-center">
                                        <h3 className={`text-sm uppercase tracking-widest mb-1 font-semibold ${darkMode ? 'text-cyan-400' : 'text-purple-600'
                                            }`}>
                                            {member.role}
                                        </h3>
                                        <h4 className={`text-2xl font-bold font-clash-display ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {member.name}
                                        </h4>
                                    </div>

                                    {/* Speech bubble */}
                                    <div className="mt-8 relative"> {/* Adjusted margin-top */}
                                        <div
                                            className={`relative p-5 rounded-2xl transition-colors duration-300 ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/90'
                                                }`}
                                            style={{
                                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 80% 80%, 75% 100%, 70% 80%, 0% 80%)'
                                            }}
                                        >
                                            <p className={`text-md italic font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}>
                                                "{member.quote}"
                                            </p>
                                        </div>
                                        <div
                                            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45 transition-colors duration-300 ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/90'
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll hint with dynamic fill */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6"> {/* Adjusted margin-top */}
                        <div className={`w-48 h-1.5 rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
                                style={{ width: `${(coreMembers.length > 0 ? (100 / coreMembers.length) : 0) * (activeCard !== null ? (activeCard + 1) : 0)}%` }} // Dynamic width based on active card
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}