import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import Project from './sections/Project';
import Testimonail from './sections/Testimonail';

const App = () => {
  return <div className='container mx-auto 
  max-w-7xl'>
    <NavBar />
    <Hero />
    <About />
    <Project />
    <Education />
    <Testimonail />
    <Contact />
  </div>
}

export default App