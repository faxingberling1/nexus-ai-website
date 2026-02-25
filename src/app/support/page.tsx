'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, ArrowRight, ChevronRight, Check, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PremiumSelect from '@/components/PremiumSelect';

const supportCategories = [
    { value: 'Technical Support', label: 'Technical Support' },
    { value: 'Project Inquiry', label: 'Project Inquiry' },
    { value: 'Billing & Account', label: 'Billing & Account' },
    { value: 'Other Question', label: 'Other Question' }
];

export default function SupportPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'Technical Support',
        message: ''
    });

    const easing = [0.16, 1, 0.3, 1] as any;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'support',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    selections: { category: formData.category }
                })
            });
            const data = await response.json();
            setSubmitStatus({ success: data.success, message: data.message });
            if (data.success) {
                setFormData({ name: '', email: '', category: 'Technical Support', message: '' });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Critical connection failure. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] pt-32 relative overflow-hidden text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light">
            <Header />

            {/* Ultra-Premium Noise Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            {/* Extreme subtle lighting */}
            <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#FF6A00] to-transparent opacity-[0.05] blur-[160px] pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-[#FF6A00] to-transparent opacity-[0.03] blur-[160px] pointer-events-none" />

            {/* Interior Grid Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[200vh]">
                <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-white/[0.03] via-white/[0.03] to-transparent" />
                <div className="absolute top-0 left-[40%] w-[1px] h-full bg-gradient-to-b from-white/[0.03] via-white/[0.03] to-transparent" />
                <div className="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-white/[0.03] via-white/[0.03] to-transparent" />
                <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-white/[0.03] via-white/[0.03] to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: easing }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6A00]/20 bg-[#121212]/40 backdrop-blur-2xl mb-8 shadow-[0_0_20px_rgba(255,106,0,0.05)] w-fit"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-40" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]" />
                            </span>
                            <span className="text-xs font-medium tracking-wide text-white/70">Get in Touch with our Team</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: easing }}
                            className="text-6xl md:text-[5.5rem] font-semibold tracking-tight text-white font-outfit leading-[0.9] mb-8"
                        >
                            Support <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Assistance.</span>
                        </motion.h1>

                        {/* Divider */}
                        <div className="w-24 h-[1px] bg-gradient-to-r from-[#FF6A00] to-transparent mb-12 shadow-[0_0_10px_rgba(255,106,0,0.5)]" />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
                            className="text-white/40 text-xl font-light leading-relaxed mb-12 max-w-md"
                        >
                            Need help with your current project or have a general inquiry? Our support experts are ready to assist you.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email Address", value: "support@neonbyteai.com" },
                                { icon: Phone, label: "Support Line", value: "(332) - 232 - 1676" },
                                { icon: MapPin, label: "Studio Location", value: "Delaware" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: easing }}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-white/40 group-hover:text-[#FF6A00] group-hover:border-[#FF6A00]/30 transition-all duration-500 shadow-sm relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[#FF6A00]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <item.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-1">{item.label}</p>
                                        <p className="text-white text-lg font-medium font-outfit tracking-tight leading-none">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: easing }}
                        className="bg-[#121212]/30 backdrop-blur-3xl border border-[#FF6A00]/10 rounded-[3rem] p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-[#FF6A00]/20 transition-all duration-700"
                    >
                        {/* Corner Brackets */}
                        <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#FF6A00]/30 pointer-events-none transition-colors group-hover:border-[#FF6A00]/60" />
                        <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#FF6A00]/30 pointer-events-none transition-colors group-hover:border-[#FF6A00]/60" />

                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6A00]/[0.07] rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6A00]/[0.03] rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

                        <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                            {submitStatus.success ? (
                                <div className="p-8 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-3xl text-center">
                                    <div className="w-16 h-16 bg-[#FF6A00]/20 border border-[#FF6A00]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                                        <Check size={32} className="text-[#FF6A00]" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2 font-outfit">Message Sent</h3>
                                    <p className="text-white/40 text-sm mb-6">{submitStatus.message}</p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitStatus({})}
                                        className="text-[11px] font-bold uppercase tracking-widest text-[#FF6A00] hover:text-white transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-semibold tracking-widest text-[#FF6A00]/60 uppercase font-inter ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-[#1A1A1A]/50 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 focus:bg-[#1A1A1A]/80 transition-all duration-500 font-inter text-[15px] shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-semibold tracking-widest text-[#FF6A00]/60 uppercase font-inter ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-[#1A1A1A]/50 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 focus:bg-[#1A1A1A]/80 transition-all duration-500 font-inter text-[15px] shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <PremiumSelect
                                        label="Support Category"
                                        options={supportCategories}
                                        value={formData.category}
                                        onChange={(val) => setFormData({ ...formData, category: val })}
                                        placeholder="Select Category"
                                    />

                                    <div className="space-y-3">
                                        <label className="text-xs font-semibold tracking-widest text-[#FF6A00]/60 uppercase font-inter ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="How can we help you today?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-[#1A1A1A]/50 border border-white/[0.08] rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 focus:bg-[#1A1A1A]/80 transition-all duration-500 font-inter text-[15px] resize-none shadow-inner"
                                        />
                                    </div>

                                    {submitStatus.success === false && (
                                        <p className="text-red-400 text-xs text-center font-medium">{submitStatus.message}</p>
                                    )}

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full group relative bg-[#FF6A00] text-white font-semibold py-6 rounded-2xl overflow-hidden transition-all duration-700 shadow-[0_12px_30px_-10px_rgba(255,106,0,0.5)] hover:shadow-[0_20px_45px_-12px_rgba(255,106,0,0.7)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide text-sm">
                                            {isSubmitting ? (
                                                <>
                                                    SENDING... <Loader2 size={18} className="animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    SEND MESSAGE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C33] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </button>
                                </>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
