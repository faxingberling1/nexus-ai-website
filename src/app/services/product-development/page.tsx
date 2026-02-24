'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function ProductDevelopmentPage() {
    return (
        <ServiceRealm
            title="Product Engineering"
            description="Developing specialized digital products from initial concept to successful market launch."
            icon={Layers}
            overview="Great products are more than just features; they are cohesive experiences that solve real customer needs. We help you move from concept to market with efficiency, building scalable software and mobile applications that users love and drive revenue."
            approach={[
                {
                    title: "Concept Validation",
                    description: "We work with you to refine your vision into a practical product plan, ensuring we build what your customers actually need before starting full-scale development."
                },
                {
                    title: "Prototyping",
                    description: "Using detailed designs and functional prototypes, we test workflows and gather user feedback early, reducing risk and improving the final product."
                },
                {
                    title: "Core Development",
                    description: "Our engineers build the full-scale product using modern, reliable technologies and scalable databases, focusing on performance, security, and quality code."
                },
                {
                    title: "Market Expansion",
                    description: "After launch, we analyze user behavior and performance metrics to guide the next phases of feature development and market growth."
                }
            ]}
            deliverables={[
                "Professional Product Prototypes",
                "Full-Cycle Software Development",
                "Mobile & Web Applications",
                "Scalable Product Architecture",
                "User Journey & UX Strategy"
            ]}
        />
    );
}
