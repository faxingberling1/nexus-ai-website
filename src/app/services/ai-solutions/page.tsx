'use client';

import React from 'react';
import { Brain } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function AISolutionsPage() {
    return (
        <ServiceRealm
            title="AI Solutions"
            description="Providing your business with advanced AI systems and custom-built automation solutions."
            icon={Brain}
            overview="Our AI practice focuses on practical business applications. We don't just build models; we create complete systems that integrate seamlessly into your business processes, providing immediate improvements and long-term strategic growth."
            approach={[
                {
                    title: "Opportunity Audit",
                    description: "We begin by analyzing your current workflows and data structures to identify the best opportunities for AI integration, ensuring our solutions solve real-world business challenges."
                },
                {
                    title: "Custom AI Architecture",
                    description: "Our engineers design custom AI systems and integrations tailored specifically to your data privacy requirements and performance needs."
                },
                {
                    title: "Seamless Integration",
                    description: "We implement AI agents and automated workflows into your current tech stack, connecting different systems through intelligent bridges and real-time data processing."
                },
                {
                    title: "Continuous Optimization",
                    description: "Ongoing refinement and fine-tuning ensure your AI systems evolve with your business, maintaining high performance and accuracy as your industry changes."
                }
            ]}
            deliverables={[
                "Custom AI Implementations",
                "Data Analysis Dashboards",
                "Automated Business Workflows",
                "Intelligent Decision Systems",
                "AI Strategy & Implementation Roadmap"
            ]}
        />
    );
}
