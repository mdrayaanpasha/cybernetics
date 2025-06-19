import { useState } from 'react';
import { useDarkModeStore } from "../stores/darkmode";
import sjuwin from "../assets/images/sju-winning.jpg";

export default function About() {
    const { darkMode } = useDarkModeStore();
    const [hovered, setHovered] = useState(false);

    return (
        <section
            id="about"
            className={`relative min-h-screen flex items-center justify-center py-12 md:py-16 px-4 transition-colors duration-500 overflow-hidden
                ${darkMode ? "bg-gradient-to-br from-[#05050a] to-[#0f0f1a]" : "bg-gradient-to-br from-[#f0f5ff] to-[#e6f0ff]"}`}
        >
            {/* Background Blobs & Grid */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(192, 132, 252, 0.2) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '0s'
                    }} />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(56, 189, 248, 0.2) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '-4s'
                    }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-screen animate-blob"
                    style={{
                        background: darkMode
                            ? 'radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                        filter: 'blur(45px)',
                        animationDelay: '-8s'
                    }} />
                <div className={`absolute inset-0 bg-[url('/grid.svg')] ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.1]'}`}
                    style={{ mixBlendMode: 'soft-light' }} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center h-full">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-5xl md:text-7xl font-extrabold font-clash-display tracking-tighter leading-tight"
                        style={{
                            background: 'linear-gradient(to right, #8b5cf6, #38bdf8, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Cybernetics @ SJU
                    </h2>
                    <p className={`mt-5 text-xl md:text-2xl max-w-3xl mx-auto font-medium ${darkMode ? "text-cyan-100/90" : "text-indigo-900/90"}`}>
                        Official CS tribe of <span className="font-extrabold" style={{
                            background: 'linear-gradient(to right, #8b5cf6, #38bdf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>St. Joseph's University</span>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-16 w-full">
                    {/* Image */}
                    <div
                        className="w-full lg:w-1/2 relative rounded-3xl p-1 group flex"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{
                            background: hovered
                                ? 'linear-gradient(to right, #8b5cf6, #38bdf8)'
                                : 'transparent',
                            transition: 'background 0.5s ease-out',
                        }}
                    >
                        <div
                            className="relative overflow-hidden rounded-[calc(1.5rem-1px)] transition-all duration-700 flex-grow"
                            style={{
                                transform: hovered ? 'scale(1.02) perspective(1000px) rotateY(-2deg)' : 'scale(1)',
                                transformStyle: 'preserve-3d',
                                boxShadow: hovered
                                    ? darkMode
                                        ? '0 35px 65px -15px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(139, 92, 246, 0.15)'
                                        : '0 35px 65px -15px rgba(0, 0, 0, 0.25), inset 0 0 60px rgba(192, 132, 252, 0.1)'
                                    : '0 20px 30px -8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <img
                                src={sjuwin}
                                alt="Cybernetics team winning"
                                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out"
                                style={{ transformOrigin: 'center' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex">
                        <div
                            className="p-8 md:p-10 rounded-3xl transition-all duration-500 flex-grow flex flex-col justify-between"
                            style={{
                                backdropFilter: 'blur(15px)',
                                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                                boxShadow: darkMode
                                    ? '0 15px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(165, 243, 252, 0.08)'
                                    : '0 15px 50px rgba(0,0,0,0.15), inset 0 0 30px rgba(192, 132, 252, 0.05)'
                            }}
                        >
                            <div>
                                <p className={`text-xl md:text-2xl mb-5 font-light leading-relaxed ${darkMode ? "text-cyan-50" : "text-indigo-950"}`}>
                                    We’re the <span className="font-bold" style={{
                                        background: 'linear-gradient(to right, #8b5cf6, #38bdf8)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>digital command center</span> at <span className="font-bold">St. Joseph's University</span>
                                </p>

                                <p className={`text-lg md:text-xl mb-5 font-light leading-relaxed ${darkMode ? "text-cyan-100/85" : "text-indigo-900/85"}`}>
                                    We're not just keyboard warriors. we're a tribe of caffeine-fueled code wizards building the future between 2 AM debugging sessions.                                </p>

                                <p className={`text-lg md:text-xl mb-8 font-light leading-relaxed ${darkMode ? "text-cyan-100/85" : "text-indigo-900/85"}`}>
                                    Hackathons? Our playground. Tech meltdowns? Our therapy. World domination? Just another Tuesday.                                </p>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://instagram.com/cybernetics.sju"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 text-md font-bold rounded-full transition-all duration-500 group relative overflow-hidden self-start"
                                style={{
                                    background: 'linear-gradient(45deg, #8b5cf6 0%, #38bdf8 100%)',
                                    boxShadow: '0 8px 30px rgba(139, 92, 246, 0.5)',
                                    color: '#ffffff',
                                    zIndex: 1
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 45px rgba(139, 92, 246, 0.7)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.5)';
                                }}
                            >
                                <span className="relative z-10">Follow our journey on Instagram</span>
                                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">→</span>
                                <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                            </a>

                            {/* Progress Indicator */}
                            <div className="flex mt-8 gap-3">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-2 rounded-full transition-all duration-700 ease-out
                                            ${hovered ? 'w-10 transform translate-y-[-2px]' : 'w-5'}
                                            ${i === 1 ? 'bg-purple-500' : i === 2 ? 'bg-sky-400' : 'bg-pink-500'}`}
                                        style={{
                                            boxShadow: hovered ? '0 0 10px rgba(255,255,255,0.4)' : 'none'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframes */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
            `}</style>
        </section>
    );
}
