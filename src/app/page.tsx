'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Code, LineChart, Gamepad2, PenTool, GitBranch, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
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
    image: "https://intersmart.ae/wp-content/uploads/2024/04/The-Essential-Web-Development-Tools-Every-Developer-Should-Know.png"
  },
  {
    title: "Growth & Performance",
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

const portfolio = [
  {
    title: "MailMind",
    category: "AI Email Marketing",
    metric: "Predictive Analytics",
    description: "An AI-powered email marketing platform featuring automated campaigns, real-time analytics, and predictive segmentation to optimize peak engagement forecasting.",
    link: "https://mailmind.neonbyteai.com/",
    image: "/mailmind.png"
  },
  {
    title: "Nexus Logistics",
    category: "AI Dashboard",
    metric: "1.2M Events/Day",
    description: "Custom enterprise dashboard tracking global supply chains with predictive machine learning insights.",
  },
  {
    title: "Vanguard Systems",
    category: "Architecture",
    metric: "<20ms Latency",
    description: "High-performance microservices architecture handling millions of concurrent connections for a SaaS provider.",
  }
];

const testimonials = [
  {
    quote: "NEONBYTE transformed our legacy infrastructure into a high-performance AI ecosystem. Their precision is unmatched.",
    author: "Sarah Chen",
    role: "CTO, Aura FinTech",
  },
  {
    quote: "The level of engineering rigor they bring to the table is something we haven't seen in other agencies. Absolutely elite.",
    author: "Marcus Thorne",
    role: "Head of AI, GlobalTech",
  },
  {
    quote: "Their focus on ROI-driven development helped us scale our SaaS platform globally in record time.",
    author: "David Miller",
    role: "Founder, Nexus Logistics",
  },
  {
    quote: "Intelligent automation that actually works. They didn't just build a tool; they built a competitive advantage.",
    author: "Elena Rodriguez",
    role: "Operations Director, Vanguard",
  }
];

const techStack = [
  { name: "Next.js", icon: "🌐" },
  { name: "OpenAI", icon: "🧠" },
  { name: "AWS", icon: "☁️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TypeScript", icon: "📘" }
];

// Refined ultra-smooth easing
const easing = [0.16, 1, 0.3, 1] as const;

const fadeUpVar = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: easing } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#EDEDED] selection:bg-[#FF6A00]/30 font-inter font-light relative overflow-hidden">

      {/* Ultra-Premium Noise Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Extreme subtle lighting */}
      <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#FF6A00] to-transparent opacity-[0.03] blur-[160px] pointer-events-none" />

      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-40 pb-20 z-10">
        <div className="max-w-[70rem] mx-auto px-6 relative z-10 flex flex-col items-center text-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* The Badge */}
            <motion.div variants={fadeUpVar} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-[#121212]/40 backdrop-blur-2xl mb-12 shadow-[0_0_20px_rgba(255,106,0,0.05)] hover:bg-[#121212]/60 hover:border-[#FF6A00]/30 transition-all duration-500 cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00] shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/70">Announcing NEONBYTE Studio 3.0</span>
              <ChevronRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
            </motion.div>

            {/* Massive Scale Typography */}
            <motion.h1
              variants={fadeUpVar}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold mb-8 leading-[0.95] tracking-[-0.03em] font-outfit text-white"
            >
              Intelligent engines<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
                driving growth.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVar}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
            >
              We design and build AI-powered systems, scalable platforms, and automation solutions that help ambitious businesses operate smarter and grow faster.
            </motion.p>

            {/* Primary Action Row */}
            <motion.div
              variants={fadeUpVar}
              className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
            >
              <button className="relative group bg-[#FF6A00] text-white text-sm font-semibold px-9 py-4 rounded-full overflow-hidden transition-all duration-500 shadow-[0_8px_25px_-8px_rgba(255,106,0,0.6)] hover:shadow-[0_12px_35px_-12px_rgba(255,106,0,0.8)] hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C33] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#121212]/40 backdrop-blur-xl border border-white/[0.08] text-white text-sm font-semibold px-9 py-4 rounded-full hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300">
                Explore Our Work
              </button>
            </motion.div>
          </motion.div>

        </div>

        {/* Abstract Glowing Interface below hero */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: easing }}
          className="w-full max-w-[1200px] mx-auto mt-32 relative hidden md:block px-6 rounded-t-[2rem] border-x border-t border-white/[0.04] bg-gradient-to-b from-[#121212]/30 to-transparent h-[400px] overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent" />

          {/* Fake Dashboard Layout Lines */}
          <div className="absolute top-12 left-12 w-[calc(100%-6rem)] h-[1px] bg-white/[0.03]" />
          <div className="absolute top-24 left-12 w-[20%] h-[1px] bg-[#FF6A00]/30" />
          <div className="absolute top-12 bottom-0 left-[20%] w-[1px] bg-white/[0.03]" />
          <div className="absolute bottom-0 right-[20%] top-12 w-[1px] bg-white/[0.03]" />

          <div className="absolute top-[30%] left-[30%] w-[40px] h-[40px] rounded-full bg-[#121212] border border-[#FF6A00]/30 shadow-[0_0_30px_rgba(255,106,0,0.2)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* CLIENT LOGO TICKER */}
      <section className="py-12 relative z-10 border-y border-white/[0.02] bg-[#0A0A0A] overflow-hidden flex flex-col items-center">
        <p className="text-[11px] font-semibold tracking-widest text-white/30 uppercase font-inter mb-8 text-center">Trusted By Innovative Teams</p>

        {/* Ticker Container with Gradient Fades */}
        <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          <div className="flex w-max animate-[translateX_40s_linear_infinite]" style={{ transform: 'translate3d(0, 0, 0)' }}>
            <style dangerouslySetInnerHTML={{
              __html: `
               @keyframes translateX {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
             `}} />

            {/* Logo Track (Duplicated for seamless looping) */}
            {[...Array(2)].map((_, trackIndex) => (
              <div key={trackIndex} className="flex gap-16 md:gap-24 items-center px-8 md:px-12">
                {[
                  "Acme Corp", "GlobalTech", "Nexus", "Quantum Systems", "Apex Digital", "Horizon", "Vanguard", "Stratos"
                ].map((logo, i) => (
                  <div key={`${trackIndex}-${i}`} className="text-xl md:text-2xl font-outfit font-semibold text-white/20 whitespace-nowrap tracking-tight flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    {logo}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & MISSION SECTION */}
      <section className="py-32 relative z-10 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easing }}
            >
              <h2 className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter mb-6">Our Philosophy</h2>
              <h3 className="text-5xl md:text-7xl font-semibold tracking-tight text-white font-outfit leading-[1.1] mb-8">
                Engineering <br />
                <span className="text-white/20">Beyond Digital.</span>
              </h3>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
                We believe that code is more than logic—it's the foundation of modern enterprise. Our mission is to build systems that don't just solve problems, but define new standards for scale and intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Precision", desc: "Every line of code is architected for maximum efficiency and stability." },
                { title: "Scale", desc: "Systems designed to handle billions of events without compromising latency." },
                { title: "Intelligence", desc: "Deep integration of AI that provides measurable business advantages." },
                { title: "Integrity", desc: "A transparent, technical-first approach to solving complex challenges." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 bg-[#121212]/40 border border-white/[0.04] rounded-3xl hover:border-[#FF6A00]/20 transition-all duration-500 group"
                >
                  <div className="w-8 h-[1px] bg-[#FF6A00]/40 mb-6 group-hover:w-12 transition-all duration-500" />
                  <h4 className="text-xl font-medium text-white mb-3 font-outfit">{value.title}</h4>
                  <p className="text-white/30 text-sm font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & METRICS SECTION */}
      <section className="py-24 relative z-10 border-y border-white/[0.02] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold tracking-widest text-white/30 uppercase font-inter">Scale With Confidence</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 lg:divide-x divide-white/[0.04]">
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
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: i * 0.1, ease: easing } }
                }}
                key={i}
                className={`text-center px-4`}
              >
                <div className="text-4xl lg:text-5xl font-semibold text-white mb-2 font-outfit tracking-tight">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-40 relative z-10" id="services">
        <div className="max-w-[85rem] mx-auto px-6">
          <div className="text-center md:text-left mb-24 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-6">Engineered solutions.</h2>
            <p className="text-white/40 text-xl font-light">Custom software, intelligent automation, and marketing systems built for serious business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, i) => {
              const isWide = i === 1 || i === 4;
              const isMedium = i === 2 || i === 3;
              const colSpan = isWide ? "md:col-span-8" : isMedium ? "md:col-span-6" : "md:col-span-4";

              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: easing } }
                  }}
                  key={i}
                  className={`group bg-gradient-to-b from-[#121212]/80 to-[#0B0B0B] border border-white/[0.04] rounded-[2rem] p-10 hover:border-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px] cursor-pointer ${colSpan}`}
                >
                  {/* Premium Hover Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2" />

                  <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-white/40 mb-8 group-hover:text-[#FF6A00] group-hover:border-[#FF6A00]/30 transition-all duration-500 shadow-sm relative z-10 group-hover:-translate-y-1">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>

                  <div className={`relative z-10 ${isWide ? 'md:w-3/4 lg:w-2/3' : 'w-full'}`}>
                    {service.image ? (
                      <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.04] relative w-full aspect-video group-hover:border-white/[0.1] transition-colors shadow-lg">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                      </div>
                    ) : (
                      <div className="mb-8 h-40 relative overflow-hidden rounded-xl border border-white/[0.03] bg-white/[0.01]">
                        {/* Abstract Visuals per Service */}
                        {i === 0 && ( /* AI Solutions */
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                              {[...Array(3)].map((_, j) => (
                                <motion.div
                                  key={j}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 10 + j * 5, repeat: Infinity, ease: "linear" }}
                                  className="absolute inset-0 border border-[#FF6A00]/20 rounded-full"
                                  style={{ scale: 0.6 + j * 0.2 }}
                                />
                              ))}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6A00]/10 to-transparent blur-xl" />
                            </div>
                          </div>
                        )}
                        {i === 2 && ( /* Growth */
                          <div className="absolute inset-0 flex items-end px-4 pb-8">
                            {[...Array(12)].map((_, j) => (
                              <motion.div
                                key={j}
                                initial={{ height: "20%" }}
                                animate={{ height: `${30 + (Math.sin(j) * 20) + (j * 5)}%` }}
                                className="flex-1 mx-[1px] bg-gradient-to-t from-[#FF6A00]/20 to-transparent rounded-t-sm"
                              />
                            ))}
                          </div>
                        )}
                        {i === 3 && ( /* Game Dev */
                          <div className="absolute inset-0">
                            {[...Array(15)].map((_, j) => (
                              <motion.div
                                key={j}
                                animate={{
                                  y: [0, -40, 0],
                                  opacity: [0, 1, 0],
                                  scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 3 + Math.random() * 2,
                                  repeat: Infinity,
                                  delay: Math.random() * 2
                                }}
                                className="absolute w-1 h-1 bg-[#FF6A00]/40 rounded-full"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`
                                }}
                              />
                            ))}
                          </div>
                        )}
                        {i === 4 && ( /* Branding */
                          <div className="absolute inset-0 flex gap-4 p-8">
                            <div className="w-1/3 h-full bg-white/[0.03] border border-white/[0.05] rounded shadow-sm" />
                            <div className="flex-1 flex flex-col gap-4">
                              <div className="h-4 w-full bg-[#FF6A00]/10 rounded" />
                              <div className="h-4 w-2/3 bg-white/[0.03] rounded" />
                            </div>
                          </div>
                        )}
                        {i === 5 && ( /* Automation */
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="flex gap-4">
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-16 h-16 border-2 border-dashed border-white/50 rounded-full flex items-center justify-center p-2"><div className="w-full h-full border border-white/20 rounded-full" /></motion.div>
                              <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-2 border-dashed border-white/50 rounded-full -mt-8 flex items-center justify-center p-2"><div className="w-full h-full border border-white/20 rounded-full" /></motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <h3 className="text-2xl font-medium text-white mb-4 font-outfit tracking-tight leading-tight">{service.title}</h3>
                    <p className="text-white/40 text-[15px] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Sliding Action Arrow */}
                  <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-white/[0.05] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white/[0.02] transition-all duration-500">
                    <ArrowUpRight size={20} className="text-[#FF6A00]" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-24 relative z-10 border-y border-white/[0.02] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-outfit mb-4">The Stack Behind the Scale.</h2>
              <p className="text-white/40 font-light">We utilize the industry's most powerful technologies to build resilient, future-proof systems.</p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 bg-[#121212]/50 border border-white/[0.04] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#FF6A00]/20 hover:bg-[#121212] transition-all duration-500"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-500">{tech.icon}</span>
                  <span className="text-[13px] font-medium text-white/30 group-hover:text-white/70 transition-colors uppercase tracking-widest">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS & TOOLS SECTION */}
      <section className="py-40 relative z-10 bg-[#080808] border-y border-white/[0.02]" id="products">
        <div className="max-w-[85rem] mx-auto px-6">
          <div className="mb-24 flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-6">Products & Tools</h2>
            <p className="text-white/40 text-xl max-w-2xl font-light">Sophisticated systems deployed to actively solve enterprise bottlenecks and accelerate velocity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: i * 0.1, ease: easing } }
                }}
                key={i}
                className="bg-[#121212]/30 border border-white/[0.04] rounded-[2rem] overflow-hidden group hover:border-white/[0.1] transition-all duration-700 flex flex-col cursor-pointer"
              >
                {/* Elite Dashboard Mockup Window */}
                <div className="h-56 relative border-b border-white/[0.02] p-6 overflow-hidden bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                  <div className="w-full h-full bg-[#181818] rounded-xl border border-white/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col transform group-hover:-translate-y-2 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">

                    {/* Dashboard Mac Dots */}
                    <div className="h-10 border-b border-white/[0.02] bg-white/[0.01] flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>

                    {/* Interior Wireframe Grid */}
                    <div className="flex-1 p-4 grid grid-cols-3 gap-3">
                      <div className="col-span-1 border border-white/[0.02] rounded-lg bg-white/[0.01]" />
                      <div className="col-span-2 flex flex-col gap-3">
                        <div className="h-10 border border-white/[0.02] rounded-lg bg-white/[0.01] flex items-center px-3">
                          <div className="w-1/3 h-2 bg-white/[0.05] rounded-full" />
                        </div>
                        <div className="flex-1 border border-white/[0.02] rounded-lg bg-white/[0.01] relative overflow-hidden">
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/[0.03] to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col flex-1 bg-[#0A0A0A]">
                  <h3 className="text-xl font-medium text-white mb-2 font-outfit">{product.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
                    {product.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                    <span className="border-b border-white/0 group-hover:border-white/50 pb-0.5 transition-all">Explore Tool</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-40 relative z-10" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-6">How We Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-white/[0.04]" />

            {process.map((p, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.2, ease: easing } }
                }}
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#121212] border border-white/[0.08] flex items-center justify-center text-lg font-semibold text-white/80 mb-8 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  {p.step}
                  <div className="absolute inset-0 rounded-full border border-white/5 scale-110" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 font-outfit">{p.title}</h3>
                <p className="text-white/40 font-light text-[15px] max-w-[280px] leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-40 relative z-10 bg-[#080808] border-y border-white/[0.02]" id="work">
        <div className="max-w-[85rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-outfit mb-6">Featured Work</h2>
              <p className="text-white/40 text-xl font-light">A selection of enterprise platforms, AI systems, and digital ecosystems we've successfully deployed.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors group text-sm font-medium pr-8">
              View All Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col gap-12">
            {portfolio.map((item, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: easing } }
                }}
                key={i}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 lg:p-12 bg-[#121212]/30 border border-white/[0.04] rounded-[2rem] hover:bg-[#121212]/60 hover:border-white/[0.08] transition-all duration-700"
              >
                {/* Portfolio Image Container - Abstract wireframe styling */}
                <div className="lg:col-span-7 bg-[#1A1A1A] rounded-xl aspect-[16/9] border border-white/[0.04] relative overflow-hidden group-hover:border-white/[0.1] transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#0A0A0A]" />
                  {/* Simulated project visuals or Real Screenshot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/[0.05] rounded-lg shadow-2xl bg-[#0B0B0B] overflow-hidden transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="h-6 border-b border-white/[0.05] flex items-center px-3 gap-1.5 bg-white/[0.01] relative z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]/30" />
                    </div>
                    {item.image ? (
                      <div className="absolute top-6 left-0 right-0 bottom-0 bg-[#050505]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-1000" />
                      </div>
                    ) : (
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF6A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    )}
                  </div>
                </div>

                {/* Portfolio Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] font-semibold tracking-widest text-[#FF6A00] uppercase font-inter bg-[#FF6A00]/10 px-3 py-1 rounded-full">{item.category}</span>
                    <span className="text-[12px] text-white/40 font-inter border border-white/[0.08] px-3 py-1 rounded-full">{item.metric}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 font-outfit tracking-tight">{item.title}</h3>
                  <p className="text-white/40 text-[15px] leading-relaxed font-light mb-10 max-w-md">
                    {item.description}
                  </p>

                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-sm font-medium w-fit group/btn">
                      Visit Live Project
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black transition-all duration-300 ml-2">
                        <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                      </div>
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-white text-sm font-medium w-fit group/btn">
                      Read Case Study
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black transition-all duration-300 ml-2">
                        <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <button className="md:hidden flex items-center justify-center w-full gap-2 text-white/50 hover:text-white transition-colors group text-sm font-medium mt-12 bg-white/[0.02] border border-white/[0.04] py-4 rounded-xl">
            View All Case Studies <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-40 relative z-10 bg-[#0A0A0A] overflow-hidden border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white font-outfit mb-6">Built on trust.</h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto">Working with global leaders to define the next generation of digital engineering.</p>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          <div className="flex w-max animate-[translateX_60s_linear_infinite] pause-on-hover py-4">
            {[...Array(2)].map((_, trackIndex) => (
              <div key={trackIndex} className="flex gap-8 px-4">
                {testimonials.map((t, i) => (
                  <div key={`${trackIndex}-${i}`} className="w-[380px] p-10 rounded-[2rem] bg-[#121212]/30 border border-white/[0.04] backdrop-blur-sm flex flex-col justify-between hover:bg-[#121212]/50 hover:border-white/[0.08] transition-all duration-500">
                    <p className="text-white/80 italic font-light text-[17px] leading-relaxed mb-8">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A00]/20 to-transparent border border-white/[0.04] flex items-center justify-center text-xs font-semibold text-[#FF6A00]">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{t.author}</p>
                        <p className="text-[12px] text-white/30 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 relative z-10 border-t border-white/[0.02] bg-[#0A0A0A]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF6A00]/[0.03] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-[5rem] font-semibold tracking-[-0.03em] text-white font-outfit mb-12 leading-tight">
            Ready to Build<br /> Something Exceptional?
          </h2>
          <button className="relative group inline-flex items-center justify-center bg-white text-black text-sm font-semibold px-10 py-5 rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <span className="relative z-10">Book a Strategy Call</span>
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
