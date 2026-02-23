'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Satellite, Crosshair } from 'lucide-react';

export default function CommandMap() {
    return (
        <section className="py-40 relative z-10 bg-[#050505] overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/5 mb-6"
                    >
                        <Satellite size={12} className="text-[#FF6A00] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">Global Command Center</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-6">Global presence.</h2>
                    <p className="text-white/40 text-xl max-w-2xl font-light">Deploying intelligence across international borders. Our tactical operations are scaled for global impact.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[21/9] rounded-[3rem] border border-white/[0.04] bg-[#121212]/30 backdrop-blur-xl overflow-hidden group shadow-[0_0_100px_-20px_rgba(255,106,0,0.1)]"
                >
                    {/* Google Map Embed with Tactical Styling - Filters removed for natural dark theme */}
                    <div className="absolute inset-0 contrast-[1.2] brightness-[0.6] opacity-60 group-hover:opacity-80 transition-opacity duration-1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000000!2d-75.5277!3d38.9108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8971f654b423%3A0x868d839294e9f7!2sDelaware!5e0!3m2!1sen!2sae!4v1708640000000!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Scanning Line Animation */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <motion.div
                            animate={{ y: ['0%', '100%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent shadow-[0_0_20px_rgba(255,106,0,0.4)] opacity-30"
                        />
                    </div>

                    {/* HUD Overlay: Coordinates & Data */}
                    <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="bg-black/60 backdrop-blur-md border border-white/[0.1] p-4 rounded-2xl flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Target Intel</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                                    <span className="text-white font-mono text-xs">LAT: 38.9108 N</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    <span className="text-white/60 font-mono text-xs">LON: 75.5277 W</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-end">
                                <div className="bg-black/40 backdrop-blur-md border border-white/[0.08] px-4 py-2 rounded-full flex items-center gap-3">
                                    <div className="text-[10px] font-bold text-[#FF6A00] uppercase tracking-[0.2em]">Signal Active</div>
                                    <div className="flex gap-0.5">
                                        <div className="w-1 h-3 bg-[#FF6A00] rounded-full" />
                                        <div className="w-1 h-3 bg-[#FF6A00] rounded-full" />
                                        <div className="w-1 h-3 bg-[#FF6A00] rounded-full" />
                                        <div className="w-1 h-3 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-white/20">AERIAL_LINK_ESTABLISHED_SC-04</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl border border-[#FF6A00]/20 bg-[#FF6A00]/5 flex items-center justify-center text-[#FF6A00]">
                                    <Crosshair size={24} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Global Ops Status</div>
                                    <div className="text-white font-outfit text-sm">99.9% Uptime Priority</div>
                                </div>
                            </div>

                            <div className="text-[10px] font-mono text-white/10 max-w-[200px] text-right leading-tight">
                                ENCRYPTED_TUNNEL: 256-BIT_AES_VALIDATED<br />
                                NEON_NODE_STATUS: NOMINAL<br />
                                GEOSPATIAL_SYNC: TRUE
                            </div>
                        </div>
                    </div>

                    {/* Map Marker HUD Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-40 h-40 border border-[#FF6A00]/20 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-32 h-32 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="relative w-12 h-12 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,106,0,0.4)]">
                                <MapPin size={24} className="text-[#FF6A00]" />
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
