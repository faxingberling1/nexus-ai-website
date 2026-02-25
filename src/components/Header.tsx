'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Services', href: '/services' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Products', href: '/products' },
        { label: 'Process', href: '/process' },
        { label: 'About', href: '/about' }
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${isScrolled ? 'py-4' : 'py-8'}`}
        >
            <div className="max-w-7xl mx-auto px-6 pointer-events-auto flex justify-center sticky">
                {/* The ultra-premium floating pill header */}
                <div className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-700 w-full lg:w-[85%] ${isScrolled || isMobileMenuOpen
                    ? 'bg-[#121212]/60 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                    : 'bg-transparent border border-transparent'
                    }`}>

                    <Link href="/" className="flex items-center gap-2 group px-4">
                        <div className="font-semibold text-lg tracking-tight font-outfit text-white flex items-center gap-2">
                            <div className="relative w-4 h-4 rounded-[4px] bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] shadow-[0_0_12px_rgba(255,106,0,0.4)] overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
                            </div>
                            NEON<span className="text-white/40 font-medium">BYTE</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1 px-4 bg-white/[0.02] rounded-full border border-white/[0.04]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.06] px-5 py-2.5 rounded-full transition-all duration-300 font-inter"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 px-2">
                        <Link href="/support" className="hidden md:flex text-xs font-medium text-white/50 hover:text-white px-4 py-2.5 rounded-full hover:bg-white/[0.04] transition-colors font-inter">
                            Support
                        </Link>

                        <Link href="/start" className="relative group bg-[#1A1A1A] text-white text-xs font-medium px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500 border border-white/[0.08] hover:border-[#FF6A00]/50 hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] ml-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#E65C00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                Start Project
                            </span>
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-6 right-6 mt-4 p-8 bg-[#121212]/95 backdrop-blur-3xl border border-white/[0.06] rounded-[2rem] shadow-2xl md:hidden z-50 flex flex-col gap-6"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xl font-medium text-white/60 hover:text-[#FF6A00] transition-colors flex items-center justify-between group"
                                    >
                                        {link.label}
                                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
