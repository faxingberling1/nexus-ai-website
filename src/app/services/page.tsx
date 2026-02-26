'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain, Globe, LineChart, Zap, Layers, Gamepad2, PenTool, ClipboardList,
    ArrowUpRight, ChevronRight, CheckCircle2, Star, Sparkles, Link as LinkIcon, Cpu, Shield
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
    {
        title: "AI Solutions",
        slug: "ai-solutions",
        pricingId: "ai",
        description: "Intelligent systems and custom automation designed to scale your business operations.",
        icon: Brain,
        color: "#FF6A00",
        features: ["Predictive Analytics", "Process Automation", "Custom AI Models", "Smart Interfaces"]
    },
    {
        title: "Web & Platform",
        slug: "web-development",
        pricingId: "web",
        description: "Enterprise-grade digital infrastructure built for high performance and reliable scalability.",
        icon: Globe,
        color: "#00E0FF",
        features: ["SaaS Architecture", "Performance Web", "API Systems", "Cloud Integration"]
    },
    {
        title: "Growth & Performance",
        slug: "growth-performance",
        pricingId: "growth",
        description: "Data-driven marketing systems engineered to increase conversion rates and business growth.",
        icon: LineChart,
        color: "#00FF66",
        features: ["Conversion Optimization", "Deep SEO", "Scale Strategy", "Revenue Analytics"]
    },
    {
        title: "Business Automation",
        slug: "business-automation",
        pricingId: "automation",
        description: "Improving workflow efficiency through seamless integration and process optimization.",
        icon: Zap,
        color: "#FFE600",
        features: ["Process Automation", "CRM Integration", "Business Optimization", "Efficiency Audits"]
    },
    {
        title: "Product Engineering",
        slug: "product-development",
        pricingId: "product",
        description: "End-to-end digital product design and development from initial concept to market launch.",
        icon: Layers,
        color: "#E000FF",
        features: ["MVP Development", "UI/UX Systems", "Mobile Apps", "Product Roadmaps"]
    },
    {
        title: "Game Development",
        slug: "game-development",
        pricingId: "game",
        description: "Creating immersive interactive experiences and gamified systems that drive user loyalty.",
        icon: Gamepad2,
        color: "#FF004D",
        features: ["Interactive Mechanics", "Performance Systems", "Digital Experiences", "Engagement Loops"]
    },
    {
        title: "Brand Messaging",
        slug: "brand-messaging",
        pricingId: "brand",
        description: "Strategic messaging systems that align your brand value with effective communication.",
        icon: PenTool,
        color: "#FF8C00",
        features: ["Content Strategy", "Executive Copy", "Brand Identity", "Market Positioning"]
    },
    {
        title: "Strategic Consulting",
        slug: "strategic-consulting",
        pricingId: "consulting",
        description: "High-level technical advisory and planning to de-risk your projects and accelerate growth.",
        icon: ClipboardList,
        color: "#0075FF",
        features: ["Technology Audits", "Growth Blueprints", "Digital Strategy", "Business Advisory"]
    },
    {
        title: "Blockchain Apps",
        slug: "blockchain-apps",
        pricingId: "blockchain",
        description: "Secure Web3 infrastructure including custom wallet creation and decentralized service integration.",
        icon: Cpu,
        color: "#F7931A",
        features: ["Wallet Creation", "Smart Contracts", "DeFi Integration", "Web3 Identity"]
    }
];

function AbstractServiceIndicator({ type, color, isHovered }: { type: string, color: string, isHovered: boolean }) {
    const isAI = type === "ai-solutions";
    const isWeb = type === "web-development";
    const isGrowth = type === "growth-performance";
    const isAutomation = type === "business-automation";
    const isProduct = type === "product-development";
    const isGame = type === "game-development";
    const isBrand = type === "brand-messaging";
    const isConsulting = type === "strategic-consulting";
    const isBlockchain = type === "blockchain-apps";

    return (
        <div className="absolute top-6 right-6 w-24 h-24 pointer-events-none overflow-hidden rounded-2xl border border-white/[0.03] bg-white/[0.01] flex items-center justify-center group-hover:bg-white/[0.03] transition-all duration-700">
            {/* Ambient Glow within indicator */}
            <motion.div
                className="absolute inset-0 blur-2xl opacity-20"
                animate={{ opacity: isHovered ? 0.4 : 0.2 }}
                style={{ background: color }}
            />

            <div className="relative w-full h-full flex items-center justify-center scale-50 lg:scale-75">
                {isAI && (
                    <div className="relative w-20 h-20">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{ backgroundColor: color }}
                                animate={{
                                    x: [Math.cos(i) * 30, Math.cos(i + 1) * 30, Math.cos(i) * 30],
                                    y: [Math.sin(i) * 30, Math.sin(i + 1) * 30, Math.sin(i) * 30],
                                    opacity: [0.2, 1, 0.2],
                                }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                            />
                        ))}
                        <motion.div
                            className="absolute inset-0 border border-white/10 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-y-1/2 overflow-hidden">
                            <motion.div
                                className="w-1/2 h-full bg-white/60"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>
                )}

                {isWeb && (
                    <motion.div
                        className="relative w-20 h-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 border border-white/10 rounded-xl" />
                        <div className="absolute inset-4 border border-white/20 rounded-xl rotate-45" />
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            style={{ backgroundColor: color }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                )}

                {isGrowth && (
                    <div className="flex items-end gap-2 h-16 w-20 justify-center">
                        {[40, 70, 50, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                className="w-3 rounded-t-lg shadow-lg"
                                style={{ backgroundColor: color }}
                                initial={{ height: 0 }}
                                animate={{ height: isHovered ? `${h}%` : '20%' }}
                                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                            />
                        ))}
                    </div>
                )}

                {isAutomation && (
                    <div className="relative w-24 h-24">
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-dashed border-white/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white/40 rounded-lg"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                            style={{ backgroundColor: color }}
                            animate={{ y: [0, 60, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                )}

                {isProduct && (
                    <div className="relative w-20 h-20 perspective-[500px]">
                        {[0, 20, 40].map((z, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 border border-white/20 bg-white/5 rounded-xl shadow-xl"
                                animate={{
                                    rotateX: 45,
                                    rotateZ: 45,
                                    y: isHovered ? -i * 15 : -i * 5,
                                    opacity: 1 - i * 0.2
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        ))}
                    </div>
                )}

                {isGame && (
                    <div className="relative w-20 h-20">
                        <motion.div
                            className="absolute inset-0 border border-white/10 rounded-full"
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 8, repeat: Infinity }}
                        />
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-white/40"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                }}
                                animate={{
                                    x: [Math.cos(i) * 10, Math.cos(i) * 40, Math.cos(i) * 10],
                                    y: [Math.sin(i) * 10, Math.sin(i) * 40, Math.sin(i) * 10],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            />
                        ))}
                        <motion.div className="w-8 h-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] absolute" style={{ backgroundColor: color, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    </div>
                )}

                {isBrand && (
                    <div className="relative w-20 h-12">
                        <motion.div
                            className="absolute inset-0 border-2 border-white/20 rounded-full"
                            animate={{ borderRadius: isHovered ? "0%" : "50%" }}
                        />
                        <div className="w-full h-[2px] bg-white/10 absolute top-1/2 left-0 -translate-y-1/2" />
                        <motion.div
                            className="w-full h-[2px] absolute top-1/2 left-0 -translate-y-1/2"
                            style={{ backgroundColor: color }}
                            animate={{ scaleX: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/40 rounded-full blur-[2px]"
                            animate={{ scale: isHovered ? 2 : 1 }}
                        />
                    </div>
                )}

                {isConsulting && (
                    <div className="grid grid-cols-3 gap-2 w-16 h-16">
                        {[...Array(9)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-full h-full border border-white/10 rounded-md bg-white/5 shadow-md"
                                animate={{
                                    backgroundColor: isHovered && i % 2 === 0 ? color : 'rgba(255,255,255,0.05)',
                                    opacity: isHovered ? 1 : 0.4
                                }}
                                transition={{ delay: i * 0.05 }}
                            />
                        ))}
                    </div>
                )}

                {isBlockchain && (
                    <div className="relative w-20 h-20">
                        <motion.div
                            className="absolute inset-0 border-2 border-dashed border-white/20 rounded-xl"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="flex gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 rounded-sm"
                                    style={{ backgroundColor: color }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ServicesPage() {
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

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 mb-8">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] text-[#FF6A00] uppercase">NEONBYTE Solutions</span>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-medium tracking-tight mb-8 leading-[0.9]">
                            Strategic<br />
                            <span className="text-[#FF6A00]">Solutions.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl">
                            A portfolio of professional services developed to accelerate your enterprise growth and digital performance.
                        </p>
                    </motion.div>
                </div>

                {/* The Portal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
                    {services.map((service, idx) => {
                        const [isHovered, setIsHovered] = React.useState(false);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1, ease: easing }}
                                className="group relative"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Brand-Colored Border Glow */}
                                <div
                                    className="absolute -inset-[1px] rounded-[3rem] opacity-20 group-hover:opacity-100 transition-all duration-700 blur-[2px] group-hover:blur-[12px] z-0"
                                    style={{ background: `linear-gradient(to bottom right, ${service.color}, transparent)` }}
                                />

                                <div className="relative h-full bg-[#121212]/40 backdrop-blur-3xl border border-white/[0.05] rounded-[2rem] p-8 overflow-hidden transition-all duration-700 group-hover:bg-[#121212]/60 z-10 flex flex-col justify-between">
                                    {/* Card Glow */}
                                    <div
                                        className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 translate-x-1/3 -translate-y-1/3 blur-[80px]"
                                        style={{ background: service.color }}
                                    />

                                    {/* Abstract Service Indicator */}
                                    <AbstractServiceIndicator type={service.slug} color={service.color} isHovered={isHovered} />

                                    <div className="relative z-10 flex flex-col h-full flex-grow">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="flex flex-col gap-3">
                                                <div
                                                    className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-700 shadow-xl group-hover:rotate-[10deg] group-hover:scale-110"
                                                    style={{
                                                        backgroundColor: `${service.color}10`,
                                                        borderColor: `${service.color}20`,
                                                        color: service.color
                                                    }}
                                                >
                                                    <service.icon size={26} strokeWidth={1.5} />
                                                </div>
                                                <span
                                                    className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity"
                                                    style={{ color: service.color }}
                                                >
                                                    Service {idx + 1}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0 hover:bg-white/10"
                                            >
                                                <ArrowUpRight size={20} style={{ color: service.color }} />
                                            </Link>
                                        </div>

                                        <div className="mb-8 flex-grow">
                                            <h3 className="text-2xl font-medium mb-4 transition-colors duration-500 group-hover:text-white" style={{ color: `${service.color}CC` }}>{service.title}</h3>
                                            <p className="text-[15px] text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/[0.05] flex flex-wrap gap-2 mb-8">
                                            {service.features.map((feature, fidx) => (
                                                <div key={fidx} className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:border-white/10 transition-colors duration-500">
                                                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: service.color }} />
                                                    <span className="text-[10px] font-bold tracking-wider text-white/30 uppercase group-hover:text-white/70 transition-colors duration-500">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center justify-center w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] group/btn transition-all hover:bg-white/[0.08] hover:border-white/20 gap-2"
                                        >
                                            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Visit Page</span>
                                            <ChevronRight className="w-4 h-4 text-white/40 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Deep Engagement Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="relative rounded-[4rem] border border-white/[0.05] bg-[#121212]/20 p-20 overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="w-16 h-16 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mx-auto mb-10">
                            <Star className="w-8 h-8" />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-medium mb-10 tracking-tight leading-tight">Simplifying digital transformation.</h2>
                        <p className="text-xl text-white/40 font-light leading-relaxed mb-16">
                            Beyond standard deliverables, we provide the strategic approach and specialized expertise required to scale your business.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/support"
                                className="group flex items-center space-x-4 bg-white text-black px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
                            >
                                <span>Request Analysis</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <Link
                                href="/process"
                                className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors"
                            >
                                <span className="text-sm font-bold tracking-widest uppercase">The Methodology</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
