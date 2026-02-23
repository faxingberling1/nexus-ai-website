'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="pt-32 pb-12 border-t border-white/5 relative overflow-hidden bg-[#020202]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00f3ff]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[#00f3ff]/50 transition-colors">
                                <Cpu className="text-[#00f3ff] w-5 h-5" />
                            </div>
                            <div className="font-black text-xl tracking-tight font-outfit">
                                NEON<span className="text-[#00f3ff]">BYTE</span>
                            </div>
                        </Link>
                        <p className="text-white/40 max-w-sm mb-8 leading-relaxed text-sm font-inter">
                            We engineer state-of-the-art neural infrastructure and autonomous marketing solutions. Powering the digital elite.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-[#00f3ff]/10 hover:border-[#00f3ff]/30 hover:text-[#00f3ff] text-white/40 transition-all duration-300">
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-8">
                        <div className="flex gap-2 items-center mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] animate-[pulse_2.5s_infinite_alternate]" style={{ boxShadow: '0 0 16px rgba(0, 243, 255, 0.8)' }} />
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-inter">Protocol</h4>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {['Neural Nets', 'Autonomous Agents', 'Cortex API', 'Security HUD'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group inline-flex items-center text-white/40 hover:text-white transition-colors text-sm font-inter">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 text-[#00f3ff]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <div className="flex gap-2 items-center mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#bc00ff]" />
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-inter">Node</h4>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {['Command Center', 'About Terminal', 'Partners', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group inline-flex items-center text-white/40 hover:text-white transition-colors text-sm font-inter">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 text-[#bc00ff]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold font-inter">
                        © {new Date().getFullYear()} NEON BYTE AI. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 font-inter">
                        <Link href="#" className="text-white/30 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Privacy</Link>
                        <Link href="#" className="text-white/30 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
