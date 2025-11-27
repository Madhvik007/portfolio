'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

export default function DarkModeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="neo-button flex items-center gap-2 text-sm md:text-base"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <>
                    <FaMoon className="text-lg" />
                    <span className="hidden md:inline">DARK</span>
                </>
            ) : (
                <>
                    <FaSun className="text-lg" />
                    <span className="hidden md:inline">LIGHT</span>
                </>
            )}
        </button>
    );
}
