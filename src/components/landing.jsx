import { useState, useEffect } from 'react';
import { useDarkModeStore } from "../stores/darkmode";

export default function Homepagelanding() {
    const { darkMode, toggleDarkMode } = useDarkModeStore();
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [emojiPositions] = useState(() =>
        Array.from({ length: 15 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 0.5 + 0.7,
            speed: Math.random() * 2 + 1,
            rotation: Math.random() * 360
        }))
    );

    const taglines = [
        "hackathon grindset only 🚀",
        "debugging since 2am 😵‍💫",
        "ctrl + alt + slay 💅",
        "404 sleep not found 🛌",
        "sudo rm -rf bad_vibes ✨",
        "git commit -m 'fixed my life' 💾"
    ];

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setTaglineIndex(prev => (prev + 1) % taglines.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* 🌌 Cosmic Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 ${darkMode ? 'bg-[#0a0618]' : 'bg-[#f9f5ff]'}`}></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.3), transparent 40%), radial-gradient(circle at 70% 60%, rgba(192, 132, 252, 0.3), transparent 40%)'
                            : 'radial-gradient(circle at 30% 40%, rgba(14, 165, 233, 0.1), transparent 40%), radial-gradient(circle at 70% 60%, rgba(192, 132, 252, 0.1), transparent 40%)'
                    }}
                ></div>

                {/* ✨ Floating Emoji Particles */}
                {emojiPositions.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                            top: `${pos.y}%`,
                            left: `${pos.x}%`,
                            opacity: 0.3,
                            fontSize: `${pos.size}rem`,
                            transform: `rotate(${pos.rotation}deg)`,
                            animation: `float ${pos.speed * 8 + 4}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    >
                        {['👾', '💻', '🔥', '🚀', '✨', '🤖', '🎮', '🧠', '⚡', '💾', '😎', '🥵', '😈', '🤯', '💅'][i % 15]}
                    </div>
                ))}
            </div>

            {/* 📱 Mobile-First Content */}
            <div className="relative z-10 w-full max-w-3xl text-center">
                {/* 🎮 Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className={`fixed top-4 right-4 p-3 rounded-full z-20 ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
                    style={{ backdropFilter: 'blur(10px)' }}
                    aria-label="Toggle dark mode"
                >
                    <span className="text-2xl">{darkMode ? '🌞' : '🌚'}</span>
                </button>

                {/* 🚀 Main Content with Smooth Animations */}
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Cybernetics Title - Mobile Optimized */}
                    <div className="mb-6 md:mb-8 px-2">
                        <h1
                            className={`font-extrabold tracking-tight ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'}`}
                            style={{
                                fontSize: 'clamp(2.5rem, 12vw, 5rem)',
                                lineHeight: '1.1'
                            }}
                        >
                            CYBERNETICS
                        </h1>
                    </div>

                    {/* 💬 Savage Tagline */}
                    <div className="mb-6 md:mb-8">
                        <div className="inline-block max-w-full">
                            <div className={`text-sm sm:text-base font-medium px-4 py-2 rounded-full ${darkMode ? 'bg-white/10 text-cyan-200' : 'bg-black/10 text-purple-800'} transition-all duration-500`}>
                                <span className="block min-h-[1.5em]">{taglines[taglineIndex]}</span>
                            </div>
                        </div>
                    </div>

                    {/* 💅 Gen-Z Quote */}
                    <p className={`text-base md:text-lg max-w-md mx-auto mb-8 px-4 ${darkMode ? 'text-cyan-100/80' : 'text-purple-900/80'}`}>
                        Trying to create a community, who talks & lives code.
                    </p>

                    {/* 🎮 CTA Button */}
                    <button
                        className={`relative px-5 py-3 sm:px-6 sm:py-4 rounded-full font-bold overflow-hidden group transition-all duration-300 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} text-base sm:text-lg`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span className="group-hover:rotate-90 transition-transform duration-300 text-xl">👾</span>
                            <span>enter the matrix</span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </span>
                        <span
                            className={`absolute inset-0 rounded-full z-0 transition-all duration-500 ${darkMode ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}
                            style={{
                                opacity: 0,
                                transform: 'scale(0.9)',
                                filter: 'blur(10px)'
                            }}
                        />
                    </button>


                </div>
            </div>

            {/* 📟 Console Footer */}
            <div className={`fixed bottom-0 left-0 right-0 py-3 px-4 text-[0.6rem] sm:text-xs font-mono ${darkMode ? 'text-green-400/50' : 'text-purple-900/50'}`}>
                <div className="max-w-6xl mx-auto text-center sm:text-left">
                    <span className="block sm:inline">sju@cybernetics:~$ vibe_check</span>
                    <span className="hidden sm:inline"> • </span>
                    <span className="block sm:inline mt-1 sm:mt-0">status: online & slaying</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { 
                        transform: translateY(0) translateX(0) rotate(0deg);
                    }
                    25% { 
                        transform: translateY(-15px) translateX(5px) rotate(5deg);
                    }
                    50% { 
                        transform: translateY(-30px) translateX(-5px) rotate(-5deg);
                    }
                    75% { 
                        transform: translateY(-15px) translateX(5px) rotate(5deg);
                    }
                    100% { 
                        transform: translateY(0) translateX(0) rotate(0deg);
                    }
                }
                
                /* Mobile-specific optimizations */
                @media (max-width: 640px) {
                    button {
                        padding: 0.75rem 1.25rem;
                        font-size: 1rem;
                    }
                    
                    .text-base {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );
}