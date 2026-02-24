'use client';

import React from 'react';
import { LineChart } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function GrowthPerformancePage() {
    return (
        <ServiceRealm
            title="Growth & Performance"
            description="Data-driven marketing systems built to increase your customer acquisition and business growth."
            icon={LineChart}
            overview="Growth is a science of measurement and optimization. We combine technical SEO, performance marketing, and user behavior analysis to create systems that don't just find customers, but convert them into loyal clients at scale."
            approach={[
                {
                    title: "Market Analysis",
                    description: "Detailed research into competitor landscapes and user search intent forms the foundation of our strategic growth roadmap."
                },
                {
                    title: "System Implementation",
                    description: "We build your organic and paid search infrastructure, setting up advanced tracking and attribution to ensure every marketing dollar is effective."
                },
                {
                    title: "Conversion Optimization",
                    description: "Ongoing A/B testing and user behavior analysis allow us to refine your landing pages and funnels for maximum performance."
                },
                {
                    title: "Scale Optimization",
                    description: "Once the system is optimized, we expand performance across channels, maintaining costs while steadily increasing your market presence."
                }
            ]}
            deliverables={[
                "Advanced SEO Infrastructure",
                "Paid Media Management",
                "Conversion Rate Optimization (CRO)",
                "Full-Funnel Analytics Setup",
                "Business Growth Strategy"
            ]}
        />
    );
}
