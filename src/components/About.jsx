import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid gap-16 items-center md:grid-cols-2">
        <img src={aboutImg} className='w-full h-64' />
        <article>
          <SectionTitle text="Code and Coffee" />
          <p className='text-slate-600 mt-8 leading-loose'>
            I&apos;m a passionate Front-End Developer who believes that coding is one part science and one part art. 
            I started my journey into web development in 2021, and I&apos;m happy to say that I&apos;ve fallen under its spell. 
            Love at first sight? Perhaps.<br />
            Working with techs such as JavaScript, React and Java, I&apos;m always trying to expand my knowledge and skills, 
            and take every opportunity to use new technologies and work on new projects.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About