'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function BusinessAutomationPage() {
    return (
        <ServiceRealm
            title="Business Automation"
            description="Optimizing operations through intelligent workflow design and seamless system integration."
            icon={Zap}
            overview="Operational inefficiency can slow down business growth. We help you automate manual processes by connecting your software tools into a single, cohesive system that runs smoothly while you focus on high-level strategy."
            approach={[
                {
                    title: "Process Mapping",
                    description: "We work with your teams and audit your tools to identify exactly where manual tasks are slowing down your business operations."
                },
                {
                    title: "Workflow Design",
                    description: "Our specialists design automated paths for data and tasks, ensuring information flows smoothly between your CRM, ERP, and communication tools."
                },
                {
                    title: "System Integration",
                    description: "We build secure, reliable connections between your systems using custom APIs and modern integration platforms to ensure data accuracy at all times."
                },
                {
                    title: "Performance Monitoring",
                    description: "After implementation, we set up active monitoring to ensure your automations are working correctly and providing measurable results."
                }
            ]}
            deliverables={[
                "Custom CRM & ERP Integrations",
                "Automated Reporting Systems",
                "Operational Workflow Blueprints",
                "Internal Tool Platforms",
                "Efficiency Audit & Performance Analysis"
            ]}
        />
    );
}
