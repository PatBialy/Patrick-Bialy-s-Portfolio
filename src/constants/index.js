import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  fit,
  css,
  reactjs,
  bank,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  td,
  pbtube,
  real,
  res,
  threejs,
  dash,
  sumz,
  film,
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
    title: "Content Creator",
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "TekDash",
    icon: td,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using TypeScript.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Digital Marketer",
    company_name: "TekDash",
    icon: td,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Manage social media channels to promote the TekDash brand and engage with our audience.",
      "Create engaging content such as reels and posts to increase brand awareness and drive traffic to our website.",
      "Use data analytics tools to track and report on the performance of our social media campaigns.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Patrick was one of my students in my Data Structures and Algorithms course at my company Hanawilo. Throughout my time working with Patrick, he executed, delivered, and demonstrated excellent competency in JavaScript programming through assessment completion and project deliverables.",
    name: "Tony Kim",
    designation: "Founder",
    company: "Hanawilo",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sam Mino",
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
    name: "FilmPire",
    description:
      "Filmpire is a website that provides information about movies and TV shows, including their titles, ratings, and summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "alan ai",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "blue-text-gradient",
      },
    ],
    image: film,
    source_code_link: "https://github.com/PatBialy/Filmpire_Pat",
    source_code_link1: "https://filmpirepat.netlify.app/",
  },
  {
    name: "PB Tube",
    description:
      "A YouTube clone that enables users to easily browse a variety of categories, conduct searches, and access related videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
    ],
    image: pbtube,
    source_code_link: "https://github.com/PatBialy/PBTube",
    source_code_link1: "https://pbtube.netlify.app/",
  },
  {
    name: "Real Estate Dashboard",
    description:
      "A comprehensive MERN full-stack real estate dashboard that provides a user-friendly interface for managing property listings, transactions, and analytics.",
    tags: [
      {
        name: "merns tack",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: dash,
    source_code_link: "https://github.com/PatBialy/refine_dashboard",
    source_code_link1: "https://realestatedash.netlify.app/",
  },
  {
    name: "AI Article Summarizer",
    description:
      "OpenAI's GPT-4 language model, designed to effectively and efficiently summarize lengthy articles and enhance reading comprehension.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/PatBialy/pbsumz",
    source_code_link1: "https://pbsumz.netlify.app/",
  },
  {
    name: "Patrick's Real Estate",
    description:
      "A modern and user-friendly real estate website that allows users to search for properties, view property details, and connect with real estate agents to facilitate seamless property transactions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: real,
    source_code_link: "https://github.com/PatBialy/Real_Estate",
    source_code_link1: "https://patrealestate.vercel.app/",
  },
  {
    name: "PatrickFit",
    description:
      "Fitness website that provides users with an extensive collection of exercises and routines for various muscle groups, helping users to achieve their fitness goals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
    ],
    image: fit,
    source_code_link: "https://github.com/PatBialy/PatrickBialyFitness",
    source_code_link1: "https://patrickbialyfit.netlify.app/",
  },
  {
    name: "Restaurant App",
    description:
      "A visually stunning UI/UX restaurant website that offers a seamless user experience and showcases the restaurant's menu, hours, and location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: res,
    source_code_link: "https://github.com/PatBialy/p-restaurant",
    source_code_link1: "https://p-restaurant.netlify.app/",
  },
  {
    name: "Banking UI/UX",
    description:
      "A futuristic UI/UX banking website that leverages cutting-edge design principles to provide users with a seamless banking experience, complete with account management and personal finance tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/PatBialy/Bank-App",
    source_code_link1: "https://pats-bank-app.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
