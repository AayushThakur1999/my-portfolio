import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava, FaNode } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql, SiExpress } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Knowledge of the fundamental concepts of Typescript which would help to create type-safe and more bug resilient codebase.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Good grasp of Java including basics and core concepts of Java in order to write fast and maintainable code.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, building scalable and efficient back-end applications with a focus on asynchronous programming and event-driven architecture.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experience in MongoDB, creating and managing databases to store and retrieve data for web applications.",
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Knowledge of MySQL, designing and managing relational databases to store and retrieve data for web applications.",
  },
  {
    id: nanoid(),
    title: "Express.js",
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: "Familiarity with Express.js, building robust and scalable back-end applications with a focus on routing and middleware.",
  },
];
