// Single source of truth for all resume content.
// Edit this file to update the site — no component changes needed.

export const profile = {
  name: 'Ajith Ajjarani Chandrappa',
  title: 'Innovation Architect',
  phone: '817-615-7429',
  email: 'ajith.jnnce06@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ajithajjaranichandrappa',
  location: 'Texas, USA',
  summary:
    'Architect with 15+ years of experience in developing and maintaining customer-facing applications in the Financial, Automotive, Retail, and Manufacturing sectors. Expert hands-on developer with excellent communication skills and a proven track record in driving teams and building stable applications. Experienced in Agile/Scrum methodologies and actively involved in all phases of SDLC like analysis, design, development, enhancements, and support.',
  highlights: [
    { value: '15+', label: 'Years of experience' },
    { value: '15+', label: 'Microservices led at Ford' },
    { value: '1 wk → 5 min', label: 'Report generation time' },
    { value: '38%', label: 'Customer queries automated' },
  ],
};

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Java (J2EE)', 'Python', 'Go'] },
  { category: 'Frameworks', items: ['Node.js', 'Express', 'J2EE', 'Spring Boot'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'React', 'Jest'] },
  { category: 'Integration', items: ['REST', 'Event Driven (Kafka)', 'API Gateway', 'gRPC'] },
  { category: 'Databases', items: ['Oracle', 'MSSQL', 'Postgres', 'Redis', 'MongoDB', 'Neo4j', 'DynamoDB'] },
  { category: 'DevOps', items: ['CI/CD', 'Git', 'GitHub Actions', 'Unix Shell', 'PowerShell'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'SAP BTP'] },
  { category: 'AI / ML', items: ['AWS Bedrock', 'SageMaker AI', 'Google Stack', 'LangChain', 'LangGraph', 'LangFuse', 'RAG'] },
];

export const education = [
  { degree: 'MS – Master of Computer Science', school: 'University of Texas, Arlington' },
  {
    degree: 'BE – Bachelor of Engineering (Electronics & Communications)',
    school: 'Visvesvaraya Technological University',
  },
];

export const experience = [
  {
    company: 'Tata Consultancy Services Ltd.',
    role: 'Architect',
    period: 'April 2026 – Present',
    projects: [
      {
        client: 'Apple',
        name: 'Enterprise Generative AI Platform — SAP Data & AI/ML',
        description:
          "Apple's ERP systems SAP Data & AI/ML organization is building a next-generation enterprise Generative AI platform to accelerate business process automation, intelligent decision support, and knowledge discovery across SAP-driven operations, leveraging AI Core, LLMs, RAG, and agentic workflows.",
        responsibilities: [
          "Architecting and developing enterprise-grade Generative AI solutions for Apple's SAP organization within the Data & AI/ML group.",
          'Designing reusable Python libraries and modular frameworks for AI orchestration, prompt management, tool integration, and evaluation.',
          'Building agent-based workflows using LangGraph and LangChain to support multi-step reasoning, tool calling, and memory-driven interactions.',
          'Implementing observability, tracing, prompt versioning, and evaluation pipelines using LangFuse.',
          'Developing Retrieval-Augmented Generation (RAG) pipelines integrating enterprise knowledge sources with large language models.',
          'Containerizing AI services using Docker and deploying them on Kubernetes/OpenShift for scalable and highly available execution.',
          'Establishing CI/CD pipelines using GitHub Actions to automate testing, packaging, and deployment of AI components.',
          'Collaborating with SAP functional teams, data scientists, and enterprise architects to integrate AI capabilities into core business processes.',
        ],
        value: [
          'Established a reusable enterprise GenAI platform foundation that accelerates delivery of AI-powered SAP solutions.',
          'Improved development productivity through modular AI libraries, standardized deployment patterns, and comprehensive observability.',
        ],
        tech: ['Python', 'Generative AI', 'LLMs', 'RAG', 'AI Core', 'LangChain', 'LangGraph', 'LangFuse', 'Docker', 'Kubernetes', 'GitHub Actions', 'REST APIs', 'AWS', 'SAP BTP'],
      },
    ],
  },
  {
    company: 'Perficient, Inc.',
    role: 'Sr Technical Architect',
    period: 'Sep 2021 – March 2026',
    projects: [
      {
        client: 'Ford Motors',
        name: 'Connected Vehicle Services Platform',
        description:
          "Ford's cloud-native ecosystem powering connected car capabilities and subscription-based digital services — BlueCruise, Live Traffic, Connected Navigation, EV charging, remote vehicle controls, OTA updates and digital subscriptions — supporting millions of connected vehicles globally.",
        subsections: [
          {
            title: 'Ford Subscriptions Intelligence Platform (AI/ML & GenAI)',
            points: [
              'Designed & implemented an AI-driven subscriptions intelligence platform for FordPass services using the AWS AI/ML & GenAI stack.',
              'Built churn prediction models using SageMaker pipelines with 60M+ telemetry events.',
              'Developed a personalized subscription recommender using SageMaker + Bedrock.',
              'Delivered a GenAI RAG Assistant (Bedrock + Kendra + Lex) that automated 38% of customer queries and reduced handling time by 45%.',
              'Deployed all components using serverless patterns (Lambda, API Gateway) and visualized outcomes in QuickSight dashboards.',
            ],
          },
          {
            title: 'Personalized Subscription Bundle Recommender (ML + GenAI)',
            points: [
              'Built a collaborative-filtering + behavior-based recommendation engine using SageMaker Studio + SageMaker Training.',
              'Used Amazon Personalize ML model to deliver personalized bundles.',
              'Augmented recommendations using Amazon Bedrock (Claude/Llama) to explain suggestions in natural language.',
            ],
          },
          {
            title: 'Predictive Analytics for Ford SSP',
            points: [
              'Built a Python-based "one-click metrics platform" that automates incident analysis & analytics, reducing manual report generation from 1 week to 5 minutes.',
              'Implemented advanced data analysis and visualization using Python, NumPy, pandas and matplotlib, generating interactive HTML dashboards.',
              'Implemented a GenAI-powered Virtual Coach browser extension that automates incident analysis and surfaces real-time operational insights using an MCP server.',
              'Led 5 developers building 15+ production-grade microservices (Java/Node.js/Python) for Orders & Offer Management, Billing, Orchestration, Fulfillment and In-Vehicle Capability verification.',
              'Developed reusable Java/Node.js libraries to streamline development and improve maintainability.',
              'Designed RDBMS & NoSQL schemas for extensibility and longevity; enforced IAM, SSL/TLS and regular security assessments.',
              'Implemented DevOps best practices with Jenkins, GitHub Actions, Docker and Kubernetes for rapid, automated delivery.',
            ],
          },
        ],
        value: [
          'Critical cloud-native 15+ containerized microservices for Order, Offer, Billing and Fulfillment Orchestration of SSP.',
          'Python-based metrics platform cut incident report generation from 1 week to 5 minutes with real-time operational telemetry.',
        ],
        tech: ['Python', 'SageMaker', 'Bedrock', 'Kendra', 'Lex', 'Comprehend', 'Glue', 'Lambda', 'Kinesis', 'TypeScript', 'Node.js', 'Java', 'AWS'],
      },
      {
        client: 'gWorks',
        name: 'GovTech Cloud Platform',
        description:
          'Cloud-based solutions helping municipalities, counties and utility districts digitize operations — citizen services, utility billing, finance, HR, permitting and licensing.',
        responsibilities: [
          'Designed & developed Node/Java/Python microservices for backend systems.',
          'Implemented reusable data/event/AWS access frameworks as libraries hosted on JFrog Artifactory.',
          'Architected a metadata-driven dynamic REST endpoint creation framework for extensibility.',
          'Built CI/CD GitHub Actions workflows for JavaScript & Python apps, publishing artifacts to JFrog.',
          'Automated DevOps and operational tasks using PowerShell, Unix shell and Python scripts.',
          'Designed JWT-based authentication/authorization integrated with OAuth 2.0, with secure token expiration, refresh and revocation.',
          'Managed AWS Parameter Store, RDS PostgreSQL, Lambda, Fargate and S3; tuned PostgreSQL query response times.',
          'Built reusable frameworks: user lifecycle, sessions, notifications (email/SMS/websockets), auditing, schedulers, security, pagination & filters.',
        ],
        tech: ['TypeScript', 'Node.js', 'Java', 'Python', 'AWS', 'GraphQL', 'GitHub Actions', 'PowerShell'],
      },
      {
        client: 'Mastercard',
        name: 'Network of Future (Event2MIP)',
        description:
          "Modernization of Mastercard's proprietary financial network to accelerate a new event-driven architecture.",
        responsibilities: [
          'Applied Domain-Driven Design to build functionality-specific event components on the Mastercard Event Framework.',
          'Developed high-performance RESTful microservices in Java/Spring Boot (DI, Security, Profiling, CORS).',
          'Built Jenkins jobs & pipelines for deployment to higher environments.',
          'Integrated Dynatrace metrics for performance engineering.',
        ],
        value: ['Contributed ~20% time savings across the entire payment transaction flow.'],
        tech: ['Java', 'Spring Boot', 'REST', 'Dynatrace', 'Jenkins'],
      },
      {
        client: 'Xcel Energy',
        name: 'Gas FEE Mobile Application',
        description:
          'Modernized mobile application for field engineers and technicians to perform and survey work orders.',
        responsibilities: [
          'Designed architecture and component workflows for Gas Leaks & Notification.',
          'Developed Node.js modules extending AWS Lambda, S3 and DynamoDB; built generic REST client code with Express.',
          'Wrote an extensible schema-validation framework for API Gateway; cached sessions in Redis.',
          'Practiced TDD with Jest/Jasmine; monitored CloudWatch and Splunk for production issues.',
        ],
        value: ['Delivered a 40% efficiency improvement in gas technicians’ 24-hour job performance.'],
        tech: ['JavaScript', 'Node.js', 'AWS Lambda', 'Fargate', 'API Gateway', 'DynamoDB', 'Redis'],
      },
    ],
  },
  {
    company: 'Bechtel',
    role: 'Innovation Developer / Architect',
    period: 'Aug 2019 – Sep 2021',
    projects: [
      {
        name: 'Digital Execution Platform (DEP)',
        description:
          'Modernization of Bechtel’s IT architecture with a Digital Execution Platform using multiple modern technologies.',
        responsibilities: [
          'Programmed crucial sections of "LOB-Adapter-SDK", an omni-toolkit for data engineering.',
          'Designed reusable data access frameworks (MS-SQL, Oracle, Mongo, Neo4j, Azure Service Bus) used across applications.',
          'Created GraphQL client & server on graph databases for aggregation use cases.',
          'Built the "codeOnce-useEveryWhere" framework adopted by all lines of business.',
        ],
        value: [
          'Automated scaffolding cut service delivery timelines from ~3 months to ~1 week.',
          'Data engineering toolkit became the default service-creation platform across all LOBs.',
        ],
        tech: ['Node.js', 'Go', 'Express', 'MongoDB', 'GraphQL', 'Neo4j', 'Angular', 'Swagger'],
      },
    ],
  },
  {
    company: 'IT People',
    role: 'Software Engineer (Blockchain Engineering Consultant)',
    period: 'July 2018 – Aug 2019',
    projects: [
      {
        client: 'IBM',
        name: 'Blockchain Business Consortium',
        description:
          'Blockchain consortium involving IBM, Seagate and other partners using Hyperledger Fabric, Node.js, Java, Go and Python.',
        responsibilities: [
          'Led Node & Java development — ~8K LOC and 70+ REST endpoints meeting performance benchmarks.',
          'Designed frameworks for label status, sessions, notifications, auditing, schedulers, hashing, pagination and filtering.',
          'Built a Spring Boot middleware translating to invoice & payment systems.',
          'Extended the consensus algorithm for a trust-enhancement use case.',
        ],
        value: ['Delivered dispute management & trust enhancement as key consortium differentiators.'],
        tech: ['Hyperledger Fabric', 'Node.js', 'Go (Chaincode)', 'CouchDB', 'Express', 'MongoDB'],
      },
    ],
  },
  {
    company: 'Perficient, Inc.',
    role: 'Lead Technical Consultant',
    period: 'Jul 2012 – Jul 2018',
    projects: [
      {
        name: 'IBM Industry / Commerce Solutions',
        description:
          'Contract management, order management and blockchain solutions for retail customers (IBM Engineering, Kirkland’s, Sears Canada, National Geographic, USAID).',
        responsibilities: [
          'Led design, development and testing of complex Java user exits in IBM Sterling Order Management and Emptoris Contract Management.',
          'Delivered full-stack solutions integrating Spring Boot microservices with AngularJS UIs via REST and SOAP.',
          'Architected containerized microservices with Docker, improving scalability and resilience.',
        ],
        value: ['Rolled out Buy Online Pick Up at Store, Ship to Home and Ship to Store for major US retailers.'],
        tech: ['Java', 'Spring Boot', 'SOAP', 'IBM DB2', 'WAS 8.5', 'AngularJS', 'Jenkins'],
      },
    ],
  },
  {
    company: 'MphasiS, an HP Company',
    role: 'Software Engineer',
    period: 'May 2007 – Aug 2010',
    projects: [
      {
        name: 'EDS B2B Managed Services',
        description: 'Complete B2B re-engineering work for a marquee client — developed, deployed and supported.',
        responsibilities: [
          'Built the web tier with Servlets, JSP, XSLT and XML on Spring MVC.',
          'Implemented persistence with Hibernate/HQL and PL/SQL stored procedures with query optimization.',
          'Consumed SOAP services via Apache Axis; applied Singleton, Factory, DAO, Session Facade and MVC patterns.',
          'Unit/regression testing with JUnit, logging with Log4J, builds with Maven, Scrum process.',
        ],
        tech: ['Java', 'Spring 2.5', 'Hibernate 3.0', 'JSP', 'Oracle', 'WebSphere 7.0', 'Maven'],
      },
    ],
  },
];
