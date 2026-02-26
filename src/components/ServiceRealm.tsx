'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

interface ServiceRealmProps {
    title: string;
    description: string;
    icon: React.ElementType;
    overview: string;
    approach: {
        title: string;
        description: string;
    }[];
    deliverables: string[];
}

export default function ServiceRealm({
    title,
    description,
    icon: Icon,
    overview,
    approach,
    deliverables,
}: ServiceRealmProps) {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-40 relative overflow-hidden font-inter selection:bg-[#FF6A00]/30">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF6A00]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6A00]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <Header />

            <div className="container mx-auto px-6 relative z-10">
                {/* Breadcrumb / Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: easing }}
                    className="mb-12"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center space-x-2 text-white/40 hover:text-[#FF6A00] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">Back to Previous Page</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-5xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#FF6A00]/5 border border-[#FF6A00]/20 mb-8">
                            <Icon className="w-4 h-4 text-[#FF6A00]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] text-[#FF6A00] uppercase">Specialized Solutions</span>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
                            {title}<span className="text-[#FF6A00]">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
                    {/* Left: Overview & Deliverables */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: easing }}
                        >
                            <h2 className="text-xs font-bold tracking-[0.3em] text-[#FF6A00] uppercase mb-12">Strategic Overview</h2>
                            <p className="text-2xl text-white/70 font-light leading-relaxed mb-16">
                                {overview}
                            </p>

                            <h2 className="text-xs font-bold tracking-[0.3em] text-[#FF6A00] uppercase mb-12">Core Deliverables</h2>
                            <div className="space-y-4">
                                {deliverables.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-4 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] group-hover:scale-150 transition-transform" />
                                        <span className="text-white/50 text-lg font-light group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Approach (Vertical Flow) */}
                    <div className="lg:col-span-7">
                        <h2 className="text-xs font-bold tracking-[0.3em] text-[#FF6A00] uppercase mb-12">The Neon Byte Approach</h2>
                        <div className="space-y-12">
                            {approach.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.1, ease: easing }}
                                    className="relative pl-12 border-l border-white/10 group hover:border-[#FF6A00]/50 transition-colors pb-12 last:pb-0"
                                >
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10 group-hover:bg-[#FF6A00] group-hover:border-[#FF6A00] transition-colors" />
                                    <span className="text-[10px] font-bold text-[#FF6A00]/50 mb-2 block uppercase tracking-widest">Phase 0{idx + 1}</span>
                                    <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-[#FF6A00] transition-colors">{step.title}</h3>
                                    <p className="text-white/40 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: easing }}
                    className="border-t border-white/5 pt-32 pb-40 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight">Ready to Start Your Project?</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center space-x-4 border border-white/10 hover:border-[#FF6A00]/50 text-white/70 hover:text-white px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
                        >
                            <span>View Pricing</span>
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/support"
                            className="inline-flex items-center space-x-4 bg-[#FF6A00] hover:bg-[#FF7A1A] text-black px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Start Project</span>
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
