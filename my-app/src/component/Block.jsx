import React from "react";
// import { BookOpen, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";




function Block(){
    const courseTopics = {
  "Generative AI (Gen AI)": [
    "Introduction to Generative AI",
    "AI vs Generative AI",
    "Types of Generative AI",
    "How Generative AI Works",
    "Generative AI Models",
    "Large Language Models",
    "Text Generation",
    "Image Generation",
    "Code Generation",
    "AI Chatbots",
    "Prompt Engineering Basics",
    "Advanced Prompting",
    "AI Tools & Platforms",
    "Generative AI APIs",
    "AI Application Development",
    "Real-World AI Use Cases",
    "AI Safety & Responsible AI",
    "Limitations of Generative AI",
    "Practical AI Project",
    "Project Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Agentic AI": [
    "Introduction to Agentic AI",
    "AI Agents vs Traditional AI",
    "Agent Architecture",
    "Agent Perception",
    "Reasoning and Decision Making",
    "Planning",
    "Tool Usage",
    "Memory in AI Agents",
    "Short-Term and Long-Term Memory",
    "LLM-Based Agents",
    "Function Calling",
    "API Integration",
    "Multi-Agent Systems",
    "Agent Workflows",
    "Autonomous Task Execution",
    "Agent Frameworks",
    "Building AI Agents",
    "Real-World Agent Applications",
    "Agent Security",
    "Practical Agent Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Machine Learning (ML)": [
    "Introduction to Machine Learning",
    "AI vs ML vs Deep Learning",
    "Types of Machine Learning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Python for ML",
    "NumPy",
    "Pandas",
    "Data Preprocessing",
    "Data Cleaning",
    "Feature Engineering",
    "Training and Testing Data",
    "Regression",
    "Classification",
    "Clustering",
    "Decision Trees",
    "Random Forest",
    "Model Evaluation",
    "Hyperparameter Tuning",
    "Practical ML Project",
    "Model Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Deep Learning (DL)": [
    "Introduction to Deep Learning",
    "Machine Learning vs Deep Learning",
    "Neural Networks",
    "Perceptron",
    "Activation Functions",
    "Forward Propagation",
    "Backpropagation",
    "Loss Functions",
    "Optimizers",
    "Training Neural Networks",
    "TensorFlow",
    "Keras",
    "CNN",
    "Image Classification",
    "RNN",
    "LSTM",
    "Transfer Learning",
    "Model Evaluation",
    "GPU Training",
    "Practical Deep Learning Project",
    "Model Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Large Language Model (LLM)": [
    "Introduction to LLMs",
    "NLP Fundamentals",
    "Tokens and Tokenization",
    "Embeddings",
    "Transformers",
    "Attention Mechanism",
    "Encoder and Decoder",
    "LLM Architecture",
    "Training LLMs",
    "Pre-training",
    "Fine-tuning",
    "Instruction Tuning",
    "Prompt Engineering",
    "Context Windows",
    "LLM APIs",
    "RAG",
    "Vector Databases",
    "LLM Application Development",
    "LLM Evaluation",
    "LLM Security",
    "Practical LLM Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Neural Network (NN)": [
    "Introduction to Neural Networks",
    "Biological vs Artificial Neurons",
    "Perceptron",
    "Neural Network Architecture",
    "Input Layer",
    "Hidden Layer",
    "Output Layer",
    "Activation Functions",
    "Weights and Bias",
    "Forward Propagation",
    "Loss Functions",
    "Backpropagation",
    "Gradient Descent",
    "Optimizers",
    "Training Neural Networks",
    "Overfitting and Underfitting",
    "Regularization",
    "Model Evaluation",
    "Practical Neural Network Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Prompt Engineering": [
    "Introduction to Prompt Engineering",
    "AI Models and Prompts",
    "Prompt Structure",
    "Basic Prompting",
    "Zero-Shot Prompting",
    "One-Shot Prompting",
    "Few-Shot Prompting",
    "Role Prompting",
    "Context-Based Prompting",
    "Chain-of-Thought Concepts",
    "Structured Prompts",
    "Output Formatting",
    "Prompt Templates",
    "Prompt Optimization",
    "Prompt Evaluation",
    "Image Generation Prompts",
    "Coding Prompts",
    "Business Prompts",
    "Advanced Prompting",
    "Real-World Prompt Projects",
    "Best Practices",
    "Final Assessment",
  ],

  "Data Engineering": [
    "Introduction to Data Engineering",
    "Data Engineering Architecture",
    "Data Sources",
    "Structured and Unstructured Data",
    "SQL Fundamentals",
    "Python for Data Engineering",
    "Data Collection",
    "Data Cleaning",
    "ETL",
    "ELT",
    "Data Pipelines",
    "Databases",
    "Data Warehousing",
    "Data Lakes",
    "APIs",
    "Batch Processing",
    "Stream Processing",
    "Cloud Data Engineering",
    "Data Quality",
    "Pipeline Monitoring",
    "Practical Data Pipeline Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "MLOps Engineering": [
    "Introduction to MLOps",
    "ML Development Lifecycle",
    "ML Project Structure",
    "Git and Version Control",
    "Data Versioning",
    "Model Versioning",
    "Experiment Tracking",
    "Model Training Pipelines",
    "CI/CD for ML",
    "Docker",
    "Kubernetes Basics",
    "Model Deployment",
    "Model Serving",
    "Model Monitoring",
    "Model Performance Tracking",
    "Cloud ML Platforms",
    "ML Automation",
    "Model Security",
    "Production ML Systems",
    "Practical MLOps Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Data Science": [
    "Introduction to Data Science",
    "Data Science Lifecycle",
    "Python Fundamentals",
    "NumPy",
    "Pandas",
    "Data Cleaning",
    "Data Preprocessing",
    "Exploratory Data Analysis",
    "Statistics",
    "Probability",
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    "Feature Engineering",
    "Machine Learning Basics",
    "Regression",
    "Classification",
    "Clustering",
    "Model Evaluation",
    "Business Insights",
    "Practical Data Science Project",
    "Project Presentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Data Analysis": [
    "Introduction to Data Analysis",
    "Data Analyst Role",
    "Excel Fundamentals",
    "Advanced Excel",
    "SQL Fundamentals",
    "Data Collection",
    "Data Cleaning",
    "Data Transformation",
    "Data Analysis",
    "Descriptive Statistics",
    "Data Visualization",
    "Charts and Graphs",
    "Power BI",
    "Dashboard Creation",
    "KPI Analysis",
    "Business Reports",
    "Data Interpretation",
    "Real-World Dataset Analysis",
    "Practical Analysis Project",
    "Dashboard Project",
    "Presentation Skills",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Business Analysis": [
    "Introduction to Business Analysis",
    "Business Analyst Role",
    "Business Requirements",
    "Requirement Gathering",
    "Stakeholder Analysis",
    "Requirement Documentation",
    "Functional Requirements",
    "Non-Functional Requirements",
    "Business Process Analysis",
    "Use Cases",
    "User Stories",
    "Acceptance Criteria",
    "BRD",
    "FRD",
    "Process Mapping",
    "Agile Methodology",
    "Scrum",
    "Gap Analysis",
    "Risk Analysis",
    "Solution Planning",
    "Real-World Business Case",
    "Project Documentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Java Fullstack": [
    "Introduction to Full Stack Development",
    "Web Development Fundamentals",
    "HTML",
    "CSS",
    "JavaScript Basics",
    "Java Fundamentals",
    "Object-Oriented Programming",
    "Collections Framework",
    "Exception Handling",
    "JDBC",
    "SQL",
    "Database Connectivity",
    "Spring Framework",
    "Spring Boot",
    "REST APIs",
    "Spring Data JPA",
    "Hibernate",
    "Frontend Integration",
    "Authentication and Authorization",
    "Full Stack Application Development",
    "Practical Java Full Stack Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Python Fullstack": [
    "Introduction to Full Stack Development",
    "HTML",
    "CSS",
    "JavaScript Basics",
    "Python Fundamentals",
    "Python Data Types",
    "Functions",
    "Object-Oriented Programming",
    "Exception Handling",
    "File Handling",
    "SQL",
    "Database Connectivity",
    "Django",
    "Flask",
    "REST APIs",
    "Backend Development",
    "Frontend Integration",
    "Authentication",
    "CRUD Application",
    "Full Stack Application Development",
    "Practical Python Full Stack Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "PHP Fullstack": [
    "Introduction to Full Stack Development",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP Fundamentals",
    "Variables and Data Types",
    "Functions",
    "Arrays",
    "Object-Oriented PHP",
    "Forms and Validation",
    "Sessions and Cookies",
    "MySQL",
    "PHP Database Connectivity",
    "CRUD Operations",
    "Laravel",
    "Laravel MVC",
    "REST APIs",
    "Authentication",
    "Frontend Integration",
    "Full Stack Application Development",
    "Practical PHP Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  ".Net Fullstack": [
    "Introduction to .NET Full Stack",
    "Web Development Fundamentals",
    "HTML",
    "CSS",
    "JavaScript",
    "C# Fundamentals",
    "Object-Oriented Programming",
    "Collections",
    "Exception Handling",
    "LINQ",
    "SQL Server",
    "Entity Framework",
    "ASP.NET Core",
    "MVC Architecture",
    "REST APIs",
    "Web API Development",
    "Authentication and Authorization",
    "Frontend Integration",
    "CRUD Application",
    "Full Stack Application Development",
    "Practical .NET Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Ruby on Rails Fullstack": [
    "Introduction to Ruby on Rails",
    "Web Development Fundamentals",
    "HTML",
    "CSS",
    "JavaScript",
    "Ruby Fundamentals",
    "Variables and Data Types",
    "Methods",
    "Arrays and Hashes",
    "Object-Oriented Ruby",
    "Ruby Gems",
    "Rails Architecture",
    "MVC Pattern",
    "Rails Routing",
    "Active Record",
    "Database Integration",
    "CRUD Operations",
    "REST APIs",
    "Authentication",
    "Frontend Integration",
    "Practical Rails Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "JavaScript Fullstack": [
    "Introduction to JavaScript Full Stack",
    "HTML Fundamentals",
    "CSS Fundamentals",
    "JavaScript Basics",
    "Variables and Data Types",
    "Functions",
    "Arrays and Objects",
    "DOM Manipulation",
    "Events",
    "ES6+ Features",
    "Async JavaScript",
    "Promises",
    "Async/Await",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Mongoose",
    "Authentication",
    "Frontend and Backend Integration",
    "Full Stack Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "React / Angular / Vue": [
    "Introduction to Frontend Frameworks",
    "HTML and CSS Fundamentals",
    "JavaScript Fundamentals",
    "Components",
    "Props and State",
    "Event Handling",
    "Conditional Rendering",
    "Lists and Forms",
    "React Fundamentals",
    "Angular Fundamentals",
    "Vue Fundamentals",
    "Routing",
    "API Integration",
    "State Management",
    "Form Validation",
    "Authentication",
    "Reusable Components",
    "Responsive UI",
    "Frontend Project Structure",
    "Real-World Frontend Project",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Android": [
    "Introduction to Android Development",
    "Android Architecture",
    "Android Studio",
    "Kotlin Fundamentals",
    "Variables and Data Types",
    "Functions",
    "Object-Oriented Programming",
    "Android Project Structure",
    "Activities",
    "Fragments",
    "Layouts",
    "UI Components",
    "RecyclerView",
    "Navigation",
    "User Input and Forms",
    "SQLite Database",
    "REST API Integration",
    "Firebase",
    "Authentication",
    "Notifications",
    "Practical Android Project",
    "App Testing",
    "App Deployment",
    "Final Assessment",
  ],

  "iOS": [
    "Introduction to iOS Development",
    "Xcode",
    "Swift Fundamentals",
    "Variables and Data Types",
    "Functions",
    "Classes and Objects",
    "SwiftUI",
    "UI Components",
    "Layouts",
    "Navigation",
    "Lists and Forms",
    "State Management",
    "Local Storage",
    "REST API Integration",
    "JSON Handling",
    "Firebase",
    "Authentication",
    "Notifications",
    "App Testing",
    "Practical iOS Project",
    "App Optimization",
    "App Store Preparation",
    "Deployment",
    "Final Assessment",
  ],

  "Flutter": [
    "Introduction to Flutter",
    "Flutter Architecture",
    "Dart Fundamentals",
    "Variables and Data Types",
    "Functions",
    "Classes and Objects",
    "Flutter Project Structure",
    "Widgets",
    "Stateless Widgets",
    "Stateful Widgets",
    "Layouts",
    "Navigation",
    "Forms",
    "State Management",
    "REST API Integration",
    "JSON Handling",
    "Firebase",
    "Authentication",
    "Local Storage",
    "Responsive Design",
    "Practical Flutter Project",
    "Testing",
    "Deployment",
    "Final Assessment",
  ],

  "React Native": [
    "Introduction to React Native",
    "React Native Architecture",
    "JavaScript Fundamentals",
    "React Fundamentals",
    "Components",
    "Props and State",
    "Hooks",
    "Styling",
    "Layouts",
    "Navigation",
    "Forms",
    "API Integration",
    "AsyncStorage",
    "Firebase",
    "Authentication",
    "Push Notifications",
    "Device Features",
    "Reusable Components",
    "Responsive Mobile UI",
    "Practical React Native Project",
    "Testing",
    "App Optimization",
    "Deployment",
    "Final Assessment",
  ],

  "Kivy": [
    "Introduction to Kivy",
    "Python Fundamentals",
    "Kivy Installation",
    "Kivy Architecture",
    "Widgets",
    "Layouts",
    "Events",
    "Properties",
    "KV Language",
    "Screen Management",
    "Forms",
    "User Input",
    "Navigation",
    "Database Integration",
    "API Integration",
    "File Handling",
    "Animations",
    "Responsive UI",
    "Application Packaging",
    "Practical Kivy Project",
    "Testing",
    "Deployment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Ionic": [
    "Introduction to Ionic",
    "Web Technologies for Ionic",
    "HTML",
    "CSS",
    "JavaScript",
    "Ionic CLI",
    "Ionic Project Structure",
    "Components",
    "Layouts",
    "Navigation",
    "Forms",
    "API Integration",
    "Angular/React Integration",
    "State Management",
    "Capacitor",
    "Device Features",
    "Camera and Storage",
    "Firebase",
    "Authentication",
    "Push Notifications",
    "Practical Ionic Project",
    "Testing",
    "App Deployment",
    "Final Assessment",
  ],

  "AWS": [
    "Introduction to Cloud Computing",
    "AWS Overview",
    "AWS Account and IAM",
    "EC2",
    "S3",
    "VPC",
    "Security Groups",
    "Route 53",
    "CloudFront",
    "RDS",
    "DynamoDB",
    "Lambda",
    "API Gateway",
    "Elastic Beanstalk",
    "Load Balancing",
    "Auto Scaling",
    "CloudWatch",
    "CloudFormation",
    "AWS Security",
    "Backup and Recovery",
    "Real-World AWS Project",
    "Application Deployment",
    "AWS Best Practices",
    "Final Assessment",
  ],

  "AZURE": [
    "Introduction to Microsoft Azure",
    "Azure Account Setup",
    "Azure Resource Groups",
    "Azure Virtual Machines",
    "Azure Storage",
    "Azure Virtual Network",
    "Azure SQL Database",
    "Azure App Service",
    "Azure Functions",
    "Azure Active Directory",
    "Azure DevOps",
    "Azure Pipelines",
    "Load Balancing",
    "Auto Scaling",
    "Azure Monitor",
    "Application Insights",
    "Azure Security",
    "Backup and Recovery",
    "Cloud Deployment",
    "Real-World Azure Project",
    "CI/CD",
    "Azure Best Practices",
    "Interview Preparation",
    "Final Assessment",
  ],

  "GCP (Google Cloud)": [
    "Introduction to Google Cloud",
    "GCP Account Setup",
    "Google Cloud Console",
    "IAM",
    "Compute Engine",
    "Cloud Storage",
    "VPC",
    "Cloud SQL",
    "Firestore",
    "Cloud Functions",
    "Cloud Run",
    "Kubernetes Engine",
    "Load Balancing",
    "Cloud Monitoring",
    "Cloud Logging",
    "Cloud Security",
    "BigQuery",
    "Data Processing",
    "Application Deployment",
    "CI/CD",
    "Real-World GCP Project",
    "Cloud Optimization",
    "Interview Preparation",
    "Final Assessment",
  ],

  "ORACLE Cloud": [
    "Introduction to Oracle Cloud",
    "Oracle Cloud Architecture",
    "OCI Console",
    "Identity and Access Management",
    "Compute Services",
    "Storage Services",
    "Virtual Cloud Network",
    "Oracle Database Cloud",
    "Autonomous Database",
    "Load Balancing",
    "Networking",
    "Cloud Security",
    "Monitoring",
    "Backup and Recovery",
    "Application Deployment",
    "Containers",
    "Kubernetes",
    "Cloud Automation",
    "Database Management",
    "Real-World Oracle Cloud Project",
    "CI/CD",
    "Optimization",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Cyber Security Analyst": [
    "Introduction to Cyber Security",
    "Cyber Security Fundamentals",
    "Security Threats",
    "Types of Attacks",
    "Networking Fundamentals",
    "TCP/IP",
    "DNS",
    "HTTP and HTTPS",
    "Firewalls",
    "Endpoint Security",
    "Security Monitoring",
    "Threat Detection",
    "Incident Response",
    "Log Analysis",
    "SIEM Fundamentals",
    "Vulnerability Management",
    "Risk Assessment",
    "Security Policies",
    "Security Tools",
    "Practical Security Project",
    "Incident Investigation",
    "Security Reporting",
    "Interview Preparation",
    "Final Assessment",
  ],

  "SOC Analysis": [
    "Introduction to SOC",
    "SOC Roles and Responsibilities",
    "Cyber Security Fundamentals",
    "Networking Fundamentals",
    "Security Events",
    "Log Management",
    "SIEM",
    "Security Alerts",
    "Alert Triage",
    "Threat Detection",
    "IOC Analysis",
    "Malware Analysis Basics",
    "Phishing Analysis",
    "Incident Response",
    "Threat Intelligence",
    "MITRE ATT&CK",
    "Endpoint Monitoring",
    "Network Monitoring",
    "Security Investigation",
    "Incident Documentation",
    "Practical SOC Project",
    "SOC Reporting",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Ethical Hacking": [
    "Introduction to Ethical Hacking",
    "Cyber Security Fundamentals",
    "Networking Fundamentals",
    "Linux Fundamentals",
    "Information Gathering",
    "Reconnaissance",
    "Scanning",
    "Enumeration",
    "Vulnerability Assessment",
    "Web Security Fundamentals",
    "Authentication Security",
    "Password Security",
    "Network Security Testing",
    "Wireless Security Basics",
    "Social Engineering Awareness",
    "Security Tools",
    "Exploitation Concepts",
    "Post-Exploitation Concepts",
    "Security Reporting",
    "Legal and Ethical Considerations",
    "Practical Security Lab",
    "Vulnerability Report",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Penetration Testing": [
    "Introduction to Penetration Testing",
    "Penetration Testing Methodology",
    "Scope and Rules of Engagement",
    "Reconnaissance",
    "Information Gathering",
    "Scanning",
    "Enumeration",
    "Vulnerability Assessment",
    "Web Application Testing",
    "API Security Testing",
    "Network Security Testing",
    "Authentication Testing",
    "Authorization Testing",
    "Configuration Testing",
    "Security Tools",
    "Exploitation Concepts",
    "Risk Assessment",
    "Evidence Collection",
    "Reporting",
    "Remediation Recommendations",
    "Practical Authorized Lab",
    "Penetration Test Report",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Cloud Security / Virtualization": [
    "Introduction to Cloud Security",
    "Cloud Security Fundamentals",
    "Cloud Service Models",
    "Cloud Deployment Models",
    "Identity and Access Management",
    "Authentication",
    "Authorization",
    "Network Security",
    "Cloud Firewalls",
    "Data Security",
    "Encryption",
    "Key Management",
    "Virtual Machines",
    "Containers",
    "Virtual Networks",
    "Cloud Monitoring",
    "Security Logging",
    "Threat Detection",
    "Compliance",
    "Cloud Security Architecture",
    "Practical Cloud Security Project",
    "Security Assessment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Information Security": [
    "Introduction to Information Security",
    "CIA Triad",
    "Information Security Principles",
    "Security Policies",
    "Risk Management",
    "Threats and Vulnerabilities",
    "Security Controls",
    "Access Control",
    "Authentication",
    "Authorization",
    "Cryptography Fundamentals",
    "Encryption",
    "Network Security",
    "Application Security",
    "Data Security",
    "Security Monitoring",
    "Incident Response",
    "Business Continuity",
    "Disaster Recovery",
    "Compliance",
    "Practical Security Assessment",
    "Security Documentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Network Security": [
    "Introduction to Network Security",
    "Networking Fundamentals",
    "OSI Model",
    "TCP/IP",
    "IP Addressing",
    "DNS",
    "DHCP",
    "Routing",
    "Firewalls",
    "VPN",
    "Proxy Servers",
    "Network Segmentation",
    "IDS and IPS",
    "Wireless Security",
    "Network Monitoring",
    "Packet Analysis",
    "Security Protocols",
    "Threat Detection",
    "Incident Response",
    "Network Hardening",
    "Practical Network Security Project",
    "Security Testing",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Application Security": [
    "Introduction to Application Security",
    "Secure Software Development",
    "Application Security Lifecycle",
    "Authentication",
    "Authorization",
    "Session Management",
    "Input Validation",
    "Secure Coding",
    "OWASP Fundamentals",
    "Common Web Vulnerabilities",
    "SQL Injection",
    "XSS",
    "CSRF",
    "API Security",
    "File Upload Security",
    "Security Headers",
    "Encryption",
    "Dependency Security",
    "Security Testing",
    "Vulnerability Management",
    "Practical Application Security Project",
    "Security Assessment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "IoT Security": [
    "Introduction to IoT",
    "IoT Architecture",
    "IoT Devices",
    "IoT Communication Protocols",
    "Sensors and Actuators",
    "IoT Networks",
    "IoT Cloud Platforms",
    "Device Authentication",
    "Device Authorization",
    "Data Security",
    "Encryption",
    "Secure Communication",
    "Firmware Security",
    "IoT Vulnerabilities",
    "Network Security",
    "Device Monitoring",
    "Threat Detection",
    "Secure IoT Development",
    "IoT Privacy",
    "Security Testing",
    "Practical IoT Security Project",
    "Risk Assessment",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Manual Testing / Agile": [
    "Introduction to Software Testing",
    "Software Development Life Cycle",
    "Software Testing Life Cycle",
    "Testing Principles",
    "Test Planning",
    "Test Scenarios",
    "Test Cases",
    "Test Data",
    "Functional Testing",
    "Non-Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Sanity Testing",
    "Integration Testing",
    "System Testing",
    "User Acceptance Testing",
    "Defect Reporting",
    "Bug Life Cycle",
    "Agile Methodology",
    "Scrum",
    "Sprint Planning",
    "Practical Testing Project",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Automation Testing / Selenium": [
    "Introduction to Automation Testing",
    "Manual vs Automation Testing",
    "Automation Testing Frameworks",
    "Selenium Introduction",
    "Selenium WebDriver",
    "Browser Automation",
    "Locators",
    "XPath",
    "CSS Selectors",
    "Web Elements",
    "Waits",
    "Alerts",
    "Frames",
    "Windows and Tabs",
    "Forms and Dropdowns",
    "TestNG",
    "Page Object Model",
    "Data-Driven Testing",
    "Automation Framework",
    "Test Reports",
    "CI/CD Integration",
    "Practical Automation Project",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Performance / Load Testing": [
    "Introduction to Performance Testing",
    "Performance Testing Concepts",
    "Load Testing",
    "Stress Testing",
    "Volume Testing",
    "Scalability Testing",
    "Performance Metrics",
    "Response Time",
    "Throughput",
    "Concurrent Users",
    "Performance Test Planning",
    "JMeter Introduction",
    "JMeter Installation",
    "Test Plan Creation",
    "Thread Groups",
    "HTTP Requests",
    "Assertions",
    "Listeners",
    "Load Testing Execution",
    "Performance Analysis",
    "Bottleneck Identification",
    "Practical Performance Project",
    "Performance Report",
    "Final Assessment",
  ],

  "Database Testing (DB)": [
    "Introduction to Database Testing",
    "Database Fundamentals",
    "SQL Fundamentals",
    "Database Tables",
    "Keys",
    "Constraints",
    "Joins",
    "Queries",
    "Stored Procedures",
    "Functions",
    "Triggers",
    "Data Validation",
    "Data Integrity",
    "CRUD Testing",
    "Backend Database Testing",
    "Database Performance",
    "Data Migration Testing",
    "ETL Database Testing",
    "Test Case Design",
    "Defect Reporting",
    "Practical Database Testing Project",
    "Test Reports",
    "Interview Preparation",
    "Final Assessment",
  ],

  "ETL Testing": [
    "Introduction to ETL Testing",
    "ETL Concepts",
    "ETL Architecture",
    "Data Warehousing",
    "Source and Target Systems",
    "Data Extraction",
    "Data Transformation",
    "Data Loading",
    "Data Mapping",
    "Data Validation",
    "Data Quality",
    "SQL for ETL Testing",
    "Transformation Testing",
    "Data Completeness",
    "Data Accuracy",
    "Data Integrity",
    "Duplicate Data Testing",
    "Performance Testing",
    "ETL Defect Management",
    "ETL Test Planning",
    "Practical ETL Testing Project",
    "Test Reports",
    "Interview Preparation",
    "Final Assessment",
  ],

  "SAP Testing": [
    "Introduction to SAP",
    "SAP Architecture",
    "SAP Modules",
    "SAP Testing Fundamentals",
    "Test Planning",
    "Requirement Analysis",
    "Test Case Design",
    "Functional Testing",
    "Integration Testing",
    "Regression Testing",
    "User Acceptance Testing",
    "SAP GUI Testing",
    "SAP Data Testing",
    "Business Process Testing",
    "Defect Management",
    "Test Execution",
    "Test Reports",
    "SAP Test Automation Basics",
    "Agile SAP Testing",
    "Practical SAP Testing Project",
    "End-to-End Testing",
    "Documentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Mobile App Testing (Appium)": [
    "Introduction to Mobile App Testing",
    "Mobile Testing Fundamentals",
    "Android Testing",
    "iOS Testing",
    "Mobile Application Types",
    "Test Planning",
    "Test Cases",
    "Functional Testing",
    "UI Testing",
    "Compatibility Testing",
    "Network Testing",
    "Performance Testing",
    "Security Testing",
    "Appium Introduction",
    "Appium Setup",
    "Appium Architecture",
    "Mobile Element Locators",
    "Automation Scripts",
    "TestNG",
    "Automation Framework",
    "Practical Mobile Testing Project",
    "Test Reports",
    "Interview Preparation",
    "Final Assessment",
  ],

  "API Testing (Postman)": [
    "Introduction to API Testing",
    "API Fundamentals",
    "REST APIs",
    "HTTP Methods",
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "HTTP Status Codes",
    "Request Headers",
    "Request Parameters",
    "Request Body",
    "JSON",
    "Postman Introduction",
    "Postman Collections",
    "Environment Variables",
    "Authentication Testing",
    "Assertions",
    "API Automation",
    "Test Scripts",
    "Practical API Testing Project",
    "API Documentation",
    "Final Assessment",
  ],

  "Search Engine Optimization (SEO)": [
    "Introduction to SEO",
    "Search Engine Fundamentals",
    "How Search Engines Work",
    "Keyword Research",
    "Search Intent",
    "On-Page SEO",
    "Title Tags",
    "Meta Descriptions",
    "Header Tags",
    "URL Optimization",
    "Content Optimization",
    "Internal Linking",
    "Technical SEO",
    "Site Speed",
    "Mobile SEO",
    "XML Sitemap",
    "Robots.txt",
    "Off-Page SEO",
    "Backlink Strategy",
    "Local SEO",
    "Google Search Console",
    "Google Analytics",
    "SEO Project",
    "Final Assessment",
  ],

  "Search Engine Marketing (SEM)": [
    "Introduction to SEM",
    "Search Advertising Fundamentals",
    "Google Ads",
    "Account Setup",
    "Campaign Structure",
    "Keyword Research",
    "Search Intent",
    "Ad Groups",
    "Ad Creation",
    "Ad Copywriting",
    "Bidding Strategies",
    "Budget Management",
    "Quality Score",
    "Landing Pages",
    "Conversion Tracking",
    "Campaign Optimization",
    "A/B Testing",
    "Performance Analysis",
    "Google Analytics",
    "Reporting",
    "Practical SEM Campaign",
    "Optimization",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Social Media Marketing (SMM)": [
    "Introduction to Social Media Marketing",
    "Social Media Platforms",
    "Audience Research",
    "Content Strategy",
    "Content Planning",
    "Content Calendar",
    "Facebook Marketing",
    "Instagram Marketing",
    "LinkedIn Marketing",
    "YouTube Marketing",
    "Short-Form Video Marketing",
    "Hashtag Strategy",
    "Community Management",
    "Social Media Advertising",
    "Campaign Creation",
    "Audience Targeting",
    "Engagement Strategy",
    "Analytics",
    "Performance Tracking",
    "Brand Building",
    "Practical SMM Campaign",
    "Reporting",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Pay Per Click (PPC)": [
    "Introduction to PPC",
    "PPC Fundamentals",
    "Google Ads",
    "Campaign Types",
    "Keyword Research",
    "Keyword Match Types",
    "Ad Groups",
    "Ad Copy",
    "Landing Pages",
    "Bidding Strategies",
    "Budget Planning",
    "Quality Score",
    "Conversion Tracking",
    "Audience Targeting",
    "Remarketing",
    "A/B Testing",
    "Campaign Optimization",
    "Performance Metrics",
    "ROI and ROAS",
    "Analytics",
    "Practical PPC Campaign",
    "Campaign Reporting",
    "Optimization",
    "Final Assessment",
  ],

  "Content Marketing": [
    "Introduction to Content Marketing",
    "Content Marketing Strategy",
    "Audience Research",
    "Buyer Personas",
    "Content Planning",
    "Content Types",
    "Blog Writing",
    "Copywriting",
    "Social Media Content",
    "Video Content",
    "SEO Content",
    "Keyword Research",
    "Content Calendar",
    "Storytelling",
    "Content Distribution",
    "Email Content",
    "Lead Generation",
    "Content Optimization",
    "Analytics",
    "Performance Measurement",
    "Practical Content Campaign",
    "Content Portfolio",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Video Marketing": [
    "Introduction to Video Marketing",
    "Video Marketing Strategy",
    "Audience Research",
    "Video Content Planning",
    "Video Script Writing",
    "Storytelling",
    "Short-Form Videos",
    "Long-Form Videos",
    "YouTube Marketing",
    "Instagram Reels",
    "Social Media Videos",
    "Video SEO",
    "Thumbnail Design",
    "Video Titles and Descriptions",
    "Call-to-Action",
    "Video Advertising",
    "Audience Engagement",
    "Analytics",
    "Performance Tracking",
    "Content Optimization",
    "Practical Video Marketing Project",
    "Campaign Creation",
    "Portfolio Development",
    "Final Assessment",
  ],

  "Email & Mobile Marketing": [
    "Introduction to Email Marketing",
    "Email Marketing Strategy",
    "Audience Segmentation",
    "Email Lists",
    "Lead Generation",
    "Email Campaign Types",
    "Email Copywriting",
    "Subject Lines",
    "Email Design",
    "Call-to-Action",
    "Email Automation",
    "Drip Campaigns",
    "Personalization",
    "A/B Testing",
    "Email Analytics",
    "Mobile Marketing Fundamentals",
    "SMS Marketing",
    "Push Notifications",
    "Mobile Campaigns",
    "Campaign Optimization",
    "Practical Marketing Campaign",
    "Reporting",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Affiliate & SMS Marketing": [
    "Introduction to Affiliate Marketing",
    "Affiliate Marketing Models",
    "Affiliate Networks",
    "Finding Affiliate Products",
    "Audience Research",
    "Affiliate Content",
    "Product Promotion",
    "Landing Pages",
    "Tracking Links",
    "Conversion Tracking",
    "Commission Models",
    "Affiliate SEO",
    "Social Media Affiliate Marketing",
    "Email Affiliate Marketing",
    "Affiliate Analytics",
    "Introduction to SMS Marketing",
    "SMS Campaign Planning",
    "Audience Segmentation",
    "SMS Copywriting",
    "SMS Automation",
    "Compliance and Best Practices",
    "Practical Campaign",
    "Performance Reporting",
    "Final Assessment",
  ],

  "Website Marketing & Chat Bots": [
    "Introduction to Website Marketing",
    "Website Marketing Strategy",
    "Audience Research",
    "Landing Pages",
    "Website Content",
    "Conversion Optimization",
    "Call-to-Action",
    "Lead Generation",
    "Forms and Lead Capture",
    "Analytics",
    "Google Analytics",
    "Introduction to Chatbots",
    "Chatbot Fundamentals",
    "Chatbot Platforms",
    "Conversation Design",
    "Chatbot Flows",
    "AI Chatbots",
    "Website Chatbot Integration",
    "Lead Qualification",
    "Customer Support Automation",
    "Practical Website Marketing Project",
    "Chatbot Project",
    "Analytics and Optimization",
    "Final Assessment",
  ],

  "Business Architecture": [
    "Introduction to Business Architecture",
    "Business Architecture Fundamentals",
    "Business Strategy",
    "Business Capabilities",
    "Business Processes",
    "Organization Structure",
    "Value Streams",
    "Business Models",
    "Stakeholder Analysis",
    "Capability Mapping",
    "Process Mapping",
    "Business Requirements",
    "Gap Analysis",
    "Business Transformation",
    "Solution Planning",
    "Architecture Governance",
    "Business and IT Alignment",
    "Enterprise Context",
    "Architecture Documentation",
    "Business Architecture Tools",
    "Practical Business Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Enterprise Architecture": [
    "Introduction to Enterprise Architecture",
    "EA Fundamentals",
    "Enterprise Strategy",
    "Business Architecture",
    "Data Architecture",
    "Application Architecture",
    "Technology Architecture",
    "Architecture Frameworks",
    "TOGAF Fundamentals",
    "Capability Mapping",
    "Business Processes",
    "System Integration",
    "Technology Planning",
    "Cloud Architecture",
    "Security Architecture",
    "Architecture Governance",
    "Risk Management",
    "Enterprise Transformation",
    "Architecture Documentation",
    "Reference Architectures",
    "Practical Enterprise Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Solutions Architecture": [
    "Introduction to Solutions Architecture",
    "Architecture Fundamentals",
    "Business Requirements",
    "Technical Requirements",
    "System Components",
    "Application Architecture",
    "Database Architecture",
    "API Architecture",
    "Cloud Architecture",
    "Scalability",
    "Availability",
    "Reliability",
    "Security",
    "Performance",
    "Cost Optimization",
    "Microservices",
    "Integration Patterns",
    "Architecture Documentation",
    "Architecture Diagrams",
    "Solution Design",
    "Practical Solution Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Data Architecture": [
    "Introduction to Data Architecture",
    "Data Architecture Fundamentals",
    "Data Models",
    "Relational Databases",
    "NoSQL Databases",
    "Data Warehousing",
    "Data Lakes",
    "Data Pipelines",
    "ETL and ELT",
    "Data Integration",
    "Data Governance",
    "Data Quality",
    "Master Data Management",
    "Metadata Management",
    "Data Security",
    "Data Privacy",
    "Cloud Data Architecture",
    "Big Data Architecture",
    "Data Architecture Patterns",
    "Architecture Documentation",
    "Practical Data Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "System Architecture": [
    "Introduction to System Architecture",
    "System Design Fundamentals",
    "Requirements Analysis",
    "System Components",
    "Client-Server Architecture",
    "Monolithic Architecture",
    "Microservices Architecture",
    "API Architecture",
    "Database Design",
    "Caching",
    "Load Balancing",
    "Scalability",
    "Availability",
    "Reliability",
    "Fault Tolerance",
    "Security",
    "Message Queues",
    "Event-Driven Architecture",
    "Monitoring",
    "System Architecture Diagrams",
    "Practical System Design Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Application / Software Architect": [
    "Introduction to Software Architecture",
    "Software Architecture Fundamentals",
    "Requirements Analysis",
    "Design Principles",
    "SOLID Principles",
    "Design Patterns",
    "Layered Architecture",
    "MVC Architecture",
    "Microservices",
    "API Design",
    "Database Architecture",
    "Security Architecture",
    "Scalability",
    "Performance",
    "Reliability",
    "Cloud Architecture",
    "Application Integration",
    "Architecture Documentation",
    "Code Quality",
    "Architecture Review",
    "Practical Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Infrastructure / Cloud Architect": [
    "Introduction to Cloud Architecture",
    "Infrastructure Fundamentals",
    "Cloud Computing",
    "Cloud Service Models",
    "Cloud Deployment Models",
    "Networking",
    "Virtual Machines",
    "Containers",
    "Storage",
    "Databases",
    "Load Balancing",
    "Auto Scaling",
    "High Availability",
    "Disaster Recovery",
    "Cloud Security",
    "IAM",
    "Monitoring",
    "Logging",
    "Infrastructure as Code",
    "Cloud Cost Optimization",
    "Practical Cloud Architecture Project",
    "Architecture Documentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Network / Security Architect": [
    "Introduction to Network Security Architecture",
    "Networking Fundamentals",
    "Network Architecture",
    "OSI Model",
    "TCP/IP",
    "Routing and Switching",
    "Network Segmentation",
    "Firewalls",
    "VPN",
    "IDS and IPS",
    "Zero Trust Security",
    "Identity and Access Management",
    "Network Monitoring",
    "Security Operations",
    "Cloud Network Security",
    "Application Security",
    "Data Security",
    "Threat Modeling",
    "Security Architecture Design",
    "Architecture Documentation",
    "Practical Security Architecture Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Unity": [
    "Introduction to Unity",
    "Unity Hub and Installation",
    "Unity Interface",
    "Game Objects",
    "Components",
    "Scenes",
    "C# Fundamentals",
    "Unity Scripting",
    "Player Movement",
    "Input Handling",
    "Physics",
    "Collisions",
    "Camera System",
    "Lighting",
    "Materials",
    "Animations",
    "Audio",
    "UI Development",
    "Game Mechanics",
    "Game Optimization",
    "Practical Unity Game Project",
    "Testing",
    "Build and Deployment",
    "Final Assessment",
  ],

  "Unreal Engine": [
    "Introduction to Unreal Engine",
    "Unreal Engine Installation",
    "Editor Interface",
    "Projects and Levels",
    "Actors and Components",
    "Blueprints",
    "C++ Fundamentals",
    "Character Setup",
    "Player Controls",
    "Physics",
    "Collision",
    "Materials",
    "Lighting",
    "Animation",
    "Audio",
    "UI Development",
    "Game Mechanics",
    "AI Basics",
    "Level Design",
    "Optimization",
    "Practical Unreal Game Project",
    "Testing",
    "Build and Deployment",
    "Final Assessment",
  ],

  "3D Animation": [
    "Introduction to 3D Animation",
    "3D Design Fundamentals",
    "3D Modeling",
    "Basic Shapes",
    "Object Creation",
    "Materials",
    "Textures",
    "Lighting",
    "Camera Setup",
    "Rigging",
    "Skeletons",
    "Character Setup",
    "Keyframe Animation",
    "Timeline",
    "Motion Principles",
    "Character Animation",
    "Facial Animation",
    "Rendering",
    "Visual Effects",
    "Animation Workflow",
    "Practical 3D Animation Project",
    "Portfolio Development",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Graphics Design": [
    "Introduction to Graphic Design",
    "Design Principles",
    "Color Theory",
    "Typography",
    "Composition",
    "Layout Design",
    "Visual Hierarchy",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Image Editing",
    "Vector Graphics",
    "Logo Design",
    "Poster Design",
    "Banner Design",
    "Social Media Design",
    "Branding Design",
    "Print Design",
    "Digital Design",
    "Creative Workflow",
    "Design Portfolio",
    "Practical Graphic Design Project",
    "Client Presentation",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Communicative English": [
    "Introduction to Communication Skills",
    "Basic English Grammar",
    "Sentence Formation",
    "Vocabulary Building",
    "Pronunciation",
    "Listening Skills",
    "Speaking Skills",
    "Reading Skills",
    "Writing Skills",
    "Everyday Conversations",
    "Self Introduction",
    "Question and Answer Practice",
    "Telephone Communication",
    "Group Discussion",
    "Presentation Skills",
    "Workplace Communication",
    "Email Communication",
    "Interview Communication",
    "Confidence Building",
    "Common English Mistakes",
    "Practical Speaking Activities",
    "Mock Interview",
    "Communication Assessment",
    "Final Assessment",
  ],

  "Advance English": [
    "Advanced Grammar",
    "Advanced Vocabulary",
    "Tenses Review",
    "Sentence Structures",
    "Complex Sentences",
    "Conditionals",
    "Active and Passive Voice",
    "Direct and Indirect Speech",
    "Phrasal Verbs",
    "Idioms",
    "Collocations",
    "Pronunciation",
    "Advanced Speaking",
    "Advanced Listening",
    "Reading Comprehension",
    "Professional Writing",
    "Formal Communication",
    "Presentation Skills",
    "Group Discussions",
    "Debate Skills",
    "Interview Preparation",
    "Business Communication",
    "Mock Interview",
    "Final Assessment",
  ],

  "Business English": [
    "Introduction to Business English",
    "Professional Vocabulary",
    "Business Grammar",
    "Email Writing",
    "Formal Letters",
    "Business Meetings",
    "Meeting Vocabulary",
    "Telephone Communication",
    "Presentation Skills",
    "Business Presentations",
    "Negotiation Skills",
    "Persuasive Communication",
    "Report Writing",
    "Proposal Writing",
    "Business Discussions",
    "Professional Networking",
    "Customer Communication",
    "Workplace Conversations",
    "Interview Communication",
    "Leadership Communication",
    "Practical Business Activities",
    "Mock Meeting",
    "Mock Interview",
    "Final Assessment",
  ],

  "IELTS": [
    "Introduction to IELTS",
    "IELTS Exam Structure",
    "Listening Test",
    "Listening Question Types",
    "Listening Strategies",
    "Reading Test",
    "Reading Question Types",
    "Reading Strategies",
    "Vocabulary Building",
    "Grammar for IELTS",
    "Writing Task 1",
    "Writing Task 2",
    "Essay Structure",
    "Academic Writing",
    "Speaking Test",
    "Speaking Part 1",
    "Speaking Part 2",
    "Speaking Part 3",
    "Pronunciation",
    "Fluency and Coherence",
    "Mock Listening Test",
    "Mock Reading Test",
    "Mock Writing and Speaking Test",
    "Final Assessment",
  ],

  "UI / UX Design": [
    "Introduction to UI/UX Design",
    "UI vs UX",
    "Design Thinking",
    "User Research",
    "User Personas",
    "User Journey",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Color Theory",
    "Typography",
    "Layout and Grids",
    "Design Systems",
    "Figma Fundamentals",
    "Figma Components",
    "Responsive Design",
    "Usability Testing",
    "Accessibility",
    "Design Handoff",
    "Practical UI/UX Project",
    "Portfolio Development",
    "Case Study Creation",
    "Final Assessment",
  ],

  "Logo / Branding Design": [
    "Introduction to Logo Design",
    "Branding Fundamentals",
    "Brand Identity",
    "Brand Research",
    "Target Audience",
    "Logo Types",
    "Logo Concepts",
    "Sketching",
    "Typography",
    "Color Theory",
    "Symbol Design",
    "Icon Design",
    "Adobe Illustrator",
    "Vector Design",
    "Logo Construction",
    "Brand Guidelines",
    "Business Card Design",
    "Social Media Branding",
    "Brand Applications",
    "Logo Presentation",
    "Practical Branding Project",
    "Portfolio Development",
    "Client Presentation",
    "Final Assessment",
  ],

  "System Design": [
    "Introduction to System Design",
    "System Design Fundamentals",
    "Functional Requirements",
    "Non-Functional Requirements",
    "Scalability",
    "Availability",
    "Reliability",
    "Load Balancing",
    "Caching",
    "Database Design",
    "SQL vs NoSQL",
    "Database Sharding",
    "Replication",
    "Message Queues",
    "API Design",
    "Microservices",
    "Event-Driven Architecture",
    "Security",
    "Monitoring",
    "System Design Diagrams",
    "Practical System Design Project",
    "Case Study",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Software Design": [
    "Introduction to Software Design",
    "Software Design Principles",
    "Clean Code",
    "SOLID Principles",
    "Object-Oriented Design",
    "Design Patterns",
    "Creational Patterns",
    "Structural Patterns",
    "Behavioral Patterns",
    "Modular Design",
    "Layered Architecture",
    "MVC",
    "API Design",
    "Database Design",
    "Error Handling",
    "Security Design",
    "Scalability",
    "Testing and Maintainability",
    "Code Review",
    "Software Documentation",
    "Practical Software Design Project",
    "Architecture Review",
    "Interview Preparation",
    "Final Assessment",
  ],

  "Tally": [
    "Introduction to Tally",
    "Tally Installation and Setup",
    "Company Creation",
    "Company Configuration",
    "Accounting Fundamentals",
    "Ledgers",
    "Groups",
    "Voucher Types",
    "Payment Entries",
    "Receipt Entries",
    "Sales Entries",
    "Purchase Entries",
    "Journal Entries",
    "Bank Reconciliation",
    "Inventory Management",
    "Stock Groups",
    "Stock Items",
    "Purchase and Sales Orders",
    "Reports",
    "Profit and Loss",
    "Balance Sheet",
    "GST in Tally",
    "Practical Accounting Project",
    "Final Assessment",
  ],

  "Inventory Management System": [
    "Introduction to Inventory Management",
    "Inventory Fundamentals",
    "Inventory Types",
    "Stock Management",
    "Product Management",
    "Supplier Management",
    "Customer Management",
    "Purchase Management",
    "Sales Management",
    "Stock In and Stock Out",
    "Inventory Tracking",
    "Stock Levels",
    "Reorder Management",
    "Warehouse Management",
    "Barcode Management",
    "Inventory Reports",
    "Stock Valuation",
    "Inventory Database",
    "Inventory Dashboard",
    "System Workflow",
    "Practical Inventory Project",
    "Testing",
    "Deployment",
    "Final Assessment",
  ],

  "Business Accounting": [
    "Introduction to Business Accounting",
    "Accounting Fundamentals",
    "Accounting Principles",
    "Journal Entries",
    "Ledger Accounts",
    "Trial Balance",
    "Cash Book",
    "Bank Reconciliation",
    "Accounts Receivable",
    "Accounts Payable",
    "Inventory Accounting",
    "Depreciation",
    "Adjustments",
    "Profit and Loss Account",
    "Balance Sheet",
    "Financial Statements",
    "Cost Accounting Basics",
    "Budgeting",
    "Financial Analysis",
    "Business Reports",
    "Practical Accounting Project",
    "Accounting Software",
    "Interview Preparation",
    "Final Assessment",
  ],

  "GST & Taxation": [
    "Introduction to Taxation",
    "Direct and Indirect Taxes",
    "GST Fundamentals",
    "GST Structure",
    "CGST",
    "SGST",
    "IGST",
    "GST Registration",
    "GSTIN",
    "Taxable Supply",
    "Input Tax Credit",
    "GST Invoices",
    "E-Invoicing",
    "E-Way Bill",
    "GST Returns",
    "GSTR-1",
    "GSTR-3B",
    "GST Reconciliation",
    "Tax Calculation",
    "GST Accounting",
    "Practical GST Project",
    "Tax Compliance",
    "Interview Preparation",
    "Final Assessment",
  ],
};

  const [selectedCourse, setSelectedCourse] = useState(null);
 
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#hi") {
      setTimeout(() => {
        document.getElementById("hi")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
          }
  }, [location]);
  
    return(
        <div>
            
           <section 
            id="hi"
           className="min-h-screen bg-[#f8fafc] py-20 px-4 pt-40 ">
  <div className="max-w-7xl mx-auto">

    {/* ===================================================== */}
    {/* HEADER */}
    {/* ===================================================== */}

    <div className="text-center max-w-4xl mx-auto mb-16">

      <div className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-blue-50
        border
        border-blue-100
        text-blue-600
        text-xs
        font-bold
        tracking-[0.15em]
        mb-6
      ">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        OUR COURSES
      </div>

      <h1 className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-extrabold
        tracking-tight
        text-slate-900
      ">
        Explore Our
        <span className="text-blue-600"> Courses</span>
      </h1>

      <p className="
        text-slate-500
        text-base
        md:text-lg
        leading-relaxed
        mt-6
        max-w-2xl
        mx-auto
      ">
        Build industry-ready skills through structured learning,
        expert guidance and real-world projects.
      </p>

    </div>


    {/* ===================================================== */}
    {/* ALL COURSES */}
    {/* ===================================================== */}

    {selectedCourse === null && (

      <div className="max-w-5xl mx-auto">

        {/* Top Line */}
        <div className="
          flex
          items-center
          justify-between
          mb-8
          px-1
        ">

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Course Collection
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Choose a course to explore the complete syllabus
            </p>
          </div>

          <div className="
            hidden
            sm:flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            bg-white
            border
            border-slate-200
            text-xs
            font-semibold
            text-slate-500
          ">
            {Object.keys(courseTopics).length} Courses
          </div>

        </div>


        {/* Course Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="
            absolute
            left-[30px]
            top-8
            bottom-8
            w-px
            bg-gradient-to-b
            from-blue-200
            via-slate-200
            to-transparent
            hidden
            sm:block
          "></div>


          {Object.entries(courseTopics).map(
            ([courseName, topics], index) => (

              <div
                key={courseName}
                className="relative group mb-4"
              >

                <button
                  type="button"
                  onClick={() => setSelectedCourse(courseName)}
                  className="
                    w-full
                    text-left
                    flex
                    items-center
                    gap-5
                    sm:gap-7
                    p-4
                    sm:p-5
                    rounded-2xl
                    bg-white
                    border
                    border-slate-200
                    hover:border-blue-200
                    hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-300
                  "
                >

                  {/* Number */}
                  <div className="
                    relative
                    z-10
                    flex-shrink-0
                    w-14
                    h-14
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    group-hover:bg-blue-600
                    group-hover:border-blue-600
                    transition-all
                    duration-300
                  ">

                    <span className="
                      text-sm
                      font-bold
                      text-slate-500
                      group-hover:text-white
                      transition
                    ">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Course Content */}
                  <div className="flex-1 min-w-0">

                    <h2 className="
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-bold
                      text-slate-900
                      group-hover:text-blue-600
                      transition-colors
                      truncate
                    ">
                      {courseName}
                    </h2>


                    <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      mt-2
                    ">

                      <span className="
                        text-xs
                        sm:text-sm
                        text-slate-400
                      ">
                        Complete Syllabus
                      </span>

                      <span className="
                        w-1
                        h-1
                        rounded-full
                        bg-slate-300
                      "></span>

                      <span className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-blue-600
                      ">
                        {topics.length} Topics
                      </span>

                    </div>

                  </div>


                  {/* Right Arrow */}
                  <div className="
                    flex-shrink-0
                    w-10
                    h-10
                    rounded-full
                    bg-slate-50
                    flex
                    items-center
                    justify-center
                    text-slate-400
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-all
                    duration-300
                  ">

                    <span className="
                      text-lg
                      group-hover:translate-x-0.5
                      transition
                    ">
                      →
                    </span>

                  </div>

                </button>

              </div>

            )
          )}

        </div>

      </div>

    )}


    {/* ===================================================== */}
    {/* SELECTED COURSE */}
    {/* ===================================================== */}

    {selectedCourse !== null && (

      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <button
          type="button"
          onClick={() => setSelectedCourse(null)}
          className="
            inline-flex
            items-center
            gap-2
            mb-7
            px-4
            py-2
            rounded-lg
            bg-white
            border
            border-slate-200
            text-sm
            font-semibold
            text-slate-500
            hover:text-blue-600
            hover:border-blue-200
            transition
          "
        >
          ←
          Back to Courses
        </button>


        {/* Selected Course */}
        {Object.entries(courseTopics)
          .filter(([courseName]) => courseName === selectedCourse)
          .map(([courseName, topics]) => (

            <div key={courseName}>

              {/* ================================================= */}
              {/* PREMIUM COURSE HEADER */}
              {/* ================================================= */}

              <div className="
                relative
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-slate-950
                via-slate-900
                to-blue-950
                p-7
                sm:p-10
                mb-8
                shadow-xl
              ">

                {/* Decorative Circle */}
                <div className="
                  absolute
                  -right-20
                  -top-20
                  w-64
                  h-64
                  rounded-full
                  bg-blue-500/10
                  blur-2xl
                "></div>

                <div className="
                  absolute
                  -left-20
                  -bottom-20
                  w-56
                  h-56
                  rounded-full
                  bg-blue-400/10
                  blur-2xl
                "></div>


                <div className="relative z-10">

                  {/* Small Label */}
                  <div className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-300
                    text-xs
                    font-bold
                    tracking-[0.15em]
                    uppercase
                    mb-5
                  ">
                    <span className="
                      w-2
                      h-2
                      rounded-full
                      bg-blue-400
                    "></span>

                    Course Syllabus
                  </div>


                  {/* Title */}
                  <h2 className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-extrabold
                    text-white
                    tracking-tight
                  ">
                    {courseName}
                  </h2>


                  {/* Info */}
                  <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    mt-5
                  ">

                    <span className="
                      text-sm
                      text-slate-300
                    ">
                      Structured Learning Path
                    </span>

                    <span className="
                      w-1
                      h-1
                      rounded-full
                      bg-slate-500
                    "></span>

                    <span className="
                      text-sm
                      font-semibold
                      text-blue-300
                    ">
                      {topics.length} Topics
                    </span>

                  </div>


                  {/* Progress */}
                  <div className="mt-7 max-w-md">

                    <div className="
                      flex
                      items-center
                      justify-between
                      text-xs
                      mb-2
                    ">

                      <span className="text-slate-400">
                        Syllabus Coverage
                      </span>

                      <span className="text-blue-300 font-semibold">
                        100%
                      </span>

                    </div>

                    <div className="
                      h-1.5
                      rounded-full
                      bg-white/10
                      overflow-hidden
                    ">

                      <div className="
                        h-full
                        w-full
                        rounded-full
                        bg-blue-500
                      "></div>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================================================= */}
              {/* TOPICS */}
              {/* ================================================= */}

              <div className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                overflow-hidden
                shadow-sm
              ">

                {/* Topics Header */}
                <div className="
                  flex
                  items-center
                  justify-between
                  px-6
                  sm:px-8
                  py-5
                  border-b
                  border-slate-200
                ">

                  <div>

                    <h3 className="
                      text-lg
                      font-bold
                      text-slate-900
                    ">
                      Course Modules
                    </h3>

                    <p className="
                      text-xs
                      text-slate-400
                      mt-1
                    ">
                      Complete syllabus breakdown
                    </p>

                  </div>

                  <span className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    text-xs
                    font-bold
                  ">
                    {topics.length} Topics
                  </span>

                </div>


                {/* Topic List */}
                <div>

                  {topics.map((topic, topicIndex) => (

                    <div
                      key={topicIndex}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        px-5
                        sm:px-8
                        py-5
                        border-b
                        border-slate-100
                        last:border-b-0
                        hover:bg-slate-50
                        transition-all
                        duration-200
                      "
                    >

                      {/* Topic Number */}
                      <div className="
                        flex-shrink-0
                        w-10
                        h-10
                        rounded-xl
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        group-hover:bg-blue-600
                        transition-all
                        duration-200
                      ">

                        <span className="
                          text-xs
                          font-bold
                          text-slate-500
                          group-hover:text-white
                          transition
                        ">
                          {String(topicIndex + 1).padStart(2, "0")}
                        </span>

                      </div>


                      {/* Topic */}
                      <p className="
                        flex-1
                        text-sm
                        sm:text-base
                        font-medium
                        text-slate-600
                        group-hover:text-slate-900
                        transition-colors
                      ">
                        {topic}
                      </p>


                      {/* Arrow */}
                      <span className="
                        flex-shrink-0
                        text-slate-300
                        group-hover:text-blue-600
                        group-hover:translate-x-1
                        transition-all
                      ">
                        →
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

      </div>

    )}

  </div>
</section>
 
            


        </div>

    )
}
export default Block;