import React from 'react'

const About = () => {
  return (
    <section className="C-space section-spacing">
        <h2 className='text-heading'>About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
        md:auto-rows-[18rem] mt-12">
            {/*Grid One*/}
            <div className="flex items-end grid-default-color 
            grid-1"></div>
            {/*Grid Two*/}
            <div className="grid-default-color grid-2"></div>
            {/*Grid Three*/}
        </div>

    </section>
  )
}

export default About