'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Cpu, Shield, BarChart, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
    {
        title: "Enterprise AI",
        icon: Cpu,
        count: 12,
        topics: ["Neural Integration", "LLM Fine-tuning", "Autonomous Agents"]
    },
    {
        title: "Architecture",
        icon: Shield,
        count: 8,
        topics: ["Microservices", "Cloud Scaling", "Security Protocols"]
    },
    {
        title: "Growth Systems",
        icon: BarChart,
        count: 15,
        topics: ["AI-Driven SEO", "Conversion Data", "Attribution"]
    }
];

export default function KnowledgeBasePage() {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-white font-outfit mb-8"
                    >
                        Knowledge <br />
                        <span className="text-white/20">Infrastructure.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: easing }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                        <input
                            type="text"
                            placeholder="Search our technical protocols..."
                            className="w-full bg-[#121212] border border-white/[0.08] rounded-3xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all font-inter text-lg shadow-2xl"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-10 bg-[#121212]/30 border border-white/[0.04] rounded-[2.5rem] hover:border-[#FF6A00]/20 transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-[#FF6A00] mb-8 group-hover:scale-110 transition-transform">
                                <cat.icon size={24} />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-medium text-white font-outfit">{cat.title}</h3>
                                <span className="text-white/20 text-xs font-mono">{cat.count} Protocols</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {cat.topics.map((t, j) => (
                                    <li key={j} className="text-white/40 font-light hover:text-white transition-colors cursor-pointer flex items-center justify-between group/link">
                                        {t} <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 border border-white/[0.06] rounded-2xl text-[11px] font-semibold tracking-widest text-white/30 uppercase font-inter hover:bg-white/[0.02] hover:text-white transition-all">
                                Explore Category
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Popular Articles */}
                <div className="py-20 border-t border-white/[0.04]">
                    <h2 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-12">Latest Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Zero-Latency Message Queues in Distributed Systems", cat: "Architecture" },
                            { title: "Optimizing Neural Weights for Real-Time Sentiment Analysis", cat: "AI Solutions" },
                            { title: "Scaling Global Digital Infrastructure for Viral Retail Events", cat: "Architecture" },
                            { title: "The Impact of Generative Search on High-Intent ROI", cat: "Growth" }
                        ].map((article, i) => (
                            <div key={i} className="group p-8 border-b border-white/[0.04] flex items-center justify-between hover:bg-white/[0.01] transition-all cursor-pointer">
                                <div>
                                    <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest font-inter mb-2 block">{article.cat}</span>
                                    <h4 className="text-lg font-medium text-white/80 group-hover:text-white transition-colors font-outfit">{article.title}</h4>
                                </div>
                                <ArrowRight size={20} className="text-white/10 group-hover:text-[#FF6A00] group-hover:translate-x-2 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
