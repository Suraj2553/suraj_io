/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Suraj Kumar Jha | Python Developer & Azure Engineer",
  description:
    "Python Developer & Azure Engineer with 4+ years of production experience at TCS. Specialises in automation pipelines, Azure cloud-native systems, AI-powered tooling, and enterprise platforms. Available for Python automation and Azure consulting.",
  og: {
    title: "Suraj Kumar Jha | Python Developer & Azure Engineer",
    type: "website",
    url: "https://suraj2553.github.io/suraj_io",
  },
};

//Home Page
const greeting = {
  title: "Suraj Kumar Jha",
  logo_name: "SurajJha",
  nickname: "",
  subTitle:
    "Python Developer · Azure Engineer · Automation & AI Tooling\n\nI build tools that eliminate manual work, scale on Azure, and ship as real products — from intelligent automation pipelines and event-driven cloud systems to AI-powered desktop applications. 4+ years of production experience at TCS.",
  resumeLink: process.env.PUBLIC_URL + "/resume/Suraj_Kumar_Jha.pdf",
  portfolio_repository: "https://github.com/Suraj2553/suraj_io",
  githubProfile: "https://github.com/Suraj2553",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Suraj2553",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suraj-kumar-jha-523a8a18b",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:sjha2102@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/918001051017",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
];

const skills = {
  data: [
    {
      title: "Python Automation & Backend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Shipped production Python automation that eliminated hours of daily manual processing across order, payment, and fulfillment workflows in large-scale retail operations",
        "⚡ Built reusable Python libraries for structured logging, automatic retries, and configuration management — adopted across multiple production services",
        "⚡ Delivered Windows desktop applications (Tkinter / PyQt) that let non-technical teams run complex workflows with a single click, no engineering help required",
        "⚡ Engineered long-running background services with real-time progress tracking, safe abort, and auto-recovery — production-hardened and user-friendly",
        "⚡ Designed internal REST APIs and service utilities for automation, data validation, and cross-system reconciliation",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python" },
        { skillName: "PyQt", fontAwesomeClassname: "simple-icons:qt" },
        { skillName: "Tkinter", fontAwesomeClassname: "simple-icons:python" },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "simple-icons:fastapi",
        },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql" },
      ],
    },

    {
      title: "Azure Cloud, Serverless & Event-Driven Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architected end-to-end cloud-native solutions on Azure using Durable Functions, Logic Apps, and orchestration patterns — built to handle millions of transactions reliably",
        "⚡ Built high-throughput async pipelines with Apache Kafka and Azure Service Bus, decoupling producers and consumers for fault-tolerant, scalable processing",
        "⚡ Queried and aggregated high-volume transactional data in Azure Cosmos DB using optimised filters, partition strategies, and continuation tokens",
        "⚡ Implemented full observability across distributed systems using Application Insights and KQL — enabling rapid incident diagnosis and root-cause analysis without touching logs manually",
        "⚡ Hardened distributed services with retry policies, dead-letter handling, and structured telemetry — measurably reducing production incidents and on-call burden",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
        },
        {
          skillName: "Azure Functions",
          fontAwesomeClassname: "simple-icons:azurefunctions",
        },
        {
          skillName: "Cosmos DB",
          fontAwesomeClassname: "simple-icons:azurecosmosdb",
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
        },
        {
          skillName: "Application Insights",
          fontAwesomeClassname: "simple-icons:microsoft",
        },
        {
          skillName: "Kusto (KQL)",
          fontAwesomeClassname: "simple-icons:microsoft",
        },
      ],
    },

    {
      title: "Enterprise Platforms, Monitoring & Operations",
      fileName: "DesignImg",
      skills: [
        "⚡ Extended and maintained SAP Hybris e-commerce platforms powering high-volume retail storefronts — backend logic, platform config, and Backoffice administration",
        "⚡ Built CMS-driven content pipelines for category pages, banners, and promotions — coordinating directly with business and content teams to hit go-live deadlines",
        "⚡ Owned production support rotations: triaged, escalated, and resolved high-severity incidents within SLA in fast-moving, high-traffic environments",
        "⚡ Contributed across the full Agile delivery cycle — backlog refinement, sprint planning, daily standups, stakeholder demos, and retrospectives",
        "⚡ Delivered Power BI dashboards adopted by business teams to track KPIs, SLA compliance, and operational health metrics",
      ],
      softwareSkills: [
        { skillName: "SAP Hybris", fontAwesomeClassname: "simple-icons:sap" },
        { skillName: "Java", fontAwesomeClassname: "simple-icons:java" },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi" },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git" },
        {
          skillName: "Agile / Scrum",
          fontAwesomeClassname: "simple-icons:jira",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "JIS College of Engineering",
      subtitle: "B.Tech in Mechanical Engineering",
      logo_path: "jis_logo.png",
      alt_name: "MAKAUT",
      duration: "2015 – 2019",
      descriptions: [
        "⚡ Mechanical Engineering graduate who self-taught Python and cloud technologies, then built a full career in software engineering — proof that domain switching is possible with the right drive",
        "⚡ The engineering mindset — systems thinking, root-cause analysis, and first-principles problem solving — directly informs how I approach software and automation challenges today",
        "⚡ Continuously upskilling: Azure certifications, Kafka, and AI/ML tooling pursued and completed alongside a full-time engineering role",
      ],
      website_link: "https://www.jiscollege.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      subtitle: "Microsoft",
      logo_path: "azure_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#0078D4",
    },
    {
      title: "Confluent Developer – Apache Kafka",
      subtitle: "Confluent",
      logo_path: "kafka_logo.png",
      certificate_link: "",
      alt_name: "Confluent",
      color_code: "#231F20",
    },
    {
      title: "Google AI Professional Certificate",
      subtitle: "Google",
      logo_path: "google.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0078D4",
    },
    {
      title: "Gen AI E2 Certification",
      subtitle: "Gen AI",
      logo_path: "gen_ai_logo.png",
      certificate_link: "",
      alt_name: "AI",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Professional Work",
  description:
    "4+ years of experience in Python automation, Azure cloud services, and enterprise application development across large-scale retail systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "IT Analyst",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "Jan 2025 – Present",
          location: "Bengaluru, Karnataka",
          descriptions: [
            "Lead Python and Azure engineer on a high-traffic retail automation program — designing and delivering tools used daily by operations and support teams",
            "Built end-to-end automation pipelines integrating Azure Durable Functions, Kafka, and Cosmos DB — eliminating hours of daily manual processing and reducing error rates",
            "Shipped Windows desktop applications (Tkinter / PyQt) that enabled non-technical teams to self-serve complex operational workflows without engineering involvement",
            "Engineered a production Python toolkit with structured logging, automatic retries, graceful error handling, and a self-update mechanism — zero manual deployment needed",
            "Drove performance tuning across services, achieving measurable reductions in processing latency and support ticket volume",
            "Recognised with three internal awards including Udbhavani Winner — Best Process Improvement, for high-impact automation that changed how the team operates",
          ],
          technologies: [
            "Python",
            "Azure",
            "Kafka",
            "Cosmos DB",
            "PyQt",
            "Durable Functions",
            "Logic Apps",
          ],
          awards: [
            "Certificate of Appreciation",
            "Special Initiative Award",
            "Udbhavani Winner - Best Process Improvement",
          ],
          color: "#1F70C1",
        },
        {
          title: "Assistant Engineer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "Oct 2020 – Dec 2024",
          location: "Bengaluru, Karnataka",
          descriptions: [
            "Designed and integrated core Azure services — Cosmos DB, Application Insights, Durable Functions, Logic Apps, and Service Bus — across a large-scale enterprise cloud platform",
            "Maintained and extended a SAP Hybris e-commerce stack serving high-volume retail traffic, handling backend logic, storefront configuration, and Backoffice administration",
            "Built CMS-managed landing pages and promotional content for high-traffic retail categories, working directly with business stakeholders to meet campaign deadlines",
            "Used SQL and Azure Storage Explorer for data investigation, cross-system reconciliation, and issue resolution during production incidents",
            "Contributed across the full Agile delivery cycle — backlog refinement, sprint planning, daily stand-ups, stakeholder demos, and retrospectives",
            "Presented live feature demos to business stakeholders, translated feedback into actionable improvements, and drove iterative delivery",
          ],
          technologies: [
            "Java",
            "SAP Hybris",
            "Azure",
            "SQL",
            "AEM",
            "MySQL",
            "Kusto Query",
          ],
          awards: ["Star of the Quarter (April 2022)"],
          color: "#1F70C1",
        },
      ],
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_suraj.png",
    description:
      "Open to full-time roles, freelance projects, and consulting work in Python automation, Azure engineering, and AI-powered tooling. If you have a problem that needs a reliable, well-engineered solution — let's talk. I typically respond within a few hours.",
  },

  addressSection: {
    title: "Location",
    subtitle: "Bengaluru, Karnataka, India",
    locality: "Bengaluru",
    country: "India",
    region: "Karnataka",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Bengaluru",
  },

  phoneSection: {
    title: "Let’s Talk",
    subtitle: "+91 8001051017",
  },
};

const projectsHeader = {
  title: "Projects",
  description:
    "Side projects I build to solve real problems and push my skills beyond the day job — from live market data tools to AI-powered desktop applications that ship as standalone executables.",
};

const projects = {
  data: [
    {
      name: "India Stock Dashboard",
      description:
        "A self-hosted Indian stock market terminal built in Python. Tracks live portfolio P&L, NSE/BSE prices, candlestick charts, F&O option chains, sector heatmap, FII/DII flows, mutual funds, and live market news — all in one place. Includes an AI chat tab powered by GPT-4o (via GitHub Models) that can answer questions about your portfolio or any stock. Zero paid APIs, zero subscriptions. Runs locally so your data never leaves your machine.",
      github: "https://github.com/Suraj2553/india-stock-dashboard",
      tags: [
        "Python",
        "FastAPI",
        "NSE/BSE",
        "F&O",
        "AI Chat",
        "GPT-4o",
        "Vanilla JS",
        "Self-hosted",
      ],
      category: "Data & Analytics",
      isPublic: true,
    },
    {
      name: "AppInsights MCP Server",
      description:
        "A Python MCP (Model Context Protocol) server that connects VS Code Agent Mode and GitHub Copilot to Azure Application Insights — enabling natural language incident investigation without writing a single line of KQL. Exposes 55 read-only diagnostic tools covering exceptions, request failures, dependency analysis, anomaly detection, deployment correlation, browser telemetry, geographic error distribution, user impact, availability tests, and structured incident report generation. Features partial-match anomaly detection that compares live windows against 24h and 7d baselines. Also packaged as a zero-dependency Windows desktop EXE (PyInstaller) with a system tray, streaming AI chat via SSE, and 200+ pre-built diagnostic prompts — runs on any machine with no Python or Node.js required.",
      github: null,
      tags: [
        "Python",
        "FastAPI",
        "MCP",
        "Azure Application Insights",
        "KQL",
        "VS Code Agent Mode",
        "Anomaly Detection",
        "PyInstaller",
        "GitHub Copilot",
      ],
      category: "AI & Developer Tools",
      isPublic: false,
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
