'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-32 pb-12 relative overflow-hidden bg-[#050505]">

            {/* Premium top border - ultra thin glowing edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent shadow-[0_0_15px_rgba(255,106,0,0.5)]" />

            {/* Extreme subtle background glare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6A00]/[0.02] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
                            <div className="relative w-5 h-5 rounded-[4px] bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] shadow-[0_0_12px_rgba(255,106,0,0.4)] overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
                            </div>
                            <div className="font-semibold text-2xl tracking-tight font-outfit text-white">
                                NEON<span className="text-white/40 font-medium">BYTE</span>
                            </div>
                        </Link>
                        <p className="text-white/40 mb-8 leading-relaxed text-sm font-inter font-light max-w-sm">
                            We engineer intelligent ecosystems for visionary companies. Precision software, scalable architecture, and AI automation.
                        </p>
                    </div>

                    <div className="md:col-span-2 md:col-start-8">
                        <h4 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-6">Platform</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Services', href: '/services' },
                                { name: 'Products', href: '/products' },
                                { name: 'Knowledge Base', href: '/kb' },
                                { name: 'Pricing', href: '/pricing' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-white/50 hover:text-white transition-colors font-inter group flex items-center">
                                        <span className="w-0 h-[1px] bg-white/30 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-6">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Careers', href: '/careers' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Twitter', href: 'https://twitter.com' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-white/50 hover:text-white transition-colors font-inter group flex items-center">
                                        <span className="w-0 h-[1px] bg-white/30 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-xs font-inter font-light">
                        © {new Date().getFullYear()} NEONBYTE. All systems operational.
                    </p>
                    <div className="flex gap-8 font-inter">
                        <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                            </span>
                            <span className="text-white/30 text-xs">All Systems Nominal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
