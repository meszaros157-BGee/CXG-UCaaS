import {
  Phone,
  MessageSquare,
  Mail,
  Globe,
  Ticket,
  MessageCircle,
  Languages,
  Brain,
  BarChart3,
  Bot,
  BookOpen,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Headphones,
  Share2,
  PhoneCall,
  Instagram,
  Workflow,
  ShieldCheck,
  LayoutDashboard,
  Cpu,
} from "lucide-react";
import type {
  HeroContent,
  OverviewContent,
  TrackRecordContent,
  AboutContent,
  PlatformContent,
  InvestmentContent,
  TermsContent,
  AcceptanceContent,
  NavItem,
} from "./types";

export const navigation: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "About CXG", href: "#about" },
  { label: "Track Record", href: "#track-record" },
  { label: "Platform", href: "#platform" },
  { label: "Terms", href: "#terms" },
];

export const hero: HeroContent = {
  badge: "",
  headline: "Unified Communication",
  subheadline: "Integrated Experiences",
  description:
    "A fully managed, omni-channel customer engagement platform that enables you to deliver consistent, measurable customer experiences across Voice, WhatsApp, SMS, Email, Chat and Social all supported by a unified and single desktop and view of your Customer underpinned with CRM-enabled workflows.",
  primaryCta: { label: "About CXG", href: "#about" },
  secondaryCta: { label: "Explore Platform", href: "#platform" },
};

export const overview: OverviewContent = {
  sectionLabel: "Overview",
  headline: "Why a Unified Approach",
  description:
    "By outsourcing the setup and support of your Contact Centre platform, your organisation unlocks time and focus for long-term strategic development\u2014while improving service consistency, performance management, and cost-to-serve.",
  points: [
    {
      icon: TrendingUp,
      title: "Strategic Outsourcing",
      description:
        "Focus internal teams on core business while specialist partners deliver the platforms, capability, and support required to scale customer engagement efficiently.",
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description:
        "Understand how customers achieve their goals across time, channels, and touchpoints\u2014producing a customer-centric view that drives better process design and improved outcomes.",
    },
    {
      icon: Headphones,
      title: "Multi-Channel Enablement",
      description:
        "Customers can interact and transact across multiple channels and functions\u2014marketing, sales, service\u2014in a way that is convenient to them, supported by agents or self-service.",
    },
  ],
};

export const trackRecord: TrackRecordContent = {
  sectionLabel: "Track Record",
  headline: "Proven Excellence & Awards",
  description:
    "A long-standing track record across digital innovation, customer experience delivery, and outsourced partnership excellence.",
  stats: [
    { value: "28+", label: "Years of Experience" },
    { value: "100+", label: "Premier & Corporate Brands" },
    { value: "6M+", label: "Calls Handled" },
    { value: "R1.6B", label: "In Sales Generated" },
  ],
  awards: [
    {
      title: "Service Excellence & Innovation",
      description: "Multiple awards recognising outstanding service delivery and innovative solutions.",
    },
    {
      title: "BPESA Recognition",
      description: "Service provider wins and operator finalist placements across multiple years.",
    },
    {
      title: "Contact Centre World",
      description: "Regional winner and global finalist for contact centre operations excellence.",
    },
    {
      title: "Technical Innovation",
      description: "Consistent finalist positions for outsourcing excellence and technical innovation.",
    },
    {
      title: "View Our Work",
      description: "Explore our portfolio of customer experience projects and success stories across industries.",
      href: "https://www.cxg.co.za/works",
    },
  ],
};

export const about: AboutContent = {
  sectionLabel: "#\u2665DoingSomethingGreat",
  headline: "About CXG",
  description:
    "CXG remains a leading South African on-demand integrated customer experience provider serving 100+ premier and corporate brands, with delivery experience extending into the United Kingdom, North America, Australia, and New Zealand.",
  tagline:
    "With a track record spanning 27 years, we remain the leading On-Demand Integrated Customer Experience provider. We are accredited, certified and a trusted local and global premier digital partner.",
  pillars: [
    "Customer Obsessed",
    "Experience Driven",
    "Growth Enabling",
    "Value Creating",
  ],
  highlights: [
    "Implementation of complex CX strategies underpinned by robust, scalable technology",
    "Identification and reporting on bespoke critical success factors and KPIs",
    "Balanced metrics that support customer value and customer-focused processes",
    "Seamless omni-channel customer experience delivery",
    "Consistent delivery through the EEQ framework (Efficiency, Effectiveness, Quality)",
    "True on-demand scalability across People, Process, and Technology",
    "Empowerment through the learn-and-earn model with the Maharishi Institute",
  ],
  stats: [
    { value: "28", label: "Years in Operation" },
    { value: "100+", label: "Brands Served" },
    { value: "4", label: "Continents" },
  ],
};

export const platform: PlatformContent = {
  sectionLabel: "QContact Platform",
  headline: "The Complete Communication Platform",
  description:
    "QContact is the complete communication platform\u2014calls, emails, social media, WhatsApp, live chat, and more connected to customer data in a single unified interface. Powered by Microsoft Azure\u2019s global network for reliable, low-latency service.",
  stats: [
    { value: "10+", label: "Integrated Channels" },
    { value: "35", label: "11 SA & 24 European Languages" },
    { value: "24/7", label: "AI Self-Service" },
    { value: "100%", label: "Interaction Recording" },
  ],
  channels: [
    {
      icon: Phone,
      name: "Voice",
      tagline: "Crystal-clear global telephony on Microsoft Azure",
      description:
        "A highly available and resilient voice network running on Microsoft Azure\u2014the same global network used by Microsoft Teams\u2014ensuring low-latency, reliable connections every time. Use built-in telephony or plug in an existing SIP carrier via Bring Your Own Carrier (BYOC).",
      features: [
        "Inbound & outbound calling on Microsoft Azure\u2019s global network",
        "Bring Your Own Carrier (BYOC) SIP trunk support",
        "Automated outbound dialler with multiple dialling modes",
        "IVR, skills-based, sticky agent, and priority-based routing",
        "Drag-and-drop visual IVR builder with real-time changes",
        "PCI-compliant call recording with automatic transcription",
        "Live listen, whisper coaching, and call takeover",
        "Overflow routing to alternative departments during peaks",
      ],
      highlight: "Microsoft Azure powered",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      tagline: "Official Business API with free inbound voice",
      description:
        "Free WhatsApp integration using the official Business API\u2014no third party, no setup fees, up and running in minutes. Customers can call over WhatsApp with calls routed directly into the contact centre, with full Agentic AI and IVR support.",
      features: [
        "Official WhatsApp Business API\u2014no third-party fees",
        "WhatsApp Voice with free inbound calls for both parties",
        "Automated menus for order status, fault finding, and self-service",
        "Natural Language Processing for 24/7 query resolution",
        "Seamless handoff from AI chatbot to live agent",
        "Broadcast messaging and proactive notifications",
      ],
      highlight: "32% of all interactions",
    },
    {
      icon: Mail,
      name: "Email",
      tagline: "Full-context email with threading and SLA tracking",
      description:
        "Respond to customer emails with complete context across previous touchpoints. With over 300 billion emails sent daily, fast response capability is critical. Full threading, templates, and SLA tracking are built in.",
      features: [
        "Complete conversation history across all channels",
        "Email threading with template responses",
        "SLA tracking and automated escalations",
        "Unified timeline so customers never repeat themselves",
      ],
    },
    {
      icon: MessageSquare,
      name: "SMS",
      tagline: "High-impact messaging with 95% open rates",
      description:
        "SMS campaigns average a 95% open rate compared to email\u2019s 21%, making it one of the most effective outreach channels. Reach customers with text messaging workflows, automated notifications, and campaign management.",
      features: [
        "Outbound SMS campaigns with high deliverability",
        "Automated notification workflows and reminders",
        "Two-way conversational SMS",
        "Campaign analytics and response tracking",
      ],
      highlight: "95% open rate",
    },
    {
      icon: Globe,
      name: "Live Chat",
      tagline: "Convert website visitors in real time",
      description:
        "An embeddable web chat widget with a customisable interface that prompts customers to start a conversation at exactly the right moment, increasing conversion rates. AI chatbot and live agents work together around the clock.",
      features: [
        "Customisable web chat widget for any website",
        "Intelligent trigger rules to prompt chat at the right moment",
        "AI chatbot for 24/7 automated responses",
        "Seamless escalation to live agents",
      ],
    },
    {
      icon: Share2,
      name: "Facebook",
      tagline: "Connect your business page in minutes",
      description:
        "Connect a Facebook business page within minutes for quicker response times, higher engagement, and better conversion of paid advertising. Reply to direct messages from the unified interface and track marketing effectiveness.",
      features: [
        "Direct message handling from unified interface",
        "Facebook Lead form integration into CRM",
        "Automatic referral source tagging for marketing attribution",
        "Faster response times and improved engagement",
      ],
    },
    {
      icon: Instagram,
      name: "Instagram",
      tagline: "Manage DMs and comments at scale",
      description:
        "Improve response times and engagement by connecting Instagram. Reply to comments or direct messages within minutes, with incoming leads flowing directly into the CRM for follow-up and tracking.",
      features: [
        "Instagram DM and comment management",
        "Incoming lead capture to CRM",
        "Team routing for faster resolution",
        "Unified view alongside all other channels",
      ],
    },
    {
      icon: Ticket,
      name: "Ticketing",
      tagline: "Built-in case management with self-help portals",
      description:
        "No need for a separate ticketing solution\u2014built-in case management includes self-help portals, knowledge base, SLAs, and intelligent routing. Customise and automate workflows with triggers and scheduled automations.",
      features: [
        "Self-help portal and customer knowledge base",
        "SLA management with automated escalations",
        "Auto-assignment to the most qualified agent",
        "Custom workflow triggers and scheduled automations",
      ],
    },
  ],
  aiCapabilities: [
    {
      icon: Bot,
      title: "Agentic AI",
      description:
        "Intelligent, human-like responses that understand customer intent and context. Handles enquiries autonomously or assists agents\u2014ensuring every conversation is handled efficiently across every channel.",
      features: [
        "AI-generated replies that understand context and intent",
        "Works across live chat, email, WhatsApp, and voice",
        "AI-suggested responses and real-time conversation summaries",
        "Seamless handoff from AI to live agent at any point",
        "24/7 automated self-service reducing agent handling costs",
      ],
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description:
        "Advanced AI assesses the emotional tone of customer conversations across all channels\u2014voice, chat, email, and more\u2014in real time.",
      features: [
        "Real-time emotional tone detection across all channels",
        "Live dashboards and supervisor notifications",
        "Automatic flagging of negative conversations to team leaders",
        "Trend and pattern analysis for hidden CX insights",
        "Agent coaching insights from difficult interaction review",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Automatic QA",
      description:
        "AI analyses and scores every conversation across every channel\u2014no more random sampling. Custom QA rules monitor compliance, script adherence, and service quality.",
      features: [
        "Scores every call, email, and chat automatically",
        "Custom rules for compliance, script adherence, and quality",
        "Real-time agent performance and coaching insights",
        "Highlights key moments for targeted supervisor feedback",
        "Full service quality visibility across all channels",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Base Builder",
      description:
        "AI analyses existing documents\u2014brochures, product manuals, website content\u2014and automatically generates relevant questions and answers. Build a full knowledge base within hours.",
      features: [
        "AI-powered content generation from existing documents",
        "Instant knowledge base creation in hours, not weeks",
        "Auto-integrates with chat, email, self-service, and voice",
        "Agents access articles during live conversations",
        "Continuous learning and content improvement",
      ],
    },
    {
      icon: Languages,
      title: "Language Translation",
      description:
        "AI-powered translation automatically detects and translates conversations across channels, preserving tone and context for professional, natural communication.",
      features: [
        "100+ languages including Afrikaans, Zulu, and Xhosa",
        "Automatic language detection on first contact",
        "Instant translation without delays",
        "Preserves tone and context for natural communication",
        "Multi-language knowledge bases for self-service",
      ],
    },
    {
      icon: Brain,
      title: "Conversation Analysis",
      description:
        "Every customer conversation becomes a source of insight\u2014analysing tone, sentiment, and intent to personalise responses and resolve issues faster.",
      features: [
        "Automatic call transcription and intelligent summarisation",
        "Compliance tracking and process adherence monitoring",
        "Agent coaching insights with confidence scoring",
        "Emerging trend and issue detection across channels",
        "Conversation summaries without manual transcript review",
      ],
    },
  ],
  coreFeatures: [
    {
      icon: LayoutDashboard,
      title: "Built-in CRM",
      description:
        "A fully joined-up platform providing a 360-degree view of every customer journey. Track leads, opportunities, cases, and more\u2014from orders and payments to policy and transaction history.",
      features: [
        "Lead, opportunity, and case tracking",
        "Full customer timeline across every channel and touchpoint",
        "Custom fields, views, and dynamic filters",
        "Automatic webhooks to third-party systems on data changes",
        "Standalone and embedded forms for versatile data collection",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate business processes with powerful workflow tools. Run workflows on triggers, schedules, or customer behaviour\u2014reducing manual work and ensuring process adherence.",
      features: [
        "Auto ticket assignment and intelligent routing",
        "Triggered notifications, escalations, and follow-ups",
        "Scheduled automations for recurring processes",
        "Post-purchase and abandoned cart follow-up workflows",
        "Real-time workflow analytics and audit trails",
      ],
    },
    {
      icon: PhoneCall,
      title: "Self-Service & IVR",
      description:
        "Reduce wait times with 24/7 self-service options. Route customers to chatbots, IVR menus, or agents intelligently\u2014handling high volumes effortlessly.",
      features: [
        "AI-powered chatbot for instant answers around the clock",
        "Visual drag-and-drop IVR builder with real-time changes",
        "Automated order status, fault finding, and FAQ resolution",
        "Overflow routing to alternative departments during peaks",
        "Seamless handoff to live agents at any point",
      ],
    },
    {
      icon: Cpu,
      title: "Reporting & Analytics",
      description:
        "A unified view bringing all channels and agent activity into a single dashboard. Monitor performance, identify trends, and improve outcomes in real time.",
      features: [
        "Real-time agent, queue, and channel monitoring",
        "Live wallboards with customisable KPI displays",
        "Response time and SLA adherence reporting",
        "Intelligent Erlang forecasting for workforce management",
        "Export to CSV, Google Looker Studio, or live Excel links",
      ],
    },
  ],
  caiSuite: {
    headline: "Communications AI (CAI)",
    description:
      "The complete Communications AI suite uses the latest in AI and Large Language Models. CAI learns about your business\u2014from websites, marketing materials, and training documents\u2014and delivers personalised, intelligent engagement. Included as standard at no additional cost.",
    features: [
      "Learns from websites, marketing materials, and training documents",
      "Suggests personalised automated responses to messages and emails",
      "Uses live customer profile information to improve response relevance",
      "Translates conversations across 100+ languages in real time",
      "Analyses conversations for sentiment and summarises into a single paragraph",
      "Checks compliance, objection-handling skills, and key quality indicators",
      "Automatic call transcription and intelligent summarisation",
      "GDPR, CCPA, POPIA, and PCI-compliant with encrypted data handling",
      "Full access controls, audit trails, and 100% interaction recording",
      "Included as standard\u2014no additional cost for AI capabilities",
    ],
  },
};

export const investment: InvestmentContent = {
  sectionLabel: "Investment",
  headline: "QContact Investment",
  description: "Transparent pricing for implementation and ongoing platform licensing.",
  onceOff: {
    items: [
      {
        item: "Service Delivery",
        amount: 35000,
        note: "Business Requirements Definition, BRS review & approval",
      },
      {
        item: "Project Management",
        amount: 35000,
        note: "PM, milestone tracking",
      },
      {
        item: "Training",
        amount: 45000,
        note: "Train-the-Trainer programme",
      },
      {
        item: "QContact Setup & Deployment",
        amount: 0,
        note: "Configuration + BRS implementation; API integration",
      },
    ],
    total: 115000,
  },
  monthly: {
    perLicense: 895,
    licenseCount: 10,
    total: 8950,
    note: "License arrangement is for 12-month periods. Service-initiated WhatsApp interactions are not charged; other Meta charges are billed per Meta pricing guidance.",
  },
};

export const terms: TermsContent = {
  sectionLabel: "Terms",
  headline: "Terms & Conditions",
  sections: [
    {
      title: "General",
      content:
        "The client appoints CXG as its agent for the performance of services stipulated in the proposal. Proposals are valid for 30 days.",
    },
    {
      title: "Minimum Term & Licenses",
      content:
        "The minimum contract term is 12 months from the date of project launch. The minimum license requirement is 10 QContact licenses per month. Early termination prior to the expiry of the minimum term will be subject to the remaining balance of fees payable for the minimum term.",
    },
    {
      title: "Payment Terms",
      content:
        "Once-off CAPEX payable in advance: 90% prior to project commencement and 10% prior to project launch. Monthly OPEX license charges payable in advance within 21 days of invoice date. Call charges (where applicable) billed retrospectively within 30 days of invoice date.",
    },
    {
      title: "Schedule of Work",
      content:
        "A SOW (Schedule of Work) will be recorded and amended to provide for the platform service. MSA and SOW agreements to be concluded between CXG and the client.",
    },
    {
      title: "Confidentiality",
      content:
        "CXG will keep confidential all information obtained from the client (excluding public-domain information). The client agrees to keep confidential any CXG methodologies, technology, trade secrets, work papers, or confidential information obtained through the project.",
    },
  ],
};

export const acceptance: AcceptanceContent = {
  headline: "Ready to Proceed?",
  description:
    "Contact CXG to confirm authorisation and initiate the discovery and implementation process. Written authorisation is required to proceed with the services described.",
  ctaLabel: "Get Started",
};
