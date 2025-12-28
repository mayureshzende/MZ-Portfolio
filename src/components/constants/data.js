import q2gl from "../../assets/icons/q2-gl.svg";
import enbd from "../../assets/icons/enbd.jpeg";
import gl from "../../assets/icons/globallogo.png";
import bl from "../../assets/icons/bitwise_logo.jpg";
import prj1 from "../../assets/images/website-img-1.jpg";
import prj2 from "../../assets/images/github-actions.png";
import prj3 from "../../assets/images/programming 01_AdobeStock_239326573.jpeg";

export const projects = [
  {
    name: "Blink-IT clone",
    year: "Dec 2025",
    align: "right",
    image: prj1,
    link: "https://github.com/mayureshzende/blinkIT_clone",
  },
  {
    name: "Socail Dev Connector",
    year: "Dev 2024",
    align: "left",
    image: prj1,
    link: "https://github.com/mayureshzende/DevConnect",
  },
  {
    name: "GitHub Actions for Unit Test",
    year: "Nov 2024",
    align: "right",
    image: prj2,
    link: "https://github.com/mayureshzende/Danger-JS-Cool",
  },
  {
    name: "CodeWars Solutions",
    year: "Ongoing",
    align: "left",
    image: prj3,
    link: "https://github.com/mayureshzende/CodeWars-Solutions",
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Emirates NBD",
    position: "Full Stack-Software Developer",
    duration: "August 2025 - current",
    icon: enbd,
    duties: [
      "Working as a Full-Stack Web Developer on a high-scale portfolio management platform for corporate banking clients and regional managers.",
      "Designed and developed React-based micro-frontend architectures, enabling independent deployments and faster feature scalability across teams.",
      "Built and maintained scalable backend services using Node.js, supporting real-time portfolio insights, client aggregation, and core business workflows.",
      "Implemented event-driven microservices using Apache Kafka, improving system resilience, throughput, and asynchronous communication.",
      "Designed and optimized MongoDB schemas and queries to efficiently handle large volumes of financial and portfolio data.",
      "Delivered features in a fast-paced Agile environment, working in short sprints with rapid iteration and stakeholder feedback.",
      "Collaborated closely with product owners, designers, and business stakeholders to translate complex banking requirements into scalable technical solutions.",
      "Ensured high-quality delivery through code reviews, performance optimization, and engineering best practices.",
      "Actively participated in system design and architecture discussions, focusing on scalability, maintainability, and long-term platform evolution.",
    ],
  },
  {
    id: 2,
    company: "Q2 Software",
    position: "Full Stack-Software Developer",
    duration: "November 2022 - August 2025",
    icon: q2gl,
    duties: [
      "Developed backend APIs using Python and Node.js, that efficiently communicate with the Postgres SQL database.",
      "Collaborated with cross-functional teams to design, test, and deploy softwareproducts, resulting in a 15% increase in system performance and efficiency.",
      "Designed and implemented middleware web application API’s for customer services,cutting integration time by 50%, which led to faster feature rollouts.",
      "Integrated APIs and developed RESTful services using Express.js and MongoDB to support backend functionality and data persistence for interactive applications.",
      "Performed in-depth troubleshooting, debugging, and monitoring, across the entireapplication stack, leading to a 30% decrease in production bugs.",
      "Achieved 85% unit test coverage using frameworks like Jest, Pytest, and mocking API’s, which improved maintainability by adhering to TDD best practices.",
      "Conducted code reviews, enforcing SOLID principles, clean code standards, and test-driven development (TDD).",
      "Applied responsive design principles to ensure accessibility and usability across devices.",
      "Led mentorship initiatives for junior developers, conducting code reviews,enhancing team productivity and clear documentation of product.",
    ],
  },
  {
    id: 3,
    company: "GLOBALLOGIC",
    position: "Full Stack Software Developer",
    duration: "January 2021 - November 2022",
    icon: gl,
    duties: [
      "Transformed a multi-page application into a single-page React.js app, by boosting load speeds and the overall user experience for over 4,000 daily users.",
      "Developed server-side RESTful APIs in Node.js and Express.js, enhancing data retrieval and NoSQL data transformation by normalizing the query format.",
      "Created a pull request review bot utilizing the Danger.js API in GitHub Actions which reduced manual review time and automated initial checks by 60%.",
      "Utilized Material-UI and Redux, resulting in a 20% increase in user interaction and the apps responsiveness by using JavaScript, HTML, and Tailwind CSS.",
      "Enhanced collaboration by clearly communicating end-to-end technical information,resulting in improved project execution and seamless integration with server-side logic.",
    ],
  },
  {
    id: 4,
    company: "BITWISE",
    position: "Trainee Software Developer",
    duration: "August 2019 - June 2020",
    icon: bl,
    duties: [
      "Created scalable solutions using Agile practices , guaranteeing on-time delivery and enhancements in quality.",
      "Identified and fixed issues in ETL pipelines, leading to a 35% reduction in processingtimes. Refined SQL queries to improve database performance and response times.",
    ],
  },
];

export const socialLinks = [
  { type: "LinkedIn", url: "https://www.linkedin.com/in/mayuresh-zende/" },
  { type: "GitHub", url: "https://github.com/mayureshzende" },
  { type: "Twitter", url: "https://x.com/MayureshZende" },
];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Jira",
  "HTML5",
  "CSS3",
  "C#",
  "Express.js",
  "Git",
  "MongoDB",
  "RXJS.js",
  "Jest",
  "MySQL",
  "Node.js",
  "Python",
  "Scrum",
  "Agile",
  "GitHub",
  "GitHub Actions",
  "Confluence",
  "Redux",
  "RTK toolkit",
  "TailwindCSS",
  "Bitbucket",
  "REST APIs",
  "Algorithms",
  "Vite",
  "Prettier",
  "ESLint",
  "Authentication",
  "Vercel",
  "Docker",
  "AWS",
  "Framer Motion",
  "Markdown",
  "GO",
  "CI/CD",
  "Jenkins",
  "JWT",
];
