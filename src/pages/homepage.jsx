import { useState, useEffect } from 'react';

import Homepagelanding from '../components/landing';
import Navbar from '../components/nav';
import About from '../components/about';
import Events from '../components/events';
import Members from '../components/members';
import Join from '../components/join';
import Footer from '../components/footer';

import { useDarkModeStore } from '../stores/darkmode';

const Home = () => {
    const { darkMode, toggleDarkMode } = useDarkModeStore();
    const [activeCard, setActiveCard] = useState(0);


    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <Navbar />
            <Homepagelanding />
            <About />
            <Events />
            <Members />
            <Join />
            <Footer />

        </div>
    );
};

export default Home;