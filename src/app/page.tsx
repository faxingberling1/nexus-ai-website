'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, LineChart, Gamepad2, PenTool, GitBranch, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: "AI Solutions",
    description: "Custom AI systems and intelligent automation tailored to your operations.",
    icon: Brain,
  },
  {
    title: "Web & Platform Development",
    description: "Enterprise-grade websites, SaaS platforms, dashboards, and scalable applications.",
    icon: Code,
  },
  {
    title: "Growth & Performance Marketing",
    description: "SEO, paid media, and data-driven growth systems built for measurable impact.",
    icon: LineChart,
  },
  {
    title: "Game Development",
    description: "Immersive digital experiences powered by intelligent mechanics.",
    icon: Gamepad2,
  },
  {
    title: "Copy & Brand Systems",
    description: "Strategic messaging that aligns with your brand and drives conversions.",
    icon: PenTool,
  },
  {
    title: "Business Automation",
    description: "Workflow design, integrations, CRM systems, and operational optimization.",
    icon: GitBranch,
  }
];

const products = [
  {
    title: "HybridPOS",
    description: "Smart Retail Management System",
  },
  {
    title: "AI Lead Engine",
    description: "Automated qualification utilizing deep learning.",
  },
  {
    title: "Automation Hub",
    description: "Visual workflow builder connected to 500+ APIs.",
  },
  {
    title: "Analytics Suite",
    description: "Bird's eye view of your entire enterprise ecosystem.",
  },
  {
    title: "ShiftTrack",
    description: "Intelligent employee time tracking and scheduling.",
  },
  {
    title: "Content AI Studio",
    description: "High-yield content machine learning platform.",
  }
];

const process = [
  {
    step: "01",
    title: "Strategy & Discovery",
    description: "We understand your goals and define a clear roadmap."
  },
  {
    step: "02",
    title: "Design & Development",
    description: "We build scalable systems with precision and clarity."
  },
  {
    step: "03",
    title: "Optimization & Growth",
    description: "We refine, automate, and scale your ecosystem."
  }
];

// Fades up from below
const fadeUpVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light">

      {/* Refined CSS Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, black 10%, transparent 100%)'
        }}
      />

      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden text-center z-10">

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeUpVar} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-[#121212]/50 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-[pulse_3s_infinite]" />
              <span className="text-xs font-medium tracking-wide text-white/60">NEONBYTE Enterprise</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVar}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium mb-6 leading-[1.05] tracking-tight font-outfit text-white"
            >
              Engineering Intelligent<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Digital Growth
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVar}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              We design and build AI-powered systems, scalable platforms, and automation solutions that help ambitious businesses operate smarter and grow faster.
            </motion.p>

            <motion.div
              variants={fadeUpVar}
              className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2 bg-[#FF6A00] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#E65C00] transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,106,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.23)] hover:-translate-y-0.5 group">
                Start a Project
              </button>
              <button className="flex items-center justify-center gap-2 bg-transparent border border-white/[0.12] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">
                Explore Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST & METRICS SECTION */}
      <section className="py-24 relative z-10 border-y border-white/[0.04] bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-widest text-[#FF6A00] uppercase font-inter">Built for Performance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/[0.04]">
            {[
              { label: "Data Points Processed", value: "2.4B+" },
              { label: "System Reliability", value: "99.9%" },
              { label: "Automated Workflows", value: "140k+" },
              { label: "Average Response", value: "<12ms" }
            ].map((stat, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" } }
                }}
                key={i}
                className={`text-center px-4 ${i % 2 === 0 ? 'border-none md:border-solid' : 'border-none'}`}
              >
                <div className="text-4xl md:text-5xl font-medium text-white mb-3 font-outfit tracking-tight">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 relative z-10" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white font-outfit mb-4">What We Do</h2>
            <p className="text-white/50 text-lg">Intelligent systems engineered for serious business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
                }}
                key={i}
                className="group bg-[#121212]/50 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-8 hover:bg-[#121212] transition-colors duration-500 relative overflow-hidden"
              >
                {/* Ultra-subtle hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="text-white/40 mb-6 group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-medium text-white mb-3 font-outfit">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & TOOLS SECTION */}
      <section className="py-32 relative z-10 bg-[#121212]/30 border-y border-white/[0.04] overflow-hidden" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white font-outfit mb-4">Our Products</h2>
              <p className="text-white/50 text-lg">Technology we’ve built to solve real business challenges.</p>
            </div>
            <div className="hidden md:flex gap-2">
              {/* Decorative structural dots for enterprise feel */}
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-[#FF6A00]/50" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.98 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: i * 0.1 } }
                }}
                key={i}
                className="bg-[#121212] border border-white/[0.04] rounded-2xl overflow-hidden group hover:border-[#FF6A00]/20 transition-all duration-500 flex flex-col cursor-pointer"
              >
                {/* Premium Abstract Dashboard Mockup */}
                <div className="h-44 relative border-b border-white/[0.04] p-5 overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B]">
                  <div className="w-full h-full bg-[#121212] rounded-lg border border-white/[0.06] shadow-2xl relative overflow-hidden flex flex-col group-hover:-translate-y-1 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                    {/* Dashboard Header */}
                    <div className="h-8 border-b border-white/[0.04] flex items-center px-3 gap-2">
                      <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                      <div className="h-1.5 w-4 bg-white/5 rounded-full" />
                    </div>
                    {/* Dashboard Content */}
                    <div className="flex-1 p-3 flex gap-3">
                      {/* Sidebar */}
                      <div className="w-1/4 h-full hidden sm:flex flex-col gap-2">
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-3/4 bg-white/5 rounded" />
                      </div>
                      {/* Main Grid */}
                      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="bg-white/[0.02] rounded border border-white/[0.02] p-2 flex flex-col justify-end">
                          <div className="h-1.5 w-1/2 bg-[#FF6A00]/40 rounded-full mb-1" />
                          <div className="h-1 w-full bg-white/5 rounded-full" />
                        </div>
                        <div className="bg-white/[0.02] rounded border border-white/[0.02] relative overflow-hidden">
                          {/* Fake chart curve */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-white to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700" />
                        </div>
                        <div className="col-span-2 bg-white/[0.02] rounded border border-white/[0.02]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 bg-[#121212]">
                  <h3 className="text-lg font-medium text-white mb-1 font-outfit">{product.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-[#FF6A00] transition-colors">
                    View Product
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 relative z-10" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white font-outfit mb-4">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {process.map((p, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0B0B0B] border border-white/10 flex items-center justify-center text-sm font-semibold text-white/40 mb-6 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {p.step}
                  <div className="absolute inset-0 rounded-full border border-white/5 scale-110" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3 font-outfit">{p.title}</h3>
                <p className="text-white/50 font-light text-sm max-w-[260px] leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 relative z-10 border-t border-white/[0.04] bg-[#121212]/20" id="about">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white font-outfit mb-8">Designed for Long-Term Growth</h2>
          <p className="text-lg text-white/50 leading-relaxed font-light">
            NEONBYTE partners with forward-thinking companies to build digital systems that scale. From AI-powered tools to enterprise platforms, our focus is clarity, performance, and measurable results.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 relative z-10 overflow-hidden">
        {/* Deep black with soft orange gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-[#FF6A00]/5 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white font-outfit mb-12">
            Ready to Build<br className="md:hidden" /> Something Exceptional?
          </h2>
          <button className="inline-flex items-center justify-center bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-xl">
            Book a Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
