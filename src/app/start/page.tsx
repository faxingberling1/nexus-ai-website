'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, ArrowRight, ArrowLeft, Rocket, Database,
    Globe, Zap, Send, Shield, Cpu, Target, Sparkles,
    Layers, Brain, LineChart, ClipboardList, PenTool,
    ChevronRight, Activity, Terminal, Lock, Phone, User, Mail, MessageSquare, Loader2
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import CaptchaWidget from '@/components/CaptchaWidget';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pricingCategories } from '@/config/pricing';

const HUDMetric = ({ label, value, color = "green" }: { label: string, value: string, color?: string }) => (
    <div className="flex flex-col gap-1">
        <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest">{label}</span>
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full bg-${color}-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]`} />
            <span className="text-xs font-mono text-white/60 tracking-tighter">{value}</span>
        </div>
    </div>
);

export default function StartProjectPage() {
    const [activeModule, setActiveModule] = useState<'selection' | 'modular' | 'custom' | 'checkout' | 'success'>('selection');
    const [selectedSector, setSelectedSector] = useState<string | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    React.useEffect(() => {
        const plan = localStorage.getItem('nexus_selected_plan');
        if (plan) {
            setSelectedPlan(JSON.parse(plan));
            setActiveModule('checkout');
        }
    }, []);

    const easing = [0.16, 1, 0.3, 1] as any;

    const sectors = pricingCategories.map(c => ({
        id: c.id,
        label: c.title,
        icon: c.icon,
        description: c.description
    }));

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isCaptchaVerified) return;

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'project',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message || (selectedPlan ? `Checkout: ${selectedPlan.package?.name || selectedPlan.tier?.name}` : 'Custom Inquiry'),
                    selections: {
                        company: formData.company,
                        pathway: selectedPlan ? 'package' : 'custom',
                        projectTier: selectedPlan?.package?.name || selectedPlan?.tier?.name || 'Custom Build',
                        selectedPlan: selectedPlan
                    }
                })
            });

            if (res.ok) {
                localStorage.removeItem('nexus_selected_plan');
                setActiveModule('success');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden flex flex-col font-inter">
            <Header />

            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-[#FF6A00]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="flex-1 flex items-center justify-center py-20 relative z-10 px-6">
                <div className="max-w-6xl w-full">

                    <AnimatePresence mode="wait">
                        {activeModule === 'selection' && (
                            <motion.div
                                key="selection"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="space-y-12"
                            >
                                <div className="text-center max-w-2xl mx-auto mb-20">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#FF6A00] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                        <Activity size={12} /> Project Setup
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 font-outfit tracking-tight leading-tight">
                                        Let's Get <span className="text-white/20">Started.</span>
                                    </h1>
                                    <p className="text-white/40 text-xl font-light leading-relaxed">
                                        Pick the best way to start. Select a ready-to-go package or tell us about your custom project.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Module 1: Modular Protocol */}
                                    <button
                                        onClick={() => setActiveModule('modular')}
                                        className="group relative p-12 rounded-[3.5rem] border border-white/[0.06] bg-[#0A0A0A]/40 backdrop-blur-3xl overflow-hidden transition-all duration-700 hover:border-[#FF6A00]/30 text-left"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <Layers size={32} />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4 font-outfit uppercase tracking-tight">Choose a Ready Package</h3>
                                            <p className="text-white/40 font-light text-lg mb-8 leading-relaxed">
                                                Pick from our most popular services. Quick, reliable, and easy to scale as you grow.
                                            </p>
                                            <div className="flex items-center gap-2 text-[#FF6A00] font-bold text-xs uppercase tracking-[0.2em]">
                                                View Packages <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>

                                        {/* HUD Decorative Elements */}
                                        <div className="absolute top-8 right-8 flex gap-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000">
                                            <HUDMetric label="Network" value="Ready" />
                                            <HUDMetric label="Activity" value="Normal" />
                                        </div>
                                    </button>

                                    {/* Module 2: Custom Blueprint */}
                                    <button
                                        onClick={() => setActiveModule('custom')}
                                        className="group relative p-12 rounded-[3.5rem] border border-white/[0.06] bg-[#0A0A0A]/40 backdrop-blur-3xl overflow-hidden transition-all duration-700 hover:border-blue-500/30 text-left"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <Target size={32} />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4 font-outfit uppercase tracking-tight">Tell Us About Your Project</h3>
                                            <p className="text-white/40 font-light text-lg mb-8 leading-relaxed">
                                                For complex or unique ideas. Let's talk about what you need and how we can help you build it.
                                            </p>
                                            <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
                                                Get Started <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>

                                        <div className="absolute top-8 right-8 flex gap-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000">
                                            <HUDMetric label="Type" value="Custom" color="blue" />
                                            <HUDMetric label="Review" value="Expert" color="blue" />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {activeModule === 'modular' && (
                            <motion.div
                                key="modular"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="max-w-5xl mx-auto"
                            >
                                <button
                                    onClick={() => setActiveModule('selection')}
                                    className="flex items-center gap-2 text-white/30 hover:text-[#FF6A00] transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-12"
                                >
                                    <ArrowLeft size={14} /> Back
                                </button>

                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold text-white mb-4 font-outfit uppercase tracking-tighter">Pick a Category</h2>
                                    <p className="text-white/30 font-light italic">What part of your business are we helping with?</p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                    {sectors.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`/pricing#${s.id}`}
                                            className="group relative p-8 rounded-3xl border border-white/[0.04] bg-[#121212]/30 hover:border-[#FF6A00]/40 transition-all duration-500 flex flex-col items-center gap-6"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6A00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white/40 group-hover:bg-[#FF6A00] group-hover:text-white transition-all duration-500">
                                                <s.icon size={24} />
                                            </div>
                                            <div className="text-center">
                                                <span className="block text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors">{s.label}</span>
                                                <span className="text-[10px] text-white/20 uppercase tracking-widest mt-1 block">Available</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeModule === 'custom' && (
                            <motion.div
                                key="custom"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                    {/* Sidebar Stats */}
                                    <div className="lg:col-span-4 space-y-8">
                                        <button
                                            onClick={() => setActiveModule('selection')}
                                            className="flex items-center gap-2 text-white/30 hover:text-blue-500 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                                        >
                                            <ArrowLeft size={14} /> Back
                                        </button>

                                        <div className="p-8 rounded-[2.5rem] bg-blue-500/[0.03] border border-blue-500/10 space-y-8">
                                            <div className="flex flex-col gap-2">
                                                <HUDMetric label="Type" value="Custom Inquiry" color="blue" />
                                                <HUDMetric label="Review" value="Project Review" color="blue" />
                                                <HUDMetric label="Status" value="High Priority" color="blue" />
                                            </div>

                                            <div className="pt-6 border-t border-white/[0.05] space-y-4">
                                                <div className="flex items-center gap-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                                    <Lock size={12} className="text-blue-500" /> Safe & Secure
                                                </div>
                                                <div className="flex items-center gap-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                                    <Terminal size={12} className="text-blue-500" /> Direct Expert Support
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inquiry Form */}
                                    <div className="lg:col-span-8">
                                        <div className="bg-[#121212]/30 border border-white/[0.08] rounded-[3rem] p-10 backdrop-blur-3xl">
                                            <h2 className="text-3xl font-bold text-white mb-8 font-outfit uppercase tracking-tight">Tell us more</h2>

                                            <form onSubmit={handleInquirySubmit} className="space-y-6">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Full Name</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="John Doe"
                                                            className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40 transition-all"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Work Email</label>
                                                        <input
                                                            required
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">What are you looking to build?</label>
                                                    <textarea
                                                        required
                                                        rows={4}
                                                        placeholder="Tell us about your project requirements and goals..."
                                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-3xl px-6 py-5 text-sm text-white focus:outline-none focus:border-blue-500/40 transition-all resize-none"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Project Scale</label>
                                                        <select className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-xs font-bold text-white/60 focus:outline-none focus:border-blue-500/40 appearance-none cursor-pointer">
                                                            <option className="bg-[#020202]">Standard</option>
                                                            <option className="bg-[#020202]">Large Scale</option>
                                                            <option className="bg-[#020202]">Complex System</option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">When do you need it?</label>
                                                        <select className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-xs font-bold text-white/60 focus:outline-none focus:border-blue-500/40 appearance-none cursor-pointer">
                                                            <option className="bg-[#020202]">Quick (1-2 mo)</option>
                                                            <option className="bg-[#020202]">Flexible (3-6 mo)</option>
                                                            <option className="bg-[#020202]">Long term (6 mo+)</option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Estimated Budget</label>
                                                        <select className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-xs font-bold text-white/60 focus:outline-none focus:border-blue-500/40 appearance-none cursor-pointer">
                                                            <option className="bg-[#020202]">Startup</option>
                                                            <option className="bg-[#020202]">Growing Business</option>
                                                            <option className="bg-[#020202]">Enterprise</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button className="w-full bg-blue-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-3 group mt-6">
                                                    Submit Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeModule === 'checkout' && (
                            <motion.div
                                key="checkout"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="max-w-6xl mx-auto w-full"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                    {/* Plan Summary Card */}
                                    <div className="lg:col-span-5 space-y-8">
                                        <button
                                            onClick={() => {
                                                localStorage.removeItem('nexus_selected_plan');
                                                setSelectedPlan(null);
                                                setActiveModule('selection');
                                            }}
                                            className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                                        >
                                            <ArrowLeft size={14} /> Change Selection
                                        </button>

                                        <div className="p-10 rounded-[3rem] bg-[#121212]/40 border border-white/[0.08] backdrop-blur-3xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/5 blur-3xl rounded-full translate-x-16 -translate-y-16" />

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00]">
                                                        <Rocket size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white font-outfit uppercase tracking-tight">Your Selection</h3>
                                                        <p className="text-[10px] text-[#FF6A00] font-bold uppercase tracking-widest">Protocol Identified</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Base Plan</span>
                                                            <span className="text-lg font-black text-white">{selectedPlan?.package?.name || selectedPlan?.tier?.name}</span>
                                                        </div>
                                                        <div className="text-3xl font-black text-[#FF6A00] tracking-tighter">
                                                            ${selectedPlan?.package?.price || selectedPlan?.price}
                                                            {selectedPlan?.package?.isMonthly || selectedPlan?.billingCycle === 'monthly' ? <span className="text-sm text-white/40 ml-1">/mo</span> : ''}
                                                        </div>
                                                    </div>

                                                    {selectedPlan?.type === 'modular' && Object.entries(selectedPlan?.modules || {}).filter(([_, q]: any) => q > 0).length > 0 && (
                                                        <div className="space-y-3">
                                                            <p className="text-[10px] uppercase font-bold text-white/30 ml-2 tracking-widest">Configured Modules</p>
                                                            <div className="max-h-48 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                                                                {Object.entries(selectedPlan.modules).filter(([_, q]: any) => q > 0).map(([name, q]: any, i) => (
                                                                    <div key={i} className="flex justify-between text-xs py-2 border-b border-white/[0.05]">
                                                                        <span className="text-white/60">{name} {q > 1 ? `(x${q})` : ''}</span>
                                                                        <span className="text-white font-mono opacity-80">+ Included</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="pt-6 border-t border-white/[0.08] flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Total Investment</p>
                                                            <h4 className="text-4xl font-black text-white tracking-tighter">${(selectedPlan?.oneTimeTotal || 0).toLocaleString()}</h4>
                                                        </div>
                                                        {selectedPlan?.recurringTotal > 0 && (
                                                            <div className="text-right">
                                                                <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Recurring</p>
                                                                <h4 className="text-xl font-bold text-white/60">${(selectedPlan?.recurringTotal || 0).toLocaleString()}<span className="text-[10px] ml-0.5">/mo</span></h4>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex gap-4">
                                            <Shield className="text-blue-500 shrink-0" size={20} />
                                            <p className="text-xs text-white/50 leading-relaxed font-light">
                                                Your configuration is saved. Complete the verification on the right to initialize the formal agreement process.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Checkout Form Popup/Card */}
                                    <div className="lg:col-span-7">
                                        <div className="bg-[#121212]/30 border border-white/[0.1] rounded-[3.5rem] p-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                                            <div className="relative z-10">
                                                <h2 className="text-3xl font-bold text-white mb-2 font-outfit uppercase tracking-tight">Finalize Briefing</h2>
                                                <p className="text-white/40 text-sm font-light mb-10 italic">Please provide mandatory information to move forward.</p>

                                                <form onSubmit={handleInquirySubmit} className="space-y-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-3">
                                                            <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-4 flex items-center gap-2">
                                                                <User size={12} className="text-[#FF6A00]" /> Full Name
                                                            </label>
                                                            <input
                                                                required
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                type="text"
                                                                placeholder="John Doe"
                                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#FF6A00]/50 transition-all"
                                                            />
                                                        </div>
                                                        <div className="space-y-3">
                                                            <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-4 flex items-center gap-2">
                                                                <Mail size={12} className="text-[#FF6A00]" /> Work Email
                                                            </label>
                                                            <input
                                                                required
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                type="email"
                                                                placeholder="john@company.com"
                                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#FF6A00]/50 transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-3">
                                                            <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-4 flex items-center gap-2">
                                                                <Phone size={12} className="text-[#FF6A00]" /> Phone Number
                                                            </label>
                                                            <input
                                                                required
                                                                value={formData.phone}
                                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                                type="tel"
                                                                placeholder="+1 (555) 000-0000"
                                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#FF6A00]/50 transition-all"
                                                            />
                                                        </div>
                                                        <div className="space-y-3">
                                                            <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-4 flex items-center gap-2">
                                                                <Globe size={12} className="text-[#FF6A00]" /> Company Name
                                                            </label>
                                                            <input
                                                                required
                                                                value={formData.company}
                                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                                type="text"
                                                                placeholder="Company Ltd"
                                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#FF6A00]/50 transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-4 flex items-center gap-2">
                                                            <MessageSquare size={12} className="text-[#FF6A00]" /> Additional Requirements
                                                        </label>
                                                        <textarea
                                                            value={formData.message}
                                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                            rows={3}
                                                            placeholder="Any specific project details or needs?"
                                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-[2rem] px-6 py-5 text-sm text-white focus:outline-none focus:border-[#FF6A00]/50 transition-all resize-none"
                                                        />
                                                    </div>

                                                    <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-[2rem]">
                                                        <CaptchaWidget onVerified={setIsCaptchaVerified} />
                                                    </div>

                                                    <button
                                                        disabled={isSubmitting || !isCaptchaVerified}
                                                        className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group mt-4 ${isCaptchaVerified
                                                                ? 'bg-[#FF6A00] text-white hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)]'
                                                                : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                                                            }`}
                                                    >
                                                        {isSubmitting ? (
                                                            <Loader2 className="animate-spin" size={20} />
                                                        ) : (
                                                            <>Initialize Project <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                                        )}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeModule === 'success' && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="text-center max-w-2xl mx-auto"
                            >
                                <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-10 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                                    <Check size={48} strokeWidth={3} />
                                </div>
                                <h2 className="text-5xl font-bold text-white mb-6 font-outfit uppercase tracking-tighter">Information Received</h2>
                                <p className="text-white/40 text-xl font-light leading-relaxed mb-12">
                                    We have received the package information, our team member will be sharing an agreement along with payment link to move forward with the project.
                                </p>
                                <button
                                    onClick={() => setActiveModule('selection')}
                                    className="px-12 py-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-white font-bold hover:bg-white/[0.08] transition-all"
                                >
                                    Back to Start
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
