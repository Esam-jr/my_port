import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Developer | intern",
    company_name: "Mintstry of innovation and technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer | Intern",
    company_name: "Prodigy InfoTech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Developing fullstack applications using React.js, Node.js, and other modern technologies.",
      "Integrating RESTful APIs and optimizing backend services for performance and scalability.",
      "Collaborating with team members to design and implement features aligned with project requirements.",
      "Ensuring the application’s responsiveness and seamless cross-browser functionality.",
      "Conducting testing and debugging to enhance application reliability and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Admin Dashbored",
    description:
      " A fully responsive admin dashboard for an e-commerce website. It includes a sidebar with 7 pages dedicated to tracking products, users, orders, sales, analytics, an overview, and profile settings.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Recharts ",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
      {
        name: "Lucid Icons",
        color: "purple-text-gradient",
      },
    ],
    image: "/Admin_Dash.PNG",
    source_code_link: "https://github.com/Esam-jr/Admin-Dashboard",
  },
  {
    name: "MOM Kichen",
    description:
      "A fully responsive app that allows users to search for recipes and add them to their favorites. I used a food recipe API to fetch recipe data.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "DaisyUI",
        color: "pink-text-gradient",
      },
    ],
    image: "/large.JPG",
    source_code_link: "https://github.com/Esam-jr/Recipe-finder-app",
  },
  {
    name: "Employe Vacancy web app",
    description:
      " An Employment Vacancy Web App for the Ministry of Innovation and Technology (MINT). The app allows job seekers to view and apply for job openings without the need for registration.It provides a simple, user-friendly interface for accessing job announcements and applying directly.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs and Expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "purple-text-gradient",
      },
    ],
    image: "/mint.PNG",
    source_code_link: "https://github.com/Esam-jr/MINT-Vacancy",
  },
  {
    name: "My Portfolio",
    description:
      " A 3D portfolio website using React and Three.js to showcase my skills and projects in an interactive, visually engaging way. The website features dynamic 3D elements and animations, providing a unique user experience while navigating through.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: "/portfolio.PNG",
    source_code_link: "https://github.com/Esam-jr/my_port",
  },
];

export { services, technologies, experiences, testimonials, projects };
