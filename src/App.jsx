import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
}