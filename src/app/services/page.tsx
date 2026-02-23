'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, LineChart, Gamepad2, PenTool, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
    {
        title: "AI Solutions",
        description: "Custom AI systems and intelligent automation tailored to your operations. We build neural infrastructure that thinks, adapts, and scales.",
        icon: Brain,
        features: ["Neural Network Integration", "Autonomous Agents", "Predictive Analytics", "Natural Language Processing"]
    },
    {
        title: "Web & Platform Development",
        description: "Enterprise-grade websites, SaaS platforms, and scalable applications built with modern stacks for maximum performance.",
        icon: Code,
        features: ["Next.js & React Mastery", "Cloud-Native Architecture", "Real-time Dashboards", "Microservices Design"]
    },
    {
        title: "Growth & Performance",
        description: "Data-driven growth systems built for measurable impact. SEO, paid media, and conversion optimization powered by AI.",
        icon: LineChart,
        features: ["AI-Driven SEO", "Conversion Engineering", "Global Media Buying", "Behavioral Analytics"]
    },
    {
        title: "Business Automation",
        description: "Workflow design, CRM integrations, and operational optimization. Let our systems handle the grunt work.",
        icon: GitBranch,
        features: ["Workflow Orchestration", "API Integration", "Legacy Modernization", "Custom CRM Solutions"]
    }
];

export default function ServicesPage() {
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
                        Capabilities <br />
                        <span className="text-white/20">& Solutions.</span>
                    </h1>
                    <p className="text-white/40 text-2xl font-light leading-relaxed">
                        We don't just build software. We engineer competitive advantages through intelligent design and technical rigor.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                            className="group bg-[#121212]/30 border border-white/[0.04] rounded-[3rem] p-12 lg:p-16 hover:border-[#FF6A00]/20 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF6A00]/[0.05] transition-all duration-700" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                                <div className="lg:col-span-1">
                                    <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-[#FF6A00] shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <service.icon size={32} />
                                    </div>
                                </div>

                                <div className="lg:col-span-6">
                                    <h2 className="text-4xl font-semibold text-white mb-6 font-outfit">{service.title}</h2>
                                    <p className="text-white/40 text-[17px] leading-relaxed font-light mb-8 lg:mb-0">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="lg:col-span-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, j) => (
                                            <div key={j} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                                                <CheckCircle2 size={16} className="text-[#FF6A00]" />
                                                <span className="text-[13px] font-medium text-white/50">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/[0.04] flex justify-between items-center group/btn">
                                <span className="text-white/20 text-xs font-semibold tracking-widest uppercase font-inter">Engineering Phase {i + 1}</span>
                                <button className="flex items-center gap-3 text-white font-medium hover:text-[#FF6A00] transition-colors">
                                    Request Technical Blueprint <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
