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

const projectTypes = [
    "Website / Web App",
    "Mobile App",
    "Software / Automation Tool",
    "AI Solution",
    "Game / Interactive Experience",
    "Marketing / Branding / SEO",
    "Other"
];

const primaryGoals = [
    "Generate Leads / Sales",
    "Improve Productivity / Automation",
    "Build a Platform / Product",
    "Enhance User Experience / UI",
    "Branding / Marketing",
    "Other"
];

const keyFeatures = [
    "Login / User Accounts",
    "Payment / E-Commerce Integration",
    "Admin Dashboard / Analytics",
    "AI / Automation Integration",
    "Third-party API Integration"
];

const projectScales = ["Small", "Standard", "Large"];
const timelines = ["Quick (1-2 mo)", "Medium (3-6 mo)", "Long-term (6+ mo)"];
const budgets = ["Startup", "Mid-range", "Enterprise"];
const platforms = ["Web", "Mobile", "Both", "Desktop", "Other"];

export default function StartProjectPage() {
    const [activeModule, setActiveModule] = useState<'selection' | 'modular' | 'custom' | 'checkout' | 'success'>('selection');
    const [selectedSector, setSelectedSector] = useState<string | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);
    const [showErrors, setShowErrors] = useState(false);

    const [formData, setFormData] = useState({
        // 1. Basic Contact
        name: '',
        email: '',
        phone: '',
        company: '',

        // 2. Project Overview
        projectTitle: '',
        projectDescription: '',
        projectType: '',
        projectTypeOther: '',

        // 3. Goals & Features
        primaryGoal: [] as string[],
        primaryGoalOther: '',
        features: [] as string[],
        featuresOther: '',

        // 4. Scope & Scale
        projectScale: 'Standard',
        timeline: 'Quick (1-2 mo)',
        budgetRange: 'Startup',

        // 5. Technical
        platformPreference: '',
        preferredTech: '',
        existingAssets: '',

        // 6. Audience
        targetAudience: '',
        expectedUsers: '',
        geography: '',

        // 7. Additional
        designGuidelines: '',
        inspirations: '',
        challenges: '',
        mustHaves: '',

        // 8. Consent
        consent: false,
        message: '' // For general notes
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

    const validateStep = (step: number) => {
        const newErrors: string[] = [];
        if (step === 1) {
            if (!formData.name) newErrors.push('name');
            if (!formData.email) newErrors.push('email');
        } else if (step === 2) {
            if (!formData.projectTitle) newErrors.push('projectTitle');
            if (!formData.projectDescription) newErrors.push('projectDescription');
            if (!formData.projectType) newErrors.push('projectType');
        } else if (step === 3) {
            if (formData.primaryGoal.length === 0) newErrors.push('primaryGoal');
        } else if (step === 4) {
            if (!formData.projectScale) newErrors.push('projectScale');
        } else if (step === 5) {
            if (!formData.platformPreference) newErrors.push('platformPreference');
        } else if (step === 6) {
            if (!formData.targetAudience) newErrors.push('targetAudience');
        } else if (step === 7) {
            if (!formData.consent) newErrors.push('consent');
        }
        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleNext = () => {
        setShowErrors(true);
        if (validateStep(currentStep)) {
            setShowErrors(false);
            setErrors([]);

            let nextStep = currentStep + 1;
            if (currentStep === 4) {
                const needsTechnical = formData.projectType.toLowerCase().includes('app') ||
                    formData.projectType.toLowerCase().includes('software') ||
                    formData.projectType.toLowerCase().includes('ai');
                if (!needsTechnical) nextStep = 6;
            }
            setCurrentStep(nextStep);
        }
    };

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowErrors(true);
        if (!validateStep(7)) return;
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
                    message: formData.projectDescription || formData.message || (selectedPlan ? `Checkout: ${selectedPlan.package?.name || selectedPlan.tier?.name}` : 'Custom Inquiry'),
                    selections: {
                        company: formData.company,
                        pathway: selectedPlan ? 'package' : 'custom',
                        projectTier: selectedPlan?.package?.name || selectedPlan?.tier?.name || 'Custom Build',
                        selectedPlan: selectedPlan,
                        // Expanded Fields
                        projectTitle: formData.projectTitle,
                        projectType: formData.projectType,
                        projectTypeOther: formData.projectTypeOther,
                        primaryGoal: formData.primaryGoal,
                        primaryGoalOther: formData.primaryGoalOther,
                        features: formData.features,
                        featuresOther: formData.featuresOther,
                        projectScale: formData.projectScale,
                        timeline: formData.timeline,
                        budgetRange: formData.budgetRange,
                        platformPreference: formData.platformPreference,
                        preferredTech: formData.preferredTech,
                        existingAssets: formData.existingAssets,
                        targetAudience: formData.targetAudience,
                        expectedUsers: formData.expectedUsers,
                        geography: formData.geography,
                        designGuidelines: formData.designGuidelines,
                        inspirations: formData.inspirations,
                        challenges: formData.challenges,
                        mustHaves: formData.mustHaves
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
                                className="max-w-4xl mx-auto w-full"
                            >
                                {/* Step Indicator */}
                                <div className="flex items-center justify-between mb-12 px-2">
                                    {[1, 2, 3, 4, 5, 6, 7].map((step) => {
                                        // Skip step 5 (technical) if not an app/software/ai project
                                        const isTechnical = step === 5;
                                        const needsTechnical = formData.projectType.toLowerCase().includes('app') ||
                                            formData.projectType.toLowerCase().includes('software') ||
                                            formData.projectType.toLowerCase().includes('ai');

                                        if (isTechnical && !needsTechnical) return null;

                                        return (
                                            <div key={step} className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${currentStep === step
                                                    ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                                                    : currentStep > step
                                                        ? 'bg-green-500/20 border-green-500/30 text-green-500'
                                                        : 'bg-white/[0.03] border-white/[0.08] text-white/20'
                                                    }`}>
                                                    {currentStep > step ? <Check size={16} /> : <span className="text-xs font-bold">{step}</span>}
                                                </div>
                                                {currentStep === step && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="text-[10px] uppercase font-bold text-blue-500 tracking-widest hidden md:block"
                                                    >
                                                        {step === 1 ? 'Contact' :
                                                            step === 2 ? 'Overview' :
                                                                step === 3 ? 'Goals' :
                                                                    step === 4 ? 'Scale' :
                                                                        step === 5 ? 'Technical' :
                                                                            step === 6 ? 'Users' : 'Final'}
                                                    </motion.span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                    {/* Sidebar Stats */}
                                    <div className="lg:col-span-4 space-y-8">
                                        <button
                                            onClick={() => {
                                                if (currentStep > 1) {
                                                    let prevStep = currentStep - 1;
                                                    // Skip technical step if not needed
                                                    if (prevStep === 5) {
                                                        const needsTechnical = formData.projectType.toLowerCase().includes('app') ||
                                                            formData.projectType.toLowerCase().includes('software') ||
                                                            formData.projectType.toLowerCase().includes('ai');
                                                        if (!needsTechnical) prevStep = 4;
                                                    }
                                                    setCurrentStep(prevStep);
                                                } else {
                                                    setActiveModule('selection');
                                                }
                                            }}
                                            className="flex items-center gap-2 text-white/30 hover:text-blue-500 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                                        >
                                            <ArrowLeft size={14} /> Back
                                        </button>

                                        <div className="p-8 rounded-[2.5rem] bg-blue-500/[0.03] border border-blue-500/10 space-y-8">
                                            <div className="flex flex-col gap-2">
                                                <HUDMetric label="Module" value={`STEP 0${currentStep}`} color="blue" />
                                                <HUDMetric label="Type" value="Custom Inquiry" color="blue" />
                                                <HUDMetric label="Review" value="Live Entry" color="blue" />
                                            </div>

                                            <div className="pt-6 border-t border-white/[0.05] space-y-4">
                                                <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] mb-2">Completion</p>
                                                <div className="w-full h-1.5 bg-white/[0.03] rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(currentStep / 7) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inquiry Form */}
                                    <div className="lg:col-span-8">
                                        <div className="bg-[#121212]/30 border border-white/[0.08] rounded-[3rem] p-10 backdrop-blur-3xl min-h-[500px] flex flex-col">

                                            <AnimatePresence mode="wait">
                                                {/* Step 1: Contact Info */}
                                                {currentStep === 1 && (
                                                    <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Basic Contact Info</h2>
                                                        <div className="space-y-6">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center px-4">
                                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Full Name</label>
                                                                        {showErrors && !formData.name && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                    </div>
                                                                    <input required type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full bg-white/[0.02] border rounded-2xl px-6 py-4 text-sm text-white focus:outline-none transition-all ${showErrors && !formData.name ? 'border-red-500/50 bg-red-500/[0.02]' : 'border-white/[0.05] focus:border-blue-500/40'}`} />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center px-4">
                                                                        <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Work Email</label>
                                                                        {showErrors && !formData.email && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                    </div>
                                                                    <input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full bg-white/[0.02] border rounded-2xl px-6 py-4 text-sm text-white focus:outline-none transition-all ${showErrors && !formData.email ? 'border-red-500/50 bg-red-500/[0.02]' : 'border-white/[0.05] focus:border-blue-500/40'}`} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Phone (Optional)</label>
                                                                    <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Company (Optional)</label>
                                                                    <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 2: Project Overview */}
                                                {currentStep === 2 && (
                                                    <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Project Overview</h2>
                                                        <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Project Title / Name</label>
                                                                    {showErrors && !formData.projectTitle && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <input required type="text" placeholder="e.g., Nexus AI Portal" value={formData.projectTitle} onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })} className={`w-full bg-white/[0.02] border rounded-2xl px-6 py-4 text-sm text-white focus:outline-none transition-all ${showErrors && !formData.projectTitle ? 'border-red-500/50 bg-red-500/[0.02]' : 'border-white/[0.05] focus:border-blue-500/40'}`} />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">What do you want to build?</label>
                                                                    {showErrors && !formData.projectDescription && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <textarea required rows={4} placeholder="Tell us about your project requirements and goals in simple words..." value={formData.projectDescription} onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })} className={`w-full bg-white/[0.02] border rounded-3xl px-6 py-5 text-sm text-white focus:outline-none resize-none transition-all ${showErrors && !formData.projectDescription ? 'border-red-500/50 bg-red-500/[0.02]' : 'border-white/[0.05] focus:border-blue-500/40'}`} />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Type of Project</label>
                                                                    {showErrors && !formData.projectType && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-3">
                                                                    {projectTypes.map(type => (
                                                                        <button
                                                                            key={type}
                                                                            type="button"
                                                                            onClick={() => setFormData({ ...formData, projectType: type })}
                                                                            className={`px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${formData.projectType === type
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                                                                : showErrors && !formData.projectType
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/40 hover:border-white/20'
                                                                                }`}
                                                                        >
                                                                            {type}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                                {formData.projectType === 'Other' && (
                                                                    <input type="text" placeholder="Please specify..." value={formData.projectTypeOther} onChange={(e) => setFormData({ ...formData, projectTypeOther: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40 mt-3" />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 3: Goals & Features */}
                                                {currentStep === 3 && (
                                                    <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Goals & Features</h2>
                                                        <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Primary Goal</label>
                                                                    {showErrors && formData.primaryGoal.length === 0 && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                    {primaryGoals.map(goal => (
                                                                        <button
                                                                            key={goal}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                const exists = formData.primaryGoal.includes(goal);
                                                                                if (exists) {
                                                                                    setFormData({ ...formData, primaryGoal: formData.primaryGoal.filter(g => g !== goal) });
                                                                                } else {
                                                                                    setFormData({ ...formData, primaryGoal: [...formData.primaryGoal, goal] });
                                                                                }
                                                                            }}
                                                                            className={`px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all text-left flex items-center justify-between ${formData.primaryGoal.includes(goal)
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                                                                : showErrors && formData.primaryGoal.length === 0
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/40 hover:border-white/20'
                                                                                }`}
                                                                        >
                                                                            {goal}
                                                                            {formData.primaryGoal.includes(goal) && <Check size={12} />}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Key Features Needed</label>
                                                                <div className="grid grid-cols-1 gap-2">
                                                                    {keyFeatures.map(feature => (
                                                                        <button
                                                                            key={feature}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                const exists = formData.features.includes(feature);
                                                                                if (exists) {
                                                                                    setFormData({ ...formData, features: formData.features.filter(f => f !== feature) });
                                                                                } else {
                                                                                    setFormData({ ...formData, features: [...formData.features, feature] });
                                                                                }
                                                                            }}
                                                                            className={`px-6 py-4 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between ${formData.features.includes(feature)
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500'
                                                                                : 'bg-white/[0.02] border-white/[0.05] text-white/40 hover:border-white/20'
                                                                                }`}
                                                                        >
                                                                            {feature}
                                                                            {formData.features.includes(feature) && <Check size={14} />}
                                                                        </button>
                                                                    ))}
                                                                    <div className="space-y-2 mt-2">
                                                                        <label className="text-[10px] uppercase font-bold text-white/20 tracking-widest ml-4">Other Features</label>
                                                                        <input type="text" placeholder="e.g., Custom Chatbot, Map Integration..." value={formData.featuresOther} onChange={(e) => setFormData({ ...formData, featuresOther: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 4: Scale & Scale */}
                                                {currentStep === 4 && (
                                                    <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Scope & Scale</h2>
                                                        <div className="space-y-8">
                                                            <div className="space-y-4">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Project Scale</label>
                                                                    {showErrors && !formData.projectScale && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-3 gap-3">
                                                                    {projectScales.map(scale => (
                                                                        <button
                                                                            key={scale}
                                                                            type="button"
                                                                            onClick={() => setFormData({ ...formData, projectScale: scale })}
                                                                            className={`px-4 py-6 rounded-2xl border text-xs font-black uppercase tracking-widest transition-all ${formData.projectScale === scale
                                                                                ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                                                                : showErrors && !formData.projectScale
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/20'
                                                                                }`}
                                                                        >
                                                                            {scale}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Urgency / Timeline</label>
                                                                    {showErrors && !formData.timeline && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                    {timelines.map(time => (
                                                                        <button
                                                                            key={time}
                                                                            type="button"
                                                                            onClick={() => setFormData({ ...formData, timeline: time })}
                                                                            className={`px-4 py-4 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${formData.timeline === time
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500'
                                                                                : showErrors && !formData.timeline
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/30 hover:border-white/10'
                                                                                }`}
                                                                        >
                                                                            {time}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Budget Range</label>
                                                                    {showErrors && !formData.budgetRange && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                    {budgets.map(budget => (
                                                                        <button
                                                                            key={budget}
                                                                            type="button"
                                                                            onClick={() => setFormData({ ...formData, budgetRange: budget })}
                                                                            className={`px-4 py-4 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${formData.budgetRange === budget
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500'
                                                                                : showErrors && !formData.budgetRange
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/30 hover:border-white/10'
                                                                                }`}
                                                                        >
                                                                            {budget}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 5: Technical Details (Conditional) */}
                                                {currentStep === 5 && (
                                                    <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Technical Details</h2>
                                                        <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Platform Preference</label>
                                                                    {showErrors && !formData.platformPreference && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                                    {platforms.map(platform => (
                                                                        <button
                                                                            key={platform}
                                                                            type="button"
                                                                            onClick={() => setFormData({ ...formData, platformPreference: platform })}
                                                                            className={`px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${formData.platformPreference === platform
                                                                                ? 'bg-blue-500/20 border-blue-500 text-blue-500'
                                                                                : showErrors && !formData.platformPreference
                                                                                    ? 'bg-red-500/[0.02] border-red-500/30 text-white/20'
                                                                                    : 'bg-white/[0.02] border-white/[0.05] text-white/40 hover:border-white/20'
                                                                                }`}
                                                                        >
                                                                            {platform}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Preferred Technologies (Optional)</label>
                                                                <input type="text" placeholder="e.g., React, Unity, Shopify..." value={formData.preferredTech} onChange={(e) => setFormData({ ...formData, preferredTech: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Existing Assets / Systems</label>
                                                                <textarea rows={2} placeholder="Any existing websites, apps, APIs, or databases we should know about?" value={formData.existingAssets} onChange={(e) => setFormData({ ...formData, existingAssets: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-3xl px-6 py-5 text-sm text-white focus:outline-none focus:border-blue-500/40 resize-none" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 6: Audience & Users */}
                                                {currentStep === 6 && (
                                                    <motion.div key="step6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Audience & Users</h2>
                                                        <div className="space-y-6">
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center px-4">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Target Audience</label>
                                                                    {showErrors && !formData.targetAudience && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                                                                </div>
                                                                <input required type="text" placeholder="e.g., B2B, Gamers, Internal Employees..." value={formData.targetAudience} onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })} className={`w-full bg-white/[0.02] border rounded-2xl px-6 py-4 text-sm text-white focus:outline-none transition-all ${showErrors && !formData.targetAudience ? 'border-red-500/50 bg-red-500/[0.02]' : 'border-white/[0.05] focus:border-blue-500/40'}`} />
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Expected Number of Users</label>
                                                                    <input type="text" placeholder="e.g., 500 - 1,000" value={formData.expectedUsers} onChange={(e) => setFormData({ ...formData, expectedUsers: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Geography / Languages</label>
                                                                    <input type="text" placeholder="e.g., Global / English" value={formData.geography} onChange={(e) => setFormData({ ...formData, geography: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 7: Additional Info & Consent */}
                                                {currentStep === 7 && (
                                                    <motion.div key="step7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 flex-1">
                                                        <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight">Final Details</h2>
                                                        <div className="space-y-6">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Design Guidelines</label>
                                                                    <input type="text" placeholder="Links to brand kits or text details..." value={formData.designGuidelines} onChange={(e) => setFormData({ ...formData, designGuidelines: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Inspirations / References</label>
                                                                    <input type="text" placeholder="Links to websites/apps you like..." value={formData.inspirations} onChange={(e) => setFormData({ ...formData, inspirations: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500/40" />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Priority / Must-Have Features</label>
                                                                <textarea rows={2} placeholder="What are the absolute essentials for this project?" value={formData.mustHaves} onChange={(e) => setFormData({ ...formData, mustHaves: e.target.value })} className="w-full bg-white/[0.02] border border-white/[0.05] rounded-3xl px-6 py-5 text-sm text-white focus:outline-none focus:border-blue-500/40 resize-none" />
                                                            </div>

                                                            <div className="pt-6 border-t border-white/[0.05] space-y-6">
                                                                <div className="flex flex-col gap-2">
                                                                    <div className="flex items-start gap-4 cursor-pointer group" onClick={() => setFormData({ ...formData, consent: !formData.consent })}>
                                                                        <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all mt-1 ${formData.consent ? 'bg-blue-500 border-blue-500' : showErrors && !formData.consent ? 'border-red-500' : 'bg-white/[0.02] border-white/[0.1] group-hover:border-white/30'}`}>
                                                                            {formData.consent && <Check size={14} className="text-white" />}
                                                                        </div>
                                                                        <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest leading-relaxed">
                                                                            I acknowledge the <Link href="/terms" target="_blank" className="text-white hover:text-blue-400 transition-colors underline decoration-white/20 underline-offset-4">Terms & Conditions</Link> and <Link href="/privacy" target="_blank" className="text-white hover:text-blue-400 transition-colors underline decoration-white/20 underline-offset-4">Privacy Policy</Link> regarding this project inquiry.
                                                                        </p>
                                                                    </div>
                                                                    {showErrors && !formData.consent && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-10">Consent is Required</p>}
                                                                </div>

                                                                <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-[2rem]">
                                                                    <CaptchaWidget onVerified={setIsCaptchaVerified} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <div className="flex items-center gap-4 mt-12">
                                                {currentStep > 1 && (
                                                    <button
                                                        onClick={() => {
                                                            setShowErrors(false);
                                                            setErrors([]);
                                                            let prevStep = currentStep - 1;
                                                            if (currentStep === 6) {
                                                                const needsTechnical = formData.projectType.toLowerCase().includes('app') ||
                                                                    formData.projectType.toLowerCase().includes('software') ||
                                                                    formData.projectType.toLowerCase().includes('ai');
                                                                if (!needsTechnical) prevStep = 4;
                                                            }
                                                            setCurrentStep(prevStep);
                                                        }}
                                                        className="flex-1 bg-white/[0.05] text-white/60 font-black uppercase tracking-[0.2em] py-5 rounded-2xl border border-white/[0.1] hover:bg-white/[0.08] transition-all"
                                                    >
                                                        Back
                                                    </button>
                                                )}

                                                {currentStep < 7 ? (
                                                    <button
                                                        onClick={handleNext}
                                                        className="flex-1 bg-blue-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-3 group"
                                                    >
                                                        Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={handleInquirySubmit}
                                                        disabled={isSubmitting || !isCaptchaVerified || !formData.consent}
                                                        className={`flex-1 font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 group ${isSubmitting || !isCaptchaVerified || !formData.consent
                                                            ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                                            : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_8px_40px_rgba(59,130,246,0.4)]'
                                                            }`}
                                                    >
                                                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <>Complete Briefing <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                                                    </button>
                                                )}
                                            </div>
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

                                                    {selectedPlan?.type === 'modular' && (
                                                        <div className="space-y-3">
                                                            {Object.entries(selectedPlan?.modules || {}).filter(([_, q]: any) => q > 0).length > 0 && (
                                                                <>
                                                                    <p className="text-[10px] uppercase font-bold text-white/30 ml-2 tracking-widest">Configured Modules</p>
                                                                    <div className="max-h-48 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                                                                        {Object.entries(selectedPlan.modules).filter(([_, q]: any) => q > 0).map(([name, q]: any, i) => (
                                                                            <div key={i} className="flex justify-between text-xs py-2 border-b border-white/[0.05]">
                                                                                <span className="text-white/60">{name} {q > 1 ? `(x${q})` : ''}</span>
                                                                                <span className="text-white font-mono opacity-80">+ Included</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            )}
                                                            {selectedPlan.maintenance && (
                                                                <div className="flex justify-between text-xs py-2 border-b border-white/[0.05] mt-2">
                                                                    <span className="text-[#FF6A00] font-bold italic">{selectedPlan.maintenance}</span>
                                                                    <span className="text-white font-mono opacity-80 tracking-widest uppercase text-[10px] bg-white/5 px-2 py-0.5 rounded">+ Active</span>
                                                                </div>
                                                            )}
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
                                <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                                    <Check size={48} strokeWidth={3} />
                                </div>
                                <p className="text-[#FF6A00] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Briefing Successful</p>
                                <h2 className="text-5xl font-bold text-white mb-6 font-outfit uppercase tracking-tighter leading-tight">
                                    Thank You for <span className="text-white/20 text-4xl block mt-2">Partnering With Us.</span>
                                </h2>
                                <p className="text-white/40 text-xl font-light leading-relaxed mb-10">
                                    Your project briefing has been successfully transmitted to our operations team. We are honored to be part of your mission. An assigned Project Manager will review your requirements and coordinate the next steps within the next 60 minutes.
                                </p>

                                <div className="max-w-md mx-auto mb-12 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
                                    <p className="text-[10px] uppercase font-bold text-[#FF6A00] tracking-[0.2em] mb-4">Urgent Escalation</p>
                                    <p className="text-sm text-white/50 mb-6 leading-relaxed">
                                        If you require immediate assistance or prioritized support, please reach out to our dedicated operations desk.
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between text-sm py-3 border-b border-white/[0.05]">
                                            <span className="text-white/30 uppercase font-bold text-[10px] tracking-widest">Email</span>
                                            <a href="mailto:support@neonbyte.com" className="text-white font-medium hover:text-[#FF6A00] transition-colors underline decoration-white/10 underline-offset-4">support@neonbyte.com</a>
                                        </div>
                                        <div className="flex items-center justify-between text-sm py-3">
                                            <span className="text-white/30 uppercase font-bold text-[10px] tracking-widest">Phone</span>
                                            <a href="tel:3322321676" className="text-white font-medium hover:text-[#FF6A00] transition-colors">(332) - 232 - 1676</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button
                                        onClick={() => setActiveModule('selection')}
                                        className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-[#FF6A00] text-white font-black uppercase tracking-[0.2em] hover:shadow-[0_12px_40px_rgba(255,106,0,0.3)] transition-all"
                                    >
                                        New Briefing
                                    </button>
                                    <Link
                                        href="/"
                                        className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-white font-bold hover:bg-white/[0.08] transition-all"
                                    >
                                        Return Home
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
