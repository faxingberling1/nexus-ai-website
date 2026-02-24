'use client';

import React from 'react';
import { LineChart, BarChart, Target, Share2, Globe, Layers, Database, ArrowRight, TrendingUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function GrowthPerformancePage() {
    return (
        <ImmersivePortal
            title="Growth & Performance"
            badge="Growth Strategy"
            description="Data-driven marketing systems built to increase your customer acquisition and business growth metrics."
            icon={LineChart}
            features={[
                {
                    icon: Search,
                    title: "Market Insight",
                    description: "Detailed research into competitor landscapes and user intent to form the foundation of our growth roadmap."
                },
                {
                    icon: Target,
                    title: "Conversion Systems",
                    description: "Ongoing optimization and user behavior analysis to refine your landing pages and funnels for maximum performance."
                },
                {
                    icon: TrendingUp,
                    title: "Scale Strategy",
                    description: "Expanding performance across channels while maintaining costs to steadily increase your market presence."
                }
            ]}
            overview="Growth is a science of measurement and optimization. We combine technical SEO, performance marketing, and user behavior analysis to create systems that don't just find customers, but convert them into loyal clients at scale."
            deliverables={[
                "Advanced SEO Infrastructure",
                "Paid Media Management",
                "Conversion Rate Optimization (CRO)",
                "Full-Funnel Analytics Setup",
                "Business Growth Strategy"
            ]}
            approach={[
                {
                    title: "Analysis Phase",
                    description: "Detailed research into competitor landscapes and user search intent forms the foundation of our strategic growth roadmap."
                },
                {
                    title: "System Implementation",
                    description: "We build your organic and paid search infrastructure, setting up advanced tracking and attribution to ensure every marketing dollar is effective."
                },
                {
                    title: "Performance Refinement",
                    description: "Ongoing A/B testing and user behavior analysis allow us to refine your landing pages and funnels for maximum performance."
                },
                {
                    title: "Strategic Scaling",
                    description: "Once the system is optimized, we expand performance across channels, maintaining costs while steadily increasing your market presence."
                }
            ]}
            integration={{
                title: "Data Connectivity.",
                description: "Growth systems require clean, synchronized data. We integrate your marketing tools with your sales CRM to ensure every conversion is tracked and attributed correctly.",
                points: [
                    { title: "Analytics Sync", icon: Share2, desc: "Seamless integration between tracking pixels and your internal data dashboards." },
                    { title: "Global Indexing", icon: Globe, desc: "Optimizing your digital footprint for search visibility across international markets." },
                    { title: "Funnel Layers", icon: Layers, desc: "Multi-stage tracking that follows the user journey from first touch to final conversion." },
                    { title: "Metric Database", icon: Database, desc: "Centralized storage for performance data to enable deep longitudinal analysis." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <div className="flex items-end gap-2 h-32 relative z-20">
                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="w-4 rounded-t-lg bg-white/10 border-t border-x border-[#FF6A00]/40 overflow-hidden relative"
                                >
                                    <motion.div
                                        animate={{ y: ["100%", "-100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        className="absolute inset-0 bg-[#FF6A00]/20"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )
            }}
            techStack={[
                { name: "Google Analytics 4", use: "Standard Tracking" },
                { name: "SEMrush", use: "Market Research" },
                { name: "Meta Ads Manager", use: "Paid Reach" },
                { name: "Google Search Console", use: "Search Visibility" },
                { name: "Vercel Analytics", use: "Web Performance" },
                { name: "Hotjar", use: "Behavior Analysis" },
                { name: "HubSpot", use: "Lead Attribution" },
                { name: "Segment", use: "Data Collection" },
                { name: "GTM", use: "Tag Management" },
                { name: "Ahrefs", use: "Backlink Analysis" },
                { name: "Mixpanel", use: "Product Growth" },
                { name: "Optimizely", use: "System Testing" }
            ]}
        />
    );
}
