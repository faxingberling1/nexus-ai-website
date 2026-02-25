'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';

interface CaptchaWidgetProps {
    onVerified: (verified: boolean) => void;
}

function generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export default function CaptchaWidget({ onVerified }: CaptchaWidgetProps) {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const refresh = useCallback(() => {
        setCode(generateCode());
        setInput('');
        setStatus('idle');
        onVerified(false);
    }, [onVerified]);

    useEffect(() => {
        refresh();
    }, []);

    const handleInput = (val: string) => {
        const upper = val.toUpperCase().slice(0, 6);
        setInput(upper);

        if (upper.length === 6) {
            if (upper === code) {
                setStatus('success');
                onVerified(true);
            } else {
                setStatus('error');
                onVerified(false);
                // Auto-refresh after short delay on wrong answer
                setTimeout(refresh, 1000);
            }
        } else {
            setStatus('idle');
            onVerified(false);
        }
    };

    // Generate distorted code display with character-level styling
    const codeChars = code.split('');

    return (
        <div className="space-y-3">
            <label className="text-xs font-semibold tracking-widest text-[#FF6A00]/60 uppercase font-inter ml-1">
                Security Verification
            </label>

            <div className="flex items-center gap-3">
                {/* Code Display */}
                <div className="flex-1 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl px-5 py-4 flex items-center justify-center gap-2 relative overflow-hidden select-none">
                    {/* Subtle noise overlay */}
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                                0deg, transparent, transparent 2px,
                                rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px
                            )`
                        }}
                    />
                    {/* Diagonal scan line */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.03] to-transparent pointer-events-none" />

                    {codeChars.map((char, i) => {
                        const rotations = [-4, 3, -2, 5, -3, 4];
                        const offsets = [0, 2, -1, 3, -2, 1];
                        return (
                            <span
                                key={i}
                                className="font-mono text-2xl font-bold tracking-wider"
                                style={{
                                    transform: `rotate(${rotations[i] || 0}deg) translateY(${offsets[i] || 0}px)`,
                                    color: i % 2 === 0 ? '#FF6A00' : 'rgba(255,255,255,0.8)',
                                    textShadow: '0 0 8px rgba(255,106,0,0.3)',
                                    letterSpacing: '0.05em',
                                    display: 'inline-block'
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                </div>

                {/* Refresh Button */}
                <button
                    type="button"
                    onClick={refresh}
                    className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[#FF6A00] hover:border-[#FF6A00]/30 transition-all duration-300 flex-shrink-0"
                    title="Get a new code"
                >
                    <RefreshCw size={16} />
                </button>
            </div>

            {/* Input */}
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => handleInput(e.target.value)}
                    placeholder="Type the code above"
                    maxLength={6}
                    className={`w-full bg-[#1A1A1A]/50 border rounded-2xl px-6 py-4 text-white focus:outline-none transition-all duration-500 font-mono text-[15px] tracking-[0.3em] shadow-inner uppercase ${status === 'success'
                            ? 'border-green-500/40 bg-green-500/5'
                            : status === 'error'
                                ? 'border-red-500/40 bg-red-500/5'
                                : 'border-white/[0.08] focus:border-[#FF6A00]/40 focus:bg-[#1A1A1A]/80'
                        }`}
                />
                {status === 'success' && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                        <ShieldCheck size={14} /> Verified
                    </div>
                )}
                {status === 'error' && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-xs font-semibold">
                        Retrying...
                    </div>
                )}
            </div>
        </div>
    );
}
