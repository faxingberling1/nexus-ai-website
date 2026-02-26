'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Brain,
    Code,
    LineChart,
    GitBranch,
    Cpu,
    Link as LinkIcon,
    PenTool,
    Gamepad2,
    ArrowRight,
    Search,
    LayoutGrid,
    Clock,
    Sparkles,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
    {
        title: "AI Solutions",
        description: "Autonomous agents and intelligent decision engines.",
        icon: Brain,
        color: "#FF6A00",
    },
    {
        title: "Web Platforms",
        description: "Enterprise SaaS and high-performance digital hubs.",
        icon: Code,
        color: "#60A5FA",
    },
    {
        title: "Growth & Performance",
        description: "Data-driven systems built for measurable impact.",
        icon: LineChart,
        color: "#10B981",
    },
    {
        title: "Business Automation",
        description: "Workflow optimization and integration pipelines.",
        icon: GitBranch,
        color: "#8B5CF6",
    },
    {
        title: "Product & Tool",
        description: "Specialized utilities for operational excellence.",
        icon: LayoutGrid,
        color: "#F59E0B",
    },
    {
        title: "Game & Interactive",
        description: "Immersive experiences and creative mechanics.",
        icon: Gamepad2,
        color: "#EC4899",
    },
    {
        title: "Copy & Brand",
        description: "Strategic messaging and visual identity systems.",
        icon: PenTool,
        color: "#94A3B8",
    },
    {
        title: "Blockchain Ecosystem",
        description: "Web3 infrastructure and decentralized protocols.",
        icon: LinkIcon,
        color: "#F7931A",
    }
];

const easing = [0.16, 1, 0.3, 1] as const;

export default function OurWork() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#FF6A00] to-transparent opacity-[0.04] blur-[160px] pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-[#FF6A00] to-transparent opacity-[0.02] blur-[160px] pointer-events-none" />

            <Header />

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 border-b border-white/[0.05]">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-[#121212]/40 backdrop-blur-2xl mb-12 shadow-[0_0_20px_rgba(255,106,0,0.05)] hover:bg-[#121212]/60 hover:border-[#FF6A00]/30 transition-all duration-500 cursor-pointer group">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-40" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                            </span>
                            <span className="text-xs font-medium tracking-wide text-white/70">Portfolio Hub</span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold tracking-[-0.03em] leading-[0.95] text-white font-outfit mb-8">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Work.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Showcasing the projects and solutions we engineer for visionary companies. Precision logic meets elite digital architecture.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/start" className="relative group bg-[#FF6A00] text-white text-sm font-semibold px-10 py-4 rounded-full overflow-hidden transition-all duration-500 shadow-[0_8px_25px_-8px_rgba(255,106,0,0.6)]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C33] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>

                            <Link href="/services" className="flex items-center justify-center gap-2 bg-[#121212]/40 backdrop-blur-xl border border-white/[0.08] text-white text-sm font-semibold px-9 py-4 rounded-full hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300">
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-48 left-6 w-4 h-4 border-t-2 border-l-2 border-white/10" />
                <div className="absolute top-48 right-6 w-4 h-4 border-t-2 border-r-2 border-white/10" />
            </section>

            {/* PORTFOLIO GRID */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.05, ease: easing }}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-[2rem] bg-gradient-to-b from-[#121212]/80 to-[#0B0B0B] border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 hover:shadow-[0_8px_40px_rgba(255,106,0,0.05)] transition-all duration-500 flex flex-col justify-between min-h-[340px] overflow-hidden relative">
                                    {/* Abstract Accent Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-[80px]" style={{ backgroundColor: cat.color + '20' }} />

                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center mb-10 group-hover:border-[#FF6A00]/30 transition-all duration-500 shadow-sm relative z-10 group-hover:-translate-y-1">
                                            <cat.icon size={26} strokeWidth={1.5} className="text-white/40 group-hover:text-[#FF6A00] transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-medium text-white mb-4 font-outfit tracking-tight">{cat.title}</h3>
                                        <p className="text-white/30 text-sm leading-relaxed font-light mb-8">
                                            {cat.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        {cat.title === "Web Platforms" ? (
                                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#60A5FA] group-hover:text-white transition-colors">
                                                Explore
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FF6A00]/40 group-hover:text-[#FF6A00] transition-colors">
                                                <Clock size={12} />
                                                Coming Soon
                                            </div>
                                        )}
                                        <div className="w-8 h-8 rounded-full border border-white/[0.05] bg-white/[0.02] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1">
                                            <ArrowUpRight size={14} className={cat.title === "Web Platforms" ? "text-[#60A5FA]" : "text-[#FF6A00]"} />
                                        </div>
                                    </div>

                                    {/* Background Indexing */}
                                    <div className="absolute bottom-6 right-8 text-[6rem] font-bold text-white/[0.01] pointer-events-none font-outfit group-hover:text-white/[0.02] transition-all duration-700">
                                        0{i + 1}
                                    </div>

                                    {/* Link Overlay */}
                                    {cat.title === "Web Platforms" && (
                                        <Link href="/our-work/web-platforms" className="absolute inset-0 z-20" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED DEMO PROJECT */}
            <section className="py-24 relative border-t border-white/[0.05] bg-[#080808]">
                <div className="max-w-[85rem] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-4">Featured Case Study</h2>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white font-outfit">Web Platforms.</h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: easing }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 lg:p-12 bg-gradient-to-b from-[#121212]/80 to-[#0B0B0B] border border-[#FF6A00]/10 rounded-[2rem] hover:border-[#FF6A00]/30 transition-all duration-700 shadow-[0_0_30px_rgba(255,106,0,0.02)] hover:shadow-[0_10px_50px_rgba(255,106,0,0.08)]"
                    >
                        {/* Portfolio Image Container - Abstract wireframe styling */}
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
                                            {/* Abstract chart area */}
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

                            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 font-outfit tracking-tight">Aura Enterprise Hub</h3>
                            <p className="text-white/40 text-[15px] leading-relaxed font-light mb-10 max-w-md">
                                A high-performance SaaS platform engineered with Next.js and Tailwind. We delivered a sleek, modular dashboard and intelligent data-visualization systems that reduced operational latency by 40% and improved user retention across 2M+ active sessions.
                            </p>

                            <Link href="/our-work/aura" className="flex items-center gap-2 text-white text-sm font-medium w-fit group/btn hover:text-[#FF6A00] transition-colors">
                                View Full Case Study
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#FF6A00] group-hover/btn:border-[#FF6A00] group-hover/btn:text-white transition-all duration-300 ml-2">
                                    <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-48 relative border-t border-white/[0.05]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-12 leading-tight">
                            Want to see your project<br />
                            <span className="text-white/20">featured here?</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/start" className="relative group bg-white text-black text-sm font-bold px-10 py-5 rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,106,0,0.2)]">
                                Start Your Project
                            </Link>

                            <Link href="/support" className="flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/[0.1] text-white text-sm font-semibold hover:bg-white/[0.05] transition-all">
                                Schedule a Consultation <ChevronRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Email Capture Placeholder */}
                <div className="max-w-md mx-auto mt-24 px-6">
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Sign up for portfolio updates"
                            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-full py-4 px-8 text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-all font-light"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 rounded-full hover:bg-[#FF6A00] hover:text-white transition-all">
                            Join
                        </button>
                    </div>
                    <p className="text-center text-[10px] text-white/20 mt-4 uppercase tracking-[0.2em]">Deployment status: Active</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
