'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Activity, Terminal, Shield, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="pt-32 pb-12 relative overflow-hidden bg-[#050505] selection:bg-[#FF6A00]/30 transition-colors duration-700">

            {/* Premium top border - ultra thin glowing edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent shadow-[0_0_25px_rgba(255,106,0,0.3)]" />

            {/* Extreme subtle background glare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6A00]/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    {/* Brand & Mission Brief */}
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                            <img src="/sad@2x.png" alt="Neon Byte AI Logo" className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110" />
                            <div className="font-semibold text-2xl tracking-tight font-outfit text-white">
                                NEON<span className="text-white/40 font-medium">BYTE</span>
                            </div>
                        </Link>
                        <p className="text-white/40 mb-10 leading-relaxed text-sm font-inter font-light max-w-sm">
                            We engineer high-fidelity digital ecosystems for visionary companies. Precision software architecture, secure cloud infrastructure, and intelligent AI automation.
                        </p>

                        {/* Contact Vectors */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-[#FF6A00]/40 transition-all duration-500">
                                    <Mail size={14} className="text-white/30 group-hover:text-[#FF6A00]" />
                                </div>
                                <a href="mailto:support@neonbyteai.com" className="text-xs font-medium text-white/40 group-hover:text-white transition-colors duration-500 tracking-wide font-inter">support@neonbyteai.com</a>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-[#FF6A00]/40 transition-all duration-500">
                                    <Phone size={14} className="text-white/30 group-hover:text-[#FF6A00]" />
                                </div>
                                <a href="tel:3322321676" className="text-xs font-medium text-white/40 group-hover:text-white transition-colors duration-500 tracking-wide font-inter">(332) - 232 - 1676</a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 md:col-start-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#FF6A00] uppercase font-outfit mb-8 opacity-80">Platform</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Services', href: '/services' },
                                { name: 'Products', href: '/products' },
                                { name: 'Knowledge Base', href: '/kb' },
                                { name: 'Pricing', href: '/pricing' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-white/40 hover:text-white transition-all duration-500 font-inter group flex items-center">
                                        <span className="w-0 h-[1px] bg-[#FF6A00]/60 mr-0 transition-all duration-500 group-hover:w-3 group-hover:mr-3" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#FF6A00] uppercase font-outfit mb-8 opacity-80">Intelligence</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Process', href: '/process' },
                                { name: 'Support', href: '/support' },
                                { name: 'Console', href: '/login' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-white/40 hover:text-white transition-all duration-500 font-inter group flex items-center">
                                        <span className="w-0 h-[1px] bg-[#FF6A00]/60 mr-0 transition-all duration-500 group-hover:w-3 group-hover:mr-3" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Technical Bottom Bar */}
                <div className="border-t border-white/[0.04] pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                        {/* Legal & Copyright */}
                        <div className="space-y-4 text-center md:text-left">
                            <p className="text-white/20 text-[10px] font-outfit font-medium uppercase tracking-[0.2em]">
                                © {new Date().getFullYear()} NEONBYTE TECHNOLOGY CORP.
                            </p>
                            <div className="flex justify-center md:justify-start gap-6">
                                <Link href="/privacy" className="text-white/30 hover:text-[#FF6A00] text-[10px] font-bold uppercase tracking-widest transition-colors duration-500">Privacy</Link>
                                <Link href="/terms" className="text-white/30 hover:text-[#FF6A00] text-[10px] font-bold uppercase tracking-widest transition-colors duration-500">Terms</Link>
                            </div>
                        </div>

                        {/* Location / Social */}
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
                                <Globe size={12} className="text-[#FF6A00]/40" />
                                Follow Us
                            </div>
                            <div className="flex gap-4">
                                <a href="https://twitter.com" target="_blank" className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#FF6A00]/30 transition-all duration-500 group">
                                    <Twitter size={14} className="text-white/30 group-hover:text-white" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#FF6A00]/30 transition-all duration-500 group">
                                    <Linkedin size={14} className="text-white/30 group-hover:text-white" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
