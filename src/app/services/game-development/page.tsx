'use client';

import React from 'react';
import { Gamepad2 } from 'lucide-react';
import ServiceRealm from '@/components/ServiceRealm';

export default function GameDevelopmentPage() {
    return (
        <ServiceRealm
            title="Game Development"
            description="Creating immersive interactive experiences and gamified systems that drive user engagement and loyalty."
            icon={Gamepad2}
            overview="Interaction is key to user engagement. Whether it's a digital experience or a gamified business tool, we use interactive mechanics and behavioral design to create experiences that keep users engaged and returning."
            approach={[
                {
                    title: "Interactive Design",
                    description: "We start by defining the core engagement loops and interaction systems that will form the foundation of your interactive experience."
                },
                {
                    title: "Technical Foundation",
                    description: "Using modern development engines and performance optimization techniques, we build a robust technical foundation for your digital experience."
                },
                {
                    title: "Immersive Systems",
                    description: "We add depth through intelligent features, realistic interactions, and high-quality audiovisual elements that enhance the user experience."
                },
                {
                    title: "Engagement Strategy",
                    description: "Advanced analytics and user behavioral data are integrated to ensure the experience remains effective and continues to drive long-term loyalty."
                }
            ]}
            deliverables={[
                "Multiplayer Technical Infrastructure",
                "Gamified Business Solutions",
                "Custom Interactive Experiences",
                "High-Performance System Logic",
                "User Engagement & Retention Strategies"
            ]}
        />
    );
}
