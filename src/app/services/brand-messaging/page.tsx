'use client';

import React from 'react';
import { PenTool, Target, MessageSquare, Share2, Globe, Layers, Database, Palette, Type, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function BrandMessagingPage() {
    return (
        <ImmersivePortal
            title="Brand Communication Systems"
            badge="Brand & Messaging"
            description="Strategic brand communication systems designed to align your brand value with effective, resonant messaging."
            icon={PenTool}
            features={[
                {
                    icon: Search,
                    title: "Value Discovery",
                    description: "Deep audit of your brand's core values and competitive advantages to define a unique market position."
                },
                {
                    icon: MessageSquare,
                    title: "Voice Engineering",
                    description: "Developing a consistent, authoritative brand voice that speaks directly to your ideal client base."
                },
                {
                    icon: Target,
                    title: "Content Systems",
                    description: "Creating structured libraries of brand assets and messages for consistent use across all platforms."
                }
            ]}
            overview="In a crowded market, clarity is your greatest competitive advantage. We help you define your brand voice and build a cohesive communication system that resonates with your target audience and drives them toward action."
            deliverables={[
                "Brand Identity Guidelines",
                "Core Messaging Library",
                "Sales Communication Assets",
                "Unified Brand Story Documentation",
                "Market Positioning Report"
            ]}
            approach={[
                {
                    title: "Strategy Phase",
                    description: "We work with you to define your core values and unique advantages to create a clear and compelling brand story."
                },
                {
                    title: "Design Systems",
                    description: "We create a library of core messages and brand assets that can be used consistently across every channel, from your website to sales presentations."
                },
                {
                    title: "Content Launch",
                    description: "Our writers develop clear and persuasive content designed specifically for your target audience, focusing on the value and impact of your services."
                },
                {
                    title: "Standard Guidelines",
                    description: "We provide detailed brand voice guidelines to ensure that all future communication from your team remains consistent and professional."
                }
            ]}
            integration={{
                title: "Asset Distribution.",
                description: "Your brand story shouldn't be fragmented. We build distribution systems that ensure your messaging is synced across your web presence, sales materials, and internal tools.",
                points: [
                    { title: "Platform Sync", icon: Share2, desc: "Automatic distribution of brand assets to your CMS and marketing tools." },
                    { title: "Global Reach", icon: Globe, desc: "Localized messaging strategies for consistent worldwide impact." },
                    { title: "System Layers", icon: Layers, desc: "Integrating brand guidelines directly into your team's workflow tools." },
                    { title: "Data Storage", icon: Database, desc: "Secure, centralized storage for all high-fidelity brand assets." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="w-48 h-48 rounded-[2rem] bg-white/[0.02] border border-[#FF6A00] flex items-center justify-center relative z-20"
                        >
                            <PenTool className="w-16 h-16 text-[#FF6A00]" />
                            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#FF6A00] animate-pulse" />
                        </motion.div>
                        {[...Array(8)].map((_, i) => (
                            <motion.div key={i} style={{ rotate: i * 45 }} className="absolute inset-0 flex items-center justify-end">
                                <motion.div
                                    animate={{ width: ["0px", "120px"], opacity: [0, 1, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                                    className="h-[1px] bg-gradient-to-r from-[#FF6A00] to-transparent"
                                />
                            </motion.div>
                        ))}
                    </div>
                )
            }}
            techStack={[
                { name: "Figma", use: "Visual Design" },
                { name: "Adobe Creative Cloud", use: "Asset Creation" },
                { name: "Contentful", use: "Standard CMS" },
                { name: "Framer", use: "Motion Design" },
                { name: "HubSpot", use: "Communication" },
                { name: "Notion", use: "Knowledge Base" },
                { name: "Storyblok", use: "Content Ops" },
                { name: "Typeform", use: "Data Gathering" },
                { name: "Grammarly", use: "Voice Standards" },
                { name: "Slack", use: "Team Sync" },
                { name: "Google Analytics", use: "Reach Audit" },
                { name: "Brandwatch", use: "Market Insight" }
            ]}
        />
    );
}
