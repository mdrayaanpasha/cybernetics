// stores/useDarkModeStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useDarkModeStore = create(persist(
    (set) => ({
        darkMode: true,
        toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
        setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
        name: 'dark-mode', // LocalStorage key
    }
));
