'use client';

import React from 'react';
import { Zap, Cpu, Settings, Share2, Globe, Layers, Database, ArrowRight, Activity, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function BusinessAutomationPage() {
    return (
        <ImmersivePortal
            title="Efficient Business Automation"
            badge="Business Automation"
            description="Optimizing operations through intelligent workflow design and seamless system integration for maximum business impact."
            icon={Zap}
            features={[
                {
                    icon: Settings,
                    title: "Workflow Design",
                    description: "Custom mapping and design of business processes to eliminate manual bottlenecks and improve speed."
                },
                {
                    icon: Cpu,
                    title: "System Integration",
                    description: "Connecting your independent software tools into a single, cohesive operating system for your business."
                },
                {
                    icon: Activity,
                    title: "Performance Monitoring",
                    description: "Live oversight of automated processes to ensure data accuracy and continuous operational results."
                }
            ]}
            overview="Operational inefficiency can slow down business growth. We help you automate manual processes by connecting your software tools into a single, cohesive system that runs smoothly while you focus on high-level strategy."
            deliverables={[
                "Custom CRM & ERP Integrations",
                "Automated Reporting Systems",
                "Operational Workflow Blueprints",
                "Internal Tool Platforms",
                "Efficiency Audit & Performance Analysis"
            ]}
            approach={[
                {
                    title: "Process Audit",
                    description: "We work with your teams and audit your tools to identify exactly where manual tasks are slowing down your business operations."
                },
                {
                    title: "Strategic Workflow Design",
                    description: "Our specialists design automated paths for data and tasks, ensuring information flows smoothly between your CRM, ERP, and communication tools."
                },
                {
                    title: "System Launch",
                    description: "We build secure, reliable connections between your systems using custom APIs and modern integration platforms to ensure data accuracy at all times."
                },
                {
                    title: "Performance Oversight",
                    description: "After the launch, we set up active monitoring to ensure your automations are working correctly and providing measurable results."
                }
            ]}
            integration={{
                title: "Operational Connectivity.",
                description: "Your tools shouldn't act as isolated silos. We build the bridges that allow data to flow instantly between your financial, sales, and communication platforms.",
                points: [
                    { title: "CRM/ERP Sync", icon: Share2, desc: "Bidirectional data synchronization to ensure your team always has the latest info." },
                    { title: "Cloud Bridging", icon: Cloud, desc: "Securely connecting on-premise hardware with modern cloud-based solutions." },
                    { title: "System Layers", icon: Layers, desc: "Multi-layered automation logic that handles complex multi-step processes." },
                    { title: "Database Link", icon: Database, desc: "Centralized data processing to remove manual entry and human error." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <div className="grid grid-cols-3 gap-4 relative z-20">
                            {[...Array(9)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        backgroundColor: i === 4 ? "#FF6A00" : "rgba(255,255,255,0.05)",
                                        borderColor: i === 4 ? "#FF6A00" : "rgba(255,255,255,0.1)"
                                    }}
                                    className="w-12 h-12 rounded-xl border flex items-center justify-center"
                                >
                                    {i === 4 && <Zap className="w-6 h-6 text-black" />}
                                </motion.div>
                            ))}
                        </div>
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M 100 100 L 300 300"
                                stroke="#FF6A00"
                                strokeWidth="1"
                                fill="none"
                                strokeDasharray="5,5"
                                animate={{ strokeDashoffset: [0, -20] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>
                )
            }}
            techStack={[
                { name: "Python", use: "Standard Logic" },
                { name: "Node.js", use: "Workflow Backend" },
                { name: "Zapier", use: "Rapid Integration" },
                { name: "Make.com", use: "Complex Flow" },
                { name: "Salesforce", use: "Enterprise CRM" },
                { name: "HubSpot", use: "Marketing Ops" },
                { name: "Airtable", use: "Data Management" },
                { name: "Docker", use: "Containerized Ops" },
                { name: "AWS Lambda", use: "Serverless Scripts" },
                { name: "PostgreSQL", use: "Secure Storage" },
                { name: "Tableau", use: "Business Insight" },
                { name: "Slack API", use: "Team Notification" }
            ]}
        />
    );
}
