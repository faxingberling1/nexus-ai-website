'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Brain, Target, ArrowRight, Sparkles, Mail, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const departments = [
    {
        icon: <Code size={24} />,
        title: "Engineering",
        description: "Building the neural infrastructures and high-performance protocols of tomorrow.",
        status: "Coming Soon"
    },
    {
        icon: <Brain size={24} />,
        title: "AI Research",
        description: "Advancing autonomous intelligence and LLM integration frameworks.",
        status: "Planning"
    },
    {
        icon: <Target size={24} />,
        title: "Strategic Design",
        description: "Crafting immersive experiences and brand-centric technical ecosystems.",
        status: "Coming Soon"
    }
];

export default function CareersPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
        }
    };

    return (
        <main className="min-h-screen bg-[#020202] text-white overflow-hidden font-inter relative">
            <Header />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6A00]/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6A00]/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                                <Sparkles size={14} /> Join the Evolution
                            </span>
                            <h1 className="text-5xl md:text-7xl font-outfit font-black mb-8 leading-[1.1] tracking-tight">
                                Building the <span className="text-[#FF6A00] animate-pulse">Future</span> Together
                            </h1>
                            <p className="text-xl text-white/40 leading-relaxed font-light">
                                We are quietly assembling a team of world-class engineers, designers, and strategists. Our talent network is opening soon.
                            </p>
                        </motion.div>
                    </div>

                    {/* Department Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-10 rounded-[2.5rem] bg-[#121212]/40 backdrop-blur-3xl border border-white/[0.06] hover:border-[#FF6A00]/30 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-[#FF6A00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,106,0,0.1)]">
                                    {dept.icon}
                                </div>

                                <h3 className="text-2xl font-outfit font-bold mb-4 group-hover:text-[#FF6A00] transition-colors">{dept.title}</h3>
                                <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                                    {dept.description}
                                </p>

                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                                    <span className="text-white/60">{dept.status}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Notification CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto rounded-[3.5rem] p-16 bg-[#121212]/30 backdrop-blur-3xl border border-white/[0.08] relative overflow-hidden text-center"
                    >
                        <div className="absolute inset-0 bg-[#FF6A00]/5 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-outfit font-black mb-6">Stay Informed</h2>
                            <p className="text-white/40 mb-10 max-w-xl mx-auto">
                                Be the first to know when we open our recruitment portal and launch our inaugural talent cohorts.
                            </p>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                                    <div className="flex-1 relative">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-14 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-10 py-5 bg-[#FF6A00] text-white font-bold rounded-2xl hover:shadow-[0_15px_40px_rgba(255,106,0,0.4)] transition-all duration-500 flex items-center justify-center gap-2 group whitespace-nowrap"
                                    >
                                        Notify Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            ) : (
                                <div className="flex items-center justify-center gap-3 text-[#FF6A00] font-bold text-lg animate-in fade-in zoom-in duration-500">
                                    <Check size={24} /> You're on the list.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
