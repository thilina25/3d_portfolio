import About from './sections/About';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';

const App = () => {
  return <div className='container mx-auto 
  max-w-7xl'>
    <NavBar/>
    <Hero/>
    <About/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
  </div>
}

export default App