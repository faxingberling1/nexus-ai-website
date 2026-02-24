'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-40 pb-20 relative overflow-hidden font-inter selection:bg-[#FF6A00]/30 text-white">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FF6A00]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6A00]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <Header />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easing }}
                    className="max-w-4xl mb-24"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                        <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Compliance 2026</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white font-outfit leading-none mb-10">
                        Privacy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40">Standards.</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Header Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl"
                    >
                        <p className="text-[#FF6A00] font-bold uppercase tracking-[0.3em] mb-4">NEONBYTE – Privacy Policy</p>
                        <p className="text-white/60 text-lg">Effective Date: February 2026 | Jurisdiction: Delaware, United States</p>
                        <p className="mt-8 text-white/40 text-xl font-light leading-relaxed">
                            NEONBYTE (“Company,” “we,” “us,” or “our”) respects your privacy and is committed to protecting personal information collected through our websites, applications, SaaS platforms, AI systems, marketing services, and automation tools.
                        </p>
                    </motion.div>

                    {/* Section 1: Collection */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">1. Information We Collect</h2>
                            <div className="space-y-6 text-white/40">
                                <div>
                                    <h3 className="text-white/80 font-medium mb-3 tracking-widest text-xs uppercase">A. Information You Provide</h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm">
                                        <li>Full name</li>
                                        <li>Business name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Billing info</li>
                                        <li>Account creds</li>
                                        <li>Materials</li>
                                        <li>Communications</li>
                                    </ul>
                                </div>
                                <div className="pt-6 border-t border-white/5">
                                    <h3 className="text-white/80 font-medium mb-3 tracking-widest text-xs uppercase">B. Automatically Collected</h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm">
                                        <li>IP address</li>
                                        <li>Browser info</li>
                                        <li>Device IDs</li>
                                        <li>OS data</li>
                                        <li>URLs</li>
                                        <li>Behavior</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">2. Usage & Legal Basis</h2>
                            <div className="space-y-4">
                                <p className="text-white/40 text-sm">We use data for contract performance, legitimate interests, and legal compliance.</p>
                                <ul className="space-y-2 text-white/40 text-[13px]">
                                    <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" /> <span>Deliver contracted services</span></li>
                                    <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" /> <span>Process payments</span></li>
                                    <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" /> <span>Optimize internal AI systems</span></li>
                                    <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" /> <span>Fraud prevention</span></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 2: AI & Platform */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-[#FF6A00]/5 border border-[#FF6A00]/20 group"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">1C. AI & Platform Data</h2>
                            <p className="text-white/60 mb-6 text-sm">When using AI-powered tools, we logs prompts, files, and outputs to optimize performance. <span className="text-white font-medium">We do not sell personal data.</span></p>
                            <div className="grid grid-cols-2 gap-4">
                                {['Prompts', 'Files', 'Outputs', 'Logs'].map((item, i) => (
                                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5 text-xs text-white/40 tracking-widest uppercase text-center">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">4. Data Sharing & Retention</h2>
                            <p className="text-white/40 text-sm mb-4">Shared with cloud providers and billing processors under strict NDA. We retain data only as long as necessary for Service delivery.</p>
                            <ul className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest text-white/30">
                                <li>Cloud Infrastructure</li>
                                <li>Payment Gateway</li>
                                <li>Legal Compliance</li>
                                <li>Support Systems</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">8. Operations</h2>
                            <div className="space-y-4 text-white/40 text-sm">
                                <p><span className="text-white/60 font-medium">International:</span> Data may be processed in the US and global provider nodes.</p>
                                <p><span className="text-white/60 font-medium">Children:</span> Services are restricted to individuals 13+.</p>
                                <p><span className="text-white/60 font-medium">Law:</span> Governed by the laws of Delaware, United States.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Stats / Contact */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                        >
                            <h2 className="text-[#FF6A00] font-bold uppercase tracking-widest text-xs mb-4">6. Security</h2>
                            <p className="text-white/40 text-xs leading-relaxed">Encryption in transit (HTTPS/SSL), secure cloud infrastructure, and role-based access tokens.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                        >
                            <h2 className="text-[#FF6A00] font-bold uppercase tracking-widest text-xs mb-4">7. Your Rights</h2>
                            <p className="text-white/40 text-xs leading-relaxed">Access, correction, deletion, and portability via privacy@neonbyte.com</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-3xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex flex-col justify-between"
                        >
                            <h2 className="text-[#FF6A00] font-bold uppercase tracking-widest text-xs mb-4">11. Contact</h2>
                            <p className="text-white/80 font-medium text-sm">NEONBYTE Headquarters<br />Delaware, US</p>
                            <p className="text-white font-bold mt-2">privacy@neonbyte.com</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
