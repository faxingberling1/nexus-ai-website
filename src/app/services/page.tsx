'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain, Globe, LineChart, Zap, Layers, Gamepad2, PenTool, ClipboardList,
    ArrowRight, CheckCircle2, ChevronRight, Target, Shield, Cpu, ExternalLink,
    ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const servicesData = [
    {
        id: "ai",
        title: "Artificial Intelligence Solutions",
        description: "We design AI systems that improve decision-making, automate workflows, and unlock new efficiencies. Our approach focuses on practical implementation, measurable outcomes, and scalable architecture.",
        icon: Brain,
        primaryCTA: "Request AI Strategy",
        secondaryLink: "/case-studies/ai",
        tiers: [
            {
                name: "AI Starter",
                tagline: "For businesses beginning AI adoption.",
                includes: ["AI opportunity audit", "Data readiness assessment", "Use-case identification", "Tool recommendations", "Implementation roadmap"],
                ideal: "SMEs exploring AI"
            },
            {
                name: "AI Automation",
                tagline: "Process-level AI implementation.",
                includes: ["Chatbot deployment", "AI email automation", "Lead qualification systems", "Internal AI assistants", "Workflow integrations"],
                ideal: "Growing teams needing efficiency"
            },
            {
                name: "AI Intelligence",
                tagline: "Data-driven decision systems.",
                includes: ["Predictive analytics", "Recommendation engines", "NLP integration", "AI dashboards", "API integrations"],
                ideal: "Data-heavy operations"
            },
            {
                name: "AI Advanced Systems",
                tagline: "Custom AI model development.",
                includes: ["Proprietary model training", "Custom dataset preparation", "Multi-model orchestration", "Secure deployment", "Performance monitoring"],
                ideal: "Scaling tech companies"
            },
            {
                name: "Enterprise AI",
                tagline: "Full AI infrastructure transformation.",
                includes: ["Organization-wide AI strategy", "AI governance framework", "Security architecture", "Dedicated support team", "Continuous optimization"],
                ideal: "Enterprise-scale organizations"
            }
        ]
    },
    {
        id: "web",
        title: "Web & Platform Development",
        description: "We build scalable digital platforms engineered for performance, security, and long-term growth.",
        icon: Globe,
        primaryCTA: "Start a Platform Build",
        secondaryLink: "/case-studies/web",
        tiers: [
            {
                name: "Website Starter",
                tagline: "Foundation for digital presence.",
                includes: ["5-page responsive website", "CMS setup", "Basic SEO", "Analytics", "Lead capture forms"],
                ideal: "New businesses & startups"
            },
            {
                name: "Growth Website",
                tagline: "Conversion-optimized performance.",
                includes: ["Advanced UI/UX", "Blog system", "Speed optimization", "Conversion structure", "Tracking setup"],
                ideal: "Brands ready to scale traffic"
            },
            {
                name: "Custom Web App",
                tagline: "Bespoke functional infrastructure.",
                includes: ["Authentication system", "Custom dashboards", "Database architecture", "API integration", "Admin panel"],
                ideal: "Operations needing custom tools"
            },
            {
                name: "SaaS Development",
                tagline: "Multi-tenant logic and billing.",
                includes: ["Subscription system", "Role-based access", "Cloud deployment", "Real-time features", "Scalability optimization"],
                ideal: "Software entrepreneurs"
            },
            {
                name: "Enterprise Platform",
                tagline: "Global-scale architectural rigor.",
                includes: ["Microservices architecture", "DevOps setup", "Security hardening", "Load balancing", "Ongoing maintenance"],
                ideal: "Large-scale legacy migrations"
            }
        ]
    },
    {
        id: "growth",
        title: "Growth & Performance",
        description: "We create data-backed growth systems designed to increase visibility, conversions, and revenue.",
        icon: LineChart,
        primaryCTA: "Build Growth Plan",
        secondaryLink: "/case-studies/growth",
        tiers: [
            {
                name: "SEO Foundation",
                tagline: "Visibility and crawlability.",
                includes: ["Technical audit", "Keyword mapping", "On-page SEO", "Google setup", "Reporting"],
                ideal: "New site launches or audits"
            },
            {
                name: "Content Growth",
                tagline: "Authority through publishing.",
                includes: ["SEO blogs", "Authority building", "Internal linking", "Optimization updates", "Content calendar"],
                ideal: "Organic traffic prioritization"
            },
            {
                name: "Paid Performance",
                tagline: "High-intent acquisition.",
                includes: ["Google Ads", "Meta Ads", "Audience targeting", "Retargeting", "Ad creative strategy"],
                ideal: "Fast-to-market scaling"
            },
            {
                name: "Conversion Optimization",
                tagline: "Maximized traffic ROI.",
                includes: ["Funnel architecture", "Landing pages", "A/B testing", "Heatmaps", "Behavioral analysis"],
                ideal: "Sites with high traffic, low conversion"
            },
            {
                name: "Full Growth Engine",
                tagline: "Omni-channel dominance.",
                includes: ["SEO + Paid integration", "CRM integration", "Email automation", "Performance dashboards", "Ongoing optimization"],
                ideal: "Agencies and scale-ups"
            }
        ]
    },
    {
        id: "automation",
        title: "Business Automation",
        description: "We streamline operations by connecting systems, automating workflows, and modernizing processes.",
        icon: Zap,
        primaryCTA: "Automate My Business",
        secondaryLink: "/case-studies/automation",
        tiers: [
            {
                name: "Automation Audit",
                tagline: "Efficiency blueprinting.",
                includes: ["Workflow mapping", "Bottleneck analysis", "Tool recommendations", "Automation blueprint", "ROI projection"],
                ideal: "Inefficient manual workflows"
            },
            {
                name: "Workflow Automation",
                tagline: "Eliminate repetitive tasks.",
                includes: ["Email automation", "CRM syncing", "Task automation", "Lead routing", "Internal notifications"],
                ideal: "Small teams drowning in admin"
            },
            {
                name: "System Integration",
                tagline: "Connected infrastructure.",
                includes: ["API integration", "ERP integration", "Payment gateways", "Data synchronization", "Dashboard creation"],
                ideal: "Disparate software stacks"
            },
            {
                name: "Custom Automation",
                tagline: "Proprietary internal logic.",
                includes: ["Custom CRM", "Workflow logic", "Reporting systems", "Internal portals", "Database optimization"],
                ideal: "Niche industry requirements"
            },
            {
                name: "Enterprise Operations",
                tagline: "Holistic system modernization.",
                includes: ["Cross-department automation", "Cloud migration", "Legacy modernization", "Security compliance", "Continuous system optimization"],
                ideal: "Complexity at high scale"
            }
        ]
    },
    {
        id: "product",
        title: "Product & Tool Development",
        description: "We build scalable digital products designed for subscription models and enterprise growth.",
        icon: Layers,
        primaryCTA: "Launch Your Product",
        secondaryLink: "/case-studies/product",
        tiers: [
            {
                name: "MVP Launch",
                tagline: "Validation through speed.",
                includes: ["Concept validation", "Wireframes", "Core feature build", "Basic deployment", "Launch roadmap"],
                ideal: "Validators and founders"
            },
            {
                name: "SaaS Starter",
                tagline: "Monetized software core.",
                includes: ["Subscription model", "User dashboard", "Payment integration", "Admin panel", "Analytics setup"],
                ideal: "New subscription businesses"
            },
            {
                name: "Product Growth",
                tagline: "Feature-set expansion.",
                includes: ["Feature expansion", "Performance upgrades", "UX refinement", "API layer", "Security hardening"],
                ideal: "Iterative scale-ups"
            },
            {
                name: "Scale & Monetize",
                tagline: "Revenue and user optimization.",
                includes: ["Advanced billing", "Tiered subscriptions", "Referral systems", "Growth analytics", "Infrastructure scaling"],
                ideal: "Scaling user bases"
            },
            {
                name: "Enterprise Product Suite",
                tagline: "Dominant market ecosystems.",
                includes: ["Multi-product ecosystem", "Dedicated dev team", "Ongoing innovation", "Enterprise security", "Long-term roadmap"],
                ideal: "Category leaders"
            }
        ]
    },
    {
        id: "game",
        title: "Game & Interactive Development",
        description: "We create immersive interactive systems and digital experiences powered by intelligent mechanics.",
        icon: Gamepad2,
        primaryCTA: "Develop Experience",
        secondaryLink: "/case-studies/game",
        tiers: [
            { name: "Game Concept Package", tagline: "Mechanics and vision alignment.", includes: ["Design Doc", "Technical Audit", "Prototyping Plan"], ideal: "Indie concepts" },
            { name: "Indie Game Build", tagline: "Core loop implementation.", includes: ["Engine setup", "Core Loop", "Asset Integration"], ideal: "Self-publishers" },
            { name: "Advanced Game Systems", tagline: "Multiplayer and heavy logic.", includes: ["Networking", "AI Logic", "Optimization"], ideal: "Competitive titles" },
            { name: "Gamification for Business", tagline: "Behavioral engagement logic.", includes: ["Reward systems", "Progression", "Internal tools"], ideal: "Retention focus brands" },
            { name: "Full Studio Development", tagline: "End-to-end studio output.", includes: ["Multi-platform", "Marketing UI", "Scaling support"], ideal: "AAA-standard projects" }
        ]
    },
    {
        id: "brand",
        title: "Copywriting & Brand Systems",
        description: "Strategic messaging aligned with growth objectives. High-impact copy meeting technical precision.",
        icon: PenTool,
        primaryCTA: "Strengthen Brand",
        secondaryLink: "/case-studies/brand",
        tiers: [
            { name: "Brand Foundation", tagline: "Identity and messaging.", includes: ["Brand Voice", "Core Messages", "Visual Style"], ideal: "New identity builds" },
            { name: "Website Copy", tagline: "Conversion-centric writing.", includes: ["Hero Copy", "Product Specs", "Internal Flow"], ideal: "Site revamps" },
            { name: "Sales Systems", tagline: "High-ticket closing funnels.", includes: ["Sales Pages", "Email Sequences", "Case Studies"], ideal: "High-ticket offers" },
            { name: "Content Authority", tagline: "Industry leadership voice.", includes: ["Thought Leadership", "Whitepapers", "Newsletters"], ideal: "Thought leaders" },
            { name: "Full Brand Ecosystem", tagline: "Omni-channel narrative.", includes: ["Master Tone", "Social Voice", "Global Messaging"], ideal: "Enterprise brand unified" }
        ]
    },
    {
        id: "consulting",
        title: "Consulting & Strategy",
        description: "We provide structured roadmaps before execution begins. De-risk your technical investments.",
        icon: ClipboardList,
        primaryCTA: "Book Strategy Call",
        secondaryLink: "/case-studies/strategy",
        tiers: [
            { name: "Digital Audit", tagline: "System-wide diagnostic.", includes: ["Tech Stack Audit", "Gap Analysis", "Security Review"], ideal: "Complex stack cleanup" },
            { name: "Growth Roadmap", tagline: "The 12-month blueprint.", includes: ["Channel Strategy", "Resource Plan", "Kpis"], ideal: "Planning for growth" },
            { name: "AI Adoption Strategy", tagline: "Neural transition plan.", includes: ["Custom AI Roadmap", "ROI Projection", "Compliance"], ideal: "Future-proofing ops" },
            { name: "Product Strategy", tagline: "Market-fit alignment.", includes: ["User Research", "Feature Mapping", "MVP Definition"], ideal: "Venture verification" },
            { name: "Executive Advisory", tagline: "Ongoing technical counsel.", includes: ["CTO-level advice", "Monthly Strategy", "On-call Support"], ideal: "Leadership support" }
        ]
    }
];

export default function ServicesPage() {
    const [activeSector, setActiveSector] = useState(servicesData[0].id);
    const easing = [0.16, 1, 0.3, 1] as any;

    useEffect(() => {
        const handleScroll = () => {
            const sections = servicesData.map(s => document.getElementById(s.id));
            const scrollPos = window.scrollY + 200;

            sections.forEach(section => {
                if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveSector(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSector = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row gap-20">
                {/* STICKY NAV / TABS */}
                <aside className="w-full lg:w-72 h-fit sticky top-40 z-20">
                    <div className="bg-[#121212]/30 border border-white/[0.04] p-6 lg:p-8 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
                        <h3 className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-8 font-inter hidden lg:block">Technical Sectors</h3>

                        {/* Mobile Scroll Nav */}
                        <div className="flex lg:grid lg:grid-cols-1 overflow-x-auto lg:overflow-visible gap-2 no-scrollbar pb-4 lg:pb-0">
                            {servicesData.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setActiveSector(s.id)}
                                    className={`flex items-center gap-3 whitespace-nowrap lg:whitespace-normal w-fit lg:w-full text-left py-3 px-5 lg:px-4 rounded-2xl transition-all duration-500 group relative overflow-hidden ${activeSector === s.id
                                            ? 'bg-[#FF6A00] text-white shadow-[0_8px_20px_-5px_rgba(255,106,0,0.4)]'
                                            : 'text-white/40 hover:text-white hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <s.icon size={16} className={`relative z-10 ${activeSector === s.id ? 'scale-110' : ''}`} />
                                    <span className="text-[13px] font-medium font-inter relative z-10">{s.title.split(' & ')[0].split(' Solutions')[0]}</span>
                                    {activeSector === s.id && (
                                        <motion.div
                                            layoutId="tab-active"
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* CONTENT AREA */}
                <div className="flex-1 min-h-[800px]">
                    <AnimatePresence mode="wait">
                        {servicesData.filter(s => s.id === activeSector).map((sector, i) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: easing }}
                                className="space-y-20"
                            >
                                {/* SECTOR HEADER */}
                                <div className="space-y-10">
                                    <div className="max-w-3xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.1)]">
                                                <sector.icon size={28} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em] font-inter block mb-1">Architecture Protocol</span>
                                                <span className="text-white/20 font-mono text-xs">Sector {servicesData.findIndex(s => s.id === sector.id) + 1} // 08</span>
                                            </div>
                                        </div>
                                        <h2 className="text-6xl md:text-7xl font-semibold text-white mb-8 font-outfit leading-tight tracking-tight">{sector.title}</h2>
                                        <p className="text-white/40 text-xl font-light leading-relaxed">
                                            {sector.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <button className="bg-[#FF6A00] text-white text-sm font-semibold px-10 py-5 rounded-2xl hover:shadow-[0_12px_30px_-10px_rgba(255,106,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                                            {sector.primaryCTA}
                                        </button>
                                        <Link href={sector.secondaryLink} className="border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.05] text-white/70 hover:text-white text-sm font-semibold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center gap-2 group">
                                            Protocol Analysis <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* TIERS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                                    {sector.tiers.map((tier, j) => (
                                        <motion.div
                                            key={j}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: j * 0.1 }}
                                            className="group bg-[#121212]/20 border border-white/[0.04] p-10 rounded-[3rem] hover:border-[#FF6A00]/30 transition-all duration-700 relative overflow-hidden backdrop-blur-sm"
                                        >
                                            <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold text-white/20 font-mono tracking-tighter">LVL-0{j + 1}</span>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-2xl font-semibold text-white mb-3 font-outfit tracking-tight">{tier.name}</h3>
                                                <p className="text-white/40 text-sm font-light leading-relaxed h-10">{tier.tagline}</p>
                                            </div>

                                            <div className="space-y-5 mb-12">
                                                <span className="text-[10px] font-semibold text-white/20 uppercase tracking-widest block border-b border-white/[0.05] pb-3">Operational Directives</span>
                                                <div className="space-y-4">
                                                    {tier.includes.map((item, k) => (
                                                        <div key={k} className="flex items-start gap-4">
                                                            <div className="w-4 h-4 rounded-full bg-[#FF6A00]/10 flex items-center justify-center mt-0.5">
                                                                <CheckCircle2 size={10} className="text-[#FF6A00]" />
                                                            </div>
                                                            <span className="text-[13px] text-white/50 group-hover:text-white/70 transition-colors leading-tight">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-8 border-t border-white/[0.05] mt-auto">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5">
                                                        <Target size={16} className="text-[#FF6A00]" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] block font-inter mb-0.5">Deployment Intent</span>
                                                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{tier.ideal}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
