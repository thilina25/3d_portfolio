import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { FrameWorks } from '../components/FrameWorks'
import { useState, useEffect } from 'react'

const About = () => {
   //const grid2Container = useRef() // For tested grid

   const [about, setAbout] = useState(null)

    // Fetch About data from backend
    useEffect(() => {
        fetch("http://127.0.0.1:8000/core/about/")
        .then((res) => res.json())
        .then((data) => setAbout(data[0])) // only first object
        .catch((err) => console.log("Error fetching About:", err))
    }, [])

  return (
    <section 
    id="About" 
    className="C-space section-spacing rounded-4xl p-20 animated-gradient">
        <h2 className='text-heading'>About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

            {/*Grid One*/}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov2.jpg" 
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                md:scale[-3] md:left-50 md-inset-y-10 lg:scale-[2.5]"/>
                <div className="z-10">
                    <p className='headtext'>Hi, I'm Thilina Kumarasrir</p>
                    <p className='subtext' style={{color: "white"}}>Currently i am undergraduate student of The Open University of Sri Lanka, I developed web development skills by myself to deliver dynamic and responsive software and web applications.
                    </p>
                </div>
                <div className="absolute insert-x-0 poniter-events-none-bottom-4
                h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>

            {/*Grid two */}
            <div className="bg-purple-900 grid-2 p-4 rounded-xl">
                <div className="flex flex-col justify-center h-full text-center text-white">
                   {about && about.profile_image ? (
                        <img 
                            src={about.profile_image}
                            alt="Profile"
                            className="object-cover w-40 h-40 mx-auto rounded-full border-4 border-white mb-4"
                        />
                    ) : (
                        <div className="w-30 h-30 bg-gray-500 rounded-full border-4 border-white mb-4 flex items-center justify-center">
                            No Image
                        </div>
                    )}
                    <h3 className="text-xl font-bold">Developer Snapshot</h3>
                    <p className="mt-2 text-sm text-gray-100" >
                    Passionate about React, Django, and crafting smooth user experiences.  
                    Always exploring new technologies 🚀
                    </p>
                </div>
            </div>

            {/*Grid three*/}
            <div className="bg-purple-900 rounded-xl p-4 grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Where Am I</p>
                    <p className="subtext" style={{color:"white"}}>
                        I can be anywhere, and open to remort work worldwide, On-site as well.
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>

            {/*Grid four*/}
            <div className="bg-purple-900 rounded-2xl p-4 grid-4">
                <div className="z-10 w-[50%]">
                    <p className="headtext" style={{color: "white"}}>My Tools</p>
                    <p className="subtext" style={{color: "white"}}>
                        I specialize in a variety of language, framworks, and tools that
                        allow me to build robust and scalable applications
                    </p>
                </div>
                <div 
                className="absolute inset-y-0 md:inset-y-9 w-full
                h-full start-[50%] md:scale-125">
                    <FrameWorks />
                </div>
            </div>
            
            {/*Grid five*/}
            <div className="grid-special-color grid-5">
                <div className="flex flex-col items-center justify-center
                gap-4 size-full">
                    <p className='text-center headtext'>
                        Do you want to start project, Let's Work together ?
                    </p>
                    <CopyEmailButton />   
                </div>
            </div>
        </div>
    </section>
  )
}

export default About