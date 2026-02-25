'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface PremiumSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
}

export default function PremiumSelect({ options, value, onChange, placeholder = "Select option", label }: PremiumSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="space-y-2 relative" ref={containerRef}>
            {label && (
                <label className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold ml-1">
                    {label}
                </label>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-[#1A1A1A]/80 border ${isOpen ? 'border-[#FF6A00]/50' : 'border-white/[0.08]'} rounded-2xl px-6 py-5 text-white cursor-pointer transition-all duration-500 flex items-center justify-between group shadow-inner relative overflow-hidden`}
            >
                {/* Subtle highlight glow */}
                <div className={`absolute inset-0 bg-[#FF6A00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <span className={`text-[15px] font-inter relative z-10 ${!selectedOption ? 'text-white/30' : 'text-white'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`text-[#FF6A00] transition-transform duration-500 relative z-10 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute z-[100] left-0 right-0 mt-2 bg-[#121212] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
                    >
                        <div className="max-h-60 overflow-y-auto custom-scrollbar p-2">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center justify-between px-4 py-4 rounded-xl cursor-pointer transition-all duration-300 group ${value === option.value
                                            ? 'bg-[#FF6A00]/10 text-[#FF6A00]'
                                            : 'text-white/60 hover:bg-white/[0.03] hover:text-white'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{option.label}</span>
                                    {value === option.value && (
                                        <Check size={16} className="text-[#FF6A00] animate-in fade-in zoom-in duration-300" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
