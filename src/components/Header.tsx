'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 pointer-events-auto">
                <div className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${isScrolled
                        ? 'bg-[#0a0a0f]/50 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                        : 'bg-transparent'
                    }`}>

                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[#00f3ff]/50 transition-colors">
                            <Cpu className="text-[#00f3ff] w-5 h-5" />
                        </div>
                        <div className="font-black text-xl tracking-tight font-outfit">
                            NEON<span className="text-[#00f3ff]">BYTE</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { label: 'Capabilities', href: '#capabilities' },
                            { label: 'Infrastructure', href: '#infrastructure' },
                            { label: 'Terminal', href: '/terminal' }
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors relative group font-inter"
                            >
                                {link.label}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00f3ff] group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-5">
                        <Link href="/login" className="hidden md:block text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors font-inter">
                            System Login
                        </Link>
                        <Link href="/initialize" className="group flex items-center gap-2 bg-white text-black text-[11px] font-black tracking-[0.2em] uppercase px-6 py-3 rounded-lg hover:bg-[#00f3ff] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                            Initialize
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>
        </motion.header>
    );
}
