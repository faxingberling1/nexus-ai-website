'use client';

import React from 'react';
import { Layers, Layout, Smartphone, Box, Share2, Globe, Database, Shield, Zap, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function ProductDevelopmentPage() {
    return (
        <ImmersivePortal
            title="Product Engineering"
            badge="Software Development"
            pricingId="product"
            description="Developing specialized digital products from initial concept to successful market launch with a focus on high-fidelity performance."
            icon={Layers}
            features={[
                {
                    icon: MousePointer2,
                    title: "Prototyping",
                    description: "Using detailed designs and functional prototypes to test workflows and gather user feedback early in the process."
                },
                {
                    icon: Layout,
                    title: "Interface Systems",
                    description: "Building cohesive design systems and interactive interfaces that make complex processes intuitive for every user."
                },
                {
                    icon: Smartphone,
                    title: "Cross-Platform Build",
                    description: "Engineering scalable software and mobile applications that maintain high performance across all modern devices."
                }
            ]}
            overview="Great products are more than just features; they are cohesive experiences that solve real customer needs. We help you move from concept to market with efficiency, building scalable software and mobile applications that users love and drive revenue."
            deliverables={[
                "Professional Product Prototypes",
                "Full-Cycle Software Development",
                "Mobile & Web Applications",
                "Scalable Product Architecture",
                "User Journey & UX Strategy"
            ]}
            approach={[
                {
                    title: "Strategy Phase",
                    description: "We work with you to refine your vision into a practical product plan, ensuring we build what your customers actually need."
                },
                {
                    title: "Functional Prototyping",
                    description: "We test workflows and gather user feedback early, reducing risk and improving the final product through iterative design."
                },
                {
                    title: "Core Engineering",
                    description: "Our engineers build the full-scale product using modern, reliable technologies and scalable systems, focusing on performance and quality."
                },
                {
                    title: "Market Launch",
                    description: "After the launch, we analyze user behavior and performance metrics to guide the next phases of feature development and market growth."
                }
            ]}
            integration={{
                title: "Technical Flexibility.",
                description: "Your product needs to adapt to a changing market. we building modular architectures that allow for seamless feature expansion and third-party integrations.",
                points: [
                    { title: "API Connectivity", icon: Share2, desc: "Building secure, reliable connections between your product and external software tools." },
                    { title: "Cloud Backbone", icon: Globe, desc: "Deploying on scalable cloud infrastructure for worldwide performance and stability." },
                    { title: "Security Layers", icon: Shield, desc: "Implementing industry-standard security protocols to protect user data and privacy." },
                    { title: "Asset Pipeline", icon: Database, desc: "Efficient data management systems that handle high-volume user activity with ease." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent blur-3xl opacity-30" />
                        <div className="relative z-20 flex flex-col gap-2">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-40 h-8 rounded-lg bg-white/5 border border-white/10"
                                />
                            ))}
                        </div>
                    </div>
                )
            }}
            techStack={[
                { name: "Next.js", use: "Standard Web" },
                { name: "React Native", use: "Mobile Systems" },
                { name: "Firebase", use: "Real-time Support" },
                { name: "Supabase", use: "Secure Backend" },
                { name: "Vercel", use: "Deployment Ops" },
                { name: "TypeScript", use: "Reliable Logic" },
                { name: "Prisma", use: "Database ORM" },
                { name: "PostgreSQL", use: "Main Data" },
                { name: "Tailwind CSS", use: "Visual System" },
                { name: "Radix UI", use: "Standard Components" },
                { name: "GitHub Actions", use: "CI/CD Pipeline" },
                { name: "Sentry", use: "Error Oversight" }
            ]}
        />
    );
}
