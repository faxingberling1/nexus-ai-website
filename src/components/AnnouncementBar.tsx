import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function AnnouncementBar({ isVisible, onClose }: AnnouncementBarProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 40, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-0 left-0 right-0 z-[60] overflow-hidden flex items-center bg-gradient-to-r from-[#121212] via-[#FF6A00]/10 to-[#121212] border-b border-white/[0.04] backdrop-blur-md group"
                >
                    <div className="flex-1 overflow-hidden whitespace-nowrap h-full flex items-center relative">
                        <div className="animate-marquee hover:[animation-play-state:paused] text-xs md:text-sm font-medium text-white/60 tracking-wide font-inter pointer-events-auto cursor-default">
                            🎉 Exciting News from NeonByte AI! For a limited time, we’re offering an exclusive <span className="text-white font-semibold">15% discount</span> on all new orders AND our premium exclusive packages. Don’t miss this chance to accelerate your business with cutting-edge AI solutions – claim your offer today and experience smarter automation, faster insights, and measurable growth! 🚀
                            <span className="mx-16 opacity-30">•</span>
                            🎉 Exciting News from NeonByte AI! For a limited time, we’re offering an exclusive <span className="text-white font-semibold">15% discount</span> on all new orders AND our premium exclusive packages. Don’t miss this chance to accelerate your business with cutting-edge AI solutions – claim your offer today and experience smarter automation, faster insights, and measurable growth! 🚀
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute right-4 p-1.5 rounded-full hover:bg-white/[0.05] transition-colors text-white/40 hover:text-white"
                        aria-label="Close announcement"
                    >
                        <X size={14} />
                    </button>

                    {/* Subtle aesthetic light bleed */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent shadow-[0_0_15px_rgba(255,106,0,0.5)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
