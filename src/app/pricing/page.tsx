'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, ArrowRight, Zap, Shield, Cpu, Globe,
    ArrowUpRight, Target, Sparkles, BarChart, Rocket,
    Brain, LineChart, Layers, Gamepad2, PenTool, ClipboardList,
    ChevronRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pricingCategories, modularBlockchain, modularWeb, modularAI, modularGrowth, modularAutomation, modularProduct, modularGame, modularBrand, modularConsulting } from '@/config/pricing';
import { useRouter } from 'next/navigation';

const hiddenBillingSectors = ['ai', 'web', 'automation', 'product', 'game', 'brand', 'consulting', 'blockchain'];

const ModularSectorBuilder = ({ data }: { data: any }) => {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string>(data.packages[0].id);
    const [moduleQuantities, setModuleQuantities] = useState<Record<string, number>>({});
    const [selectedMaintenance, setSelectedMaintenance] = useState<string | null>(null);

    const currentPackage = data.packages.find((p: any) => p.id === selectedId)!;

    // Reset selections when package changes
    React.useEffect(() => {
        setModuleQuantities({});
        setSelectedMaintenance(null);
    }, [selectedId]);

    const basePrice = parseInt(currentPackage.price.replace(',', ''));

    const modulesPrice = Object.entries(moduleQuantities).reduce((acc, [modName, quantity]) => {
        if (quantity <= 0) return acc;
        const mod = currentPackage.addOns.find((i: any) => i.name === modName);
        if (mod && !mod.isMonthly) {
            return acc + (parseInt(mod.price.replace(',', '')) * quantity);
        }
        return acc;
    }, 0);

    const monthlyModulesPrice = Object.entries(moduleQuantities).reduce((acc, [modName, quantity]) => {
        if (quantity <= 0) return acc;
        const mod = currentPackage.addOns.find((i: any) => i.name === modName);
        if (mod && mod.isMonthly) {
            return acc + (parseInt(mod.price.replace(',', '')) * quantity);
        }
        return acc;
    }, 0);

    const maintenancePrice = parseInt(currentPackage.maintenance.find((m: any) => m.name === selectedMaintenance)?.price.replace(',', '') || '0');

    const oneTimeTotal = currentPackage.isMonthly ? modulesPrice : (basePrice + modulesPrice);
    const recurringTotal = currentPackage.isMonthly
        ? (basePrice + monthlyModulesPrice + maintenancePrice)
        : (monthlyModulesPrice + maintenancePrice);

    return (
        <div className="space-y-20">
            {/* Step 1: Base Solution */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">1</div>
                    <h2 className="text-3xl font-semibold text-white font-outfit uppercase">STEP 1: Choose Your Base Solution</h2>
                </div>
                <p className="text-white/40 mb-10 font-medium italic">These are foundation packages. Clients start here.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.packages.map((item: any) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`p-8 rounded-[2rem] border text-left transition-all duration-500 flex flex-col h-full relative group ${selectedId === item.id
                                ? 'bg-[#FF6A00]/10 border-[#FF6A00] shadow-[0_0_40px_rgba(255,106,0,0.2)]'
                                : 'bg-[#121212]/30 border-white/[0.05] hover:border-white/[0.1]'
                                }`}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                <div className="text-xl font-bold text-[#FF6A00]">${item.price} {item.isMonthly ? '/mo' : '(One-Time)'}</div>
                                <p className="text-[11px] text-white/30 italic mt-2">{item.description}</p>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-500 mb-3 flex items-center gap-2">
                                        <Check size={10} /> Included in Base
                                    </h4>
                                    <div className="space-y-2">
                                        {item.included.map((f: string, i: number) => (
                                            <div key={i} className="flex gap-2 text-[10px] text-white/50 leading-relaxed text-left">
                                                <div className="w-1 h-1 rounded-full bg-green-500/40 mt-1.5 shrink-0" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500/60 mb-3 flex items-center gap-2">
                                        <span className="text-sm">×</span> Not Included
                                    </h4>
                                    <div className="space-y-2">
                                        {item.notIncluded.map((f: string, i: number) => (
                                            <div key={i} className="flex gap-2 text-[10px] text-white/30 leading-relaxed text-left">
                                                <div className="w-1 h-1 rounded-full bg-red-500/20 mt-1.5 shrink-0" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Step 2: Add Functional Modules */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">2</div>
                    <h2 className="text-3xl font-semibold text-white font-outfit uppercase">STEP 2: Add Functional Modules</h2>
                </div>
                <p className="text-white/40 mb-10 font-medium italic">Clients can add or remove modules — pricing adjusts clearly.</p>

                <div className="bg-[#121212]/30 border border-white/[0.05] rounded-[3rem] overflow-hidden">
                    <div className="grid grid-cols-1 divide-y divide-white/[0.05]">
                        <div className="grid grid-cols-3 p-6 bg-white/[0.02] text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                            <div className="pl-4">Add-On</div>
                            <div className="text-center">Price</div>
                            <div className="text-right pr-4">When You Need It</div>
                        </div>
                        {currentPackage.addOns.map((item: any, j: number) => {
                            const quantity = moduleQuantities[item.name] || 0;
                            const isSelected = quantity > 0;

                            return (
                                <div
                                    key={j}
                                    className={`grid grid-cols-3 items-center p-6 text-left transition-all group ${isSelected
                                        ? 'bg-[#FF6A00]/10'
                                        : 'hover:bg-white/[0.02]'
                                        }`}
                                >
                                    <button
                                        onClick={() => {
                                            setModuleQuantities(prev => ({
                                                ...prev,
                                                [item.name]: isSelected ? 0 : 1
                                            }));
                                        }}
                                        className="flex items-center gap-4 pl-4"
                                    >
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#FF6A00] border-[#FF6A00]' : 'border-white/10 group-hover:border-white/20'}`}>
                                            {isSelected && <Check size={12} className="text-white" />}
                                        </div>
                                        <span className={`text-[13px] font-medium ${isSelected ? 'text-white' : 'text-white/60'}`}>{item.name}</span>
                                    </button>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="text-center font-mono text-[#FF6A00] text-sm">
                                            +${item.price}{item.isMonthly ? '/mo' : ''}{item.perUnit ? ` ${item.perUnit}` : ''}
                                        </div>
                                        {item.perUnit && isSelected && (
                                            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1 border border-white/10">
                                                <button
                                                    onClick={() => setModuleQuantities(prev => ({ ...prev, [item.name]: Math.max(0, quantity - 1) }))}
                                                    className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="text-xs font-bold text-white min-w-[1.5rem] text-center">{quantity}</span>
                                                <button
                                                    onClick={() => setModuleQuantities(prev => ({ ...prev, [item.name]: quantity + 1 }))}
                                                    className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right pr-4 text-[11px] text-white/30 font-light italic">
                                        {item.when}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {currentPackage.tip && (
                    <div className="mt-8 flex items-center gap-3 text-sm text-[#FF6A00] bg-[#FF6A00]/10 px-6 py-4 rounded-2xl border border-[#FF6A00]/20 w-fit">
                        <span className="font-bold">💡 Tip:</span>
                        <span className="font-light">{currentPackage.tip}</span>
                    </div>
                )}
            </section>

            {/* Step 3: Maintenance Plans */}
            {currentPackage.maintenance.length > 0 && (
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">3</div>
                        <h2 className="text-3xl font-semibold text-white font-outfit uppercase">STEP 3: Maintenance Plans (Optional)</h2>
                    </div>
                    <p className="text-white/40 mb-10 font-medium italic">Clear, flat, predictable pricing.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                        {currentPackage.maintenance.map((plan: any, i: number) => (
                            <button
                                key={i}
                                onClick={() => setSelectedMaintenance(selectedMaintenance === plan.name ? null : plan.name)}
                                className={`p-8 rounded-[2.5rem] border text-left transition-all duration-500 flex items-center justify-between group ${selectedMaintenance === plan.name
                                    ? 'bg-[#FF6A00]/10 border-[#FF6A00] shadow-[0_0_40px_rgba(255,106,0,0.2)]'
                                    : 'bg-[#121212]/30 border-white/[0.05] hover:border-white/[0.1]'
                                    }`}
                            >
                                <div>
                                    <h3 className={`text-xl font-bold mb-1 transition-colors ${selectedMaintenance === plan.name ? 'text-white' : 'text-white/60'}`}>{plan.name}</h3>
                                    <p className="text-[11px] text-white/30 lowercase tracking-widest uppercase">Maintenance Plan</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-[#FF6A00]">${plan.price}/mo</div>
                                    {selectedMaintenance === plan.name && (
                                        <div className="flex justify-end mt-2">
                                            <div className="w-6 h-6 rounded-full bg-[#FF6A00] flex items-center justify-center">
                                                <Check size={14} className="text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {/* Pricing Clarity Summary */}
            <div className="bg-[#FF6A00] rounded-[4rem] p-16 text-white shadow-2xl shadow-[#FF6A00]/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-white/15 transition-all duration-1000" />
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-4xl font-black font-outfit uppercase tracking-tighter">
                            Pricing Clarity
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/50 mb-1">Base Selection</p>
                                    <span className="text-xl font-bold">{currentPackage.name}</span>
                                </div>
                                <span className="text-2xl font-black">${currentPackage.price}{currentPackage.isMonthly ? '/mo' : ''}</span>
                            </div>

                            {Object.entries(moduleQuantities).filter(([_, q]) => q > 0).length > 0 && (
                                <div className="space-y-3">
                                    <p className="text-[10px] uppercase font-bold text-white/50 ml-4">Selected Modules</p>
                                    {Object.entries(moduleQuantities).filter(([_, q]) => q > 0).map(([modName, quantity], i) => {
                                        const mod = currentPackage.addOns.find((m: any) => m.name === modName);
                                        return (
                                            <div key={i} className="flex justify-between items-center bg-white/5 px-6 py-4 rounded-xl border border-white/5">
                                                <span className="text-sm font-medium">
                                                    {modName} {quantity > 1 && <span className="text-[10px] text-white/40 ml-1">(x{quantity})</span>}
                                                </span>
                                                <span className="font-bold text-white/80">
                                                    +${((parseInt(mod?.price.replace(',', '') || '0')) * quantity).toLocaleString()}
                                                    {mod?.isMonthly ? '/mo' : ''}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {selectedMaintenance && (
                                <div className="space-y-3">
                                    <p className="text-[10px] uppercase font-bold text-white/50 ml-4">Active Maintenance</p>
                                    <div className="flex justify-between items-center bg-blue-500/10 px-6 py-4 rounded-xl border border-blue-500/20">
                                        <span className="text-sm font-medium">{selectedMaintenance}</span>
                                        <span className="font-bold text-white/80">+${currentPackage.maintenance.find((m: any) => m.name === selectedMaintenance)?.price}/mo</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col justify-center lg:items-end">
                            <div className="mb-10 lg:text-right">
                                <p className="text-[10px] uppercase font-bold text-white/50 mb-2 tracking-widest">Calculated Investment</p>
                                <div className="flex flex-col gap-2">
                                    {oneTimeTotal > 0 && (
                                        <div>
                                            <span className="text-sm font-bold text-white/60 mr-4 italic">One-Time Total</span>
                                            <span className="text-7xl font-black tracking-tighter">${oneTimeTotal.toLocaleString()}</span>
                                        </div>
                                    )}
                                    {recurringTotal > 0 && (
                                        <div className={oneTimeTotal > 0 ? "mt-4 pt-6 border-t border-white/10" : ""}>
                                            <span className="text-sm font-bold text-white/60 mr-4 italic">
                                                {currentPackage.isMonthly ? "Monthly Subscription" : "Maintenance / Recurring"}
                                            </span>
                                            <span className="text-4xl font-black tracking-tighter text-white">${recurringTotal.toLocaleString()}</span>
                                            <span className="text-xl font-bold text-white/40">/mo</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    const selection = {
                                        type: 'modular',
                                        package: currentPackage,
                                        modules: moduleQuantities,
                                        maintenance: selectedMaintenance,
                                        oneTimeTotal,
                                        recurringTotal
                                    };
                                    localStorage.setItem('nexus_selected_plan', JSON.stringify(selection));
                                    router.push('/start?source=pricing');
                                }}
                                className="bg-white text-[#FF6A00] px-16 py-6 rounded-3xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-white/10 flex items-center gap-3 w-full lg:w-fit justify-center"
                            >
                                Request Proposal <ArrowRight />
                            </button>
                            <p className="mt-6 text-[10px] text-white/40 font-medium italic lg:text-right">
                                *Final price is calculated before development begins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function PricingPage() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const easing = [0.16, 1, 0.3, 1] as any;

    const currentCategory = pricingCategories.find(c => c.id === activeCategory)!;

    // Handle Deep Linking from Services Portal
    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && pricingCategories.some(c => c.id === hash)) {
                setActiveCategory(hash);
                // Ensure we scroll to the pricing section if needed
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        handleHashChange(); // Check on mount
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const getPriceDisplay = (price: string) => {
        if (price === "Custom") return "Custom";
        const val = parseInt(price.replace(',', ''));
        if (billingCycle === 'annual') {
            return Math.floor(val * 0.82).toString(); // Slightly different discount for annual one-time if applicable (legacy)
        }
        return price;
    };

    return (
        <main className="min-h-screen bg-[#020202] pt-32 relative overflow-hidden">
            <Header />

            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#FF6A00]/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easing }}
                        className="text-6xl md:text-8xl font-semibold tracking-tight text-white font-outfit mb-10"
                    >
                        Investment <br />
                        <span className="text-white/20">Protocols.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/40 text-xl font-light leading-relaxed mb-12"
                    >
                        Pricing built for every stage of growth. Select your technical sector to reveal tailored investment tiers.
                    </motion.p>

                    <div className="flex flex-col items-center gap-10">
                        {/* Sector Navigation */}
                        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] backdrop-blur-3xl w-full max-w-5xl mx-auto">
                            {pricingCategories.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => {
                                        setActiveCategory(c.id);
                                        if (hiddenBillingSectors.includes(c.id)) {
                                            setBillingCycle('monthly');
                                        }
                                    }}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-[12px] font-medium transition-all duration-500 group whitespace-nowrap ${activeCategory === c.id
                                        ? 'bg-[#FF6A00] text-white shadow-xl shadow-[#FF6A00]/20'
                                        : 'text-white/40 hover:text-white hover:bg-white/[0.05]'
                                        }`}
                                >
                                    <c.icon size={14} />
                                    <span className="font-inter">{c.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Billing Cycle Toggle */}
                        <AnimatePresence>
                            {!hiddenBillingSectors.includes(activeCategory) && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -20, height: 0 }}
                                    className="flex items-center gap-4 bg-[#121212]/50 border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setBillingCycle('monthly')}
                                        className={`px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all ${billingCycle === 'monthly' ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-white/30 hover:text-white'
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setBillingCycle('annual')}
                                        className={`px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all relative group ${billingCycle === 'annual' ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-white/30 hover:text-white'
                                            }`}
                                    >
                                        Annual
                                        <span className="absolute -top-3 -right-3 bg-[#FF6A00]/20 text-[#FF6A00] text-[8px] border border-[#FF6A00]/30 px-2 py-0.5 rounded-full font-bold">20% Save</span>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeCategory === 'blockchain' ? (
                        <motion.div
                            key="blockchain-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">🔗 Modular Blockchain Service Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Transparent • Scalable • Customizable)</p>
                            </div>
                            <ModularSectorBuilder data={modularBlockchain} />
                        </motion.div>
                    ) : activeCategory === 'web' ? (
                        <motion.div
                            key="web-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">🌐 Modular Web Platform Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Performance • Conversion • Scale)</p>
                            </div>
                            <ModularSectorBuilder data={modularWeb} />
                        </motion.div>
                    ) : activeCategory === 'ai' ? (
                        <motion.div
                            key="ai-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">🧠 Modular AI Solution Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Automation • Intelligence • Growth)</p>
                            </div>
                            <ModularSectorBuilder data={modularAI} />
                        </motion.div>
                    ) : activeCategory === 'growth' ? (
                        <motion.div
                            key="growth-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">📈 Modular Growth & Performance Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Organic • Paid • Conversion)</p>
                            </div>
                            <ModularSectorBuilder data={modularGrowth} />
                        </motion.div>
                    ) : activeCategory === 'automation' ? (
                        <motion.div
                            key="automation-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">⚡ Modular Business Automation Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Workflow • Sales • Operations)</p>
                            </div>
                            <ModularSectorBuilder data={modularAutomation} />
                        </motion.div>
                    ) : activeCategory === 'product' ? (
                        <motion.div
                            key="product-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">🛠️ Modular Product & Tool Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(MVP • SaaS • Internal Tools)</p>
                            </div>
                            <ModularSectorBuilder data={modularProduct} />
                        </motion.div>
                    ) : activeCategory === 'game' ? (
                        <motion.div
                            key="game-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">🎮 Modular Game & Interactive Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Indie • Mobile • PC/Console • Enterprise)</p>
                            </div>
                            <ModularSectorBuilder data={modularGame} />
                        </motion.div>
                    ) : activeCategory === 'brand' ? (
                        <motion.div
                            key="brand-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">✍️ Modular Copy & Brand Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Copy • Identity • Marketing • Strategy)</p>
                            </div>
                            <ModularSectorBuilder data={modularBrand} />
                        </motion.div>
                    ) : activeCategory === 'consulting' ? (
                        <motion.div
                            key="consulting-modular"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: easing }}
                        >
                            <div className="mb-20 text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">📊 Modular Consulting & Strategy Packages</h2>
                                <p className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs">(Strategy • Growth • Transformation • Advisory)</p>
                            </div>
                            <ModularSectorBuilder data={modularConsulting} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={activeCategory + billingCycle}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.6, ease: easing }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                        >
                            {(currentCategory.tiers as any[]).map((tier, i) => (
                                <div
                                    key={tier.name}
                                    className={`relative group bg-[#121212]/30 border rounded-[2.5rem] p-8 transition-all duration-700 flex flex-col h-full ${tier.popular
                                        ? 'border-[#FF6A00]/50 shadow-[0_0_80px_-20px_rgba(255,106,0,0.3)] bg-[#121212]/60'
                                        : 'border-white/[0.04] hover:border-white/[0.1]'
                                        }`}
                                >
                                    {tier.popular && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.08] via-transparent to-transparent opacity-100 rounded-[2.5rem] pointer-events-none" />
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6A00] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,106,0,0.5)] z-20">
                                                Best Fit
                                            </div>
                                        </>
                                    )}

                                    <div className="mb-10">
                                        <div className="flex flex-col gap-2 mb-10">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-semibold text-white font-outfit tracking-tight">{tier.name}</h3>
                                                {currentCategory.isRecurring && (
                                                    <span className="text-[10px] text-[#FF6A00] font-bold uppercase tracking-widest bg-[#FF6A00]/10 px-2 py-0.5 rounded-md">Recurring</span>
                                                )}
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                {tier.price !== 'Custom' && (
                                                    <span className="text-white/20 text-xs font-mono tracking-tighter">$</span>
                                                )}
                                                <span className="text-4xl font-semibold text-white tracking-tighter font-outfit">
                                                    {getPriceDisplay(tier.price)}
                                                </span>
                                                {currentCategory.isRecurring && tier.price !== 'Custom' && (
                                                    <span className="text-white/20 text-xs font-medium lowercase">/mo</span>
                                                )}
                                            </div>
                                            {/* Maintenance Display */}
                                            {(tier as any).maintenance && (
                                                <div className="mt-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                                    <span className="text-[10px] text-white/40 font-medium uppercase tracking-widest block mb-1">Optional Maintenance</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-white/20 text-[10px]">$</span>
                                                        <span className="text-sm font-semibold text-[#FF6A00]">
                                                            {(tier as any).maintenance === 'Custom' ? 'Custom' : (tier as any).maintenance}
                                                        </span>
                                                        <span className="text-white/20 text-[10px]">/mo</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">{currentCategory.description}</p>
                                    </div>

                                    <div className="space-y-4 mb-12 flex-1 pt-8 border-t border-white/[0.04]">
                                        {(tier.features as string[]).map((feature: string, j: number) => (
                                            <div key={j} className="flex items-start gap-3 group/li">
                                                <div className="w-2 h-2 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mt-1 group-hover/li:bg-[#FF6A00] transition-colors" />
                                                <span className="text-[11px] text-white/50 group-hover/li:text-white transition-colors leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4 relative">
                                        <button
                                            onClick={() => {
                                                const selection = {
                                                    type: 'tier',
                                                    tier: tier,
                                                    category: currentCategory,
                                                    billingCycle: billingCycle,
                                                    price: getPriceDisplay(tier.price)
                                                };
                                                localStorage.setItem('nexus_selected_plan', JSON.stringify(selection));
                                                router.push('/start?source=pricing');
                                            }}
                                            className={`w-full py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 group/btn ${tier.popular
                                                ? 'bg-[#FF6A00] text-white hover:shadow-[0_8px_25px_-10px_rgba(255,106,0,0.6)]'
                                                : 'bg-white text-black hover:bg-white/90'
                                                }`}>
                                            {tier.cta}
                                            <ArrowRight size={14} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Custom Enterprise Callout */}
                <div className="mt-40 p-16 bg-[#121212]/20 border border-white/[0.05] rounded-[4rem] text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF6A00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="max-w-2xl mx-auto relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mx-auto mb-10 shadow-2xl">
                            <Shield size={32} />
                        </div>
                        <h4 className="text-4xl font-semibold text-white mb-6 font-outfit">Can't find your specific protocol?</h4>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                            For global-scale infrastructure or highly complex AI orchestrations, we deploy a dedicated engineering cell to map out a custom technical blueprint.
                        </p>
                        <button className="bg-white text-black px-12 py-5 rounded-2xl font-bold tracking-tight hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                            Request Custom Enterprise Briefing
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
