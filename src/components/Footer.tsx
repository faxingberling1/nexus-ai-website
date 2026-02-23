'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socials = [
    { icon: Twitter, href: '#' },
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Mail, href: '#' },
];

const Footer = () => {
    return (
        <footer className="py-24 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                                <Cpu className="text-primary w-6 h-6" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white">
                                NEON<span className="text-primary"> BYTE</span> AI
                            </span>
                        </div>
                        <p className="text-white/40 max-w-xs mb-8 leading-relaxed text-sm">
                            Pioneering the next evolution of autonomous intelligence. We build the neural infrastructure for the future.
                        </p>
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, href }, i) => (
                                <Link key={i} href={href} className="glass-card p-3 rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all group">
                                    <Icon size={18} className="text-white/30 group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Protocol</h4>
                        <ul className="flex flex-col gap-4">
                            {['Neural Nets', 'Autonomous Agents', 'Cortex API', 'Security HUD'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/30 hover:text-primary transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Node</h4>
                        <ul className="flex flex-col gap-4">
                            {['Command Center', 'About Terminal', 'Partners', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/30 hover:text-primary transition-colors text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs tracking-widest uppercase">
                        © {new Date().getFullYear()} NEON BYTE AI. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs tracking-widest uppercase">Privacy</Link>
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs tracking-widest uppercase">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
