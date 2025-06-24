import React from 'react';
import sjulogo from "../assets/images/sju-logo.png";

// Lucide Icons
import { Crown, Users, Megaphone, Brush, DollarSign, Laptop, Truck, FileText, Instagram, Settings } from 'lucide-react';

// Icon Map based on designations
const designationIcons = {
    'PRESIDENT': <Crown className="w-4 h-4 text-black/90" />,
    'VICE PRESIDENT': <Users className="w-4 h-8 text-black/90" />,
    'HEAD OF PR & MARKETING': <Megaphone className="w-4 h-8 text-black/90" />,
    'HEAD OF GRAPHIC DESIGN': <Brush className="w-4 h-8 text-black/90" />,
    'HEAD OF SOCIAL MEDIA': <Instagram className="w-4 h-8 text-black/90" />,
    'HEAD OF IT': <Laptop className="w-4 h-8 text-black/90" />,
    'GENERAL SECRETARY': <FileText className="w-4 h-8 text-black/90" />,
    'TREASURER': <DollarSign className="w-4 h-8 text-black/90" />,
    'HEAD OF LOGISTICS': <Truck className="w-4 h-8 text-black/90" />,
    'HEAD OF OPERATIONS': <Settings className="w-4 h-8 text-black/90" />,
    'HEAD OF DOCUMENTATION': <FileText className="w-4 h-8 text-black/90" />,
    'HEAD OF ART & DECOR': <Brush className="w-4 h-8 text-black/90" />,
};

// Badge Data
const badgeData = [
    { role: "PRESIDENT", name: "Monisha S", quote: "Let’s build legacies, not just projects." },
    { role: "VICE PRESIDENT", name: "Tushar Tiwari", quote: "If it runs on logic and chaos, count me in." },
    { role: "GENERAL SECRETARY", name: "SV Kaushik", quote: "Paperwork, pipelines, progress." },
    { role: "GENERAL SECRETARY", name: "Aniketh B", quote: "Imagination is the root protocol." },
    { role: "GENERAL SECRETARY", name: "Gopika K", quote: "Where logic meets aesthetic... we exist." },
    { role: "TREASURER", name: "Shashwat Kumar Jha", quote: "Budgeting caffeine, chaos, and code since 2023." },
    { role: "HEAD OF OPERATIONS", name: "Simra Fatima", quote: "I make sure madness makes it to the stage." },
    { role: "HEAD OF OPERATIONS", name: "Abinav Shukla", quote: "Everything that works — blame me. Everything that breaks — still me." },
    { role: "HEAD OF PR & MARKETING", name: "Aashika S", quote: "A brand is a vibe. Cybernetics? That’s a whole frequency." },
    { role: "HEAD OF GRAPHIC DESIGN", name: "Anandita Malik", quote: "Pixels speak louder than words." },
    { role: "HEAD OF IT", name: "Renu Thomas", quote: "We debug reality, one script at a time." },
    { role: "HEAD OF IT", name: "Rayaan Pasha", quote: "Ship fast. Break myths. Automate the boring." },
    { role: "HEAD OF SOCIAL MEDIA", name: "Abel Philip", quote: "Turning moments into momentum." },
    { role: "HEAD OF LOGISTICS", name: "Aqeel Aslam", quote: "Behind every great event is a spreadsheet running on fumes." },
    { role: "HEAD OF DOCUMENTATION", name: "Anitha Patel", quote: "Chaos documented is history in the making." },
    { role: "HEAD OF ART & DECOR", name: "Allendon X Bernard", quote: "We don’t decorate — we dimensionalize." },
];
const Badge = ({ name, role }) => {
    const icon = designationIcons[role] || <Users className="w-4 h-8 text-black/90" />; // Fallback icon

    return (
        <div className="flex items-center p-5 m-3 bg-white/10 backdrop-blur-lg border border-gray-200 rounded-xl  w-full max-w-xs sm:max-w-sm lg:max-w-md transform transition-all duration-300 hover:bg-white/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">

            {/* Logo with glass effect */}
            <div className="flex-shrink-0 mr-5">
                <div className="bg-white/20 backdrop-blur-sm p-1 rounded-full border border-white/20">
                    <img src={sjulogo} alt="SJU Logo" className="w-12 h-12 object-contain" />
                </div>
            </div>

            {/* Text content */}
            <div className="flex-grow  text-left">
                <center>
                    <p className="text-sm font-bold text-black/80 uppercase tracking-[0.1em] mb-0.5">
                        ST JOSEPH'S UNIVERSITY
                    </p>
                    <p className="text-[0.7rem] font-medium text-black/80 uppercase tracking-[0.1em] mb-2">
                        CYBERNETICS ASSOCIATION
                    </p>

                    <hr className="border border-gray-300" />
                    <h3 className="mt-2 text-xl font-bold text-black/90 uppercase tracking-wide leading-tight">{name}</h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        {icon}
                        <p className="text-sm font-semibold text-black/90 uppercase tracking-wider">{role}</p>
                    </div>
                </center>
            </div>
        </div>
    );
};

const CoreMembersSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br flex flex-col items-center py-12 px-4 font-sans">
            <div className="text-center mb-14 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                        Cybernetics Association
                    </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                    Core Members
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {badgeData.map((badge, index) => (
                    <Badge key={index} name={badge.name} role={badge.role} />
                ))}
            </div>
        </div>
    );
};

export default CoreMembersSection;
