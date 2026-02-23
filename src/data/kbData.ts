import { Cpu, Shield, BarChart, Globe, Zap, Layers, Gamepad2, PenTool, ClipboardList, BookOpen, MessageSquare, Target } from 'lucide-react';

export interface KBArticle {
    id: string;
    question: string;
    answer: string;
    tags: string[];
    intent: 'Question' | 'Guide' | 'Troubleshoot' | 'Pricing' | 'Integration';
    exampleQueries: string[];
    priority: 'High' | 'Medium' | 'Low';
    category: string;
    subcategory: string;
    link?: { label: string, href: string };
}

export interface KBCategory {
    id: string;
    title: string;
    icon: any;
    subcategories: string[];
    articles: KBArticle[];
}

export const kbData: KBCategory[] = [
    {
        id: "company",
        title: "Company Overview",
        icon: Globe,
        subcategories: ["About NEONBYTE", "Mission & Vision", "Core Values", "Team Overview", "Partners"],
        articles: [
            {
                id: "co-1",
                question: "What does NEONBYTE do?",
                answer: "NEONBYTE provides enterprise-grade AI solutions, automation systems, web and platform development, marketing performance, and digital product development. We engineer the neural infrastructure of modern business.",
                tags: ["General", "Services", "Overview"],
                intent: "Question",
                exampleQueries: ["Who is NEONBYTE?", "What are your services?", "Company overview"],
                priority: "High",
                category: "Company Overview",
                subcategory: "About NEONBYTE"
            },
            {
                id: "co-2",
                question: "Who can use NEONBYTE services?",
                answer: "Businesses of all sizes, from startups seeking an MVP to large enterprises requiring organization-wide AI integration and digital transformation.",
                tags: ["Customers", "Eligibility"],
                intent: "Question",
                exampleQueries: ["Is NEONBYTE for me?", "Do you work with startups?", "Enterprise clients"],
                priority: "Medium",
                category: "Company Overview",
                subcategory: "About NEONBYTE"
            }
        ]
    },
    {
        id: "services",
        title: "Services Knowledge",
        icon: Zap,
        subcategories: ["AI Solutions", "Web & Platform", "Growth", "Automation", "Product", "Game", "Brand", "Consulting"],
        articles: [
            {
                id: "srv-1",
                question: "What is included in AI Starter?",
                answer: "The AI Starter package includes a comprehensive AI audit, opportunity mapping, small chatbot setup, tool recommendations, and a phased implementation roadmap.",
                tags: ["AI", "Pricing", "Starter"],
                intent: "Pricing",
                exampleQueries: ["AI Starter details", "How much for AI audit?", "Initial AI services"],
                priority: "High",
                category: "Services Knowledge",
                subcategory: "AI Solutions",
                link: { label: "View MailMind Case Study", href: "/products" }
            },
            {
                id: "srv-2",
                question: "What is Enterprise AI?",
                answer: "Enterprise AI involves full-scale neural infrastructure, organization-wide integration, dedicated engineering support, continuous optimization, and a robust governance framework.",
                tags: ["AI", "Enterprise", "Architecture"],
                intent: "Question",
                exampleQueries: ["Large scale AI", "Enterprise grade intelligence", "AI infrastructure"],
                priority: "High",
                category: "Services Knowledge",
                subcategory: "AI Solutions"
            }
        ]
    },
    {
        id: "products",
        title: "Products & Tools",
        icon: Layers,
        subcategories: ["HybridPOS", "Automation Hub", "AI Lead Engine", "Content AI Studio", "Analytics Suite", "ShiftTrack"],
        articles: [
            {
                id: "prod-1",
                question: "How does HybridPOS integrate with my store?",
                answer: "HybridPOS connects your inventory, sales, and employee management with AI automation, real-time dashboards, and analytics via our secure API layer.",
                tags: ["POS", "Retail", "Integration"],
                intent: "Integration",
                exampleQueries: ["Setting up HybridPOS", "POS inventory sync", "Store automation"],
                priority: "High",
                category: "Products & Tools",
                subcategory: "HybridPOS",
                link: { label: "Explore HybridPOS Suite", href: "/products" }
            },
            {
                id: "prod-2",
                question: "Can I customize Automation Hub for my workflow?",
                answer: "Yes. Automation Hub allows for bespoke API integrations, custom CRM logic, and workflow orchestration tailored to your specific business operations.",
                tags: ["Automation", "Workflow", "Customization"],
                intent: "Guide",
                exampleQueries: ["Custom automation", "Workflows setup", "Integration Hub"],
                priority: "Medium",
                category: "Products & Tools",
                subcategory: "Automation Hub"
            }
        ]
    },
    {
        id: "pricing",
        title: "Pricing & Packages",
        icon: BarChart,
        subcategories: ["AI Pricing", "Web Pricing", "Growth Pricing", "Automation Pricing", "Product Pricing", "Game Pricing", "Brand Pricing", "Consulting Pricing"],
        articles: [
            {
                id: "pri-ai",
                question: "What are the AI project tiers?",
                answer: "AI Solution tiers start from 'AI Launchpad' ($1,500 + $150/mo maintenance) for audits and 1 chatbot, up to 'AI Innovator' ($10,000 + $1,000/mo) for custom model orchestration. Enterprise suites are custom-quoted.",
                tags: ["AI", "Pricing", "Launchpad", "Accelerator", "Intelligence"],
                intent: "Pricing",
                exampleQueries: ["How much is AI?", "AI Launchpad features", "Accelerator price"],
                priority: "High",
                category: "Pricing & Packages",
                subcategory: "AI Pricing",
                link: { label: "View All AI Tiers", href: "/pricing" }
            },
            {
                id: "pri-web",
                question: "How do you price Web and SaaS projects?",
                answer: "Web sites start at $1,200 ($100/mo maint). Custom Apps start at $5,000 ($400/mo maint) and SaaS Platforms start at $8,500 ($700/mo maint). Custom Enterprise Platforms require a consultation.",
                tags: ["Web", "SaaS", "Pricing", "App"],
                intent: "Pricing",
                exampleQueries: ["SaaS build cost", "Custom app pricing", "Starter site features"],
                priority: "High",
                category: "Pricing & Packages",
                subcategory: "Web Pricing",
                link: { label: "Web Comparison", href: "/pricing" }
            },
            {
                id: "pri-grow",
                question: "What is your Growth Marketing model?",
                answer: "Marketing is a monthly recurring model starting at $450/mo for SEO Foundations, up to $2,500/mo for the Full Growth Engine including ads, automation, and analytics.",
                tags: ["Marketing", "SEO", "Ads", "Pricing", "Recurring"],
                intent: "Pricing",
                exampleQueries: ["Monthly SEO price", "Growth package features", "How much for ads?"],
                priority: "High",
                category: "Pricing & Packages",
                subcategory: "Growth Pricing"
            }
        ]
    },
    {
        id: "onboarding",
        title: "Onboarding & Support",
        icon: MessageSquare,
        subcategories: ["Getting Started", "Account Setup", "Product Setup", "Integration Guides", "Technical Support"],
        articles: [
            {
                id: "onb-1",
                question: "How do I start with NEONBYTE services?",
                answer: "Start by scheduling a technical strategy call. We will then select your package and assign an onboarding team to create your technical roadmap.",
                tags: ["Onboarding", "Process", "Sales"],
                intent: "Guide",
                exampleQueries: ["Sign up process", "How to start", "Onboarding roadmap"],
                priority: "High",
                category: "Onboarding & Support",
                subcategory: "Getting Started"
            },
            {
                id: "onb-2",
                question: "How do I contact support?",
                answer: "Technical support is available via your dashboard chat, email (support@neonbyte.com), or by scheduling a live engineering consultation.",
                tags: ["Support", "Contact", "Help"],
                intent: "Question",
                exampleQueries: ["I need help", "Support email", "Talk to an engineer"],
                priority: "High",
                category: "Onboarding & Support",
                subcategory: "Technical Support"
            }
        ]
    },
    {
        id: "technical",
        title: "Technical Documentation",
        icon: Cpu,
        subcategories: ["API Documentation", "AI Model Guides", "Integration Instructions", "Deployment Guides", "Security & Compliance"],
        articles: [
            {
                id: "tech-1",
                question: "How do I integrate NEONBYTE API with my CRM?",
                answer: "Authenticate via your secure token, then connect your CRM endpoints using our provided technical templates and SDKs.",
                tags: ["Technical", "API", "CRM"],
                intent: "Integration",
                exampleQueries: ["API setup", "Connecting CRM", "Technical integration"],
                priority: "High",
                category: "Technical Documentation",
                subcategory: "API Documentation"
            },
            {
                id: "tech-2",
                question: "How secure is NEONBYTE AI?",
                answer: "Our AI systems are end-to-end encrypted, GDPR compliant, and follow strict SOC2-type enterprise security protocols and governance.",
                tags: ["Security", "Compliance", "Privacy"],
                intent: "Question",
                exampleQueries: ["Data safety", "Privacy standards", "AI security"],
                priority: "High",
                category: "Technical Documentation",
                subcategory: "Security & Compliance"
            }
        ]
    },
    {
        id: "best-practices",
        title: "Best Practices",
        icon: Target,
        subcategories: ["AI Adoption", "Workflow Automation", "Marketing Growth", "SaaS Optimization", "Game Dev"],
        articles: [
            {
                id: "bp-1",
                question: "How do I maximize AI impact in my operations?",
                answer: "Identify high-value repetitive tasks first. Automate incrementally, integrate data dashboards for insights, and scale based on ROI performance.",
                tags: ["Strategy", "AI", "Efficiency"],
                intent: "Guide",
                exampleQueries: ["AI success tips", "Implementation strategy", "Business ROI"],
                priority: "Medium",
                category: "Best Practices",
                subcategory: "AI Adoption"
            }
        ]
    }
];
