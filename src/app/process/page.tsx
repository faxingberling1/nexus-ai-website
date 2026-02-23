'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Zap, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const steps = [
    {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We dive deep into your operational primitives, identifying bottlenecks and opportunities for intelligent intervention. We deliver a comprehensive technical roadmap.",
        icon: Search,
        duration: "1-2 Weeks"
    },
    {
        step: "02",
        title: "Architectural Design",
        description: "Our engineers build the structural foundation. We focus on scalability, security, and integration protocols to ensure a future-proof ecosystem.",
        icon: PenTool,
        duration: "2-3 Weeks"
    },
    {
        step: "03",
        title: "Agile Development",
        description: "Rapid iteration with high code quality. We provide real-time access to the development environment, allowing for constant feedback and refinement.",
        icon: Code,
        duration: "Ongoing"
    },
    {
        step: "04",
        title: "Neural Integration",
        description: "Injecting machine learning and autonomous agents into the workflow. We calibrate AI models to your specific datasets for maximum ROI.",
        icon: Zap,
        duration: "3-4 Weeks"
    },
    {
        step: "05",
        title: "Scale & Optimize",
        description: "Stress testing, performance tuning, and global deployment. We ensure your systems are ready for millions of events per second.",
        icon: ShieldCheck,
        duration: "Post-Launch"
    }
];

export default function ProcessPage() {
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
                        Method <br />
                        <span className="text-white/20">& Rigor.</span>
                    </h1>
                    <p className="text-white/40 text-2xl font-light leading-relaxed">
                        A disciplined, technical-first approach to building digital infrastructure. We combine speed with architectural integrity.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Line for Desktop */}
                    <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.04] hidden md:block" />

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Step Marker */}
                                <div className="absolute left-[30px] lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020202] border-2 border-[#FF6A00] z-20 hidden md:block" />

                                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="text-6xl font-bold text-white/10 font-outfit mb-4">{step.step}</div>
                                    <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/[0.06] flex items-center justify-center text-[#FF6A00] mb-8 shadow-2xl">
                                        <step.icon size={28} />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-white mb-6 font-outfit tracking-tight">{step.title}</h2>
                                    <p className="text-white/40 text-lg font-light leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                    <span className="inline-flex px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] text-[11px] font-semibold tracking-widest text-white/30 uppercase font-inter">
                                        Estimated: {step.duration}
                                    </span>
                                </div>

                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="w-full aspect-[4/3] bg-[#0A0A0A] rounded-[2.5rem] border border-white/[0.04] relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.02] to-transparent" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/[0.05] rounded-3xl bg-[#080808]/50 backdrop-blur-xl flex items-center justify-center">
                                            {/* Abstract indicator for each step */}
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                {i === 0 && <div className="w-32 h-32 border border-[#FF6A00]/20 rounded-full flex items-center justify-center animate-pulse"><div className="w-16 h-16 border border-[#FF6A00]/40 rounded-full" /></div>}
                                                {i === 1 && <div className="w-48 h-24 border border-[#FF6A00]/20 rounded-lg relative overflow-hidden"><div className="absolute top-0 left-0 w-1/3 h-full bg-[#FF6A00]/5 border-r border-[#FF6A00]/20" /></div>}
                                                {i === 2 && <div className="grid grid-cols-4 gap-4 w-1/2">{[...Array(8)].map((_, j) => <div key={j} className="h-8 bg-white/[0.03] rounded-md animate-pulse" style={{ animationDelay: `${j * 0.2}s` }} />)}</div>}
                                                {i === 3 && <div className="relative w-32 h-32"><div className="absolute inset-0 bg-[#FF6A00]/10 rounded-full blur-2xl" /><div className="absolute inset-0 border border-[#FF6A00]/30 rounded-full rotate-45" /></div>}
                                                {i === 4 && <div className="flex gap-4 items-end">{[...Array(5)].map((_, j) => <div key={j} className="w-6 bg-gradient-to-t from-[#FF6A00]/20 to-[#FF6A00]/40 rounded-t-lg" style={{ height: `${20 + (j * 15)}%` }} />)}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
