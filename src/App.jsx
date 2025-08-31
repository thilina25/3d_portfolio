import About from './sections/About';
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
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
  </div>
}

export default App