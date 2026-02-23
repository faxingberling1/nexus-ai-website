'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Code, PenTool, Gamepad2, Terminal, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: "Neural Infrastructure",
    description: "Training and deploying proprietary models tailored for your enterprise logic and deep data security.",
    icon: Brain,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
    accent: "#00f3ff",
    tag: "Core AI",
  },
  {
    title: "Cortex Dev",
    description: "High-performance web applications built with AI-assisted code generation and neon-grade aesthetics.",
    icon: Code,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    rowSpan: "row-span-2",
    accent: "#bc00ff",
    tag: "Web",
  },
  {
    title: "Pulse Growth",
    description: "Data-driven marketing powered by real-time signals.",
    icon: Zap,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    accent: "#ff003c",
    tag: "Scale",
  },
  {
    title: "Nexus Gaming",
    description: "Next-gen game mechanics with AI-driven NPCs.",
    icon: Gamepad2,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    accent: "#39ff14",
    tag: "Play",
  },
  {
    title: "Neural Copy",
    description: "Neuromarketing-optimized content that converts at machine speed.",
    icon: PenTool,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    accent: "#00f3ff",
    tag: "Content",
  },
  {
    title: "Auto-Ops",
    description: "End-to-end workflow optimization and automation.",
    icon: Terminal,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    accent: "#bc00ff",
    tag: "Auto",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Pure Tailwind Ambient Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(0,243,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(188,0,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-10%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,0,60,0.05)_0%,transparent_50%)]" />
      </div>

      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f3ff]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#bc00ff]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md mb-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-t-[#00f3ff]/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f3ff] animate-[pulse_2.5s_infinite_alternate]" style={{ boxShadow: '0 0 16px rgba(0, 243, 255, 0.8)' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00f3ff]/90 font-inter">System Online: Mission Control 3.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tighter font-outfit"
          >
            <span className="text-white">Accelerate Your</span><br />
            {/* Pure Tailwind text gradient */}
            <span className="mt-3 block pb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#00f3ff] to-[#bc00ff] drop-shadow-[0_0_16px_rgba(0,243,255,0.3)]">
              Digital Evolution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-light font-inter"
          >
            Deploy next-generation AI tools, autonomous agents, and neural automation infrastructure — engineered for the digital elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black text-xs font-black tracking-[0.2em] uppercase px-10 py-5 rounded-lg hover:bg-[#00f3ff] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] hover:scale-105 group font-inter">
              Initialize Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0a0a0f]/50 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-5 rounded-lg hover:bg-white/10 transition-all duration-300 font-inter">
              Access Terminal
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "Active Neurons", value: "2.4B+" },
              { label: "Uptime Protocol", value: "99.999%" },
              { label: "Autonomous Ops", value: "140k+" },
              { label: "System Latency", value: "<12ms" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a0a0f]/50 backdrop-blur-[20px] border border-white/5 border-t-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-6 py-8 rounded-2xl text-center">
                <div className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight font-outfit">{stat.value}</div>
                <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold font-inter">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-40 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 md:flex items-end justify-between gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#00f3ff]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00f3ff] font-inter">Hardware Specs</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-outfit">Tactical Arsenal</h2>
            </div>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed font-light mt-6 md:mt-0 mx-auto md:mx-0 font-inter">
              Comprehensive AI capabilities engineered for autonomous execution across your stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-[#0a0a0f]/50 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#00f3ff]/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(0,243,255,0.15)] hover:-translate-y-1 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group ${service.colSpan} ${service.rowSpan}`}
              >
                {/* Accent Glow hidden inside the card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: service.accent }} />

                {/* Background Icon */}
                <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <service.icon size={service.rowSpan === "row-span-2" ? 180 : 100} style={{ color: service.accent }} />
                </div>

                <div className="flex justify-between items-start mb-auto relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-black/60 border border-white/5 group-hover:-translate-y-1 transition-transform duration-500 shadow-xl">
                    <service.icon size={26} style={{ color: service.accent }} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/5 bg-black/40 text-white/60 font-inter">
                    {service.tag}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4 font-outfit">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium line-clamp-3 font-inter">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
