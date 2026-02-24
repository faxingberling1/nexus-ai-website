'use client';

import React from 'react';
import { PenTool } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function BrandMessagingPage() {
    return (
        <ServiceRealm
            title="Brand Messaging"
            description="Strategic brand communication systems designed to align your brand value with effective messaging."
            icon={PenTool}
            overview="In a crowded market, clarity is your greatest competitive advantage. We help you define your brand voice and build a cohesive communication system that resonates with your target audience and drives them toward action."
            approach={[
                {
                    title: "Brand Strategy",
                    description: "We work with you to define your core values and unique advantages to create a clear and compelling brand story."
                },
                {
                    title: "Messaging Systems",
                    description: "We create a library of core messages and brand assets that can be used consistently across every channel, from your website to sales presentations."
                },
                {
                    title: "Effective Messaging",
                    description: "Our writers develop clear and persuasive content designed specifically for your target audience, focusing on the value and impact of your services."
                },
                {
                    title: "Brand Voice Guidelines",
                    description: "We provide detailed brand voice guidelines to ensure that all future communication from your team remains consistent and professional."
                }
            ]}
            deliverables={[
                "Brand Identity Guidelines",
                "Core Messaging Library",
                "Sales Communication Assets",
                "Unified Brand Story Documentation",
                "Market Positioning Report"
            ]}
        />
    );
}
