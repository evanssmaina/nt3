import {
  BarChart3,
  Bot,
  BrainCircuit,
  CloudUpload,
  Code2,
  Cpu,
  CpuIcon,
  CreditCard,
  Database,
  DatabaseZap,
  FileCode2,
  Gauge,
  Globe,
  HardDrive,
  HardDriveDownload,
  LayoutTemplate,
  PlusIcon,
  Server,
  Workflow,
} from "lucide-react";

export const allSections = [
  {
    slug: "caching",
    tag: "Caching",
    icon: HardDrive,
    description:
      "Optimize AI application performance with intelligent caching for model outputs and API responses.",
  },
  {
    slug: "database",
    tag: "Database",
    icon: Database,
    description:
      "Essential database solutions for storing and retrieving AI training data, embeddings, and agent memories.",
  },
  {
    slug: "ide",
    tag: "IDE",
    icon: Code2,
    description:
      "AI-powered development environments with intelligent code completion and debugging for AI application development.",
  },
  {
    slug: "workflows",
    tag: "Workflows",
    icon: Workflow,
    description:
      "Design and automate complex AI agent workflows with visual orchestration and decision trees.",
  },
  {
    slug: "ui",
    tag: "UI Components",
    icon: LayoutTemplate,
    description:
      "Pre-built UI components for creating intuitive interfaces to interact with AI models and agents.",
  },
  {
    slug: "deployment",
    tag: "Deployment",
    icon: CloudUpload,
    description:
      "Seamlessly deploy AI models and agents to production with scalable infrastructure.",
  },
  {
    slug: "monitoring",
    tag: "Monitoring",
    icon: BarChart3,
    description:
      "Track AI model performance, agent behavior, and system health in real-time.",
  },
  {
    slug: "llm",
    tag: "LLM Providers",
    icon: Bot,
    description:
      "Integrate with leading language models to power your AI agents and natural language applications.",
  },
  {
    slug: "agents",
    tag: "Agents",
    icon: Cpu,
    description:
      "Build autonomous AI agents that can reason, plan, and execute complex tasks.",
  },
  {
    slug: "mcp",
    tag: "MCP",
    icon: Server,
    description:
      "Orchestrate and manage fleets of AI agents and models at scale.",
  },
  {
    slug: "web",
    tag: "Web Search",
    icon: Globe,
    description:
      "Enhance AI agents with real-time web search and information retrieval capabilities.",
  },
  {
    slug: "coding",
    tag: "Coding",
    icon: FileCode2,
    description:
      "AI-powered coding assistants and tools to accelerate AI application development.",
  },
  {
    slug: "framework",
    tag: "Framework",
    icon: CpuIcon,
    description:
      "Specialized frameworks for developing and deploying AI models and agent systems.",
  },
  {
    slug: "api",
    tag: "API",
    icon: Code2,
    description:
      "APIs and tools for integrating AI capabilities into your applications and agent systems.",
  },
  {
    slug: "storage",
    tag: "Storage",
    icon: HardDriveDownload,
    description:
      "Scalable storage solutions for AI model weights, vector embeddings, and agent memories.",
  },
  {
    slug: "ratelimit",
    tag: "Rate Limiting",
    icon: Gauge,
    description:
      "Manage API rate limits and optimize usage for AI model providers and services.",
  },
  {
    slug: "payments",
    tag: "Payments",
    icon: CreditCard,
    description:
      "Monetize your AI applications and manage API usage-based billing.",
  },
  {
    slug: "vector",
    tag: "Vector",
    icon: DatabaseZap,
    description:
      "Vector databases and similarity search for AI applications like semantic search and RAG systems.",
  },
  {
    slug: "memory",
    tag: "Memory & Context",
    icon: BrainCircuit,
    description:
      "Long-term memory solutions for AI agents to maintain context and learn from interactions.",
  },
];
