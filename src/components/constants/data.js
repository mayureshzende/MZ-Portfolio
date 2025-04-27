import q2gl from "../../assets/icons/q2-gl.svg";
import gl from "../../assets/icons/globallogo.png";
import bl from "../../assets/icons/bitwise_logo.jpg";
export const workExperiences = [
  {
    id: 1,
    company: "Q2 Software",
    position: "Full Stack-Software Developer",
    duration: "November 2022 - current",
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
    id: 2,
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
    id: 3,
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

export const myProjects = [
  {
    title: "ThreeRun - 3D Obstacle Course Game",
    desc: "A 3D obstacle course game built with React Three Fiber, featuring a third-person character controller with movement and animations.",
    subdesc:
      "Currently in early development, with plans for level completion, multiplayer, and collectibles.",
    href: "https://github.com/A-coderr/3d_obstacle_course",
    source: "https://a-coderr.github.io/3d_obstacle_course/",
    logo: "projects/ThreeRun_Main_Screen.png",
    logoStyle: {
      backgroundColor: "#b18eff",
      background:
        "linear-gradient(0deg, #B18EFF50, #B18EFF50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(177, 142, 255, 1)",
      boxShadow: "0px 0px 60px 0px rgba(177, 142, 255, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "Redux",
        path: "icons/redux.svg",
      },
      {
        id: 8,
        name: "Prettier",
        path: "icons/prettier.svg",
      },
      {
        id: 9,
        name: "ESLint",
        path: "icons/eslint.svg",
      },
      {
        id: 10,
        name: "Vite",
        path: "icons/vite.svg",
      },
    ],
  },
  {
    title: "Anzhelika Kostyuk - Portfolio Website",
    desc: "My Portfolio Website, a showcase of my skills, projects, and experience as a software developer.",
    subdesc:
      "Built with modern web technologies, this portfolio highlights interactive 3D elements, smooth animations, and a responsive design for an engaging user experience.",
    href: "https://github.com/A-coderr/portfolio-website",
    source: "https://a-coderr.github.io/portfolio-website/",
    logo: "projects/Portfolio_Main.png",
    logoStyle: {
      backgroundColor: "#4FC3F7",
      background:
        "linear-gradient(0deg, #4FC3F750, #4FC3F750), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(79, 195, 247, 1)",
      boxShadow: "0px 0px 60px 0px rgba(79, 195, 247, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "icons/css-3.svg",
      },
      {
        id: 8,
        name: "Prettier",
        path: "icons/prettier.svg",
      },
      {
        id: 9,
        name: "ESLint",
        path: "icons/eslint.svg",
      },
      {
        id: 10,
        name: "Vite",
        path: "icons/vite.svg",
      },
    ],
  },
  {
    title: "Karate Galaxy - Karate Website",
    desc: "My first ever web project, built as part of a college assignment and the starting point of my journey as a software developer.",
    subdesc:
      "Built using only HTML and CSS, it is a foundational project that reflects my early passion for web development.",
    href: "https://a-coderr.github.io/karate-galaxy/",
    source: "https://github.com/A-coderr/Karate_HTML_CSS",
    logo: "projects/KarateGalaxy_Main.png",
    logoStyle: {
      backgroundColor: "#A0F0BC",
      background:
        "linear-gradient(0deg, #A0F0BC50, #A0F0BC50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(208, 213, 221, 0.85) 100%)",
      border: "0.2px solid rgba(160, 240, 188, 1)",
      boxShadow: "0px 0px 60px 0px rgba(135, 234, 174, 0.4)",
    },
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "icons/css-3.svg",
      },
    ],
  },
  {
    title: "SKIF Karate Canada Website",
    desc: "A modern, responsive website built with Next.js to represent the SKIF Karate Canada.",
    subdesc:
      "This project showcases a blend of modern web development and traditional martial arts values.",
    href: "https://skif-website.vercel.app/",
    source: "https://github.com/A-coderr/skif-website",
    logo: "projects/skif.png",
    logoStyle: {
      backgroundColor: "#FF4C4C",
      background:
        "linear-gradient(0deg, #FF4C4C50, #FF4C4C50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 200, 200, 0.85) 100%)",
      border: "0.2px solid rgba(255, 76, 76, 1)",
      boxShadow: "0px 0px 60px 0px rgba(183, 28, 28, 0.4)",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "Nextjs",
        path: "icons/nextjs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 5,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "icons/css-3.svg",
      },
      {
        id: 8,
        name: "Prettier",
        path: "icons/prettier.svg",
      },
      {
        id: 9,
        name: "ESLint",
        path: "icons/eslint.svg",
      },
      {
        id: 10,
        name: "Markdown",
        path: "icons/markdown.svg",
      },
      {
        id: 11,
        name: "Vite",
        path: "icons/vite.svg",
      },
      {
        id: 12,
        name: "Vercel",
        path: "icons/vercel.svg",
      },
    ],
  },
];

export const socialLinks = [
  { url: "https://www.instagram.com/a_akcio/?hl=en" },
  { url: "https://github.com/A-coderr" },
  { url: "https://www.facebook.com/profile.php?id=100011369881132" },
  { url: "http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194" },
];

export const skills = [
  "React",
  "Three.js",
  "REST APIs",
  "JavaScript",
  "TypeScript",
  "C#",
  "Unity",
  "Python",
  "Jira",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Git",
  "MongoDB",
  "React Three Fiber",
  "Azure",
  "Jest",
  "MySQL",
  "Scrum",
  "Agile",
  "3D",
  "GitHub",
  "Confluence",
  "Redux",
  "TailwindCSS",
  "Vitest",
  "Bitbucket",
  "Algorithms",
  "UI/UX",
  "Vite",
  "Prettier",
  "ESLint",
  "Vercel",
  "Docker",
  "Figma",
  "Framer Motion",
  "Drei",
  "Markdown",
];
