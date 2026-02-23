'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 border-t border-white/[0.04] relative overflow-hidden bg-[#0B0B0B]">
            {/* Subtle animated divider line in orange */}
            <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent animate-[translateX_8s_ease-in-out_infinite]" style={{ transform: 'translateX(-100%)' }} />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes translateX {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(300%); }
          100% { transform: translateX(-100%); }
        }
      `}} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    <div className="md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="w-4 h-4 rounded-[4px] bg-gradient-to-br from-[#FF6A00] to-[#E65C00]" />
                            <div className="font-semibold text-lg tracking-tight font-outfit text-white">
                                NEON<span className="text-white/50 font-medium">BYTE</span>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase font-inter mb-6">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {['Services', 'Products', 'Case Studies', 'About'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors font-inter">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase font-inter mb-6">Connect</h4>
                        <ul className="flex flex-col gap-3">
                            {['Careers', 'Contact', 'Twitter', 'LinkedIn'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors font-inter">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm font-inter">
                        © {new Date().getFullYear()} NEONBYTE. All rights reserved.
                    </p>
                    <div className="flex gap-6 font-inter">
                        <Link href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
