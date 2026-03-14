export const personalInfo = {
  name: "Sachin Chouhan",
  title: "Software Engineer",
  email: "sachin.chouhan1612@gmail.com",
  phone: "(887) 138-4050",
  location: "195-A Veena Nagar, Indore 452010",
  github: "https://github.com/Sachin1612",
  profile: "Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for software development.",
};

export const education = [
  {
    institution: "Patel College of Science and Technology Indore, RGPV",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2012 - 2016",
    score: "6.8 CGPA",
  },
  {
    institution: "Government HSS Excellence Kukshi, MP Board",
    degree: "Higher Secondary (PCM)",
    duration: "2011 - 2012",
    score: "52 %",
  },
];

export const experience = [
  {
    company: "Nagarro Enterprise",
    logo: "https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg",
    role: "Associate Staff Engineer",
    duration: "Aug 2021 – Present",
    description: "Software Design, Development, Client Interaction",
  },
  {
    company: "Gamma stack Indore",
    logo: "gammastack", // Special case for SVG
    role: "Solution Engineer",
    duration: "Nov 2020 – Aug 2021",
    description: "Software Development",
  },
  {
    company: "Cyber Infrastructure Indore (CIS)",
    logo: "https://www.cisin.com/images/logo2.png",
    role: "Software Developer",
    duration: "Nov 2017 – Nov 2020",
    description: "Software Design, Development, Client Interaction",
  },
];

export const skills = {
  dotNet: ["C# .NET", ".NET MVC", ".NET MVC CORE", ".NET WEB API", "Windows Form Application"],
  database: ["SQL SERVER", "MY SQL", "MongoDB", "DynamoDB"],
  javascript: ["React js", "Node js", "Angular", "JQuery", "Ionic Framework"],
  aws: ["Lambda Function", "Cloudwatch", "SNS", "RDS", "Step Function", "EC2", "App Sync", "S3 Bucket"],
  ai: ["Alexa Skills", "Google Mini Skills"],
  smartHome: ["Tuya", "August", "MyQ", "Philips Hue", "Ecobee"],
  others: ["Auth0", "Twilio", "Mailgun"],
};

export const hobbies = [
  { name: "Cricket", icon: "Trophy" },
  { name: "Traveling", icon: "Plane" },
  { name: "Exploring New Technologies", icon: "Cpu" },
  { name: "Social Work", icon: "Heart" }
];

export const personalProjects = [
  {
    name: "AIWoods",
    description: "AI-powered couple portrait and dance video generation platform. Transform your memories into cinematic era-based masterpieces.",
    features: [
      "AI couple portrait generation",
      "AI couple dance video creation",
      "Style selection: Old/New Bollywood & Hollywood"
    ],
    link: "https://aiwoods.in/",
    tags: ["AI", "Video Generation", "React"]
  },
  {
    name: "CricketKida",
    description: "A complete cricket tournament management and live broadcasting platform for professional and local leagues.",
    features: [
      "Broadcaster tools (Team & Player MGMT)",
      "AI-generated live commentary",
      "Real-time automated scorecards",
      "Tournament advertising suite"
    ],
    link: "https://cricketkida.in/",
    tags: ["SportsTech", "Real-time", "AI"]
  },
  {
    name: "Focus YT",
    description: "A distraction-free YouTube experience designed for focused learning and high-impact content consumption.",
    features: [
      "Prompt-based YouTube video search",
      "Ad-free focused watching",
      "Minimalist UI for peak productivity"
    ],
    link: "#",
    tags: ["Productivity", "UI/UX", "YouTube API"]
  }
];

export const inOfficeProjects = [
  {
    name: "Provision app",
    client: "Cox Automotive",
    duration: "October 2024 - Present",
    description: "Provision Application is an automotive inventory management system used to handle the end-to-end vehicle lifecycle. The system includes modules for Provisioning, Appraising, Pricing, Merchandising, Wholesaling, Market Insights, and Reporting.",
    technologies: "ASP.NET Core, StencilJS, ReactJS, SQL, AWS services, Terraform, GitHub Copilot, MCP server, Claude Sonnet 4.5/4.6, Opus 4.5/4.6",
    role: [
      "Collaborated closely with product owners and cross-functional teams to understand business workflows and convert them into scalable technical features.",
      "Developed new modules and enhanced existing ones across provisioning, pricing, appraising, and merchandising areas, ensuring optimal performance and smooth usability.",
      "Performed detailed PR reviews, improved code quality, fixed defects, and actively contributed in daily scrum ceremonies and sprint planning."
    ],
    link: "https://www.cox.com/"
  },
  {
    name: "PERTAMINA – CLAIMS TRACKING SYSTEM OF VESSEL",
    description: "Claims Tracking App is a web application for creating and managing 10 types of vessel-related claims such as Slow Pumping, Slow Speed, Transport Loss, etc.",
    technologies: "ASP.NET Core, React, SQL, Azure DevOps",
    role: "Analyzing requirements, creating new features, PR reviewing, and participating in scrum.",
    link: "https://pertamina.com"
  },
  {
    name: "COX AUTOMOTIVE - CAR AUCTION APPLICATION",
    description: "A web application used for auctioning, buying, selling, and transporting used vehicles. Dealers can generate invoices, manage sale events, and process payments.",
    technologies: "ASP.NET Core, React, MS SQL",
    role: "Analyzing requirements, handling defects, and participating in agile scrums.",
    link: "https://www.coxautoinc.com"
  },
  {
    name: "YOURCAUSE - NON-PROFIT CHARITY ORGANIZATION",
    description: "Manages staff, employees, donations, and volunteering data for charity organizations. Includes admin setup and employee experience phases.",
    technologies: "Angular, .NET Core, MS SQL, Azure CosmosDb",
    role: "Analyzing requirements, providing estimates, designing employee experience pages, unit testing, handling defects.",
    link: "https://www.yourcause.com"
  },
  {
    name: "VISITOR ANALYTICS — WEBSITE PERFORMANCE PROVIDER",
    description: "Tools for tracking and analyzing website statistics and visitors. Includes traffic data, performance metrics, session recordings, and heatmaps.",
    technologies: "ReactJS, NodeJS, MongoDB, Tailwind CSS, Chart.js",
    role: "Designed and developed highly responsive user interface components via React concepts.",
    link: "https://www.visitor-analytics.io"
  },
  {
    name: "SMART BULL - ISRAEL FINANCIAL MARKET AGENCY",
    description: "Multi-language support displaying data on foreign stocks, bonds, funds, and assets with charts and browser cache storage.",
    technologies: "ReactJS, NodeJS, MongoDB, Highchart",
    role: "Designed and developed a responsive user interface and APIs.",
    link: "https://www.smartbull.co.il"
  },
  {
    name: "JOPEHOME — A HOME AUTOMATION SYSTEM",
    description: "Home automation system using AWS serverless architecture for managing smart devices with Alexa and Google Assistant support.",
    technologies: "Alexa Skills, Google Home Action, NodeJS, MySQL, AWS services",
    role: "Designed and developed the architecture and skills to operate smart devices using voice assistance.",
    link: "https://jopehome.com"
  },
  {
    name: "JOPECONNECT SBT— ONLINE SCHEDULE APPOINTMENT",
    description: "Platform for scheduling online appointments between hospital staff and patients with SMS, email, and payment processing.",
    technologies: "ReactJS, NodeJS, MySQL, agora.io, AWS Services",
    role: "Designed and developed a solution to optimize I/O throughput and database resource utilization.",
    link: "https://examroomlive.com"
  },
  {
    name: "BEMORE — ONLINE BOOK CLASSES",
    description: "Platform for booking and scheduling classes. Teachers can manage availability and create lessons.",
    technologies: "ASP.NET Core, MongoDB",
    role: "Development & Design",
    link: "https://bemore.com"
  },
  {
    name: "BONFAMI — A CO-PARENTING APPLICATION",
    description: "Web application for co-parenting, helping parents manage responsibilities, financial planning, and child development schedules.",
    technologies: "ASP.NET Core, Entity Framework, MongoDB, SQL Server, Knockout.js",
    role: "Designed and developed the application and deployments",
    link: "https://bonfami.com"
  }
];
