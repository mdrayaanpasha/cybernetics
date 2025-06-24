import React from 'react';
import sjulogo from "../assets/images/sju-logo.png";

import { Crown, Users, Megaphone, Brush, DollarSign, Laptop, Truck, FileText, Instagram, Settings } from 'lucide-react';

const designationIcons = {
    'PRESIDENT': <Crown className="w-5 h-5 text-black/90" />,
    'VICE PRESIDENT': <Users className="w-5 h-5 text-black/90" />,
    'HEAD OF PR & MARKETING': <Megaphone className="w-5 h-5 text-black/90" />,
    'HEAD OF GRAPHIC DESIGN': <Brush className="w-5 h-5 text-black/90" />,
    'HEAD OF SOCIAL MEDIA': <Instagram className="w-5 h-5 text-black/90" />,
    'HEAD OF IT': <Laptop className="w-5 h-5 text-black/90" />,
    'GENERAL SECRETARY': <FileText className="w-5 h-5 text-black/90" />,
    'TREASURER': <DollarSign className="w-5 h-5 text-black/90" />,
    'HEAD OF LOGISTICS': <Truck className="w-5 h-5 text-black/90" />,
    'HEAD OF OPERATIONS': <Settings className="w-5 h-5 text-black/90" />,
    'HEAD OF DOCUMENTATION': <FileText className="w-5 h-5 text-black/90" />,
    'HEAD OF ART & DECOR': <Brush className="w-5 h-5 text-black/90" />,
};

const badgeData = [
    { role: "PRESIDENT", name: "Monisha S", quote: "Let’s build legacies, not just projects." },
    { role: "VICE PRESIDENT", name: "Tushar Tiwari", quote: "If it runs on logic and chaos, count me in." },
    { role: "GENERAL SECRETARY", name: "S V Kaushik", quote: "Paperwork, pipelines, progress." },
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
    const icon = designationIcons[role] || <Users className="w-5 h-5 text-black/90" />;

    return (
        <div className="p-1 border-2 border-gray-400 rounded-3xl hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center p-6 bg-white/20 backdrop-blur-lg border-2 border-gray-300 rounded-2xl w-[32vw] min-w-[250px] ">            {/* Logo */}
                <div className="mr-6">
                    <div className="bg-white/30 backdrop-blur-md p-1.5 rounded-full border-2 border-white/50">
                        <img src={sjulogo} alt="SJU Logo" className="w-25  object-contain" />
                    </div>
                </div>

                <div className="flex-grow text-center">
                    <p className="text-sm font-bold text-black/80 uppercase tracking-[0.1em] mb-1">
                        ST JOSEPH'S UNIVERSITY
                    </p>
                    <p className="text-xs font-medium text-black/80 uppercase tracking-[0.1em] mb-3">
                        CYBERNETICS ASSOCIATION
                    </p>

                    <hr className="border border-gray-300 mb-3" />

                    <h3 className="mt-1 text-xl font-bold text-black/90 uppercase tracking-wide">{name}</h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        {icon}
                        <p className="text-sm font-semibold text-black/90 uppercase tracking-wider">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CoreMembersSection = () => {
    return (
        <div className="min-h-screen  flex flex-col items-center py-12 px-4 font-sans">
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

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                {badgeData.map((badge, index) => (
                    <Badge key={index} name={badge.name} role={badge.role} />
                ))}
            </div>
        </div>
    );
};

export default CoreMembersSection;
