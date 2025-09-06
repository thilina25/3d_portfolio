import { myProjects } from "../constants"
import Projects from "../components/Projects"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useState } from "react"

const Project = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, {damping: 15, stiffness: 120})
    const springY = useSpring(y, {damping: 15, stiffness: 120})
    const handelMouseMove = (e) => {
        x.set(e.clientX + 20)
        y.set(e.clientY + 20)
    }
    const [prview, setPreview] = useState(null)
  return (
  <section id="Project"
    onMouseMove = { handelMouseMove } 
    className="relative c-space section-spacing"
    >
      <div className="text-center">
        <h2 className="text-heading">My Projects</h2>
        <p className="mt-3 text-neutral-400 text-lg">
          A collection of my favorite works — designed and built with passion.
        </p>
      </div>

        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
      <div className="m-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">  
        {myProjects.map((Project) => (
        <motion.div 
          key={Project.id}
          className="relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-700 p-5 cursor-pointer group"
          whileHover={{ scale: 1.05}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseEnter={() => setPreview(Project.image)}
          onMouseLeave={() => setPreview(null)}
        >
          <img 
            src={Project.image} 
            alt={Project.title}
            className="rounded-lg object-cover w-full h-40 group-hover:opacity-80 transition" 
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">
              {Project.title}
            </h3>
            <p className="text-neutral-400 text-sm mt-2 line-clamp-3">
              {Project.description}
            </p>
          </div>
        </motion.div>
        ))}
      </div>
        {prview && (<motion.img className="fixed top-0 lefr-0 z-50 object-cover h-56
        rounded-lg shadow-lg pointer-events-none md:block w-80" 
        src={prview}
        style={{ x: springX, y: springY}}
        />)}
  </section>
  )
}
export default Project