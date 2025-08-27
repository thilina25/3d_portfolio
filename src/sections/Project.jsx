import { myProjects } from "../constants"
import Projects from "../components/Projects"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useState } from "react"

const Project = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, {damping: 10, stiffness: 50})
    const springY = useSpring(y, {damping: 10, stiffness: 50})
    const handelMouseMove = (e) => {
        x.set(e.clientX + 20)
        y.set(e.clientY + 20)
    }
    const [prview, setPreview] = useState(null)
  return (
  <section
    onMouseMove = { handelMouseMove } 
    className="relative c-space section-spacing"
    >
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
        {myProjects.map((Project) => (
            <Projects key={Project.id} {...Project} 
            setPreview={setPreview} />
        ))}
        {prview && (<motion.img className="fixed top-0 lefr-0 z-50 object-cover h-56
        rounded-lg shadow-lg pointer-events-none w-80" 
        src={prview}
        style={{ x: springX, y: springY}}
        />)}
  </section>
  )
}
export default Project