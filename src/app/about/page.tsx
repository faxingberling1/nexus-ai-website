'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easing }}
                    className="max-w-4xl"
                >
                    <h1 className="text-7xl md:text-9xl font-semibold tracking-tight text-white font-outfit leading-none mb-10">
                        Composed <br />
                        <span className="text-white/20">Intelligence.</span>
                    </h1>
                    <p className="text-white/40 text-2xl font-light leading-relaxed mb-20 max-w-2xl">
                        Founded on the principles of engineering rigor and architectural scale, NEONBYTE is a digital partner for the world's most ambitious companies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-20 border-t border-white/[0.04]">
                    <div className="lg:col-span-4">
                        <h2 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-6">Our Narrative</h2>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-12">
                            <p className="text-3xl font-light text-white/80 leading-snug">
                                We believe that the gap between complex challenges and breakthrough solutions is bridged by <span className="text-white">superior engineering</span>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/40 font-light leading-relaxed">
                                <p>
                                    NEONBYTE was born from a desire to move beyond the shallow promises of traditional agencies. We don't just "build apps"—we architect resilient ecosystems that handle billions of events and empower human potential through intelligent automation.
                                </p>
                                <p>
                                    Our team consists of veteran engineers, data scientists, and strategists who share a singular obsession: the pursuit of technical excellence. We operate at the intersection of human intuition and neural performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values / Principles */}
                <div className="py-32 border-t border-white/[0.04]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Technical First", subtitle: "We lead with execution, not empty promises. Every strategy is validated by architectural feasibility." },
                            { title: "Radical Transparency", subtitle: "Architecture, code, and progress are shared in real-time. We operate as an extension of your team." },
                            { title: "Measured Impact", subtitle: "Results aren't hypothetical. We define success through hard data, ROI, and system uptime." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <h3 className="text-2xl font-medium text-white mb-6 font-outfit">{v.title}</h3>
                                <p className="text-white/40 font-light leading-relaxed text-[15px]">{v.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
