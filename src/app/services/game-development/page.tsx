'use client';

import React from 'react';
import { Gamepad2, Layers, Users, Share2, Globe, Database, ArrowRight, Play, Layout, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function GameDevelopmentPage() {
    return (
        <ImmersivePortal
            title="Interactive Experiences"
            badge="Game Development"
            pricingId="game"
            description="Creating immersive interactive experiences and engagement systems that drive long-term user loyalty."
            icon={Gamepad2}
            features={[
                {
                    icon: Layout,
                    title: "Experience Design",
                    description: "Planning core engagement loops and interactive systems designed for high-resolution user retention."
                },
                {
                    icon: Box,
                    title: "Technical Logic",
                    description: "Building robust interactive engines optimized for performance across all modern devices."
                },
                {
                    icon: Play,
                    title: "Visual Systems",
                    description: "Implementing high-quality interactive visuals and soundscapes to create deep user immersion."
                }
            ]}
            overview="Interaction is key to user engagement. Whether it's a digital experience or a high-end business tool, we use interactive mechanics and behavioral design to create experiences that keep users engaged and returning."
            deliverables={[
                "Advanced Multiplayer Infrastructure",
                "Engagement-Focused Solutions",
                "Custom Interactive Experiences",
                "High-Performance System Logic",
                "Retention Analysis & Performance Strategies"
            ]}
            approach={[
                {
                    title: "Experience Concept",
                    description: "We start by defining the core engagement loops and interaction systems that will form the foundation of your interactive experience."
                },
                {
                    title: "Foundation Build",
                    description: "Using modern development engines and performance optimization techniques, we build a robust technical foundation for your digital experience."
                },
                {
                    title: "System Launch",
                    description: "We add depth through intelligent features, realistic interactions, and high-quality visuals that enhance the user experience."
                },
                {
                    title: "Retention Support",
                    description: "Advanced analytics and user behavioral data are integrated to ensure the experience remains effective and continues to drive long-term loyalty."
                }
            ]}
            integration={{
                title: "Social Connectivity.",
                description: "Experience shouldn't be isolated. We build systems that allow for seamless social connection, multiplayer interaction, and live data streaming.",
                points: [
                    { title: "User Network", icon: Users, desc: "Building scalable social systems for high-concurrency interactive experiences." },
                    { title: "Global Sync", icon: Globe, desc: "Synchronized data across regions for low-latency interactive performance." },
                    { title: "Standard APIs", icon: Share2, desc: "Connecting your interactive experience to external platforms and social tools." },
                    { title: "Analytics Link", icon: Database, desc: "Live tracking of user behavior to optimize engagement and retention." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <motion.div
                            animate={{
                                rotateY: [0, 360],
                                rotateX: [0, 15, -15, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 rounded-xl border border-[#FF6A00]/40 flex items-center justify-center relative preserve-3d"
                        >
                            <Gamepad2 className="w-16 h-16 text-[#FF6A00]" />
                            <div className="absolute inset-0 border border-[#FF6A00]/20 translate-z-10 rounded-xl" />
                        </motion.div>
                    </div>
                )
            }}
            techStack={[
                { name: "Unity", use: "Interactive Engine" },
                { name: "Unreal Engine", use: "High-Fidelity Rendering" },
                { name: "C#", use: "Logical Core" },
                { name: "Three.js", use: "Web Interactions" },
                { name: "WebGL", use: "Browser Graphics" },
                { name: "Photon Engine", use: "Social Network" },
                { name: "PlayFab", use: "Backend Support" },
                { name: "Blender", use: "Asset Creation" },
                { name: "Mixamo", use: "Motion Systems" },
                { name: "WebSockets", use: "Real-time Sync" },
                { name: "Vulkan", use: "Standard Performance" },
                { name: "React Three Fiber", use: "UI Integration" }
            ]}
        />
    );
}
