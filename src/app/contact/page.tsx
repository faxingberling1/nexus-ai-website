'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-screen bg-[radial-gradient(circle_at_center,_rgba(255,106,0,0.03)_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: easing }}
                            className="text-6xl md:text-8xl font-semibold tracking-tight text-white font-outfit leading-none mb-8"
                        >
                            Let's Build <br />
                            <span className="text-white/20">The Future.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
                            className="text-white/40 text-xl font-light leading-relaxed mb-12 max-w-md"
                        >
                            Ready to transform your enterprise with intelligent automation and scalable architecture? Our engineers are standing by.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", value: "hello@neonbyteai.com" },
                                { icon: Phone, label: "Phone", value: "+1 (888) NEON-AI" },
                                { icon: MapPin, label: "Global HQ", value: "Neural Plaza, San Francisco" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: easing }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00]/10 group-hover:border-[#FF6A00]/30 transition-all duration-300">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-widest text-white/30 uppercase font-inter">{item.label}</p>
                                        <p className="text-white/80 font-medium font-outfit">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: easing }}
                        className="bg-[#121212]/30 backdrop-blur-3xl border border-white/[0.06] rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold tracking-widest text-white/30 uppercase font-inter ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Project Lead"
                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-300 font-inter text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold tracking-widest text-white/30 uppercase font-inter ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="lead@enterprise.com"
                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-300 font-inter text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold tracking-widest text-white/30 uppercase font-inter ml-1">Subject</label>
                                <select className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-300 font-inter text-sm appearance-none">
                                    <option className="bg-[#121212]">AI Solutions</option>
                                    <option className="bg-[#121212]">Web Development</option>
                                    <option className="bg-[#121212]">Business Automation</option>
                                    <option className="bg-[#121212]">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold tracking-widest text-white/30 uppercase font-inter ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Describe your vision..."
                                    className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-300 font-inter text-sm resize-none"
                                />
                            </div>

                            <button className="w-full group relative bg-[#FF6A00] text-white font-semibold py-5 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_8px_25px_-8px_rgba(255,106,0,0.6)] hover:shadow-[0_12px_35px_-12px_rgba(255,106,0,0.8)] hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Initialize Connection <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C33] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
