'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Share2, Database, Layers, Globe, Shield, Zap } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

interface ImmersivePortalProps {
    title: string;
    description: string;
    icon: React.ElementType;
    badge: string;
    overview: string;
    deliverables: string[];
    approach: {
        title: string;
        description: string;
    }[];
    features: {
        title: string;
        description: string;
        icon: React.ElementType;
    }[];
    integration: {
        title: string;
        description: string;
        points: {
            title: string;
            icon: React.ElementType;
            desc: string;
        }[];
        visual: React.ReactNode;
    };
    techStack: {
        name: string;
        use: string;
    }[];
}

const IntelligenceBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#FF6A00]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF6A00]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6A001a_1px,transparent_1px),linear-gradient(to_bottom,#FF6A001a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#FF6A00]/30 rounded-full"
                initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                animate={{ y: [null, Math.random() * 100 + "%"], opacity: [0, 1, 0] }}
                transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
            />
        ))}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
        <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-[#FF6A00]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-outfit uppercase tracking-tighter">{title}</h3>
            <p className="text-white/40 leading-relaxed text-sm font-light">{description}</p>
        </div>
    </motion.div>
);

export default function ImmersivePortal({
    title,
    description,
    icon: Icon,
    badge,
    overview,
    deliverables,
    approach,
    features,
    integration,
    techStack
}: ImmersivePortalProps) {
    const easing = [0.16, 1, 0.3, 1] as any;

    return (
        <main className="min-h-screen bg-[#020202] pt-40 pb-20 relative overflow-hidden font-inter selection:bg-[#FF6A00]/30 text-white">
            <IntelligenceBackground />
            <Header />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Back Navigation */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link href="/services" className="inline-flex items-center space-x-2 text-white/40 hover:text-[#FF6A00] transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">Back to Portfolio</span>
                    </Link>
                </motion.div>

                {/* Hero */}
                <div className="mb-40">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: easing }} className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">{badge}</span>
                        </div>
                        <h1 className="text-8xl md:text-[10rem] font-semibold tracking-tighter text-white font-outfit leading-[0.85] mb-12">
                            {title.split(' ')[0]} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40">{title.split(' ').slice(1).join(' ')}.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl">{description}</p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    {features.map((f, i) => (
                        <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} delay={i * 0.1} />
                    ))}
                </div>

                {/* Overview & Deliverables & Approach */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
                    <div className="lg:col-span-5">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: easing }}>
                            <h2 className="text-xs font-bold tracking-[0.3em] text-[#FF6A00] uppercase mb-12">Strategic Overview</h2>
                            <p className="text-2xl text-white/70 font-light leading-relaxed mb-16">{overview}</p>
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
                    <div className="lg:col-span-7">
                        <h2 className="text-xs font-bold tracking-[0.3em] text-[#FF6A00] uppercase mb-12">The Business Approach</h2>
                        <div className="space-y-12">
                            {approach.map((step, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: idx * 0.1, ease: easing }} className="relative pl-12 border-l border-white/10 group hover:border-[#FF6A00]/50 transition-colors pb-12 last:pb-0">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10 group-hover:bg-[#FF6A00] group-hover:border-[#FF6A00] transition-colors" />
                                    <span className="text-[10px] font-bold text-[#FF6A00]/50 mb-2 block uppercase tracking-widest">Phase 0{idx + 1}</span>
                                    <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-[#FF6A00] transition-colors">{step.title}</h3>
                                    <p className="text-white/40 leading-relaxed font-light text-sm">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Integration Bridge */}
                <section className="mb-40 relative">
                    <div className="p-12 md:p-20 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-xs font-bold tracking-[0.4em] text-[#FF6A00] uppercase mb-8">System Connectivity</h2>
                                <h3 className="text-5xl md:text-6xl font-semibold text-white mb-10 font-outfit tracking-tighter leading-none">{integration.title}</h3>
                                <p className="text-white/40 text-lg font-light leading-relaxed mb-12">{integration.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {integration.points.map((point, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex items-center space-x-3 text-white/80">
                                                <point.icon className="w-4 h-4 text-[#FF6A00]" />
                                                <span className="font-bold text-[10px] uppercase tracking-widest">{point.title}</span>
                                            </div>
                                            <p className="text-white/30 text-xs leading-relaxed">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[400px] flex items-center justify-center">
                                {integration.visual}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <div className="mb-40">
                    <h2 className="text-xs font-bold tracking-[0.4em] text-[#FF6A00] uppercase mb-16 text-center">Service Framework</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center group hover:bg-[#FF6A00]/5 hover:border-[#FF6A00]/20 transition-all duration-300">
                                <p className="text-white/80 font-bold text-xs uppercase tracking-tighter mb-1 font-outfit">{tech.name}</p>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest">{tech.use}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Security & Reliability */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    <motion.div whileHover={{ y: -5 }} className="p-12 rounded-[3rem] bg-[#FF6A00]/5 border border-[#FF6A00]/20 group">
                        <Shield className="w-12 h-12 text-[#FF6A00] mb-8" />
                        <h3 className="text-3xl font-semibold mb-6 font-outfit uppercase tracking-tighter">Enterprise Standard</h3>
                        <p className="text-white/60 leading-relaxed font-light text-sm">All deployments are built with security-first architectures. We implement strict data protection, isolation, and secure processing to ensure your business intelligence remains private and protected.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 group">
                        <Zap className="w-12 h-12 text-[#FF6A00] mb-8" />
                        <h3 className="text-3xl font-semibold mb-6 font-outfit uppercase tracking-tighter">Speed of Innovation</h3>
                        <p className="text-white/60 leading-relaxed font-light text-sm">We build production-ready systems. Our framework allows for moving from strategy to live operations in weeks, ensuring your business stays ahead of market shifts.</p>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: easing }} className="border-t border-white/5 pt-32 pb-40 text-center">
                    <h2 className="text-6xl md:text-8xl font-medium text-white mb-12 tracking-tighter font-outfit">Start Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">Project Strategy.</span></h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/pricing" className="inline-flex items-center space-x-4 border border-white/10 hover:border-[#FF6A00]/50 text-white/70 hover:text-white px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 group">
                            <span>View Pricing</span><ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/support" className="inline-flex items-center space-x-4 bg-[#FF6A00] hover:bg-[#FF7A1A] text-black px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 group">
                            <span>Get Support</span><ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
