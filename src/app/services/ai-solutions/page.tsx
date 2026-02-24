'use client';

import React from 'react';
import { Brain, Network, Binary, Share2, Database, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function AISolutionsPage() {
    return (
        <ImmersivePortal
            title="Advanced AI Systems"
            badge="Intelligence Solutions"
            description="Providing your business with advanced intelligence systems and custom-built automation solutions that integrate seamlessly into your current infrastructure."
            icon={Brain}
            features={[
                {
                    icon: Brain,
                    title: "Predictive Analytics",
                    description: "Harness historical data to forecast trends, user behavior, and operational shifts with precision."
                },
                {
                    icon: Network,
                    title: "Process Automation",
                    description: "Intelligent workflows that handle multi-stage business processes and improve operational efficiency."
                },
                {
                    icon: Binary,
                    title: "Custom Model Integration",
                    description: "Specialized language models and data tools tailored to your unique business intelligence needs."
                }
            ]}
            overview="Our AI practice focuses on practical business applications. We don't just build models; we create complete systems that provide immediate improvements and long-term strategic growth."
            deliverables={[
                "Custom AI Implementations",
                "Data Analysis Dashboards",
                "Automated Business Workflows",
                "Intelligent Decision Systems",
                "AI Strategy & Implementation Roadmap"
            ]}
            approach={[
                {
                    title: "Opportunity Audit",
                    description: "We begin by analyzing your current workflows and data structures to identify the best opportunities for AI integration, ensuring our solutions solve real-world business challenges."
                },
                {
                    title: "Strategic Systems Design",
                    description: "Our engineers design custom AI systems and integrations tailored specifically to your data privacy requirements and performance needs."
                },
                {
                    title: "Seamless Integration",
                    description: "We implement AI agents and automated workflows into your tech stack, connecting different systems through intelligent bridges and real-time data processing."
                },
                {
                    title: "Ongoing Optimization",
                    description: "Ongoing refinement and fine-tuning ensure your AI systems evolve with your business, maintaining high performance and accuracy as your industry changes."
                }
            ]}
            integration={{
                title: "The Integration Bridge.",
                description: "Our solutions act as the connective tissue between your fragmented data streams. We build intelligent bridges that allow your CRM, ERP, and custom stacks to communicate autonomously.",
                points: [
                    { title: "CRM Integration", icon: Share2, desc: "Seamless bidirectional data synchronization with major CRM platforms." },
                    { title: "Enterprise Data Link", icon: Database, desc: "Real-time vectorization and indexing of unstructured business data." },
                    { title: "System Legacy Adapter", icon: Layers, desc: "Clean integration layers for connecting modern AI to established systems." },
                    { title: "Global Deployment", icon: Globe, desc: "Scalable models optimized for low-latency worldwide operations." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px #FF6A00", "0 0 40px #FF6A0033", "0 0 0px #FF6A00"] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-40 h-40 rounded-full bg-white/[0.02] border border-[#FF6A00] flex items-center justify-center relative z-20"
                        >
                            <Brain className="w-16 h-16 text-[#FF6A00]" />
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-20px] rounded-full border border-dashed border-[#FF6A00]/20" />
                        </motion.div>
                        {[...Array(6)].map((_, i) => (
                            <motion.div key={i} style={{ rotate: i * 60 }} className="absolute inset-0 flex items-center justify-end">
                                <div className="w-[180px] h-[1px] bg-gradient-to-r from-[#FF6A00]/50 to-transparent relative">
                                    <motion.div animate={{ right: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="absolute top-[-2px] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                                    <div className="absolute right-[-10px] top-[-10px] w-5 h-5 rounded bg-white/[0.03] border border-white/10 backdrop-blur-md" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
            }}
            techStack={[
                { name: "PyTorch", use: "Core Systems" },
                { name: "TensorFlow", use: "Deep Learning" },
                { name: "LangChain", use: "Workflow Framework" },
                { name: "Pinecone", use: "Vector Ops" },
                { name: "OpenAI", use: "Base Models" },
                { name: "Anthropic", use: "Standard Rails" },
                { name: "HuggingFace", use: "Open Source" },
                { name: "FastAPI", use: "Integration Bridge" },
                { name: "Docker", use: "Environment" },
                { name: "Kubernetes", use: "Scaling" },
                { name: "AWS Bedrock", use: "Cloud Services" },
                { name: "Azure AI", use: "Enterprise Tools" }
            ]}
        />
    );
}
