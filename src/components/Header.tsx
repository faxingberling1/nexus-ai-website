'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50 py-5"
        >
            <div className="max-w-7xl mx-auto px-6">
                <nav className={`glass-card flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${scrolled ? 'border-white/10 bg-black/60' : ''}`}>
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <Cpu className="text-primary w-5 h-5" />
                        </div>
                        <span className="text-lg font-black tracking-tight text-white">
                            NEON<span className="text-primary"> BYTE</span> AI
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { label: 'Services', href: '/#services' },
                            { label: 'Arsenal', href: '/#arsenal' },
                            { label: 'Pricing', href: '/pricing' },
                            { label: 'Blog', href: '/blog' },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white/50 hover:text-primary text-xs font-semibold tracking-widest uppercase transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="hidden md:inline text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors px-4 py-2"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/get-started"
                            className="flex items-center gap-2 bg-primary text-darker text-xs font-black tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-white transition-colors shadow-lg shadow-primary/20"
                        >
                            Launch <ArrowRight size={14} />
                        </Link>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
