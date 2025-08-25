import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { FrameWorks } from '../components/FrameWorks'

const About = () => {
   const grid2Container = useRef()
  return (
    <section className="C-space section-spacing">
        <h2 className='text-heading'>About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
        md:auto-rows-[18rem] mt-12">
            {/*Grid One*/}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" 
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                md:scale[-3] md:left-50 md-inset-y-10 lg:scale-[2.5]"/>
                <div className="z-10">
                    <p className='headtext'>Hi, I'm Gihan Thilina</p>
                    <p className='subtext'>Over the last 3 years, I developed my forntend and 
                        backend skills to deliver dynamic and responsive software and web applications.
                    </p>
                </div>
                <div className="absolute insert-x-0 poniter-events-none-bottom-4
                h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            {/*Grid Two*/}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container} 
                    className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                    </p>
                    <Card style={{rotate: "75deg", top: "30%", left:"20%"}}
                    text="PYTHON" 
                    containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "-30deg", top: "60%", left:"45%"}} 
                    text="Django" 
                    containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "90deg", bottom: "30%", left:"70%"}} 
                    text="JavaScript" 
                    containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "-45deg", top: "55%", left:"0%"}}
                     text="ReactJS" 
                     containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "20deg", top: "10%", left:"38%"}}
                     text="SQL" 
                     containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "30deg", top: "70%", left:"70%"}}
                     image="assets/logos/python.png"
                     containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "-45deg", top: "70%", left:"25%"}}
                     image="assets/logos/js.png"
                     containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "-45deg", top: "5%", left:"10%"}}
                     image="assets/logos/django.png"
                     containerRef={grid2Container} 
                    />
                    <Card style={{rotate: "45deg", top: "5%", left:"70%"}}
                     image="assets/logos/sql.png"
                     containerRef={grid2Container} 
                    />
                </div>
            </div>
            {/*Grid Three*/}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">
                        I'm based in Mars, and open to remort work worldwide
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/*Grid Four*/}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center
                gap-4 size-full">
                    <p className='text-center headtext'>
                        Do you want to start project, Let's Work together ?
                    </p>
                    <CopyEmailButton />   
                </div>
            </div>
            {/*Grid Five*/}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Teck Stack</p>
                    <p className="subtext">
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
        </div>

    </section>
  )
}

export default About