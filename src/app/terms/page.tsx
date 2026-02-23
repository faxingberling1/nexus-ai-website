'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative">
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                <h1 className="text-5xl font-semibold text-white mb-12 font-outfit">Terms of Service</h1>
                <div className="prose prose-invert max-w-none text-white/50 font-inter leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">01. Service Provision</h2>
                        <p>NEONBYTE provides high-fidelity digital engineering services. By accessing our platform, you agree to operate within the parameters of our architectural standards.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">02. Intellectual Property</h2>
                        <p>The NEONBYTE brand, including its proprietary "Mission Control 3.0" aesthetic and specific CSS geometries, are protected assets.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
