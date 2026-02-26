'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send, Mail, MapPin, Phone, ArrowRight, Check, Loader2,
    Shield, Cpu, Zap, Search, BookOpen, MessageSquare,
    LifeBuoy, ChevronDown, Activity, Terminal, Globe,
    Lock, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PremiumSelect from '@/components/PremiumSelect';
import CaptchaWidget from '@/components/CaptchaWidget';
import Link from 'next/link';

const supportCategories = [
    { value: 'Technical', label: 'Technical Help', icon: Cpu },
    { value: 'Project', label: 'Project Inquiry', icon: Rocket },
    { value: 'Billing', label: 'Billing & Account', icon: DollarSign },
    { value: 'General', label: 'General Question', icon: HelpCircle },
];

// Re-defining Rocket and DollarSign since they weren't in the initial import
import { Rocket, DollarSign } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/[0.05] bg-[#121212]/30 rounded-2xl overflow-hidden mb-4 transition-all hover:border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
                <span className="text-white font-medium group-hover:text-[#FF6A00] transition-colors">{question}</span>
                <ChevronDown className={`text-white/20 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#FF6A00]' : ''}`} size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-8 pb-8 text-white/40 leading-relaxed text-sm">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StatusMetric = ({ label, status, value }: { label: string, status: 'online' | 'busy' | 'offline', value: string }) => (
    <div className="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'online' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' :
                status === 'busy' ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' :
                    'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                }`} />
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">{label}</span>
        </div>
        <span className="text-[10px] font-mono text-white/60">{value}</span>
    </div>
);

export default function SupportPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({});
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'Technical',
        message: ''
    });

    const easing = [0.16, 1, 0.3, 1] as any;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaVerified) return;
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'support',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    selections: { category: formData.category }
                })
            });
            const data = await response.json();
            setSubmitStatus({ success: data.success, message: data.message });
            if (data.success) {
                setFormData({ name: '', email: '', phone: '', category: 'Technical', message: '' });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Connection failure. Please try again.' });
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

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: easing }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#FF6A00] text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <LifeBuoy size={12} /> Help Center
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: easing }}
                        className="text-5xl md:text-7xl font-semibold text-white mb-6 font-outfit tracking-tight leading-tight"
                    >
                        How can we <br /><span className="text-white/20 font-light italic">help you?</span>
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Stats & KB */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* System Health Status */}
                        <div className="p-8 rounded-[2.5rem] bg-[#0A0A0A]/40 border border-white/[0.06] backdrop-blur-3xl space-y-6">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">System Health</h3>
                            <div className="space-y-3">
                                <StatusMetric label="Main API" status="online" value="12ms Latency" />
                                <StatusMetric label="Database" status="online" value="Optimized" />
                                <StatusMetric label="Network" status="online" value="High Load (Ready)" />
                                <StatusMetric label="Engine" status="busy" value="Processing" />
                            </div>
                        </div>

                        {/* Knowledge Base Link */}
                        <Link
                            href="/kb"
                            className="group block p-8 rounded-[2.5rem] bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20 backdrop-blur-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-500">
                                <BookOpen size={80} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2 font-outfit uppercase">Knowledge Hub</h3>
                                <p className="text-white/40 text-sm mb-6 max-w-[200px]">Explore documentation and self-help guides.</p>
                                <div className="flex items-center gap-2 text-[#FF6A00] font-bold text-[10px] uppercase tracking-widest">
                                    Explore KB <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Direct Contact Info */}
                        <div className="p-8 space-y-6">
                            <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center group-hover:border-[#FF6A00]/40 transition-all">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Email</p>
                                    <p className="text-sm">support@neonbyte.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center group-hover:border-[#FF6A00]/40 transition-all">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Phone</p>
                                    <p className="text-sm">(332) - 232 - 1676</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: FAQs & Form */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* FAQs Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tight ml-4 mb-8">Popular Questions</h2>
                            <FAQItem
                                question="How long does a standard project take?"
                                answer="Most standard packages are deployed within 4-6 weeks. Custom enterprise projects typically range from 3-6 months depending on complexity and infrastructure requirements."
                            />
                            <FAQItem
                                question="Do you provide ongoing technical support?"
                                answer="Yes. All our packages include maintenance plans that cover security updates, system health monitoring, and direct technical assistance."
                            />
                            <FAQItem
                                question="Can I upgrade my plan later?"
                                answer="Absolutely. Our modular architecture allows for seamless transitions between tiers. You can add new features or scale your infrastructure at any time."
                            />
                        </div>

                        {/* Interactive Form */}
                        <div className="bg-[#121212]/30 border border-white/[0.08] rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/[0.05] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl font-bold text-white mb-8 font-outfit uppercase tracking-tight">Send a Message</h2>

                            <form className="space-y-7 relative z-10" onSubmit={handleSubmit}>
                                {submitStatus.success ? (
                                    <div className="p-8 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-[2.5rem] text-center">
                                        <div className="w-20 h-20 bg-[#FF6A00]/20 border border-[#FF6A00]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                                            <Check size={40} className="text-[#FF6A00]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 font-outfit uppercase">Message Sent</h3>
                                        <p className="text-white/40 text-sm mb-8">Our team will reach out shortly.</p>
                                        <button
                                            type="button"
                                            onClick={() => setSubmitStatus({})}
                                            className="px-10 py-4 bg-white/[0.05] border border-white/[0.1] rounded-2xl text-[11px] font-bold uppercase tracking-widest text-white hover:bg-white/[0.08] transition-all"
                                        >
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all text-sm"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all text-sm"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Need help with?</label>
                                                <div className="relative">
                                                    <select
                                                        value={formData.category}
                                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all text-sm appearance-none cursor-pointer"
                                                    >
                                                        {supportCategories.map(c => (
                                                            <option key={c.value} value={c.value} className="bg-[#020202]">{c.label}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest ml-4">Your Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Tell us what's on your mind..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-3xl px-6 py-6 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all text-sm resize-none"
                                            />
                                        </div>

                                        <CaptchaWidget onVerified={setCaptchaVerified} />

                                        <button
                                            disabled={isSubmitting || !captchaVerified}
                                            className="w-full group relative bg-[#FF6A00] text-white font-black py-6 rounded-2xl overflow-hidden transition-all duration-700 shadow-[0_12px_30px_-10px_rgba(255,106,0,0.5)] hover:shadow-[0_20px_45px_-12px_rgba(255,106,0,0.7)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-xs"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-3">
                                                    Sending... <Loader2 size={18} className="animate-spin" />
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-3">
                                                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                            )}
                                        </button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
