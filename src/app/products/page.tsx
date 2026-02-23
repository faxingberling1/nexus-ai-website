'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutGrid, Database, Zap, Shield, ArrowUpRight, Cpu, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
    {
        title: "HybridPOS",
        tagline: "The Future of Retail Intelligence",
        description: "A dual-architecture POS system designed for high-volume retail. Offline-first synchronization with real-time cloud analytics.",
        icon: LayoutGrid,
        metrics: ["1.2s Transaction Speed", "100% Offline Resilience", "Multi-Unit Sync"]
    },
    {
        title: "AI Lead Engine",
        tagline: "Autonomous Growth Infrastructure",
        description: "Utilize deep learning to qualify and segment leads at scale. Bridges the gap between marketing spend and closed revenue.",
        icon: Zap,
        metrics: ["40% Higher Conversion", "Neural Scoring", "Real-time Escalation"]
    },
    {
        title: "Automation Hub",
        tagline: "Zero-Latency Workflow Orchestration",
        description: "A centralized platform for managing enterprise integrations. Connects existing legacy systems with modern AI agents.",
        icon: Cpu,
        metrics: ["500+ Native APIs", "Visual Debugger", "SOC2 Compliant"]
    },
    {
        title: "MailMind",
        tagline: "AI Email Marketing Protocol",
        description: "An AI-powered email marketing platform featuring automated campaigns, real-time analytics, and predictive segmentation to optimize engagement forecasting.",
        icon: Mail,
        metrics: ["Peak Engagement Forecast", "Neural Segmentation", "Real-time Analytics"],
        link: "https://mailmind.neonbyteai.com/"
    }
];

export default function ProductsPage() {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easing }}
                    className="max-w-3xl mb-32"
                >
                    <h1 className="text-7xl md:text-9xl font-semibold tracking-tight text-white font-outfit leading-none mb-10">
                        Proprietary <br />
                        <span className="text-white/20">Protocols.</span>
                    </h1>
                    <p className="text-white/40 text-2xl font-light leading-relaxed">
                        Beyond custom solutions, NEONBYTE engineers modular software products designed to handle the core primitives of modern business.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                            className="bg-[#121212]/30 border border-white/[0.04] rounded-[3.5rem] overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 lg:p-20 flex flex-col justify-center">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-8">
                                        <product.icon size={24} />
                                    </div>
                                    <h2 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-4">{product.tagline}</h2>
                                    <h3 className="text-4xl md:text-5xl font-semibold text-white mb-8 font-outfit">{product.title}</h3>
                                    <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                                        {product.description}
                                    </p>

                                    <div className="space-y-4 mb-12">
                                        {product.metrics.map((metric, j) => (
                                            <div key={j} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                                                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">{metric}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {product.link ? (
                                        <Link href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-medium group/btn w-fit">
                                            Visit Live Project
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black transition-all">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </Link>
                                    ) : (
                                        <button className="flex items-center gap-3 text-white font-medium group/btn w-fit">
                                            View Technical Documentation
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black transition-all">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </button>
                                    )}
                                </div>

                                <div className="bg-[#1A1A1A] relative min-h-[400px] border-l border-white/[0.04] p-12 lg:p-20 overflow-hidden group">
                                    {/* Abstract Dashboard Visual */}
                                    <div className="absolute inset-x-12 inset-y-12 bg-[#0A0A0A] rounded-2xl border border-white/[0.05] shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-1000">
                                        <div className="h-8 border-b border-white/[0.05] flex items-center px-4 gap-2 bg-white/[0.01]">
                                            <div className="w-2 h-2 rounded-full bg-white/10" />
                                            <div className="w-2 h-2 rounded-full bg-white/10" />
                                            <div className="w-2 h-2 rounded-full bg-white/10" />
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <div className="h-4 w-1/3 bg-white/[0.03] rounded" />
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-24 bg-[#FF6A00]/[0.05] rounded-xl border border-[#FF6A00]/10" />
                                                <div className="h-24 bg-white/[0.02] rounded-xl border border-white/5" />
                                                <div className="h-24 bg-white/[0.02] rounded-xl border border-white/5" />
                                            </div>
                                            <div className="h-32 bg-white/[0.01] rounded-xl border border-white/5 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6A00]/10 to-transparent w-1/2 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-2000" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
