'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Protocol initialized. I am NEON-AI. How can I assist with your enterprise engineering needs today?" }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessages = [...messages, { role: 'user', content: inputValue }];
        setMessages(newMessages);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            setMessages([...newMessages, {
                role: 'bot',
                content: "Analyzing request... Our technical blueprints for that sector are currently being processed. Would you like to schedule a deep-dive with an engineer?"
            }]);
        }, 1000);
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
                        className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-[#121212]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/[0.04] bg-white/[0.02] flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] border border-[#FF6A00]/30">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium font-outfit">NEON-AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-inter">Systems Nominal</span>
                                </div>
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
                                    <div className={`max-w-[80%] p-5 rounded-2xl text-[14px] leading-relaxed ${m.role === 'user'
                                            ? 'bg-[#FF6A00] text-white rounded-tr-none'
                                            : 'bg-white/[0.03] text-white/70 border border-white/[0.05] rounded-tl-none'
                                        }`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white/[0.01] border-t border-white/[0.04]">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your transmission..."
                                    className="w-full bg-[#0A0A0A] border border-white/[0.06] rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#FF6A00]/30 transition-all font-inter pr-14"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-3 w-10 h-10 rounded-xl bg-[#FF6A00] flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
