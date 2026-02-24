'use client';

import React from 'react';
import { ClipboardList } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function StrategicConsultingPage() {
    return (
        <ServiceRealm
            title="Strategic Consulting"
            description="High-level technical advisory and planning to de-risk your projects and accelerate growth."
            icon={ClipboardList}
            overview="Strategic planning is essential for business success. We provide the high-level technical advisory and planning needed to ensure your digital projects are aligned with your long-term business objectives."
            approach={[
                {
                    title: "Technical Analysis",
                    description: "We perform a detailed analysis of your current technology, team, and processes to identify risks and immediate opportunities for improvement."
                },
                {
                    title: "Growth Planning",
                    description: "We build a long-term technical blueprint that aligns with your business goals, ensuring you have the infrastructure to support your expansion."
                },
                {
                    title: "AI Strategy",
                    description: "We evaluate your data and operations to create a custom AI adoption plan, focusing on practical implementation and business value."
                },
                {
                    title: "Professional Advisory",
                    description: "Through ongoing counsel, we help you make important technical decisions and select the right vendors, acting as your trusted technical partner."
                }
            ]}
            deliverables={[
                "Long-Term Technical Blueprints",
                "Full-Stack Security & Tech Audits",
                "Custom AI Adoption Strategies",
                "Executive Technical Advisory",
                "Digital Transformation Planning"
            ]}
        />
    );
}
