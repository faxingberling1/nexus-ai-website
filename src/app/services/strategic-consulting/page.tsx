'use client';

import React from 'react';
import { ClipboardList, Shield, Zap, Search, Target, Users, Share2, Globe, Layers, Database, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function StrategicConsultingPage() {
    return (
        <ImmersivePortal
            title="Strategic Consulting"
            badge="Technical Advisory"
            pricingId="consulting"
            description="High-level technical advisory and planning to protect your projects and accelerate long-term growth."
            icon={ClipboardList}
            features={[
                {
                    icon: Search,
                    title: "Strategic Audit",
                    description: "A detailed analysis of your current technology, team, and processes to identify risks and opportunities."
                },
                {
                    icon: Target,
                    title: "Growth Blueprint",
                    description: "A long-term technical blueprint that aligns with your business goals, ensuring you have the infrastructure to support expansion."
                },
                {
                    icon: Users,
                    title: "Technical Counsel",
                    description: "Acting as your trusted technical partner, we provide ongoing advice on important technical decisions and vendor selection."
                }
            ]}
            overview="Strategic planning is essential for business success. We provide the high-level technical advisory and planning needed to ensure your digital projects are aligned with your long-term business objectives."
            deliverables={[
                "Long-Term Technical Blueprints",
                "Full-Stack Security & Tech Audits",
                "Custom AI Adoption Strategies",
                "Executive Technical Advisory",
                "Digital Transformation Planning"
            ]}
            approach={[
                {
                    title: "Analysis Phase",
                    description: "We perform a detailed analysis of your current technology, team, and processes to identify risks and immediate opportunities for improvement."
                },
                {
                    title: "Scaling Plan",
                    description: "We build a long-term technical blueprint that aligns with your business goals, ensuring you have the infrastructure to support your expansion."
                },
                {
                    title: "AI Strategy",
                    description: "We evaluate your data and operations to create a custom AI adoption plan, focusing on practical implementation and business value."
                },
                {
                    title: "Standard Advisory",
                    description: "Through ongoing counsel, we help you make important technical decisions and select the right vendors, acting as your trusted technical partner."
                }
            ]}
            integration={{
                title: "Advisory Alignment.",
                description: "Strategy doesn't happen in a void. We ensure your technical roadmap is synced with your financial, operational, and marketing objectives.",
                points: [
                    { title: "Team Sync", icon: Users, desc: "Working directly with your leadership team to ensure technical alignment." },
                    { title: "Platform Choice", icon: Share2, desc: "Neutral advisory on the best software tools and platforms for your specific needs." },
                    { title: "Security Layers", icon: Layers, desc: "De-risking your digital projects through early identification of security gaps." },
                    { title: "Roadmap Link", icon: Database, desc: "Centralized planning and documentation to keep all stakeholders aligned." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <div className="grid grid-cols-2 gap-4 relative z-20">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center"
                                >
                                    <Bookmark className="w-8 h-8 text-[#FF6A00]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )
            }}
            techStack={[
                { name: "Notion", use: "Strategy Doc" },
                { name: "Slack", use: "Team Sync" },
                { name: "Jira", use: "Process Tracking" },
                { name: "Lucidchart", use: "System Blueprint" },
                { name: "Confluence", use: "Knowledge Base" },
                { name: "Miro", use: "Strategic Mapping" },
                { name: "GitHub", use: "Audit Overview" },
                { name: "Trello", use: "Workflow Board" },
                { name: "Google Workspace", use: "Communication" },
                { name: "Zoom", use: "Standard Advisory" },
                { name: "Toggl", use: "Efficiency Audit" },
                { name: "Zapier", use: "Rapid Prototype" }
            ]}
        />
    );
}
