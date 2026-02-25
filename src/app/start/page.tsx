'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Rocket, Database, Globe, Zap, Send, FileText, Shield, Cpu, Sparkles, Link as LinkIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PremiumSelect from '@/components/PremiumSelect';

const timelineOptions = [
    { value: '1-3-months', label: '1-3 Months (Rapid)' },
    { value: '3-6-months', label: '3-6 Months (Standard)' },
    { value: '6-months-plus', label: '6+ Months (Enterprise)' }
];

const budgetOptions = [
    { value: '1k-10k', label: '$1,000 – $10,000' },
    { value: '10k-25k', label: '$10k – $25k' },
    { value: '25k-50k', label: '$25k – $50k' },
    { value: '50k-100k', label: '$50k – $100k' },
    { value: '100k-plus', label: '$100k+' }
];

const steps = [
    {
        id: 'service',
        title: "Focus Area",
        description: "What sector of your enterprise are we optimizing?",
        options: [
            { id: 'ai', label: 'AI Solutions', icon: Zap, detail: 'Intelligent automation & LLM integration' },
            { id: 'web', label: 'Web Platforms', icon: Globe, detail: 'High-performance digital experiences' },
            { id: 'automation', label: 'Enterprise Automation', icon: Cpu, detail: 'Workflow & process optimization' },
            { id: 'blockchain', label: 'Blockchain Ecosystem', icon: LinkIcon, detail: 'Web3 & decentralized trust networks' }
        ]
    },
    {
        id: 'scope',
        title: "Project Scope",
        description: "What is the estimated scale of this initiative?",
        options: [
            { id: 'strategy', label: 'Rapid Strategy / MVP', icon: Sparkles, detail: 'Fast-track discovery & prototyping' },
            { id: 'scale', label: 'Enterprise Scaling', icon: Globe, detail: 'Full-scale development & deployment' },
            { id: 'custom', label: 'Custom Infrastructure', icon: Database, detail: 'Bespoke high-performance systems' }
        ]
    },
    {
        id: 'contact',
        title: "Identification",
        description: "How shall we contact your team?",
        isForm: true
    },
    {
        id: 'loe',
        title: "LoE Initiation",
        description: "Level of Effort (LoE) Document Preparation",
        isLoE: true
    },
    {
        id: 'review',
        title: "Project Summary",
        description: "Review your project details before sending.",
        isReview: true
    }
];


function StartProjectContent() {
    const searchParams = useSearchParams();
    const initialService = searchParams.get('service');
    const sourcePage = searchParams.get('source') || 'Direct Visit';

    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({});
    const [selections, setSelections] = useState<Record<string, string>>({
        service: initialService || ''
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        timeline: '',
        budget: '',
        description: '',
        stack: ''
    });
    const [loeInitiated, setLoeInitiated] = useState(false);

    const easing = [0.16, 1, 0.3, 1] as any;

    const nextStep = () => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1);
    const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'project',
                    name: formData.name,
                    email: formData.email,
                    message: formData.description,
                    selections: {
                        focusArea: selections.service,
                        projectScale: selections.scope,
                        referringPage: sourcePage,
                        company: formData.company,
                        role: formData.role,
                        timeline: formData.timeline,
                        budget: formData.budget
                    },
                    loeInitiated
                })
            });
            const data = await response.json();
            setSubmitStatus({ success: data.success, message: data.message });
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Critical connection failure. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] pt-32 relative overflow-hidden flex flex-col text-[#EDEDED]">
            <Header />

            {/* Immersive Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            {/* Dynamic Glows */}
            <div className="fixed top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#FF6A00]/[0.05] blur-[160px] pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#FF6A00]/[0.03] blur-[160px] pointer-events-none" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="flex-1 flex items-center justify-center py-20 relative z-10 px-6">
                <div className="max-w-5xl w-full">

                    {/* Context Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center mb-12"
                    >
                        <div className="px-3 py-1 rounded-full border border-[#FF6A00]/20 bg-[#121212]/40 backdrop-blur-xl mb-4">
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#FF6A00] uppercase">Origin: {sourcePage}</span>
                        </div>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="flex justify-between items-center mb-20 max-w-xl mx-auto relative px-4">
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 relative z-10">
                                <div
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-700 font-outfit text-sm ${i <= currentStep
                                        ? 'bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_25px_rgba(255,106,0,0.4)]'
                                        : 'bg-[#0A0A0A] border-white/[0.1] text-white/30'
                                        }`}
                                >
                                    {i < currentStep ? <Check size={16} /> : `0${i + 1}`}
                                </div>
                                <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-500 ${i <= currentStep ? 'text-[#FF6A00]' : 'text-white/10'}`}>{step.id}</span>
                            </div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -10 }}
                            transition={{ duration: 0.6, ease: easing }}
                            className="text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 font-outfit tracking-tight leading-none">
                                {steps[currentStep].title}
                            </h1>
                            <p className="text-white/40 text-lg font-light mb-16 max-w-lg mx-auto leading-relaxed">
                                {steps[currentStep].description}
                            </p>

                            {/* Option Cards */}
                            {steps[currentStep].options && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                                    {steps[currentStep].options?.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => {
                                                setSelections({ ...selections, [steps[currentStep].id]: opt.id });
                                                nextStep();
                                            }}
                                            className={`group relative p-10 rounded-[2.5rem] border transition-all duration-700 flex flex-col items-center gap-6 overflow-hidden ${selections[steps[currentStep].id] === opt.id
                                                ? 'bg-[#FF6A00]/10 border-[#FF6A00]/40 shadow-[0_0_50px_rgba(255,106,0,0.15)]'
                                                : 'bg-[#121212]/30 border-white/[0.04] hover:border-[#FF6A00]/30'
                                                }`}
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6A00]/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF6A00]/[0.08] transition-colors" />

                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-lg ${selections[steps[currentStep].id] === opt.id ? 'bg-[#FF6A00] text-white' : 'bg-[#1A1A1A] text-white/30 group-hover:text-[#FF6A00] group-hover:scale-110'
                                                }`}>
                                                <opt.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className={`text-xl font-medium transition-colors ${selections[steps[currentStep].id] === opt.id ? 'text-white' : 'text-white/60'
                                                    }`}>{opt.label}</span>
                                                <span className="text-xs text-white/30 font-light max-w-[160px]">{opt.detail}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Forms and Special Sections */}
                            {steps[currentStep].isForm && (
                                <div className="max-w-4xl mx-auto space-y-8 mb-16 p-12 bg-[#121212]/30 backdrop-blur-3xl rounded-[3rem] border border-white/[0.06] shadow-2xl relative overflow-hidden text-left">
                                    <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#FF6A00]/20 pointer-events-none" />
                                    <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#FF6A00]/20 pointer-events-none" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">Identity</label>
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#1A1A1A]/80 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter text-[15px]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">Professional Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="work@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#1A1A1A]/80 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter text-[15px]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">Company / Organization</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enterprise Name"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-[#1A1A1A]/80 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter text-[15px]"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <PremiumSelect
                                                label="Target Timeline"
                                                options={timelineOptions}
                                                value={formData.timeline}
                                                onChange={(val) => setFormData({ ...formData, timeline: val })}
                                                placeholder="Select Timeline"
                                            />
                                            <PremiumSelect
                                                label="Investment Bracket"
                                                options={budgetOptions}
                                                value={formData.budget}
                                                onChange={(val) => setFormData({ ...formData, budget: val })}
                                                placeholder="Select Budget Range"
                                            />
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">Professional Role</label>
                                                <input
                                                    type="text"
                                                    placeholder="Product Manager, CTO, etc."
                                                    value={formData.role}
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                    className="w-full bg-[#1A1A1A]/80 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter text-[15px]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">Project Objectives</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Briefly describe your goals and scope of work..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full bg-[#1A1A1A]/80 border border-white/[0.08] rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all duration-500 font-inter text-[15px] resize-none"
                                        />
                                    </div>

                                    <button onClick={nextStep} className="w-full bg-[#FF6A00] text-white font-semibold py-6 rounded-2xl hover:shadow-[0_15px_40px_rgba(255,106,0,0.5)] transition-all duration-700 flex items-center justify-center gap-3 group active:scale-[0.98]">
                                        Review Summary <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            )}

                            {steps[currentStep].isLoE && (
                                <div className="max-w-3xl mx-auto mb-16">
                                    <div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] p-12 rounded-[3.5rem] border border-[#FF6A00]/20 shadow-[0_0_60px_rgba(255,106,0,0.1)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/[0.05] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                        <div className="flex flex-col items-center mb-10">
                                            <div className="w-20 h-20 rounded-3xl bg-[#FF6A00] text-white flex items-center justify-center mb-6 shadow-xl shadow-[#FF6A00]/30 animate-pulse-slow">
                                                <FileText size={40} strokeWidth={1} />
                                            </div>
                                            <h3 className="text-3xl font-semibold text-white mb-4">LoE Document Initiation</h3>
                                            <p className="text-white/40 max-w-md mx-auto leading-relaxed">
                                                By initiating this process, our analysts will begin drafting a Level of Effort (LoE) framework based on your specific requirements.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                                            {[
                                                { label: "Architecture Audit", icon: Shield },
                                                { label: "Resource Allocation", icon: Cpu },
                                                { label: "Timeline Projection", icon: Globe },
                                                { label: "Technical Breakdown", icon: Database }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                                                    <div className="text-[#FF6A00]"><item.icon size={20} /></div>
                                                    <span className="text-sm font-medium text-white/60">{item.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setLoeInitiated(true);
                                                nextStep();
                                            }}
                                            className="w-full bg-[#FF6A00] text-white font-bold py-7 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(255,106,0,0.6)] transition-all duration-700 flex items-center justify-center gap-4 group text-lg tracking-wide uppercase"
                                        >
                                            Initiate LOE Framework <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="mt-6 text-[10px] uppercase tracking-widest text-white/20 font-bold italic">Confidentiality Protocol Active</p>
                                    </div>
                                </div>
                            )}

                            {steps[currentStep].isReview && (
                                <div className="max-w-3xl mx-auto mb-16">
                                    {submitStatus.success ? (
                                        <div className="p-16 bg-[#121212]/50 border border-[#FF6A00]/30 rounded-[3.5rem] text-center">
                                            <div className="w-24 h-24 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                                                <Check size={48} className="text-[#FF6A00]" />
                                            </div>
                                            <h3 className="text-3xl font-semibold text-white mb-4 font-outfit">Message Sent</h3>
                                            <p className="text-white/40 leading-relaxed mb-8">{submitStatus.message}</p>
                                            <button onClick={() => window.location.href = '/'} className="px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium">Return Home</button>
                                        </div>
                                    ) : (
                                        <div className="bg-[#121212]/30 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/[0.06] shadow-2xl relative overflow-hidden text-left">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/[0.02] rounded-full blur-[100px] pointer-events-none" />

                                            <h3 className="text-2xl font-semibold text-white mb-8 font-outfit flex items-center gap-4">
                                                <span className="w-10 h-10 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] text-base">
                                                    <Rocket size={20} />
                                                </span>
                                                Project Summary
                                            </h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                <div className="space-y-6">
                                                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">Focus Area</p>
                                                        <p className="text-white text-lg font-medium">{steps[0].options?.find(o => o.id === selections.service)?.label || selections.service}</p>
                                                    </div>
                                                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">Project Scale</p>
                                                        <p className="text-white text-lg font-medium">{steps[1].options?.find(o => o.id === selections.scope)?.label || selections.scope}</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">Contact Info</p>
                                                        <p className="text-white text-lg font-medium">{formData.name}</p>
                                                        <p className="text-white/40 text-sm mt-1">{formData.email}</p>
                                                        <p className="text-white/60 text-[11px] mt-2 italic">{formData.role} @ {formData.company}</p>
                                                    </div>
                                                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">LOE Status</p>
                                                        <p className={`text-lg font-medium ${loeInitiated ? 'text-[#FF6A00]' : 'text-white/40'}`}>
                                                            {loeInitiated ? 'INITIATED' : 'NOT REQUESTED'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 rounded-3xl bg-[#FF6A00]/5 border border-[#FF6A00]/10 mb-8">
                                                <div className="grid grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">Timeline</p>
                                                        <p className="text-white font-medium">{formData.timeline.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6A00] font-bold mb-2">Investment Range</p>
                                                        <p className="text-white font-medium">{formData.budget.replace('k', 'K').replace('-', ' – ')}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {submitStatus.success === false && (
                                                <p className="text-red-400 text-sm mb-6 text-center">{submitStatus.message}</p>
                                            )}

                                            <button
                                                disabled={isSubmitting}
                                                onClick={handleSubmit}
                                                className="w-full bg-[#FF6A00] text-white font-bold py-7 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(255,106,0,0.4)] transition-all duration-700 flex items-center justify-center gap-4 group text-lg tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'SENDING...' : (
                                                    <>
                                                        CONFIRM & SEND <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex justify-center gap-12 mt-10">
                                {currentStep > 0 && (
                                    <button onClick={prevStep} className="flex items-center gap-2 text-white/20 hover:text-[#FF6A00] transition-all duration-500 text-sm font-bold uppercase tracking-widest">
                                        <ArrowLeft size={16} /> Previous
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default function StartProjectPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#FF6A00] font-outfit">LOADING SYSTEMS...</div>}>
            <StartProjectContent />
        </Suspense>
    );
}

