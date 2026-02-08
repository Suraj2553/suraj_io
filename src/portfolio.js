/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Suraj Jha | Python & Azure Engineer",
  description:
    "Python Developer and Azure Engineer with 4+ years of experience in automation, cloud-native applications, and enterprise systems. Specialized in Azure, Python, Cosmos DB, Durable Functions, and monitoring solutions.",
  og: {
    title: "Suraj Jha Portfolio",
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
    "Python Developer | Azure Engineer | Automation & Cloud Applications\n\n4+ years of experience building scalable automation tools, cloud-native solutions, and enterprise applications using Python and Microsoft Azure.",
  resumeLink: "/resume/Suraj_Kumar_Jha.pdf",
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
        "⚡ Built production-grade Python automation tools for retail systems (Meijer) handling large-scale order, payment, and fulfillment workflows",
        "⚡ Developed reusable Python libraries for logging, retries, exception handling, and configuration management",
        "⚡ Created Windows desktop applications using Tkinter / PyQt to simplify operational and support workflows",
        "⚡ Implemented long-running background processes with user prompts, progress tracking, and safe abort mechanisms",
        "⚡ Designed REST-style backend utilities and internal APIs to support automation and data reconciliation",
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
        "⚡ Designed and implemented cloud-native architectures using Azure Functions, Durable Functions, and Logic Apps",
        "⚡ Built event-driven pipelines using Kafka consumers and Azure Service Bus for asynchronous processing",
        "⚡ Worked extensively with Azure Cosmos DB for querying, filtering, and processing high-volume transactional data",
        "⚡ Implemented monitoring and diagnostics using Application Insights and Kusto Query Language (KQL)",
        "⚡ Optimized performance and reliability of distributed systems through retries, circuit breakers, and telemetry",
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
        "⚡ Worked on SAP Hybris-based e-commerce platforms supporting large-scale retail operations",
        "⚡ Managed CMS-driven content including static pages, category landing pages, and promotions",
        "⚡ Performed production support, root-cause analysis, and issue resolution in high-traffic systems",
        "⚡ Collaborated with cross-functional teams using Agile/Scrum methodologies",
        "⚡ Created operational dashboards and reports using Power BI for business and technical stakeholders",
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
        "⚡ Engineering graduate with strong analytical mindset and passion for technology",
        "⚡ Successfully transitioned to IT, leveraging problem-solving and quick learning abilities",
        "⚡ Continuous learner with proven track record of adapting to new technical challenges",
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
            "Working as a Python and Azure engineer for Meijer retail systems, focused on automation and cloud-native solutions",
            "Designed and implemented Python scripts to automate recurring support tasks including log analysis and data reconciliation",
            "Built end-to-end automation pipelines integrating Azure Durable Functions, Kafka Consumer, and Cosmos DB",
            "Developed Windows-based desktop applications using Python (Tkinter/PyQt) to simplify internal workflows",
            "Integrated logging, exception handling, and auto-update mechanisms for robust production deployments",
            "Led performance tuning initiatives resulting in significant reduction in system response time and improved user satisfaction",
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
            "Implemented Azure components including Cosmos DB, Kusto Query Language, App Insights, Durable Functions, Logic Apps, and Service Bus",
            "Managed backend and frontend of Meijer e-commerce platforms using SAP Hybris, HAC, and Hybris Backoffice",
            "Created static web pages, landing pages, and category landing pages using Content Management Systems",
            "Utilized SQL and Azure Storage Explorer for efficient data handling, troubleshooting, and system reliability",
            "Participated in Agile ceremonies including sprint planning, story writing, daily stand-ups, and retrospectives",
            "Demonstrated new features to business teams, gathered feedback, and implemented continuous improvements",
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
      "Feel free to reach out for opportunities, collaboration, or just a quick chat. I usually respond within 24 hours.",
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

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  //projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
