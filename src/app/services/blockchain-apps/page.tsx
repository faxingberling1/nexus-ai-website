'use client';

import React from 'react';
import { Cpu, Shield, Link as LinkIcon, Database, Code, Globe, Lock, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import ImmersivePortal from '@/components/ImmersivePortal';

export default function BlockchainAppsPage() {
    return (
        <ImmersivePortal
            title="Blockchain Apps"
            badge="Web3 & Decentralization"
            description="Secure Web3 infrastructure including custom wallet creation, smart contract audits, and decentralized service integration for enterprise scale."
            icon={Cpu}
            features={[
                {
                    icon: Shield,
                    title: "Wallet Creation",
                    description: "Custom non-custodial and custodial wallet solutions for seamless user onboarding and secure asset management."
                },
                {
                    icon: Code,
                    title: "Smart Contracts",
                    description: "Audited, high-performance smart contracts built for Ethereum, Solana, and other leading ecosystems."
                },
                {
                    icon: LinkIcon,
                    title: "DeFi Integration",
                    description: "Connect your existing business infrastructure to the decentralized world with standard protocols and custom bridges."
                }
            ]}
            overview="We specialize in bridging the gap between traditional enterprise systems and the decentralized web. Our focus is on building high-integrity blockchain solutions that provide transparency and security without compromising performance."
            deliverables={[
                "Custom Wallet Architectures",
                "Audited Smart Contracts",
                "dApp Frontend & Integration",
                "Private Blockchain Networks",
                "Tokenomics & DAO Structures"
            ]}
            approach={[
                {
                    title: "Ecosystem Analysis",
                    description: "We evaluate the right blockchain network for your specific use case, considering gas costs, scalability, and security requirements."
                },
                {
                    title: "Architecture Design",
                    description: "Developing robust on-chain and off-chain sync strategies to ensure your data remains consistent across decentralized networks."
                },
                {
                    title: "Secure Development",
                    description: "Writing gas-optimized solidity and rust code followed by rigorous testing and multi-stage security audits."
                },
                {
                    title: "Integration & Launch",
                    description: "Deploying production-ready dApps and connecting them to your legacy enterprise infrastructure via secure gateways."
                }
            ]}
            integration={{
                title: "The Web3 Bridge.",
                description: "Our infrastructure allows for seamless data flow between legacy databases and on-chain state, providing a unified view of your operations.",
                points: [
                    { title: "On-Chain Sync", icon: Database, desc: "Real-time synchronization between blockchain state and your core database." },
                    { title: "Secure Custody", icon: Lock, desc: "MPC-based security for managing enterprise assets and private keys." },
                    { title: "Protocol Adapter", icon: Zap, desc: "Standardized layers for interacting with multiple L1 and L2 networks." },
                    { title: "Identity Layer", icon: Globe, desc: "Decentralized identity (DID) systems for secure user authentication." }
                ],
                visual: (
                    <div className="relative h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F7931A]/10 to-transparent blur-3xl opacity-30" />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px #F7931A", "0 0 40px #F7931A33", "0 0 0px #F7931A"] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-40 h-40 rounded-full bg-white/[0.02] border border-[#F7931A] flex items-center justify-center relative z-20"
                        >
                            <Cpu className="w-16 h-16 text-[#F7931A]" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-[-20px] rounded-full border border-dashed border-[#F7931A]/20" />
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px] rounded-full border border-dashed border-[#F7931A]/10" />
                        </motion.div>
                        {[...Array(6)].map((_, i) => (
                            <motion.div key={i} style={{ rotate: i * 60 }} className="absolute inset-0 flex items-center justify-end">
                                <div className="w-[180px] h-[1px] bg-gradient-to-r from-[#F7931A]/50 to-transparent relative">
                                    <motion.div animate={{ right: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }} className="absolute top-[-2px] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                                    <div className="absolute right-[-10px] top-[-10px] w-5 h-5 rounded bg-white/[0.03] border border-white/10 backdrop-blur-md" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
            }}
            techStack={[
                { name: "Ethereum", use: "L1 Network" },
                { name: "Solidity", use: "Smart Contracts" },
                { name: "Rust", use: "Solana/Polkadot" },
                { name: "Web3.js", use: "Blockchain API" },
                { name: "Hardhat", use: "Development" },
                { name: "The Graph", use: "Indexing" },
                { name: "IPFS", use: "Storage" },
                { name: "Metamask", use: "Wallet Interface" },
                { name: "Chainlink", use: "Oracle Data" },
                { name: "OpenZeppelin", use: "Security Standards" },
                { name: "Alchemy", use: "Node Infrastructure" },
                { name: "Gnosis Safe", use: "Safe Multisig" }
            ]}
        />
    );
}
