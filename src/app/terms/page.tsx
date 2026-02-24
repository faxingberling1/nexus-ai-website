'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Framework 2026</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white font-outfit leading-none mb-10">
                        Terms & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40">Conditions.</span>
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
                        <p className="text-[#FF6A00] font-bold uppercase tracking-[0.3em] mb-4">NEONBYTE – Terms of Engagement</p>
                        <p className="text-white/60 text-lg">Effective Date: February 2026 | Governing Law: Delaware, United States</p>
                        <p className="mt-8 text-white/40 text-xl font-light leading-relaxed">
                            By accessing or using NEONBYTE Services, you agree to these Terms. We provide high-fidelity digital engineering services including AI solutions, SaaS platforms, and enterprise automation.
                        </p>
                    </motion.div>

                    {/* Services & Accounts */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">1. Services & Usage</h2>
                            <div className="space-y-4">
                                <p className="text-white/40 text-sm">We provide custom AI engineering, web development, and marketing automation. All services are subject to mutual agreement and statement of work.</p>
                                <ul className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest text-[#FF6A00]/60">
                                    <li>AI Solutions</li>
                                    <li>Web Engineering</li>
                                    <li>Marketing Ops</li>
                                    <li>Enterprise SaaS</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">2. Accounts & Security</h2>
                            <p className="text-white/40 text-sm leading-relaxed mb-4">
                                Users are responsible for maintaining confidentiality of credentials. NEONBYTE reserves the right to suspend accounts for suspicious or unauthorized activity.
                            </p>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-tighter leading-none mb-1">Status</p>
                                <p className="text-white font-medium text-xs">Standard Multi-Factor Protection Enforced</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">9. Cookie Policy</h2>
                            <p className="text-white/40 text-sm leading-relaxed">
                                We use essential and analytical cookies to improve platform performance. By using the Services, you consent to our use of tracking technologies as outlined in our technical documentation.
                            </p>
                        </motion.div>
                    </div>

                    {/* Billing & IP */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-[#FF6A00]/5 border border-[#FF6A00]/20 group"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">3. Payments & Billing</h2>
                            <div className="space-y-6">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm text-white/40">
                                    <h3 className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-2">A. One-Time Fees</h3>
                                    <p>Standard engineering projects are billed per milestone. All fees are in USD.</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm text-white/40">
                                    <h3 className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-2">B. Subscriptions</h3>
                                    <p>Recurring SEO, hosting, and SaaS tools are billed monthly in advance.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">4. Intellectual Property</h2>
                            <p className="text-white/40 text-sm leading-relaxed mb-6">NEONBYTE retains all rights to proprietary algorithms, codebases, and AI models. User retains rights to their raw data and branding assets.</p>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div className="h-full bg-[#FF6A00]" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <h2 className="text-2xl font-semibold text-[#FF6A00] mb-6 font-outfit uppercase tracking-tighter">6. Acceptable Use Policy</h2>
                            <p className="text-white/40 text-xs leading-relaxed">
                                Users must not engage in illegal data harvesting, reverse engineering, or system stress-testing without prior written authorization. Violation results in immediate termination.
                            </p>
                        </motion.div>
                    </div>

                    {/* Specialized Sections Slider / Cards */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                        >
                            <h3 className="text-[#FF6A00] font-bold uppercase tracking-widest text-[10px] mb-3">5. AI Disclaimer</h3>
                            <p className="text-white/30 text-[11px] leading-relaxed">AI outputs are probabilistic. NEONBYTE is not liable for algorithmic errors.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                        >
                            <h3 className="text-[#FF6A00] font-bold uppercase tracking-widest text-[10px] mb-3">7. Maintenance</h3>
                            <p className="text-white/30 text-[11px] leading-relaxed">Scope includes platform patches and minor security updates. Excludes structural pivots.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                        >
                            <h3 className="text-[#FF6A00] font-bold uppercase tracking-widest text-[10px] mb-3">8. DPA Summary</h3>
                            <p className="text-white/30 text-[11px] leading-relaxed">Data processing follows GDPR/CCPA standards for enterprise compliance.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl bg-[#FF6A00]/10 border border-[#FF6A00]/20"
                        >
                            <h3 className="text-[#FF6A00] font-bold uppercase tracking-widest text-[10px] mb-3">10. Refunds</h3>
                            <p className="text-[#FF6A00]/80 text-[11px] leading-relaxed font-medium">Billed work is non-refundable once engineering sprints commence.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
