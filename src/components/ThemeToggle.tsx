'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08]" />
    );

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF6A00]/30 transition-all duration-500 overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="absolute inset-0 bg-[#FF6A00]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

            <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white/60 group-hover:text-[#FF6A00]"
                    >
                        <Moon size={18} strokeWidth={1.5} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-black/60 group-hover:text-[#FF6A00]"
                    >
                        <Sun size={18} strokeWidth={1.5} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
