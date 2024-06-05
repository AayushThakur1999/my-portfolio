import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'src/assets/planetEARTH.jpg',
    url: 'https://theplanetearth-1.netlify.app/',
    github: 'https://github.com/aayushthakur1999',
    title: 'the planet earth',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'src/assets/tenziesGame.png',
    url: 'https://aayushthakur1999.github.io/tenzies/',
    github: 'https://github.com/aayushthakur1999',
    title: 'tenzies',
    text: 'A project build using fundamental concepts of react like state, props, useState, useEffect and some other concepts of javascript. This project uses some small yet very handy libraries like Nanoid and React-Confetti.',
  },
  {
    id: nanoid(),
    img: 'src/assets/quiz.png',
    url: 'https://aayushthakur1999.github.io/quizzical/',
    github: 'https://github.com/aayushthakur1999',
    title: 'Quizzical',
    text: 'A project which uses most of the fundamental concepts of React like conditional rendering, props, useState, useEffect, useRef and an http library called axios for data fetching to create a quiz game which fetch questions from an API.',
  },
  {
    id: nanoid(),
    img: 'src/assets/unsplashImages.jpg',
    url: 'https://image-search-app1.netlify.app/',
    github: 'https://github.com/aayushthakur1999',
    title: 'Unsplash Images',
    text: 'This is a React App which uses things like ContextAPI, third party API and libraries like React Icons and React Query.',
  },
];
