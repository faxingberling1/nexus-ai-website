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
        description: "We dive deep into your business operations, identifying bottlenecks and opportunities for strategic improvements. We deliver a comprehensive technical roadmap.",
        icon: Search,
        duration: "1-2 Weeks"
    },
    {
        step: "02",
        title: "Architectural Design",
        description: "Our engineers build the structural foundation. We focus on scalability, security, and system standards to ensure a future-proof ecosystem.",
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
        title: "Intelligence Integration",
        description: "Implementing advanced automation and intelligence systems into the workflow. We calibrate models to your specific business data for maximum ROI.",
        icon: Zap,
        duration: "3-4 Weeks"
    },
    {
        step: "05",
        title: "Scale & Optimize",
        description: "Stress testing, performance tuning, and global deployment. We ensure your systems are ready for high-volume enterprise activity.",
        icon: ShieldCheck,
        duration: "Post-Launch"
    }
];

export default function ProcessPage() {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            {/* Ambient Background Lighting Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF6A00]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#FF6A00]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-[#FF6A00]/5 rounded-full blur-[120px]" />
                {/* Grainy Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <Header />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easing }}
                    className="max-w-3xl mb-32"
                >
                    <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white font-outfit leading-none mb-10">
                        Method <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white">
                            & Rigor.
                        </span>
                    </h1>
                    <p className="text-white/40 text-2xl font-light leading-relaxed max-w-2xl">
                        A disciplined, technical-first approach to building digital infrastructure. We combine speed with architectural integrity.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Line for Desktop */}
                    <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.08] hidden md:block shadow-[0_0_15px_rgba(255,255,255,0.05)]" />

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
                                <div className="absolute left-[30px] lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020202] border-2 border-[#FF6A00] z-20 hidden md:block group-hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] group-hover:scale-125 transition-all duration-500" />

                                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left group/text">
                                    <div className="text-7xl font-bold text-white/[0.04] font-outfit mb-4 group-hover/text:text-[#FF6A00]/10 transition-colors duration-700">{step.step}</div>
                                    <div className="relative mb-8">
                                        {/* Local Light Pool */}
                                        <div className="absolute inset-0 bg-[#FF6A00]/20 blur-2xl opacity-0 group-hover/text:opacity-100 transition-opacity duration-700 rounded-full" />
                                        <div className="relative w-16 h-16 rounded-2xl bg-[#121212] border border-white/[0.1] flex items-center justify-center text-[#FF6A00] shadow-2xl group-hover/text:border-[#FF6A00]/30 transition-all duration-700">
                                            <step.icon size={28} />
                                        </div>
                                    </div>
                                    <h2 className="text-4xl font-semibold text-white mb-6 font-outfit tracking-tight group-hover/text:text-[#FF6A00] transition-colors duration-500">{step.title}</h2>
                                    <p className="text-white/40 text-lg font-light leading-relaxed mb-6 group-hover/text:text-white/70 transition-colors duration-500">
                                        {step.description}
                                    </p>
                                    <span className="inline-flex px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.1] text-[11px] font-semibold tracking-widest text-[#FF6A00]/60 uppercase font-inter group-hover/text:border-[#FF6A00]/30 transition-all duration-500">
                                        Estimated: {step.duration}
                                    </span>
                                </div>

                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="w-full aspect-[4/3] bg-[#0A0A0A] rounded-[3rem] border border-white/[0.08] relative overflow-hidden group/card hover:border-[#FF6A00]/20 transition-all duration-700 shadow-3xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.05] to-transparent" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-white/[0.05] rounded-[2rem] bg-[#080808]/60 backdrop-blur-2xl flex items-center justify-center">
                                            {/* Perspective Container */}
                                            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                                                {i === 0 && (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                        className="relative w-40 h-40"
                                                    >
                                                        <div className="absolute inset-0 border border-[#FF6A00]/20 rounded-full" />
                                                        <div className="absolute inset-4 border border-[#FF6A00]/40 rounded-full" />
                                                        <div className="absolute inset-8 border border-[#FF6A00]/60 rounded-full" />
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF6A00] rounded-full shadow-[0_0_20px_rgba(255,106,0,0.8)]" />
                                                    </motion.div>
                                                )}
                                                {i === 1 && (
                                                    <div className="relative w-full h-full p-12 flex flex-col justify-center gap-6">
                                                        <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                                                            <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 2, ease: "circOut" }} className="h-full w-3/4 bg-gradient-to-r from-[#FF6A00]/20 to-[#FF6A00]" />
                                                        </div>
                                                        <div className="h-2 w-2/3 bg-white/[0.03] rounded-full overflow-hidden text-right">
                                                            <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 2, delay: 0.2, ease: "circOut" }} className="h-full w-full bg-gradient-to-r from-[#FF6A00]/20 to-[#FF6A00]" />
                                                        </div>
                                                        <div className="h-2 w-4/5 bg-white/[0.03] rounded-full overflow-hidden">
                                                            <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 2, delay: 0.4, ease: "circOut" }} className="h-full w-1/2 bg-gradient-to-r from-[#FF6A00]/20 to-[#FF6A00]" />
                                                        </div>
                                                    </div>
                                                )}
                                                {i === 2 && (
                                                    <div className="grid grid-cols-4 gap-3 w-3/4 h-3/4">
                                                        {[...Array(12)].map((_, j) => (
                                                            <motion.div
                                                                key={j}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: j * 0.05 }}
                                                                className="bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center p-2"
                                                            >
                                                                <div className="w-full h-1 bg-[#FF6A00]/20 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        animate={{ x: ["-100%", "100%"] }}
                                                                        transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                                                                        className="h-full w-1/2 bg-[#FF6A00]"
                                                                    />
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                )}
                                                {i === 3 && (
                                                    <div className="relative">
                                                        <motion.div
                                                            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
                                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                            className="w-48 h-48 rounded-full border border-[#FF6A00]/20 flex items-center justify-center"
                                                        >
                                                            <div className="w-32 h-32 rounded-full border border-[#FF6A00]/40 flex items-center justify-center">
                                                                <div className="w-16 h-16 rounded-full bg-[#FF6A00] shadow-[0_0_50px_rgba(255,106,0,0.5)] animate-pulse" />
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                )}
                                                {i === 4 && (
                                                    <div className="flex items-end gap-3 h-1/2">
                                                        {[...Array(8)].map((_, j) => (
                                                            <motion.div
                                                                key={j}
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${20 + (j * 10)}%` }}
                                                                transition={{ duration: 1, delay: j * 0.1 }}
                                                                className="w-4 bg-gradient-to-t from-[#FF6A00]/10 to-[#FF6A00] rounded-full shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
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
