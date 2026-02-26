'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const easing = [0.16, 1, 0.3, 1] as const;

export default function WebPlatformsCategory() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#60A5FA] to-transparent opacity-[0.03] blur-[160px] pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-[#FF6A00] to-transparent opacity-[0.02] blur-[160px] pointer-events-none" />

            <Header />

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-24 border-b border-white/[0.05]">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                        className="max-w-4xl"
                    >
                        <Link href="/our-work" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium mb-12 group">
                            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center">
                                <Code size={24} className="text-[#60A5FA]" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]">
                                <Sparkles size={12} className="text-[#60A5FA]" />
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">Category</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-white font-outfit mb-8">
                            Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-white/70">Platforms.</span>
                        </h1>

                        <p className="text-xl text-white/40 max-w-2xl font-light leading-relaxed">
                            High-performance SaaS, enterprise dashboards, and scalable digital hubs engineered for modern business needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PROJECTS LISTING */}
            <section className="py-24 relative">
                <div className="max-w-[85rem] mx-auto px-6">
                    <div className="flex flex-col gap-12">
                        {/* AURA ENTERPRISE HUB (Moved from main page) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: easing }}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 lg:p-12 bg-gradient-to-b from-[#121212]/80 to-[#0B0B0B] border border-[#FF6A00]/10 rounded-[2rem] hover:border-[#FF6A00]/30 transition-all duration-700 shadow-[0_0_30px_rgba(255,106,0,0.02)] hover:shadow-[0_10px_50px_rgba(255,106,0,0.08)]"
                        >
                            {/* Portfolio Image Container */}
                            <div className="lg:col-span-7 bg-[#1A1A1A] rounded-xl aspect-[16/9] border border-white/[0.04] relative overflow-hidden group-hover:border-white/[0.1] transition-all duration-700 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#0A0A0A]" />
                                {/* Simulated project visuals */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/[0.05] rounded-lg shadow-2xl bg-[#0B0B0B] overflow-hidden transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                    <div className="h-6 border-b border-white/[0.05] flex items-center px-3 gap-1.5 bg-white/[0.01] relative z-20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]/30" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]/30" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]/30" />
                                    </div>

                                    {/* Inner App Mockup */}
                                    <div className="absolute top-6 left-0 right-0 bottom-0 bg-[#050505] flex border-t border-white/[0.02]">
                                        <div className="w-16 h-full border-r border-white/[0.04] p-3 flex flex-col gap-4 items-center">
                                            <div className="w-6 h-6 rounded bg-[#FF6A00]/20 border border-[#FF6A00]/40 mt-1" />
                                            <div className="w-4 h-4 rounded-full bg-white/[0.05]" />
                                            <div className="w-4 h-4 rounded-full bg-white/[0.05]" />
                                            <div className="w-4 h-4 rounded-full bg-white/[0.05]" />
                                        </div>
                                        <div className="flex-1 p-6 flex flex-col gap-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="h-4 w-32 bg-white/[0.05] rounded" />
                                                <div className="h-6 w-24 bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 h-24">
                                                <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg" />
                                                <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg" />
                                                <div className="bg-[#FF6A00]/[0.02] border border-[#FF6A00]/10 rounded-lg" />
                                            </div>
                                            <div className="flex-1 bg-white/[0.02] border border-white/[0.04] rounded-lg relative overflow-hidden">
                                                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[rgba(96,165,250,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                                <div className="absolute bottom-4 left-4 right-4 h-32 flex items-end gap-2 opacity-30 group-hover:opacity-70 transition-opacity duration-700">
                                                    {[30, 50, 40, 70, 60, 90, 80].map((h, j) => (
                                                        <div key={j} className="flex-1 bg-gradient-to-t from-[#60A5FA] to-transparent rounded-t-sm" style={{ height: `${h}%` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Portfolio Content */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[11px] font-semibold tracking-widest text-[#60A5FA] uppercase font-inter bg-[#60A5FA]/10 border border-[#60A5FA]/20 px-3 py-1 rounded-full">Web Platforms</span>
                                    <span className="text-[12px] text-white/40 font-inter border border-white/[0.08] px-3 py-1 rounded-full">Next.js + Analytics</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 font-outfit tracking-tight">Aura Enterprise Hub</h2>
                                <p className="text-white/40 text-[15px] leading-relaxed font-light mb-10 max-w-md">
                                    A high-performance SaaS platform engineered with Next.js and Tailwind. We delivered a sleek, modular dashboard and intelligent data-visualization systems that reduced operational latency by 40% and improved user retention across 2M+ active sessions.
                                </p>

                                <Link href="/our-work/aura" className="flex items-center gap-2 text-white text-sm font-medium w-fit group/btn hover:text-[#FF6A00] transition-colors">
                                    Read Full Case Study
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#FF6A00] group-hover/btn:border-[#FF6A00] group-hover/btn:text-white transition-all duration-300 ml-2">
                                        <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>

                        {/* More placeholders can go here conceptually */}
                        <div className="py-24 text-center border border-white/[0.05] rounded-[2rem] bg-white/[0.01] border-dashed">
                            <p className="text-white/30 text-sm tracking-widest uppercase mb-4">More Case Studies</p>
                            <h3 className="text-2xl text-white/50 font-outfit">Processing new data streams...</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
