'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative">
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                <h1 className="text-5xl font-semibold text-white mb-12 font-outfit">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none text-white/50 font-inter leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">01. Data Protocols</h2>
                        <p>We take engineering-level care of your data. All communications are encrypted and managed with the same rigor we apply to our software architecture.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">02. Infrastructure Security</h2>
                        <p>Our systems are built on resilient, global infrastructure. We do not sell or trade your metrics; we only use them to optimize your platform's performance.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
