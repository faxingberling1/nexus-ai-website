'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 pointer-events-auto">
                <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
                        ? 'bg-[#121212]/80 backdrop-blur-xl border border-white/[0.08] shadow-sm'
                        : 'bg-transparent border border-transparent'
                    }`}>

                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="font-semibold text-lg tracking-tight font-outfit text-white flex items-center gap-2">
                            <div className="w-4 h-4 rounded-[4px] bg-gradient-to-br from-[#FF6A00] to-[#E65C00] shadow-sm" />
                            NEON<span className="text-white/50 font-medium">BYTE</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { label: 'Services', href: '#services' },
                            { label: 'Products', href: '#products' },
                            { label: 'How We Work', href: '#process' },
                            { label: 'About', href: '#about' }
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors font-inter"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="hidden md:block text-[13px] font-medium text-white/60 hover:text-white transition-colors font-inter">
                            Contact
                        </Link>
                        <Link href="/start" className="bg-[#FF6A00] text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-[#E65C00] transition-all duration-300 shadow-sm hover:shadow-md">
                            Start a Project
                        </Link>
                    </div>

                </div>
            </div>
        </motion.header>
    );
}
