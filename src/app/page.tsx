'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, PenTool, Gamepad2, Terminal, ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: "Neural Infrastructure",
    description: "Training and deploying proprietary LLMs and neural networks tailored for your enterprise logic and data security.",
    icon: Brain,
    size: "lg",
    color: "#00f3ff",
    tag: "Core AI",
  },
  {
    title: "Cortex Dev",
    description: "High-performance web applications built with AI-assisted code generation and neon-grade aesthetics.",
    icon: Code,
    size: "tall",
    color: "#bc00ff",
    tag: "Web Dev",
  },
  {
    title: "Pulse Marketing",
    description: "Data-driven growth powered by AI audience analysis and real-time signal processing.",
    icon: Zap,
    size: "sm",
    color: "#ff003c",
    tag: "Growth",
  },
  {
    title: "Neural Copy",
    description: "Neural-optimized content that converts at machine speed.",
    icon: PenTool,
    size: "sm",
    color: "#00f3ff",
    tag: "Content",
  },
  {
    title: "Nexus Gaming",
    description: "Next-gen game mechanics with AI-driven NPCs, dynamic events, and procedural storytelling.",
    icon: Gamepad2,
    size: "wide",
    color: "#39ff14",
    tag: "Gaming",
  },
  {
    title: "Auto-Ops",
    description: "End-to-end workflow optimization and intelligent process automation at scale.",
    icon: Terminal,
    size: "sm",
    color: "#00f3ff",
    tag: "Automation",
  }
];

const stats = [
  { label: "Active Neurons", value: "2.4B+" },
  { label: "Uptime Protocol", value: "99.999%" },
  { label: "Autonomous Ops", value: "140k+" },
  { label: "System Latency", value: "<12ms" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Orb decorations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border-primary/20 mb-10"
          >
            <span className="pulse-dot" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">System Online: Mission Control 3.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.0] tracking-tighter"
          >
            Accelerate Your<br />
            <span className="neon-text">Digital Evolution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            Deploy next-generation AI tools, autonomous agents, and neural automation infrastructure — built for the digital elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="flex items-center justify-center gap-3 bg-primary text-darker text-sm font-black tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg shadow-primary/25 group">
              Initialize Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 glass-card text-white text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:border-primary/30 transition-all">
              Access Terminal
            </button>
          </motion.div>

          {/* Floating Status HUD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex flex-wrap justify-center gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card px-6 py-4 rounded-2xl text-center min-w-[130px]">
                <div className="text-2xl font-black neon-text">{stat.value}</div>
                <div className="text-xs text-white/30 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-32" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">Capabilities</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Tactical Arsenal</h2>
            </div>
            <p className="text-white/30 max-w-sm text-sm leading-relaxed">
              Comprehensive AI solutions engineered for extreme efficiency and autonomous execution.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="bento-grid"
          >
            {services.map((service, i) => (
              <motion.div
                variants={item}
                key={i}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`glass-card bento-item group cursor-pointer
                  ${service.size === 'lg' ? 'bento-lg' : ''}
                  ${service.size === 'tall' ? 'bento-tall' : ''}
                  ${service.size === 'wide' ? 'bento-wide' : ''}
                `}
              >
                {/* Background icon */}
                <div className="absolute top-4 right-4 opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-105 transition-all duration-500 pointer-events-none">
                  <service.icon size={service.size === 'lg' ? 160 : 100} style={{ color: service.color }} />
                </div>

                {/* Tag */}
                <div className="flex items-start justify-between relative z-10">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{ color: service.color, background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    {service.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/20 group-hover:text-primary transition-colors relative z-10">
                  Learn Protocol <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32" id="arsenal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-card rounded-3xl p-16 md:p-24 text-center overflow-hidden"
          >
            {/* Background orbs */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">Mission Critical</p>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
                Partner with<br />the Future.
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                Join the elite companies scaling with Neon Byte technology. Your digital evolution starts now.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center justify-center gap-3 bg-primary text-darker text-sm font-black tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-white transition-all shadow-lg shadow-primary/25 group">
                  Initiate Contact
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass-card text-white text-sm font-bold tracking-widest uppercase px-10 py-5 rounded-xl hover:border-primary/30 transition-all">
                  View Pricing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
