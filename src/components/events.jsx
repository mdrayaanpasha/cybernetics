import { useRef, useState } from 'react';
import { useDarkModeStore } from "../stores/darkmode";
import v1 from "../assets/videos/Multiplixer.mp4";
import v2 from "../assets/videos/Syntaxia.mp4";

export default function Events() {
    const { darkMode } = useDarkModeStore();
    const [hoveredCard, setHoveredCard] = useState(null);
    const videoRefs = [useRef(null), useRef(null)];

    const handleVideoHover = (index) => {
        setHoveredCard(index);
        videoRefs[index].current.play();
    };

    return (
        <section className={`relative px-4 py-20 md:py-28 transition-colors duration-300 ${darkMode ? "bg-[#0a0a14]" : "bg-[#fafcff]"}`}>
            {/* Animated cosmic background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/15 to-transparent blur-3xl animate-pulse-medium" />
                <div className={`absolute inset-0 bg-[url('/grid.svg')] ${darkMode ? 'opacity-[0.03]' : 'opacity-[0.08]'} mix-blend-soft-light`} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold font-clash-display bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent tracking-tight">
                        <span className="inline-block mr-3 animate-bounce">🚀</span>
                        Mission: Engage
                    </h2>
                    <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? "text-cyan-100/80" : "text-indigo-900/80"} font-light`}>
                        Two programs. Two energies. One core protocol — <span className="font-medium">code hard, vibe harder</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            video: v1,
                            tag: "#LOCAL",
                            title: "Multiplexer",
                            description: "Internal ops only. Code, crack, conquer — this is where Josephites test each other before we test the world.",
                            accent: "cyan",
                            emoji: "💻"
                        },
                        {
                            video: v2,
                            tag: "#GLOBAL",
                            title: "Syntaxia",
                            description: "Intercollegiate carnage. Big brains from all over gather here to flex, fight, and fire up the IDEs.",
                            accent: "purple",
                            emoji: "🌎"
                        }
                    ].map((event, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-3xl border transition-all duration-500 ease-out ${darkMode ? "border-white/10" : "border-black/10"} 
                                ${hoveredCard === index ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}`}
                            onMouseEnter={() => handleVideoHover(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                background: darkMode
                                    ? 'radial-gradient(150% 150% at 50% 100%, rgba(26, 32, 45, 0.5) 0%, rgba(9, 10, 15, 0.8) 70%)'
                                    : 'radial-gradient(150% 150% at 50% 100%, rgba(255, 255, 255, 0.7) 0%, rgba(240, 245, 255, 0.9) 70%)',
                                backdropFilter: 'blur(12px)'
                            }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${hoveredCard === index ? `opacity-100` : 'opacity-0'} 
                                ${event.accent === 'cyan' ? 'bg-cyan-500/10' : 'bg-purple-500/10'}`} />

                            <div className="relative h-72 overflow-hidden">
                                <video
                                    ref={videoRefs[index]}
                                    src={event.video}
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                            </div>

                            <div className="p-5 md:p-6 relative z-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono mb-2 ${darkMode ? 'bg-black/40 text-cyan-300' : 'bg-white/70 text-cyan-600'}`}>
                                            {event.tag}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                                            {event.emoji} {event.title}
                                        </h3>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/10' : 'bg-black/10'} ${hoveredCard === index ? 'rotate-12 scale-110' : ''}`}>
                                        <span className="text-lg">→</span>
                                    </div>
                                </div>
                                <p className={`mt-3 text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-700"} transition-all duration-500 ${hoveredCard === index ? 'translate-y-0' : 'md:translate-y-1'} ${hoveredCard === index ? 'opacity-100' : 'md:opacity-90'}`}>
                                    {event.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className={`absolute bottom-4 left-6 h-1 rounded-full transition-all duration-500 ease-out ${hoveredCard === index ? 'w-20' : 'w-8'} ${event.accent === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}