import {
    Brain, Globe, LineChart, Zap, Layers,
    Gamepad2, PenTool, ClipboardList, Cpu
} from 'lucide-react';

export const pricingCategories = [
    {
        id: "ai",
        title: "AI Solutions",
        icon: Brain,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularAISectorBuilder
    },
    {
        id: "web",
        title: "Web Platforms",
        icon: Globe,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularWebBuilder
    },
    {
        id: "growth",
        title: "Growth & Performance",
        icon: LineChart,
        description: "Modular Recurring Packages",
        isRecurring: true,
        tiers: [] // Handled by ModularGrowthBuilder
    },
    {
        id: "automation",
        title: "Business Automation",
        icon: Zap,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularAutomationBuilder
    },
    {
        id: "product",
        title: "Product & Tool",
        icon: Layers,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularProductBuilder
    },
    {
        id: "game",
        title: "Game & Interactive",
        icon: Gamepad2,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularGameBuilder
    },
    {
        id: "brand",
        title: "Copy & Brand",
        icon: PenTool,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularBrandBuilder
    },
    {
        id: "consulting",
        title: "Consulting",
        icon: ClipboardList,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularConsultingBuilder
    },
    {
        id: "blockchain",
        title: "Blockchain Ecosystem",
        icon: Cpu,
        description: "Modular Service Packages",
        tiers: [] // Handled by ModularBlockchainBuilder
    }
];

export const modularBlockchain = {
    packages: [
        {
            id: "smart-contract",
            name: "Smart Contract Package",
            price: "2,500",
            description: "Best for: Token, NFT, utility contracts",
            included: [
                "1 custom smart contract",
                "Deployment on one network (e.g., Ethereum or Polygon)",
                "Basic security best practices",
                "Unit testing",
                "Basic documentation"
            ],
            notIncluded: [
                "Professional audit",
                "Multi-chain deployment",
                "Advanced tokenomics",
                "Upgradeable contracts"
            ],
            addOns: [
                { name: "Professional Security Audit", price: "2,000", when: "If launching publicly" },
                { name: "Upgradeable Contract Setup", price: "1,200", when: "If future changes expected" },
                { name: "Advanced Tokenomics Logic", price: "1,800", when: "Complex token utilities" },
                { name: "Multi-Chain Deployment", price: "1,200", when: "Expanding ecosystem", perUnit: "per chain" },
                { name: "Multi-Signature Access", price: "800", when: "Team-based control" }
            ],
            maintenance: [
                { name: "Basic Monitoring", price: "200" },
                { name: "Security + Upgrade Support", price: "400" }
            ],
            tip: "If your project involves public investors, always add Audit + Multi-Sig."
        },
        {
            id: "wallet-foundation",
            name: "Digital Wallet Package",
            price: "4,500",
            description: "Best for: Crypto apps, fintech startups",
            included: [
                "Custodial OR non-custodial wallet",
                "Single blockchain integration",
                "Send / Receive functionality",
                "Private key encryption",
                "Basic Web UI"
            ],
            notIncluded: [
                "Multi-chain support",
                "Staking",
                "Token swap",
                "Biometric login",
                "KYC"
            ],
            addOns: [
                { name: "Multi-Chain Support", price: "1,500", when: "Supporting multiple assets" },
                { name: "Token Swap Integration", price: "1,500", when: "In-app trading" },
                { name: "Staking Module", price: "2,000", when: "Passive income features" },
                { name: "Biometric Authentication", price: "700", when: "Mobile apps" },
                { name: "KYC Integration", price: "1,200", when: "Regulated markets" }
            ],
            maintenance: [
                { name: "Basic Updates", price: "300" },
                { name: "Security Monitoring + Node Mgmt", price: "600" }
            ],
            tip: "Start single-chain to reduce cost. Expand after user growth."
        },
        {
            id: "dapp-foundation",
            name: "DApp Development Package",
            price: "8,000",
            description: "Best for: DeFi MVP, NFT platform, DAO starter",
            included: [
                "1–2 smart contracts",
                "Web3 frontend",
                "Wallet connection",
                "Basic admin dashboard",
                "Deployment on one network"
            ],
            notIncluded: [
                "NFT marketplace engine",
                "DAO governance module",
                "Advanced analytics",
                "Cross-chain bridge"
            ],
            addOns: [
                { name: "NFT Marketplace Engine", price: "4,500", when: "Buying/selling NFTs" },
                { name: "DAO Governance Module", price: "3,000", when: "Community voting" },
                { name: "Tokenomics Design", price: "1,800", when: "Sustainable economy" },
                { name: "IPFS Storage", price: "900", when: "Decentralized storage" },
                { name: "Cross-Chain Bridge", price: "4,000", when: "Multi-network support" },
                { name: "Advanced Analytics Dashboard", price: "1,500", when: "Performance tracking" }
            ],
            maintenance: [
                { name: "Growth Plan", price: "600" },
                { name: "Full Monitoring + Security", price: "1,200" }
            ],
            tip: "Build MVP first. Add marketplace or DAO after validation."
        },
        {
            id: "enterprise-blockchain",
            name: "Enterprise Blockchain Package",
            price: "18,000",
            description: "Best for: Corporations integrating blockchain internally",
            included: [
                "Private blockchain setup",
                "2 validator nodes",
                "Role-based permissions",
                "API integration layer",
                "Infrastructure documentation"
            ],
            notIncluded: [
                "Custom consensus",
                "Large-scale node expansion",
                "24/7 DevOps",
                "Advanced scaling architecture"
            ],
            addOns: [
                { name: "Custom Consensus Mechanism", price: "6,000", when: "Specialized enterprise logic" },
                { name: "Additional Validator Node", price: "1,200", when: "Scaling network", perUnit: "per node" },
                { name: "Cloud Infrastructure Setup", price: "3,000", when: "Hybrid deployment" },
                { name: "24/7 DevOps Monitoring", price: "1,500", when: "High uptime requirement", isMonthly: true },
                { name: "Cross-System Bridge", price: "5,000", when: "Integration with external chains" }
            ],
            maintenance: [], // DevOps monitoring is in add-ons for enterprise
            tip: "Enterprises should include monitoring for uptime compliance."
        }
    ]
};

export const modularWeb = {
    packages: [
        {
            id: "starter-site",
            name: "Starter Website Package",
            price: "750",
            description: "Best for: Personal brands, coaches, startups",
            included: [
                "Up to 5 pages",
                "WordPress setup",
                "Premium theme configuration",
                "Mobile responsive design",
                "Basic contact form",
                "Basic on-page SEO",
                "Speed optimization",
                "1 revision round"
            ],
            notIncluded: [
                "E-commerce",
                "Booking systems",
                "Advanced SEO",
                "Custom design",
                "Membership system"
            ],
            addOns: [
                { name: "Additional Page", price: "100", when: "Expanding content", perUnit: "per page" },
                { name: "Advanced UI Customization", price: "400", when: "Unique branding" },
                { name: "Blog Setup", price: "250", when: "Content marketing" },
                { name: "Basic Analytics Setup", price: "150", when: "Traffic tracking" },
                { name: "Extra Revision Round", price: "150", when: "Design adjustments" }
            ],
            maintenance: [
                { name: "Basic Maintenance", price: "100" }
            ],
            tip: "If you plan to scale content, add Blog Setup from the beginning."
        },
        {
            id: "business-site",
            name: "Business Website Package",
            price: "1,800",
            description: "Best for: Growing businesses, service companies",
            included: [
                "Up to 10 pages",
                "Custom UI design",
                "Conversion-focused layout",
                "Lead generation forms",
                "Speed optimization",
                "Technical SEO setup",
                "Google Analytics integration",
                "2 revision rounds"
            ],
            notIncluded: [
                "Full e-commerce store",
                "Advanced automation",
                "Membership system",
                "CRM integration"
            ],
            addOns: [
                { name: "CRM Integration", price: "500", when: "Lead management" },
                { name: "Booking System", price: "600", when: "Appointments" },
                { name: "Advanced SEO Setup", price: "800", when: "Ranking strategy" },
                { name: "Landing Page Funnel", price: "700", when: "Paid ads campaigns" },
                { name: "Multilingual Setup", price: "500", when: "International audience" }
            ],
            maintenance: [
                { name: "Growth Maintenance", price: "250" }
            ],
            tip: "If you run ads, add Landing Page Funnel for better conversions."
        },
        {
            id: "ecommerce-site",
            name: "E-Commerce Website Package",
            price: "3,500",
            description: "Best for: Online stores, product brands",
            included: [
                "WooCommerce setup",
                "Up to 50 products",
                "Payment gateway integration",
                "Shipping setup",
                "Mobile optimization",
                "Product filtering",
                "Basic SEO",
                "2 revision rounds"
            ],
            notIncluded: [
                "Advanced automation",
                "Subscription system",
                "Marketplace system",
                "Custom plugin development"
            ],
            addOns: [
                { name: "Additional 50 Products", price: "500", when: "Larger inventory" },
                { name: "Subscription System", price: "800", when: "Recurring revenue" },
                { name: "Abandoned Cart Automation", price: "400", when: "Increase conversions" },
                { name: "Advanced Analytics Dashboard", price: "600", when: "Sales insights" },
                { name: "Marketplace (Multi-Vendor)", price: "1,800", when: "Multiple sellers" }
            ],
            maintenance: [
                { name: "Pro Maintenance", price: "400" }
            ],
            tip: "Add Abandoned Cart automation — it increases revenue by 10–20%."
        },
        {
            id: "custom-app",
            name: "Custom Web Application Package",
            price: "6,000",
            description: "Best for: SaaS, dashboards, platforms",
            included: [
                "Custom frontend + backend",
                "Admin dashboard",
                "User authentication",
                "Database setup",
                "API integration",
                "Basic security setup",
                "2 revision rounds"
            ],
            notIncluded: [
                "Advanced AI integration",
                "Payment subscription logic",
                "Complex role permissions",
                "Ongoing DevOps"
            ],
            addOns: [
                { name: "Subscription Billing System", price: "1,200", when: "SaaS monetization" },
                { name: "Advanced Role Permissions", price: "800", when: "Complex user types" },
                { name: "AI Integration", price: "2,000", when: "Automation features" },
                { name: "API Expansion", price: "1,000", when: "External integrations" },
                { name: "Cloud Infrastructure Setup", price: "1,500", when: "Scalable hosting" }
            ],
            maintenance: [
                { name: "SaaS Maintenance", price: "600" }
            ],
            tip: "If you're building SaaS, include Subscription Billing from the start."
        }
    ]
};

export const modularAI = {
    packages: [
        {
            id: "ai-chatbot",
            name: "AI Chatbot Starter",
            price: "1,200",
            description: "Best for: Small businesses needing automation",
            included: [
                "Custom AI chatbot setup",
                "Website integration",
                "Up to 100 FAQs trained",
                "Basic conversation flows",
                "Lead capture form",
                "1 language support",
                "Basic analytics dashboard"
            ],
            notIncluded: [
                "CRM integration",
                "Multi-language support",
                "WhatsApp integration",
                "Advanced AI training",
                "Custom API integrations"
            ],
            addOns: [
                { name: "WhatsApp Integration", price: "400", when: "Customer messaging" },
                { name: "CRM Integration", price: "500", when: "Lead automation" },
                { name: "Multi-Language Support", price: "350", when: "International audience" },
                { name: "Advanced AI Training", price: "600", when: "Complex queries" },
                { name: "Custom Branding UI", price: "300", when: "Brand alignment" }
            ],
            maintenance: [
                { name: "Basic AI Maintenance", price: "150" },
                { name: "Growth AI Maintenance", price: "300" }
            ],
            tip: "If you generate leads, always add CRM integration."
        },
        {
            id: "ai-automation",
            name: "AI Business Automation",
            price: "3,500",
            description: "Best for: Service companies & agencies",
            included: [
                "Workflow automation setup",
                "Email automation sequences",
                "CRM automation",
                "Data processing workflows",
                "Internal dashboard",
                "2 automation pipelines"
            ],
            notIncluded: [
                "AI predictive analytics",
                "Custom AI model",
                "Advanced integrations",
                "Enterprise security layer"
            ],
            addOns: [
                { name: "Additional Automation Pipeline", price: "600", when: "Complex processes" },
                { name: "Predictive Analytics", price: "1,200", when: "Forecasting" },
                { name: "AI Document Processing", price: "800", when: "Invoices/contracts" },
                { name: "API Integrations", price: "900", when: "External systems" },
                { name: "Advanced Reporting Dashboard", price: "700", when: "KPI tracking" }
            ],
            maintenance: [
                { name: "Automation Support", price: "350" },
                { name: "Advanced Monitoring", price: "600" }
            ],
            tip: "Start with 2 key automations that save the most time."
        },
        {
            id: "ai-saas",
            name: "AI SaaS Platform Development",
            price: "8,000",
            description: "Best for: Startups building AI-based products",
            included: [
                "Custom AI-powered web app",
                "User authentication",
                "Admin dashboard",
                "Basic AI model integration (API-based)",
                "Database setup",
                "Subscription-ready structure (basic)"
            ],
            notIncluded: [
                "Custom-trained AI model",
                "Advanced AI infrastructure",
                "Mobile app",
                "Enterprise-grade scaling"
            ],
            addOns: [
                { name: "Custom AI Model Training", price: "3,000", when: "Unique datasets" },
                { name: "Subscription Billing System", price: "1,200", when: "Monetization" },
                { name: "AI Recommendation Engine", price: "2,000", when: "Smart suggestions" },
                { name: "Mobile App Version", price: "4,000", when: "iOS/Android" },
                { name: "Cloud Infrastructure Scaling", price: "1,500", when: "High traffic" }
            ],
            maintenance: [
                { name: "SaaS Support Plan", price: "600" },
                { name: "Scale Plan", price: "1,200" }
            ],
            tip: "MVP first. Add custom model training after validation."
        },
        {
            id: "enterprise-ai",
            name: "Enterprise AI Integration",
            price: "15,000",
            description: "Best for: Large organizations",
            included: [
                "AI strategy consultation",
                "System architecture design",
                "AI workflow integration",
                "Secure internal deployment",
                "Staff training session",
                "3 AI automation systems"
            ],
            notIncluded: [
                "Dedicated AI infrastructure",
                "Custom deep learning models",
                "24/7 monitoring",
                "Multi-department scaling"
            ],
            addOns: [
                { name: "Custom AI Model Development", price: "6,000", when: "Industry-specific needs" },
                { name: "Dedicated AI Infrastructure", price: "5,000", when: "Data control" },
                { name: "24/7 AI Monitoring", price: "1,800", when: "High availability", isMonthly: true },
                { name: "Multi-Department Expansion", price: "3,000", when: "Large teams" },
                { name: "Data Security & Compliance Layer", price: "2,500", when: "Regulated industries" }
            ],
            maintenance: [],
            tip: "Enterprises should include compliance and monitoring."
        }
    ]
};

export const modularGrowth = {
    packages: [
        {
            id: "seo-growth",
            name: "SEO Growth Foundation",
            price: "800",
            isMonthly: true,
            description: "Best for: Businesses wanting organic growth",
            included: [
                "Website SEO audit",
                "Keyword research (up to 30 keywords)",
                "On-page optimization (5 pages/month)",
                "Technical SEO fixes (basic)",
                "Monthly performance report",
                "Google Search Console setup"
            ],
            notIncluded: [
                "Link building campaigns",
                "Content creation",
                "Advanced technical SEO",
                "International SEO"
            ],
            addOns: [
                { name: "Link Building (5 backlinks)", price: "400", when: "Improve rankings", isMonthly: true },
                { name: "SEO Content Writing (4 blogs)", price: "600", when: "Traffic expansion", isMonthly: true },
                { name: "Advanced Technical SEO", price: "500", when: "Site performance issues" },
                { name: "Local SEO Setup", price: "350", when: "City-based targeting" },
                { name: "International SEO", price: "700", when: "Global expansion" }
            ],
            maintenance: [],
            tip: "SEO works best when combined with content + backlinks."
        },
        {
            id: "paid-ads",
            name: "Paid Ads Performance",
            price: "1,000",
            isMonthly: true,
            description: "Best for: Fast lead generation & e-commerce sales",
            included: [
                "Campaign setup",
                "Audience research",
                "Ad copywriting",
                "Conversion tracking setup",
                "2 campaigns managed",
                "Monthly performance report"
            ],
            notIncluded: [
                "Ad spend (client pays directly)",
                "Landing page design",
                "Funnel automation",
                "Advanced retargeting"
            ],
            addOns: [
                { name: "Landing Page Design", price: "600", when: "Better conversions" },
                { name: "Advanced Retargeting", price: "400", when: "Recover lost visitors", isMonthly: true },
                { name: "Funnel Automation", price: "700", when: "Lead nurturing" },
                { name: "A/B Testing Setup", price: "300", when: "Improve ad performance" },
                { name: "Multi-Platform Ads", price: "500", when: "Expand channels", isMonthly: true }
            ],
            maintenance: [],
            tip: "Always combine ads with a high-converting landing page."
        },
        {
            id: "cro-performance",
            name: "Conversion Rate Optimization (CRO)",
            price: "1,200",
            isMonthly: true,
            description: "Best for: Businesses already receiving traffic",
            included: [
                "Website behavior analysis",
                "Heatmap tracking",
                "Funnel analysis",
                "2 A/B tests per month",
                "UX improvement suggestions",
                "Monthly optimization report"
            ],
            notIncluded: [
                "Complete website redesign",
                "Advanced analytics setup",
                "Paid ads management"
            ],
            addOns: [
                { name: "Advanced Analytics Dashboard", price: "500", when: "Deep data insights" },
                { name: "Landing Page Redesign", price: "800", when: "Low conversion rates" },
                { name: "Email Funnel Optimization", price: "600", when: "Lead nurturing" },
                { name: "Checkout Optimization", price: "500", when: "E-commerce focus" }
            ],
            maintenance: [],
            tip: "CRO increases revenue without increasing traffic."
        },
        {
            id: "scaling-performance",
            name: "Performance Scaling (Full Growth System)",
            price: "2,500",
            isMonthly: true,
            description: "Best for: Scaling startups & established businesses",
            included: [
                "Full SEO management",
                "Paid ads management (2 platforms)",
                "Conversion optimization",
                "Funnel strategy",
                "Monthly strategy call",
                "KPI tracking dashboard"
            ],
            notIncluded: [
                "Custom software development",
                "Major website rebuild",
                "PR campaigns"
            ],
            addOns: [
                { name: "Additional Ad Platform", price: "500", when: "More reach", isMonthly: true },
                { name: "Influencer Campaign Management", price: "700", when: "Brand growth" },
                { name: "PR & Authority Building", price: "900", when: "Brand credibility" },
                { name: "Advanced Data Intelligence", price: "800", when: "Scaling decisions" }
            ],
            maintenance: [],
            tip: "This package works best for businesses doing $10K+/month revenue."
        }
    ]
};

export const modularAutomation = {
    packages: [
        {
            id: "workflow-starter",
            name: "Workflow Automation Starter",
            price: "1,500",
            description: "Best for: Small businesses & startups",
            included: [
                "Automation strategy consultation",
                "Up to 2 workflow automations",
                "Email automation setup",
                "Lead capture automation",
                "Basic CRM integration",
                "Internal documentation"
            ],
            notIncluded: [
                "Advanced CRM pipelines",
                "Multi-department automation",
                "AI-based automation",
                "Custom dashboard"
            ],
            addOns: [
                { name: "Additional Workflow", price: "400", when: "More processes" },
                { name: "Advanced CRM Pipeline Setup", price: "600", when: "Sales tracking" },
                { name: "Appointment Booking Automation", price: "350", when: "Service businesses" },
                { name: "Payment Automation Integration", price: "500", when: "Online payments" },
                { name: "Basic Reporting Dashboard", price: "450", when: "Performance tracking" }
            ],
            maintenance: [
                { name: "Automation Support", price: "200" }
            ],
            tip: "Start with the 2 workflows that save the most time."
        },
        {
            id: "sales-marketing-automation",
            name: "Sales & Marketing Automation",
            price: "3,500",
            description: "Best for: Growing agencies & service companies",
            included: [
                "Sales funnel automation",
                "CRM pipeline optimization",
                "Email marketing sequences",
                "Lead scoring setup",
                "Follow-up automation",
                "Reporting dashboard"
            ],
            notIncluded: [
                "AI predictive scoring",
                "Multi-platform ad automation",
                "ERP integration",
                "Custom SaaS automation"
            ],
            addOns: [
                { name: "AI Lead Scoring", price: "1,000", when: "Smarter qualification" },
                { name: "WhatsApp Automation", price: "500", when: "Direct communication" },
                { name: "Ad Platform Automation", price: "700", when: "Ads + CRM sync" },
                { name: "Advanced Analytics Dashboard", price: "800", when: "KPI tracking" },
                { name: "Multi-Channel Automation", price: "900", when: "Omnichannel marketing" }
            ],
            maintenance: [
                { name: "Growth Automation Plan", price: "400" }
            ],
            tip: "If you’re spending on ads, integrate Ad Platform Automation."
        },
        {
            id: "operations-automation",
            name: "Operations Automation System",
            price: "6,000",
            description: "Best for: Businesses managing teams & operations",
            included: [
                "Operations audit",
                "Task automation workflows",
                "Team management system",
                "Project automation",
                "Internal dashboard",
                "Role-based access control"
            ],
            notIncluded: [
                "ERP integration",
                "Advanced data analytics",
                "Custom AI automation",
                "Cloud infrastructure scaling"
            ],
            addOns: [
                { name: "ERP Integration", price: "2,000", when: "Large operations" },
                { name: "Inventory Automation", price: "1,200", when: "Product businesses" },
                { name: "Advanced Performance Dashboard", price: "1,000", when: "Executive insights" },
                { name: "Payroll Automation", price: "900", when: "HR management" },
                { name: "API Integrations", price: "1,200", when: "External systems" }
            ],
            maintenance: [
                { name: "Operations Support Plan", price: "600" }
            ],
            tip: "Operations automation gives the highest ROI for scaling teams."
        },
        {
            id: "enterprise-automation",
            name: "Enterprise Automation Infrastructure",
            price: "12,000",
            description: "Best for: Mid-large companies & enterprises",
            included: [
                "Full automation strategy",
                "Multi-department workflows",
                "Secure deployment",
                "Custom dashboard",
                "5 major automation systems",
                "Staff training session"
            ],
            notIncluded: [
                "Custom AI model development",
                "Dedicated infrastructure",
                "24/7 monitoring",
                "Industry compliance layer"
            ],
            addOns: [
                { name: "AI Process Optimization", price: "3,000", when: "Predictive automation" },
                { name: "Dedicated Infrastructure Setup", price: "3,500", when: "Data control" },
                { name: "24/7 Monitoring", price: "1,500", when: "High uptime", isMonthly: true },
                { name: "Compliance & Security Layer", price: "2,000", when: "Regulated industries" },
                { name: "Multi-Location Deployment", price: "2,500", when: "Distributed teams" }
            ],
            maintenance: [],
            tip: "Enterprises benefit from AI process optimization long term."
        }
    ]
};

export const modularProduct = {
    packages: [
        {
            id: "mvp-builder",
            name: "MVP Product Builder",
            price: "5,000",
            description: "Best for: Startups validating ideas",
            included: [
                "Product strategy session",
                "UI/UX wireframes",
                "Frontend development",
                "Basic backend setup",
                "User authentication",
                "Admin dashboard",
                "Database setup",
                "2 revision rounds"
            ],
            notIncluded: [
                "Mobile app version",
                "Subscription billing",
                "Advanced AI integration",
                "Complex integrations",
                "Scalable cloud architecture"
            ],
            addOns: [
                { name: "Subscription Billing System", price: "1,200", when: "SaaS monetization" },
                { name: "Mobile Responsive Optimization", price: "600", when: "Mobile-heavy users" },
                { name: "API Integration (per API)", price: "800", when: "External services" },
                { name: "AI Feature Integration", price: "1,500", when: "Smart functionality" },
                { name: "Advanced UI/UX Custom Design", price: "1,000", when: "Premium look" }
            ],
            maintenance: [
                { name: "Basic Product Support", price: "400" }
            ],
            tip: "Launch MVP fast. Add features after user feedback."
        },
        {
            id: "saas-platform",
            name: "SaaS Platform Development",
            price: "12,000",
            description: "Best for: Subscription-based digital products",
            included: [
                "Full frontend + backend development",
                "Scalable database structure",
                "User roles & permissions",
                "Admin dashboard",
                "Payment gateway integration",
                "Subscription-ready setup",
                "Analytics dashboard",
                "Basic security hardening"
            ],
            notIncluded: [
                "Mobile apps",
                "AI custom model training",
                "Enterprise scaling",
                "24/7 DevOps monitoring"
            ],
            addOns: [
                { name: "iOS & Android App", price: "6,000", when: "Mobile product" },
                { name: "AI Recommendation Engine", price: "2,500", when: "Smart personalization" },
                { name: "Advanced Role Permissions", price: "1,000", when: "Complex user types" },
                { name: "Cloud Auto-Scaling Setup", price: "2,000", when: "High traffic" },
                { name: "Multi-Tenant Architecture", price: "2,500", when: "Enterprise SaaS" }
            ],
            maintenance: [
                { name: "SaaS Growth Plan", price: "800" },
                { name: "Scale Plan", price: "1,500" }
            ],
            tip: "If targeting enterprise clients, add multi-tenant architecture."
        },
        {
            id: "internal-tool",
            name: "Custom Internal Tool Development",
            price: "7,000",
            description: "Best for: Companies needing internal systems",
            included: [
                "Business process analysis",
                "Custom dashboard",
                "Role-based access",
                "Database setup",
                "Internal reporting system",
                "API integration (1 system)"
            ],
            notIncluded: [
                "ERP integration",
                "AI-based forecasting",
                "Multi-location deployment",
                "Advanced automation layers"
            ],
            addOns: [
                { name: "ERP Integration", price: "2,000", when: "Large operations" },
                { name: "Inventory Management Module", price: "1,500", when: "Product businesses" },
                { name: "AI Forecasting Module", price: "2,500", when: "Data-driven planning" },
                { name: "Multi-Location Access", price: "1,200", when: "Distributed teams" },
                { name: "Advanced Data Visualization", price: "1,000", when: "Executive insights" }
            ],
            maintenance: [
                { name: "System Support Plan", price: "600" }
            ],
            tip: "Internal tools save operational costs long-term."
        },
        {
            id: "advanced-product",
            name: "Advanced Digital Product (Enterprise-Grade)",
            price: "20,000",
            description: "Best for: Large-scale platforms & funded startups",
            included: [
                "Product architecture design",
                "Scalable backend infrastructure",
                "Advanced security implementation",
                "API ecosystem",
                "Cloud deployment setup",
                "QA & performance testing",
                "Technical documentation",
                "Team onboarding session"
            ],
            notIncluded: [
                "Dedicated DevOps team",
                "Custom AI research models",
                "Global server distribution",
                "Regulatory compliance framework"
            ],
            addOns: [
                { name: "Dedicated DevOps Setup", price: "5,000", when: "Large traffic" },
                { name: "Custom AI Model Development", price: "6,000", when: "Industry-specific needs" },
                { name: "Global CDN Deployment", price: "3,000", when: "International users" },
                { name: "Compliance Layer (GDPR etc.)", price: "2,500", when: "Regulated industries" },
                { name: "24/7 Monitoring", price: "2,000", when: "Mission-critical systems", isMonthly: true }
            ],
            maintenance: [],
            tip: "Enterprise products require scaling + compliance planning."
        }
    ]
};

export const modularGame = {
    packages: [
        {
            id: "indie-game-starter",
            name: "Indie Game Starter",
            price: "3,500",
            description: "Best for: Small indie games & simple interactive experiences",
            included: [
                "2D game development",
                "Single platform (Mobile OR PC)",
                "Basic game mechanics",
                "Up to 5 levels/boards",
                "Character setup & simple animations",
                "Basic UI & menu",
                "Deployment-ready build",
                "1 revision round"
            ],
            notIncluded: [
                "Multiplayer functionality",
                "Advanced physics/AI",
                "VR/AR support",
                "Monetization systems",
                "Additional levels/characters"
            ],
            addOns: [
                { name: "Multiplayer Mode", price: "1,200", when: "Online gameplay" },
                { name: "Extra Levels/Scenes", price: "300", when: "Expand content", perUnit: "per level" },
                { name: "In-App Purchases Integration", price: "700", when: "Monetization" },
                { name: "Advanced Animations", price: "500", when: "Smooth experience" },
                { name: "Leaderboard / Social Sharing", price: "400", when: "Engagement boost" }
            ],
            maintenance: [
                { name: "Game Support", price: "250" }
            ],
            tip: "Start with a small MVP game to test the market before scaling."
        },
        {
            id: "mobile-game-development",
            name: "Mobile Game Development",
            price: "7,000",
            description: "Best for: Mobile-first games, casual & mid-core",
            included: [
                "2D or basic 3D game",
                "Mobile Android & iOS support",
                "Up to 10 levels",
                "Character & enemy setup",
                "Game mechanics & scoring system",
                "Basic UI/UX",
                "Simple sound effects",
                "2 revision rounds"
            ],
            notIncluded: [
                "Multiplayer / co-op mode",
                "Advanced AI / NPC behavior",
                "In-App monetization (IAP / Ads)",
                "Analytics / tracking",
                "Cloud saves"
            ],
            addOns: [
                { name: "Multiplayer / Co-op", price: "2,000", when: "Social gameplay" },
                { name: "In-App Purchases Integration", price: "1,200", when: "Monetization" },
                { name: "Ad Network Integration", price: "800", when: "Revenue from ads" },
                { name: "Cloud Saves", price: "700", when: "Player retention" },
                { name: "Advanced AI & NPC Behavior", price: "1,500", when: "Intelligent gameplay" },
                { name: "Extra Levels / Worlds", price: "400", when: "Content expansion", perUnit: "per level" }
            ],
            maintenance: [
                { name: "Mobile Game Support", price: "400" }
            ],
            tip: "Monetization modules significantly increase ROI for mobile games."
        },
        {
            id: "pc-console-game",
            name: "PC / Console Game Development",
            price: "15,000",
            description: "Best for: Mid-core / PC games, Indie publishers",
            included: [
                "3D game development",
                "Single platform (PC / Console)",
                "Up to 15 levels",
                "Character design & rigging",
                "Core gameplay mechanics",
                "Basic physics & AI",
                "UI/UX & menus",
                "Soundtrack & basic SFX",
                "3 revision rounds"
            ],
            notIncluded: [
                "Multiplayer online",
                "DLC / Expansion packs",
                "VR / AR modules",
                "Advanced AI / procedural generation",
                "Analytics / live ops"
            ],
            addOns: [
                { name: "Multiplayer / Online Mode", price: "3,500", when: "Social gameplay" },
                { name: "DLC / Expansion Pack", price: "1,500", when: "Extra content", perUnit: "each" },
                { name: "VR / AR Support", price: "5,000", when: "Immersive experience" },
                { name: "Procedural Generation / AI NPC", price: "2,000", when: "Replayability" },
                { name: "Analytics & Live Ops", price: "1,200", when: "Track player behavior" }
            ],
            maintenance: [
                { name: "Game Live Ops", price: "700" }
            ],
            tip: "Start with core game first; expansions can be added after launch."
        },
        {
            id: "enterprise-interactive",
            name: "Enterprise / Gamified Interactive Experience",
            price: "25,000",
            description: "Best for: Gamified platforms, serious games, VR/AR training experiences",
            included: [
                "3D or VR/AR interactive experience",
                "Multi-platform deployment",
                "Custom mechanics & gamification",
                "Up to 20 scenes / levels",
                "Advanced UI/UX",
                "Soundtrack & SFX",
                "Admin dashboard for content management",
                "QA & testing"
            ],
            notIncluded: [
                "AI-driven NPC / procedural content",
                "Multiplayer MMO",
                "Cloud sync / analytics dashboards",
                "Custom server infrastructure"
            ],
            addOns: [
                { name: "AI NPC & Procedural Content", price: "5,000", when: "Dynamic experience" },
                { name: "Multiplayer / Online Collaboration", price: "6,000", when: "Social interaction" },
                { name: "Cloud Infrastructure Setup", price: "3,000", when: "Multi-user scaling" },
                { name: "Analytics Dashboard", price: "1,500", when: "Engagement & KPIs" },
                { name: "Custom VR / AR Interactions", price: "4,500", when: "Immersive experience" }
            ],
            maintenance: [],
            tip: "Enterprise experiences are ideal for training, simulations, or brand engagement campaigns."
        }
    ]
};

export const modularBrand = {
    packages: [
        {
            id: "starter-copy",
            name: "Starter Copy Package",
            price: "500",
            description: "Best for: Small businesses, personal brands, new startups",
            included: [
                "Brand messaging audit",
                "1-page website copy",
                "Social media captions (up to 5 posts)",
                "Basic product/service description",
                "1 revision round"
            ],
            notIncluded: [
                "Full website copy",
                "Ad copy / campaigns",
                "Email sequences",
                "Tone of voice guide",
                "Visual branding"
            ],
            addOns: [
                { name: "Additional Website Page Copy", price: "100", when: "Expand content", perUnit: "per page" },
                { name: "Social Media Pack (10 more posts)", price: "250", when: "Active posting" },
                { name: "Product Description Pack (5 products)", price: "200", when: "E-commerce or catalog" },
                { name: "Basic Tone of Voice Guide", price: "300", when: "Consistent messaging" },
                { name: "Email Campaign (1 sequence)", price: "400", when: "Lead nurturing" }
            ],
            maintenance: [
                { name: "Copy Updates", price: "150" }
            ],
            tip: "Start small; add more copy as your content needs grow."
        },
        {
            id: "brand-identity",
            name: "Brand Identity Package",
            price: "1,200",
            description: "Best for: Startups & small businesses building a professional identity",
            included: [
                "Logo design (1 concept, 2 revisions)",
                "Color palette & typography guide",
                "Basic brand style guide",
                "3 marketing collateral designs (e.g., business card, social post, flyer)",
                "Brand messaging framework"
            ],
            notIncluded: [
                "Full website copy",
                "Product packaging design",
                "Campaigns / ads",
                "Social media management"
            ],
            addOns: [
                { name: "Extra Logo Concepts", price: "250", when: "Explore more options" },
                { name: "Full Brand Style Guide", price: "400", when: "Detailed assets & rules" },
                { name: "Social Media Templates Pack", price: "300", when: "Consistency across posts" },
                { name: "Product Packaging Design", price: "500", when: "Physical product branding" },
                { name: "Email / Marketing Templates", price: "350", when: "Brand-aligned campaigns" }
            ],
            maintenance: [
                { name: "Brand Refresh", price: "200" }
            ],
            tip: "A strong visual identity + messaging framework ensures all future copy is cohesive."
        },
        {
            id: "web-marketing-copy",
            name: "Web & Marketing Copy Package",
            price: "1,500",
            description: "Best for: Businesses looking to optimize conversions & messaging",
            included: [
                "Full website copy (up to 10 pages)",
                "Home page + About + Services",
                "Lead generation / CTA optimization",
                "2 blog posts or articles",
                "Basic SEO keyword integration",
                "2 revision rounds"
            ],
            notIncluded: [
                "Advanced SEO copywriting",
                "Ad campaigns",
                "Email sequences",
                "Social media content"
            ],
            addOns: [
                { name: "Additional Blog / Article", price: "150", when: "Ongoing content marketing", perUnit: "per post" },
                { name: "Ad Copywriting", price: "300", when: "Paid campaigns" },
                { name: "SEO Advanced Copy", price: "400", when: "Target competitive keywords" },
                { name: "Email Sequence (up to 5 emails)", price: "400", when: "Lead nurturing" },
                { name: "Landing Page Copy", price: "250", when: "Conversion-focused pages", perUnit: "per page" }
            ],
            maintenance: [
                { name: "Content Refresh", price: "300" }
            ],
            tip: "Website + blog + email combo = maximum lead capture."
        },
        {
            id: "full-branding-marketing",
            name: "Full Branding & Marketing Suite",
            price: "4,500",
            description: "Best for: Scaling businesses, product launches, agencies",
            included: [
                "Brand identity (logo, colors, typography, style guide)",
                "Full website copy (up to 15 pages)",
                "5 marketing collateral pieces",
                "5 blog posts / articles",
                "Social media content pack (10 posts)",
                "Email marketing sequence (5 emails)",
                "Campaign messaging & positioning framework",
                "3 revision rounds"
            ],
            notIncluded: [
                "Paid ad campaigns",
                "Video content production",
                "Physical product packaging",
                "Advanced SEO & analytics"
            ],
            addOns: [
                { name: "Additional Blog / Article", price: "150", when: "Content marketing expansion", perUnit: "per post" },
                { name: "Paid Ad Copywriting", price: "500", when: "Campaigns on Google, FB, IG" },
                { name: "Video Script Writing", price: "400", when: "Marketing videos" },
                { name: "Advanced SEO Copy", price: "400", when: "Improve ranking & reach" },
                { name: "Social Media Monthly Plan", price: "350", when: "Ongoing content strategy", isMonthly: true }
            ],
            maintenance: [],
            tip: "Combine this package with Growth & Performance services for maximum results."
        }
    ]
};

export const modularConsulting = {
    packages: [
        {
            id: "strategy-session-starter",
            name: "Strategy Session Starter",
            price: "500",
            description: "Best for: Individuals or small businesses needing guidance",
            included: [
                "1-hour consultation (Zoom / in-person)",
                "Business or project assessment",
                "High-level recommendations",
                "Actionable next steps summary",
                "1 follow-up email"
            ],
            notIncluded: [
                "Deep-dive reports",
                "Implementation support",
                "Multiple sessions"
            ],
            addOns: [
                { name: "Additional 1-Hour Session", price: "250", when: "More guidance / Q&A" },
                { name: "Detailed Action Plan Report", price: "400", when: "Step-by-step implementation" },
                { name: "SWOT & Market Analysis", price: "500", when: "In-depth understanding" },
                { name: "Follow-up Coaching Session", price: "300", when: "Track progress" },
                { name: "Industry Benchmarking Report", price: "350", when: "Competitive insights" }
            ],
            maintenance: [
                { name: "Consulting Support", price: "150" }
            ],
            tip: "Perfect for evaluating a single project or business decision before committing to a full program."
        },
        {
            id: "business-growth-consulting",
            name: "Business Growth Consulting",
            price: "1,500",
            description: "Best for: SMEs and startups aiming to scale",
            included: [
                "2-hour strategy consultation",
                "Growth opportunity assessment",
                "Marketing & sales audit",
                "Digital tools & technology review",
                "Actionable growth plan",
                "2 follow-up emails"
            ],
            notIncluded: [
                "Hands-on implementation",
                "Employee training",
                "Advanced reporting or dashboards"
            ],
            addOns: [
                { name: "Marketing Strategy Deep Dive", price: "500", when: "Optimize campaigns & channels" },
                { name: "Sales Funnel Review & Recommendations", price: "400", when: "Improve conversion" },
                { name: "Tech & AI Implementation Plan", price: "600", when: "Automation & AI guidance" },
                { name: "Employee Training Session", price: "350", when: "Upskill team" },
                { name: "KPI Dashboard Setup", price: "500", when: "Track performance" }
            ],
            maintenance: [
                { name: "Growth Support", price: "300" }
            ],
            tip: "Combine with Growth & Performance services for faster results."
        },
        {
            id: "digital-transformation-consulting",
            name: "Digital Transformation Consulting",
            price: "3,500",
            description: "Best for: Businesses integrating AI, blockchain, automation, or SaaS solutions",
            included: [
                "4-hour deep-dive consultation",
                "Technology & systems audit",
                "AI, web, automation, blockchain assessment",
                "Integration strategy & roadmap",
                "Implementation recommendations",
                "3 follow-up emails"
            ],
            notIncluded: [
                "Actual software development",
                "Project management",
                "Ongoing tech support"
            ],
            addOns: [
                { name: "Detailed Implementation Roadmap", price: "800", when: "Step-by-step guidance" },
                { name: "Technology Stack Selection", price: "600", when: "Choose optimal tools" },
                { name: "Workflow Automation Recommendations", price: "500", when: "Improve efficiency" },
                { name: "Staff Training Workshop", price: "700", when: "Adoption & onboarding" },
                { name: "KPI Monitoring Setup", price: "500", when: "Track digital transformation success" }
            ],
            maintenance: [
                { name: "Digital Support", price: "500" }
            ],
            tip: "Focus first on systems with the biggest ROI."
        },
        {
            id: "enterprise-consulting-advisory",
            name: "Enterprise Consulting & Advisory",
            price: "8,000",
            description: "Best for: Large companies & high-budget projects",
            included: [
                "8-hour strategy & advisory sessions",
                "Full business audit",
                "Market & competitor analysis",
                "Multi-department digital & operational assessment",
                "Roadmap for technology, AI, automation, and growth",
                "5 follow-up emails",
                "Executive presentation & recommendations"
            ],
            notIncluded: [
                "Implementation of recommendations",
                "Ongoing project management",
                "Staff hiring & training"
            ],
            addOns: [
                { name: "Implementation Advisory", price: "2,000", when: "Supervise execution" },
                { name: "Dedicated KPI Dashboard", price: "1,500", when: "Monitor results" },
                { name: "Executive Team Workshop", price: "1,200", when: "Leadership alignment" },
                { name: "Multi-department Training", price: "2,000", when: "Enterprise-wide adoption" },
                { name: "Compliance & Risk Analysis", price: "1,800", when: "Industry-specific requirements" }
            ],
            maintenance: [],
            tip: "Enterprises should include KPI monitoring to measure success post-consulting."
        }
    ]
};
