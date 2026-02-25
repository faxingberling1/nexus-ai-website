'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, ArrowRight, Zap, Shield, Cpu, Globe,
    ArrowUpRight, Target, Sparkles, BarChart, Rocket,
    Brain, LineChart, Layers, Gamepad2, PenTool, ClipboardList,
    ChevronRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pricingCategories = [
    {
        id: "ai",
        title: "AI Solutions",
        icon: Brain,
        description: "One-Time + Maintenance Optional",
        tiers: [
            { name: "AI Launchpad", price: "1500", maintenance: "150", cta: "Request AI Starter", features: ["AI audit + roadmap", "1 chatbot", "Tool recommendations", "Implementation blueprint"] },
            { name: "AI Accelerator", price: "3000", maintenance: "300", cta: "Request AI Automation", features: ["Workflow bots", "Lead qualification", "Internal assistants", "Dashboards"], popular: true },
            { name: "AI Intelligence", price: "5000", maintenance: "500", cta: "Request AI Intelligence", features: ["Predictive analytics", "NLP integration", "Recommendation engine", "Dashboards"] },
            { name: "AI Innovator", price: "10000", maintenance: "1000", cta: "Request AI Advanced", features: ["Custom AI models", "Multi-model orchestration", "Secure deployment", "Model updates"] },
            { name: "Enterprise AI Suite", price: "Custom", maintenance: "Custom", cta: "Schedule Consultation", features: ["Organization-wide AI infrastructure", "Governance", "Continuous optimization", "Full Support"] }
        ]
    },
    {
        id: "web",
        title: "Web & Platform",
        icon: Globe,
        description: "One-Time + Maintenance",
        tiers: [
            { name: "Starter Site", price: "1200", maintenance: "100", cta: "Build Starter Site", features: ["5-page responsive website", "CMS", "Basic SEO", "Analytics"] },
            { name: "Growth Site", price: "2500", maintenance: "200", cta: "Build Growth Website", features: ["Advanced UI/UX", "Blog", "Speed optimization", "Conversion pages"], popular: true },
            { name: "Custom App", price: "5000", maintenance: "400", cta: "Build Custom App", features: ["Authentication", "Custom dashboards", "API integration", "Admin panel"] },
            { name: "SaaS Platform", price: "8500", maintenance: "700", cta: "Build SaaS Platform", features: ["Multi-user", "Subscription", "Cloud deployment", "Real-time features"] },
            { name: "Enterprise Platform", price: "Custom", maintenance: "Custom", cta: "Schedule Consultation", features: ["Microservices", "DevOps setup", "High-traffic scaling", "Full maintenance"] }
        ]
    },
    {
        id: "growth",
        title: "Growth & Performance",
        icon: LineChart,
        description: "Monthly Recurring",
        isRecurring: true,
        tiers: [
            { name: "SEO Starter", price: "450", cta: "Start SEO Foundation", features: ["Technical audit", "Keyword research", "On-page SEO", "Analytics", "Monthly report"] },
            { name: "Content Growth", price: "750", cta: "Start Content Growth", features: ["SEO blog writing", "Authority content", "Content calendar", "Optimization"], popular: true },
            { name: "Performance Ads", price: "1200", cta: "Start Paid Performance", features: ["Google & Meta Ads", "Audience targeting", "Retargeting", "Creatives"] },
            { name: "Conversion Optimizer", price: "1500", cta: "Start Conversion Optimization", features: ["Funnel design", "Landing pages", "A/B testing", "Heatmaps", "Behavioral analysis"] },
            { name: "Full Growth Engine", price: "2500", cta: "Full Growth Package", features: ["Integrated SEO + Paid + Automation + Analytics", "Dashboards", "Priority support"] }
        ]
    },
    {
        id: "automation",
        title: "Business Automation",
        icon: Zap,
        description: "One-Time + Maintenance Optional",
        tiers: [
            { name: "Automation Audit", price: "900", maintenance: "90", cta: "Request Audit", features: ["Workflow mapping", "Tool recommendations", "Blueprint", "ROI projection"] },
            { name: "Workflow Builder", price: "2000", maintenance: "200", cta: "Start Workflow Automation", features: ["Task automation", "CRM syncing", "Email workflows", "Dashboards"], popular: true },
            { name: "System Integration", price: "4000", maintenance: "400", cta: "Start System Integration", features: ["API & ERP connections", "Payment sync", "Dashboards", "Reporting"] },
            { name: "Custom Automation", price: "7000", maintenance: "700", cta: "Start Custom Automation", features: ["Custom CRM", "Reporting dashboards", "Workflow logic", "Portals"] },
            { name: "Enterprise Operations", price: "Custom", maintenance: "Custom", cta: "Schedule Consultation", features: ["Organization-wide automation", "Cloud migration", "Security compliance", "Continuous optimization"] }
        ]
    },
    {
        id: "product",
        title: "Product & Tool",
        icon: Layers,
        description: "One-Time + Maintenance",
        tiers: [
            { name: "MVP Launch", price: "1500", maintenance: "150", cta: "Launch MVP", features: ["Idea validation", "Wireframes", "Core build", "Deployment roadmap", "Basic analytics"] },
            { name: "SaaS Starter", price: "3000", maintenance: "300", cta: "Start SaaS Starter", features: ["Subscription model", "Dashboard", "Payments", "Analytics setup"], popular: true },
            { name: "Product Growth", price: "5000", maintenance: "500", cta: "Start Product Growth", features: ["Feature expansion", "API integration", "UX refinement", "Dashboards"] },
            { name: "Scale & Monetize", price: "8000", maintenance: "800", cta: "Start Scale & Monetize", features: ["Tiered subscriptions", "Referral program", "Analytics", "Automated notifications"] },
            { name: "Enterprise Suite", price: "Custom", maintenance: "Custom", cta: "Schedule Consultation", features: ["Multi-product ecosystem", "Dedicated dev team", "Full maintenance", "Roadmap"] }
        ]
    },
    {
        id: "game",
        title: "Game & Interactive",
        icon: Gamepad2,
        description: "One-Time + Maintenance",
        tiers: [
            { name: "Concept Pack", price: "1200", maintenance: "120", cta: "Start Concept", features: ["Game idea", "Mechanics", "Wireframes", "Monetization plan"] },
            { name: "Indie Build", price: "2500", maintenance: "250", cta: "Start Indie Build", features: ["Core gameplay", "UI", "Levels", "Deployment"], popular: true },
            { name: "Advanced Systems", price: "5000", maintenance: "500", cta: "Start Advanced Systems", features: ["Multiplayer", "AI NPCs", "In-game economy", "Backend updates"] },
            { name: "Gamification", price: "7000", maintenance: "700", cta: "Start Gamification", features: ["Business gamification", "Engagement loops", "Dashboards"] },
            { name: "Full Studio", price: "Custom", maintenance: "Custom", cta: "Schedule Studio Consultation", features: ["Full-cycle production", "Cross-platform release", "Maintenance", "Live Ops"] }
        ]
    },
    {
        id: "brand",
        title: "Copy & Brand",
        icon: PenTool,
        description: "One-Time + Optional Support",
        tiers: [
            { name: "Brand Foundation", price: "500", maintenance: "50", cta: "Start Brand Foundation", features: ["Brand voice", "Messaging", "Tone", "Tagline"] },
            { name: "Website Copy", price: "1000", maintenance: "100", cta: "Start Website Copy", features: ["Homepage + service pages + SEO content", "Conversion flow", "Tone mapping"], popular: true },
            { name: "Sales Systems", price: "2000", maintenance: "200", cta: "Start Sales Systems", features: ["Landing pages", "Email funnels", "Offers positioning"] },
            { name: "Content Authority", price: "3500", maintenance: "350", cta: "Start Content Authority", features: ["Blogs", "LinkedIn posts", "Case studies", "Scripts"] },
            { name: "Full Brand Ecosystem", price: "5500", maintenance: "550", cta: "Start Full Brand", features: ["Multi-channel copy", "Storytelling", "Conversion audit"] }
        ]
    },
    {
        id: "consulting",
        title: "Consulting",
        icon: ClipboardList,
        description: "One-Time Strategy",
        tiers: [
            { name: "Digital Audit", price: "700", cta: "Request Audit", features: ["System review", "Tech stack", "Competitive analysis", "Recommendations"] },
            { name: "Growth Roadmap", price: "1500", cta: "Start Roadmap", features: ["Revenue model", "KPI mapping", "6-month plan", "Budget allocation"], popular: true },
            { name: "AI Adoption Strategy", price: "2500", cta: "Start AI Strategy", features: ["AI readiness", "Integration plan", "Risk analysis", "Tool mapping"] },
            { name: "Product Strategy", price: "3500", cta: "Start Product Strategy", features: ["Market validation", "Pricing", "Go-to-market plan", "Launch strategy"] },
            { name: "Executive Advisory", price: "Custom", cta: "Schedule Consultation", features: ["Ongoing consulting", "Strategic sessions", "Expansion planning", "Custom Roadmap"] }
        ]
    },
    {
        id: "blockchain",
        title: "Blockchain",
        icon: Cpu,
        description: "One-Time + Maintenance",
        tiers: [
            { name: "Smart Audit", price: "1500", maintenance: "150", cta: "Start Audit", features: ["Security audit", "Gas optimization", "Vulnerability report", "Architecture review"] },
            { name: "Wallet Launch", price: "3500", maintenance: "350", cta: "Build Wallet", features: ["Non-custodial setup", "Key management", "Mobile/Web integration", "Security layer"], popular: true },
            { name: "DApp Build", price: "6000", maintenance: "600", cta: "Build DApp", features: ["Custom smart contracts", "Web3 frontend", "Wallet connect", "IPFS storage"] },
            { name: "Protocol Integration", price: "9000", maintenance: "900", cta: "Integrate Protocol", features: ["Cross-chain bridges", "Custom L2 solutions", "Tokenomics design", "Liquidity setup"] },
            { name: "Enterprise Chain", price: "Custom", maintenance: "Custom", cta: "Schedule Consultation", features: ["Private network", "Managed nodes", "Permissioning", "Full Support"] }
        ]
    }
];

const hiddenBillingSectors = ['ai', 'web', 'automation', 'product', 'game', 'brand', 'consulting', 'blockchain'];

export default function PricingPage() {
    const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const easing = [0.16, 1, 0.3, 1] as any;

    const currentCategory = pricingCategories.find(c => c.id === activeCategory)!;

    // Handle Deep Linking from Services Portal
    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && pricingCategories.some(c => c.id === hash)) {
                setActiveCategory(hash);
                // Ensure we scroll to the pricing section if needed
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        handleHashChange(); // Check on mount
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const getPriceDisplay = (price: string) => {
        if (price === "Custom") return "Custom";
        const val = parseInt(price);
        if (billingCycle === 'annual') {
            return Math.floor(val * 0.82).toString(); // Slightly different discount for annual one-time if applicable (legacy)
        }
        return price;
    };

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#FF6A00]/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                        className="text-6xl md:text-8xl font-semibold tracking-tight text-white font-outfit mb-10"
                    >
                        Investment <br />
                        <span className="text-white/20">Protocols.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/40 text-xl font-light leading-relaxed mb-12"
                    >
                        Pricing built for every stage of growth. Select your technical sector to reveal tailored investment tiers.
                    </motion.p>

                    <div className="flex flex-col items-center gap-10">
                        {/* Sector Navigation */}
                        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] backdrop-blur-3xl w-full max-w-5xl mx-auto">
                            {pricingCategories.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => {
                                        setActiveCategory(c.id);
                                        if (hiddenBillingSectors.includes(c.id)) {
                                            setBillingCycle('monthly');
                                        }
                                    }}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-[12px] font-medium transition-all duration-500 group whitespace-nowrap ${activeCategory === c.id
                                        ? 'bg-[#FF6A00] text-white shadow-xl shadow-[#FF6A00]/20'
                                        : 'text-white/40 hover:text-white hover:bg-white/[0.05]'
                                        }`}
                                >
                                    <c.icon size={14} />
                                    <span className="font-inter">{c.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Billing Cycle Toggle */}
                        <AnimatePresence>
                            {!hiddenBillingSectors.includes(activeCategory) && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -20, height: 0 }}
                                    className="flex items-center gap-4 bg-[#121212]/50 border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setBillingCycle('monthly')}
                                        className={`px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all ${billingCycle === 'monthly' ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-white/30 hover:text-white'
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setBillingCycle('annual')}
                                        className={`px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all relative group ${billingCycle === 'annual' ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-white/30 hover:text-white'
                                            }`}
                                    >
                                        Annual
                                        <span className="absolute -top-3 -right-3 bg-[#FF6A00]/20 text-[#FF6A00] text-[8px] border border-[#FF6A00]/30 px-2 py-0.5 rounded-full font-bold">20% Save</span>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + billingCycle}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                    >
                        {currentCategory.tiers.map((tier, i) => (
                            <div
                                key={tier.name}
                                className={`relative group bg-[#121212]/30 border rounded-[2.5rem] p-8 transition-all duration-700 flex flex-col h-full ${tier.popular
                                    ? 'border-[#FF6A00]/50 shadow-[0_0_80px_-20px_rgba(255,106,0,0.3)] bg-[#121212]/60'
                                    : 'border-white/[0.04] hover:border-white/[0.1]'
                                    }`}
                            >
                                {tier.popular && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.08] via-transparent to-transparent opacity-100 rounded-[2.5rem] pointer-events-none" />
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6A00] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,106,0,0.5)] z-20">
                                            Best Fit
                                        </div>
                                    </>
                                )}

                                <div className="mb-10">
                                    <div className="flex flex-col gap-2 mb-10">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold text-white font-outfit tracking-tight">{tier.name}</h3>
                                            {currentCategory.isRecurring && (
                                                <span className="text-[10px] text-[#FF6A00] font-bold uppercase tracking-widest bg-[#FF6A00]/10 px-2 py-0.5 rounded-md">Recurring</span>
                                            )}
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            {tier.price !== 'Custom' && (
                                                <span className="text-white/20 text-xs font-mono tracking-tighter">$</span>
                                            )}
                                            <span className="text-4xl font-semibold text-white tracking-tighter font-outfit">
                                                {getPriceDisplay(tier.price)}
                                            </span>
                                            {currentCategory.isRecurring && tier.price !== 'Custom' && (
                                                <span className="text-white/20 text-xs font-medium lowercase">/mo</span>
                                            )}
                                        </div>
                                        {/* Maintenance Display */}
                                        {(tier as any).maintenance && (
                                            <div className="mt-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                                <span className="text-[10px] text-white/40 font-medium uppercase tracking-widest block mb-1">Optional Maintenance</span>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-white/20 text-[10px]">$</span>
                                                    <span className="text-sm font-semibold text-[#FF6A00]">
                                                        {(tier as any).maintenance === 'Custom' ? 'Custom' : (tier as any).maintenance}
                                                    </span>
                                                    <span className="text-white/20 text-[10px]">/mo</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">{currentCategory.description}</p>
                                </div>

                                <div className="space-y-4 mb-12 flex-1 pt-8 border-t border-white/[0.04]">
                                    {tier.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3 group/li">
                                            <div className="w-2 h-2 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mt-1 group-hover/li:bg-[#FF6A00] transition-colors" />
                                            <span className="text-[11px] text-white/50 group-hover/li:text-white transition-colors leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 relative">
                                    <button className={`w-full py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 group/btn ${tier.popular
                                        ? 'bg-[#FF6A00] text-white hover:shadow-[0_8px_25px_-10px_rgba(255,106,0,0.6)]'
                                        : 'bg-white text-black hover:bg-white/90'
                                        }`}>
                                        {tier.cta}
                                        <ArrowRight size={14} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Custom Enterprise Callout */}
                <div className="mt-40 p-16 bg-[#121212]/20 border border-white/[0.05] rounded-[4rem] text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF6A00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="max-w-2xl mx-auto relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mx-auto mb-10 shadow-2xl">
                            <Shield size={32} />
                        </div>
                        <h4 className="text-4xl font-semibold text-white mb-6 font-outfit">Can't find your specific protocol?</h4>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                            For global-scale infrastructure or highly complex AI orchestrations, we deploy a dedicated engineering cell to map out a custom technical blueprint.
                        </p>
                        <button className="bg-white text-black px-12 py-5 rounded-2xl font-bold tracking-tight hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                            Request Custom Enterprise Briefing
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
