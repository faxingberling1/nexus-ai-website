'use client';

import React from 'react';
import { Globe, Cpu, Layout, Share2, Layers, Database, Shield, Zap, Code2, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function WebDevelopmentPage() {
    return (
        <ImmersivePortal
            title="Web & Platform"
            badge="Digital Engineering"
            pricingId="web"
            description="Engineering enterprise-grade digital infrastructure designed for speed, security, and reliable scalability."
            icon={Globe}
            features={[
                {
                    icon: Code2,
                    title: "Platform Engineering",
                    description: "Building using modern frameworks and cloud-native patterns to ensure your platform is stable and responsive."
                },
                {
                    icon: Layout,
                    title: "User Experience Design",
                    description: "Creating cohesive design systems and interactive interfaces that make complex processes intuitive for every user."
                },
                {
                    icon: Cloud,
                    title: "Cloud Infrastructure",
                    description: "Modern deployment workflows that ensure your platform is always available and easily updated."
                }
            ]}
            overview="We build digital platforms that serve as the technical foundation for modern businesses. From complex software architectures to high-performance web systems, our work is defined by high quality standards and a focus on user experience."
            deliverables={[
                "Full-Stack Software Platforms",
                "Scalable Business Dashboards",
                "High-Performance API Systems",
                "Custom Design Systems",
                "Cloud Infrastructure Planning"
            ]}
            approach={[
                {
                    title: "Analysis Phase",
                    description: "We analyze your technical requirements and user workflows to design a system that supports your current needs while allowing for growth."
                },
                {
                    title: "Platform Build",
                    description: "Our developers build using modern, reliable frameworks and cloud-native patterns, ensuring your platform is secure and stable."
                },
                {
                    title: "Experience Design",
                    description: "We create cohesive design systems and interactive interfaces that make complex data and processes intuitive for every user."
                },
                {
                    title: "Secure Launch",
                    description: "Modern deployment workflows and continuous integration ensure your platform is always available and easily updated with minimal downtime."
                }
            ]}
            integration={{
                title: "Platform Connectivity.",
                description: "Your digital presence shouldn't be fragmented. We build integrated ecosystems where your website, backend systems, and internal tools communicate perfectly.",
                points: [
                    { title: "API Systems", icon: Share2, desc: "Building secure, reliable connections between your platform and external business tools." },
                    { title: "System Layers", icon: Layers, desc: "Multi-tiered architecture that handles complex data processing without performance loss." },
                    { title: "Global Hosting", icon: Globe, desc: "Deploying on worldwide edge networks for maximum speed and reliable uptime." },
                    { title: "Database Architecture", icon: Database, desc: "Scalable data storage solutions designed for high-concurrency enterprise use." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 rounded-full border border-white/10 relative z-20"
                        >
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="absolute inset-0 border border-white/10 rounded-full" style={{ rotate: `${i * 45}deg` }} />
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe className="w-16 h-16 text-[#FF6A00]" />
                            </div>
                        </motion.div>
                    </div>
                )
            }}
            techStack={[
                { name: "Next.js", use: "Standard Frontend" },
                { name: "React", use: "Interactive UI" },
                { name: "Node.js", use: "Standard Backend" },
                { name: "PostgreSQL", use: "Secure Storage" },
                { name: "AWS", use: "Cloud Services" },
                { name: "Azure", use: "Enterprise Ops" },
                { name: "TypeScript", use: "Reliable Logic" },
                { name: "Tailwind CSS", use: "Design System" },
                { name: "Prisma", use: "Database Link" },
                { name: "Docker", use: "System Environment" },
                { name: "Vercel", use: "Performance Edge" },
                { name: "GitHub", use: "Version Control" }
            ]}
        />
    );
}
