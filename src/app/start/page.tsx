'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Rocket, Database, Globe, Zap, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const steps = [
    {
        title: "Focus Area",
        description: "What sector of your enterprise are we optimizing?",
        options: [
            { id: 'ai', label: 'AI Solutions', icon: Zap },
            { id: 'web', label: 'Web Platforms', icon: Globe },
            { id: 'automation', label: 'Automation', icon: Database },
            { id: 'branding', label: 'Brand Systems', icon: Rocket }
        ]
    },
    {
        title: "Project Scope",
        description: "What is the estimated scale of this initiative?",
        options: [
            { id: 'mvp', label: 'Rapid Strategy / MVP', icon: Zap },
            { id: 'scale', label: 'Enterprise Scaling', icon: Globe },
            { id: 'custom', label: 'Custom Protocol', icon: Database }
        ]
    },
    {
        title: "Identification",
        description: "How shall we contact your team?",
        isForm: true
    }
];

export default function StartProjectPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Record<string, string>>({});

    const easing = [0.16, 1, 0.3, 1] as any;

    const nextStep = () => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1);
    const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden flex flex-col">
            <Header />

            <div className="flex-1 flex items-center justify-center py-20 relative z-10 px-6">
                <div className="max-w-4xl w-full">

                    {/* Progress Indicator */}
                    <div className="flex justify-between items-center mb-20 max-w-md mx-auto relative px-4">
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/[0.05]" />
                        {[...Array(steps.length)].map((_, i) => (
                            <div
                                key={i}
                                className={`relative z-10 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 font-outfit text-sm ${i <= currentStep
                                    ? 'bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_20px_rgba(255,106,0,0.3)]'
                                    : 'bg-[#0A0A0A] border-white/[0.1] text-white/30'
                                    }`}
                            >
                                {i < currentStep ? <Check size={16} /> : `0${i + 1}`}
                            </div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: easing }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 font-outfit tracking-tight">
                                {steps[currentStep].title}
                            </h1>
                            <p className="text-white/40 text-lg font-light mb-16">
                                {steps[currentStep].description}
                            </p>

                            {!steps[currentStep].isForm ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                                    {steps[currentStep].options?.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => {
                                                setSelections({ ...selections, [currentStep]: opt.id });
                                                nextStep();
                                            }}
                                            className={`group p-8 rounded-3xl border transition-all duration-500 flex flex-col items-center gap-6 ${selections[currentStep] === opt.id
                                                ? 'bg-[#FF6A00]/10 border-[#FF6A00]/40 shadow-[0_0_30px_rgba(255,106,0,0.1)]'
                                                : 'bg-[#121212]/30 border-white/[0.04] hover:border-white/[0.1]'
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${selections[currentStep] === opt.id ? 'bg-[#FF6A00] text-white' : 'bg-white/[0.02] text-white/30'
                                                }`}>
                                                <opt.icon size={24} />
                                            </div>
                                            <span className={`font-medium transition-colors ${selections[currentStep] === opt.id ? 'text-white' : 'text-white/40'
                                                }`}>{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="max-w-lg mx-auto space-y-4 mb-16">
                                    <input type="text" placeholder="Your Name" className="w-full bg-[#121212]/50 border border-white/[0.06] rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all font-inter" />
                                    <input type="email" placeholder="Work Email" className="w-full bg-[#121212]/50 border border-white/[0.06] rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-[#FF6A00]/40 transition-all font-inter" />
                                    <button className="w-full bg-[#FF6A00] text-white font-semibold py-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(255,106,0,0.4)] transition-all flex items-center justify-center gap-2 group">
                                        Initialize Protocol <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            )}

                            <div className="flex justify-center gap-6">
                                {currentStep > 0 && (
                                    <button onClick={prevStep} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm font-medium">
                                        <ArrowLeft size={16} /> Back
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
