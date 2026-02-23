'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ArrowRight, ExternalLink, Cpu, Shield, BarChart, Globe, Zap, Layers, Gamepad2, PenTool, ClipboardList, BookOpen, MessageSquare, Target, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { kbData, KBArticle, KBCategory } from '@/data/kbData';

export default function KnowledgeBasePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const easing = [0.16, 1, 0.3, 1] as any;

    const filteredArticles = useMemo(() => {
        let results: KBArticle[] = [];
        kbData.forEach(cat => {
            results = [...results, ...cat.articles];
        });

        if (searchQuery) {
            results = results.filter(art =>
                art.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                art.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (activeCategory) {
            results = results.filter(art => art.category === kbData.find(c => c.id === activeCategory)?.title);
        }

        return results;
    }, [searchQuery, activeCategory]);

    const displayedCategories = useMemo(() => {
        if (!searchQuery) return kbData;
        return kbData.filter(cat =>
            cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.articles.some(art => art.question.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            {/* Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#FF6A00]/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white font-outfit mb-8">
                            Knowledge <br />
                            <span className="text-white/20">Infrastructure.</span>
                        </h1>
                        <p className="text-white/40 text-xl font-light leading-relaxed mb-12">
                            Explore the technical protocols and operational blueprints that define the NEON-AI ecosystem.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: easing }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-[#FF6A00]/[0.05] blur-3xl -z-10 rounded-full" />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#FF6A00]" size={20} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Query neuro-data or technical guides..."
                            className="w-full bg-[#121212]/80 backdrop-blur-3xl border border-white/[0.08] rounded-3xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all font-inter text-lg shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Categories HUD */}
                {!searchQuery && (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-20">
                        {kbData.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                                className={`p-6 rounded-3xl border transition-all duration-500 flex flex-col items-center gap-4 group ${activeCategory === cat.id
                                    ? 'bg-[#FF6A00] border-[#FF6A00] text-white'
                                    : 'bg-[#121212]/30 border-white/[0.04] text-white/40 hover:border-white/[0.1] hover:text-white'
                                    }`}
                            >
                                <cat.icon size={24} className={activeCategory === cat.id ? 'text-white' : 'text-[#FF6A00]'} />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-center">{cat.title}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Main Content Area */}
                <div className="space-y-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + searchQuery}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: easing }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {filteredArticles.map((article, i) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="p-10 bg-[#121212]/40 border border-white/[0.05] rounded-[3rem] group hover:border-[#FF6A00]/30 transition-all duration-700 relative overflow-hidden"
                                >
                                    {/* Glass Highlight */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF6A00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-[10px] font-bold text-[#FF6A00] uppercase tracking-[0.2em]">{article.subcategory}</span>
                                            <div className="h-px flex-1 bg-white/[0.05]" />
                                            <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${article.priority === 'High' ? 'border-red-500/20 text-red-500 bg-red-500/5' : 'border-white/10 text-white/30'
                                                }`}>
                                                {article.priority}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-white font-outfit mb-6 group-hover:text-[#FF6A00] transition-colors">{article.question}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                            {article.answer}
                                        </p>

                                        {article.link && (
                                            <Link href={article.link.href} className="flex items-center gap-2 text-[#FF6A00] text-[11px] font-bold uppercase tracking-widest hover:gap-3 transition-all mb-8 w-fit">
                                                {article.link.label} <ArrowUpRight size={14} />
                                            </Link>
                                        )}

                                        <div className="flex flex-wrap gap-2 pt-8 border-t border-white/[0.04]">
                                            {article.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-lg text-[9px] text-white/20 uppercase font-mono tracking-tighter">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Technical Support HUD */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FF6A00]/[0.02] rounded-[4rem] blur-3xl -z-10" />
                        <div className="p-16 border border-white/[0.06] rounded-[4rem] bg-[#121212]/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-12 group">
                            <div className="max-w-xl text-center md:text-left">
                                <h4 className="text-4xl font-semibold text-white font-outfit mb-6 italic">Require deeper protocol access?</h4>
                                <p className="text-white/40 text-lg font-light leading-relaxed">
                                    Our engineering tactical cell is available for specialized integration audits and bespoke technical consultations.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <button className="bg-white text-black px-12 py-5 rounded-2xl font-bold tracking-tight hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                                    Contact Support <MessageSquare size={20} />
                                </button>
                                <button className="bg-[#121212] text-white border border-white/[0.1] px-12 py-5 rounded-2xl font-bold tracking-tight hover:border-[#FF6A00]/40 transition-all flex items-center justify-center gap-3">
                                    Documentation Registry <BookOpen size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

