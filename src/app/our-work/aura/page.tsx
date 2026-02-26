'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, Clock, Code2, Globe, Server, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const easing = [0.16, 1, 0.3, 1] as const;

export default function AuraCaseStudy() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#60A5FA] to-transparent opacity-[0.03] blur-[160px] pointer-events-none" />
            <div className="fixed top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#FF6A00] to-transparent opacity-[0.02] blur-[160px] pointer-events-none" />

            <Header />

            {/* CASE STUDY HERO */}
            <section className="relative pt-48 pb-24 border-b border-white/[0.05]">
                <div className="max-w-[85rem] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <Link href="/our-work/web-platforms" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium mb-12 group">
                            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Web Platforms
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-8">
                                    <span className="text-[11px] font-semibold tracking-widest text-[#60A5FA] uppercase font-inter bg-[#60A5FA]/10 border border-[#60A5FA]/20 px-4 py-1.5 rounded-full">Case Study</span>
                                    <span className="text-[12px] text-white/40 font-inter border border-white/[0.08] px-4 py-1.5 rounded-full">Next.js</span>
                                    <span className="text-[12px] text-white/40 font-inter border border-white/[0.08] px-4 py-1.5 rounded-full">Analytics</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white font-outfit leading-[1.1]">
                                    Aura Enterprise Hub
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-12 lg:justify-end text-sm">
                                <div>
                                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Client</p>
                                    <p className="text-white font-medium">Aura Technologies</p>
                                </div>
                                <div>
                                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Timeline</p>
                                    <p className="text-white font-medium">12 Weeks</p>
                                </div>
                                <div>
                                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Role</p>
                                    <p className="text-white font-medium">Full Stack Architecture</p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image Mockup */}
                        <div className="w-full bg-[#1A1A1A] rounded-2xl md:rounded-[2.5rem] aspect-[16/7] border border-white/[0.04] relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#0A0A0A]" />
                            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[95%] bg-[#050505] rounded-t-xl border-t border-l border-r border-white/[0.08] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                <div className="h-8 border-b border-white/[0.05] flex items-center px-4 gap-2 bg-[#0A0A0A]">
                                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]/40" />
                                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/40" />
                                    <div className="w-2 h-2 rounded-full bg-[#27C93F]/40" />
                                </div>
                                <div className="p-8 flex h-full gap-8">
                                    {/* Sidebar Mock */}
                                    <div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/[0.04] pr-8">
                                        <div className="h-4 w-24 bg-white/[0.1] rounded mb-8" />
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-3 w-full rounded ${i === 2 ? 'bg-[#60A5FA]/20' : 'bg-white/[0.03]'}`} />)}
                                    </div>
                                    {/* Main Content Mock */}
                                    <div className="flex-1 flex flex-col gap-6">
                                        <div className="flex justify-between items-end">
                                            <div className="h-8 w-48 bg-white/[0.08] rounded" />
                                            <div className="flex gap-2">
                                                <div className="h-8 w-24 bg-[#FF6A00]/20 rounded" />
                                                <div className="h-8 w-8 bg-white/[0.05] rounded" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="h-24 bg-white/[0.02] border border-white/[0.05] rounded-lg" />)}
                                        </div>
                                        <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-xl relative overflow-hidden flex items-end justify-between p-8">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#60A5FA]/5 opacity-50" />
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className="w-[6%] bg-[#60A5FA]/20 rounded-t-sm" style={{ height: `${Math.max(20, Math.random() * 100)}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTIONS */}
            <section className="py-32 relative">
                <div className="max-w-4xl mx-auto px-6">
                    {/* The Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: easing }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-outfit font-medium text-white mb-6">The Challenge</h2>
                        <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-p:font-light">
                            <p>
                                Aura Technologies, a leading enterprise data provider, was struggling with a legacy application that could not keep up with their scaling user base. Their core operational dashboard suffered from high latency during peak querying hours, causing frustration among their enterprise clients and leading to a drop in platform retention.
                            </p>
                            <p>
                                They required a complete structural overhaul—a lightweight, highly responsive web platform that could process and visualize millions of data points in real-time, without compromising on security or aesthetic quality.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: easing }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-outfit font-medium text-white mb-6">The Solution</h2>
                        <div className="prose prose-invert prose-p:text-white/50 prose-p:leading-relaxed prose-p:font-light mb-12">
                            <p>
                                We completely re-architected the front-end infrastructure using React and Next.js, implementing a modular, component-based design system that ensured visual consistency and accelerated development.
                            </p>
                            <p>
                                For the data layer, we introduced a highly optimized caching strategy coupled with specialized charting libraries tailored for large datasets, ensuring smooth, 60fps animations even when rendering complex analytics.
                            </p>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-6 bg-[#121212]/50 border border-white/[0.05] rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/[0.02] transition-colors">
                                <Code2 className="text-[#60A5FA]" />
                                <span className="text-sm font-medium text-white/70">Next.js 14</span>
                            </div>
                            <div className="p-6 bg-[#121212]/50 border border-white/[0.05] rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/[0.02] transition-colors">
                                <Globe className="text-[#FF6A00]" />
                                <span className="text-sm font-medium text-white/70">React</span>
                            </div>
                            <div className="p-6 bg-[#121212]/50 border border-white/[0.05] rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/[0.02] transition-colors">
                                <BarChart3 className="text-[#10B981]" />
                                <span className="text-sm font-medium text-white/70">D3.js</span>
                            </div>
                            <div className="p-6 bg-[#121212]/50 border border-white/[0.05] rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/[0.02] transition-colors">
                                <Server className="text-[#8B5CF6]" />
                                <span className="text-sm font-medium text-white/70">Redis Edge</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: easing }}
                    >
                        <h2 className="text-3xl font-outfit font-medium text-white mb-8">The Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="p-8 border border-white/[0.05] bg-gradient-to-br from-[#121212] to-[#0A0A0A] rounded-2xl">
                                <div className="text-4xl text-[#60A5FA] font-outfit font-semibold mb-2">-40%</div>
                                <p className="text-white/40 text-sm">Reduction in query latency</p>
                            </div>
                            <div className="p-8 border border-white/[0.05] bg-gradient-to-br from-[#121212] to-[#0A0A0A] rounded-2xl">
                                <div className="text-4xl text-[#10B981] font-outfit font-semibold mb-2">2M+</div>
                                <p className="text-white/40 text-sm">Active monthly sessions</p>
                            </div>
                            <div className="p-8 border border-white/[0.05] bg-gradient-to-br from-[#121212] to-[#0A0A0A] rounded-2xl">
                                <div className="text-4xl text-[#FF6A00] font-outfit font-semibold mb-2">99.9%</div>
                                <p className="text-white/40 text-sm">Platform uptime</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Implemented a comprehensive component library speeding up future feature delivery by 3x.",
                                "Successfully migrated 100% of legacy users with zero data loss or downtime.",
                                "Introduced a new 'Command Center' aesthetic that redefined the company's brand presence."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start text-white/60 text-sm md:text-base">
                                    <CheckCircle2 size={20} className="text-[#FF6A00] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* PROJECT NAVIGATION / FINAL CTA */}
            <section className="py-24 border-t border-white/[0.05] bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <h2 className="text-4xl font-semibold tracking-tight text-white font-outfit mb-8">
                            Ready to build something similar?
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/start" className="relative group bg-[#FF6A00] text-white text-sm font-semibold px-10 py-5 rounded-full overflow-hidden shadow-[0_8px_25px_-8px_rgba(255,106,0,0.6)]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C33] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>

                            <Link href="/our-work" className="flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/[0.1] text-white text-sm font-semibold hover:bg-white/[0.05] transition-all">
                                View All Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
