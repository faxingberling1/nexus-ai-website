'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Database, Mail, Briefcase, ChevronRight, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { kbData, KBArticle } from '@/data/kbData';

type Message = {
    role: 'bot' | 'user';
    content: string;
    link?: { label: string, href: string };
    isLeadForm?: boolean;
};

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: "Protocol initialized. I am NEON-AI. How can I assist with your enterprise engineering needs today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [statusMessage, setStatusMessage] = useState('Systems Nominal');

    // Lead Capture State
    const [step, setStep] = useState<'chat' | 'lead-name' | 'lead-email' | 'lead-project' | 'lead-done'>('chat');
    const [leadData, setLeadData] = useState({ name: '', email: '', project: '' });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const findKBAnswer = (query: string): KBArticle | null => {
        const q = query.toLowerCase();
        for (const cat of kbData) {
            for (const art of cat.articles) {
                if (art.question.toLowerCase().includes(q) ||
                    art.tags.some(t => t.toLowerCase().includes(q)) ||
                    art.exampleQueries.some(eq => eq.toLowerCase().includes(q))) {
                    return art;
                }
            }
        }
        return null;
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        if (step === 'chat') {
            const userMsg = inputValue;
            setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
            setInputValue('');
            setIsTyping(true);
            setStatusMessage('Searching Knowledge Base...');

            setTimeout(() => {
                const match = findKBAnswer(userMsg);
                let response = "";
                let link = undefined;

                if (match) {
                    response = match.answer;
                    link = match.link;
                } else {
                    response = "Analyzing request... Our technical blueprints for that specific query are being indexed. Would you like to initialize an engineering briefing with our team?";
                }

                setMessages(prev => [...prev, { role: 'bot', content: response, link }]);
                setIsTyping(false);
                setStatusMessage('Systems Nominal');

                // Trigger lead capture if it's a "Consultation" or "Price" related query
                if (userMsg.toLowerCase().includes('consult') || userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('cost') || userMsg.toLowerCase().includes('start')) {
                    setTimeout(() => {
                        setMessages(prev => [...prev, { role: 'bot', content: "To provide a tailored technical blueprint, I'll need to capture your project parameters. What is your full name?" }]);
                        setStep('lead-name');
                    }, 1000);
                }
            }, 1500);
        } else if (step === 'lead-name') {
            setLeadData({ ...leadData, name: inputValue });
            setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
            setInputValue('');
            setMessages(prev => [...prev, { role: 'bot', content: `Acknowledged, ${inputValue}. Please provide your enterprise email for secure transmission.` }]);
            setStep('lead-email');
        } else if (step === 'lead-email') {
            setLeadData({ ...leadData, email: inputValue });
            setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
            setInputValue('');
            setMessages(prev => [...prev, { role: 'bot', content: "And finally, briefly describe your primary technical objective or project sector." }]);
            setStep('lead-project');
        } else if (step === 'lead-project') {
            setLeadData({ ...leadData, project: inputValue });
            setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
            setInputValue('');
            setIsTyping(true);
            setStatusMessage('Transmitting Lead Data...');

            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'bot', content: "Transmission complete. An engineering lead will review your parameters and reach out within 2-4 business hours. Protocol finalized." }]);
                setIsTyping(false);
                setStatusMessage('Systems Nominal');
                setStep('lead-done');
            }, 2000);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Chat Bubble */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden group ${isOpen ? 'bg-[#121212] border border-white/[0.06]' : 'bg-[#FF6A00]'
                    }`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-white" size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-20 right-0 w-[400px] h-[650px] bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/[0.04] bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] border border-[#FF6A00]/30 shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium font-outfit">NEON-AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isTyping ? 'bg-orange-500 animate-pulse' : 'bg-[#10b981]'}`} />
                                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-inter">{statusMessage}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/20">
                                <Database size={14} />
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-5 rounded-2xl text-[13px] leading-relaxed shadow-xl ${m.role === 'user'
                                        ? 'bg-[#FF6A00] text-white rounded-tr-none'
                                        : 'bg-white/[0.04] text-white/80 border border-white/[0.06] rounded-tl-none backdrop-blur-md'
                                        }`}>
                                        {m.content.split('\n').map((line, j) => (
                                            <p key={j} className={j > 0 ? 'mt-3 pt-3 border-t border-white/[0.05]' : ''}>{line}</p>
                                        ))}

                                        {m.role === 'bot' && m.link && (
                                            <a
                                                href={m.link.href}
                                                className="mt-4 flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group/link"
                                            >
                                                <span className="text-[11px] font-bold text-white uppercase tracking-wider">{m.link.label}</span>
                                                <ArrowUpRight size={14} className="text-[#FF6A00] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#FF6A00]/40 animate-bounce" />
                                    <div className="w-2 h-2 rounded-full bg-[#FF6A00]/40 animate-bounce delay-100" />
                                    <div className="w-2 h-2 rounded-full bg-[#FF6A00]/40 animate-bounce delay-200" />
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-6 bg-white/[0.01] border-t border-white/[0.04]">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={step === 'chat' ? "Type your transmission..." : `Enter your ${step.split('-')[1]}...`}
                                    className="w-full bg-[#0A0A0A] border border-white/[0.06] rounded-2xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#FF6A00]/30 transition-all font-inter pr-16 shadow-inner"
                                    disabled={step === 'lead-done'}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={step === 'lead-done'}
                                    className="absolute right-3 w-12 h-12 rounded-xl bg-[#FF6A00] flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] transition-all active:scale-95 disabled:opacity-50"
                                >
                                    <Send size={18} />
                                </button>
                            </div>

                            {/* Visual Hint */}
                            <div className="mt-4 flex items-center justify-center gap-6">
                                <div className="flex items-center gap-2 opacity-20">
                                    <Shield size={10} className="text-white" />
                                    <span className="text-[8px] uppercase tracking-wider text-white">E2E Encrypted</span>
                                </div>
                                <div className="flex items-center gap-2 opacity-20">
                                    <DATABASE size={10} className="text-white" />
                                    <span className="text-[8px] uppercase tracking-wider text-white">Neuro-Indexing</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const DATABASE = Database; // Alias for lucide consistency
