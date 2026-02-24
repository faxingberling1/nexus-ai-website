'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function WebDevelopmentPage() {
    return (
        <ServiceRealm
            title="Web & Platform"
            description="Engineering enterprise-grade digital infrastructure designed for speed, security, and scalability."
            icon={Globe}
            overview="We build digital platforms that serve as the technical foundation for modern businesses. From complex software architectures to high-performance web systems, our work is defined by high quality standards and a focus on user experience."
            approach={[
                {
                    title: "Technical Discovery",
                    description: "We analyze your technical requirements and user workflows to design a system that supports your current needs while allowing for future growth."
                },
                {
                    title: "Platform Development",
                    description: "Our developers build using modern, reliable frameworks and cloud-native patterns, ensuring your platform is secure, stable, and highly responsive."
                },
                {
                    title: "User Experience Design",
                    description: "We create cohesive design systems and interactive interfaces that make complex data and processes intuitive for every user."
                },
                {
                    title: "Secure Deployment",
                    description: "Modern deployment workflows and continuous integration ensure your platform is always available and easily updated with minimal downtime."
                }
            ]}
            deliverables={[
                "Full-Stack Software Platforms",
                "Scalable Business Dashboards",
                "High-Performance API Systems",
                "Custom Design Systems",
                "Cloud Infrastructure Planning"
            ]}
        />
    );
}
