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
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
  <section id="Project"
    onMouseMove = { handelMouseMove } 
    className="C-space section-spacing rounded-4xl p-10 animated-gradient"
    >
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-heading">My Projects</h2>
        <p className="mt-3 text-neutral-400 text-lg">
          A collection of my favorite works — designed and built with passion.
        </p>
      </div>
      {/* Divider */}
        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>

      {/* Project Grid */}
      <div className="m-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">  
        {myProjects.map((Project) => (
        <motion.div 
          key={Project.id}
          className="relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-700 p-5 cursor-pointer group"
          whileHover={{ scale: 1.05}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseEnter={() => setPreview(Project.image)}
          onMouseLeave={() => setPreview(null)}
          onClick={() => {
            setSelectedProject(Project)
            setCurrentImageIndex(0)
          }}
        >
          <img 
            src={Project.images?.[0]} 
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

      {/* Floating Preview Image */}
        {prview && (<motion.img className="fixed top-0 lefr-0 z-50 object-cover h-56
        rounded-lg shadow-lg pointer-events-none md:block w-80" 
        src={prview}
        style={{ x: springX, y: springY}}
        />
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          >
          <motion.div 
            className="bg-neutral-900 text-white rounded-2xl max-w-4xl w-full p-6 shadow-xl relative
            max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y:0 }}
            exit={{opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
      {/* Close */}
          <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white"
                >
                  ✕
          </button>

      {/* Image */}  
      <div className="relative">
        <img
          src={selectedProject.images[currentImageIndex]}
          alt={selectedProject.title}
          className="rounded-lg mx-auto block h-64 md:h-80 object-contain mb-4 transition"
        />
        {/* Left Arrow */}
        {selectedProject.subDescription?.length > 1 && (
          <button
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + selectedProject.subDescription.length) % selectedProject.subDescription.length
              )
            }
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-neutral-700/50 text-white p-2 rounded-full"
          >
            ◀
          </button>
        )}
        {/* Right Arrow */}
        {selectedProject.subDescription?.length > 1 && (
          <button
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev + 1) % selectedProject.subDescription.length
              )
            }
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-neutral-700/50 text-white p-2 rounded-full"
          >
            ▶
          </button>
        )}
      </div>

      {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            {selectedProject.title}
          </h2>

      {/* Full Description */}
        <p 
          className="text-neutral-300 mb-4">
              {selectedProject.description}
        </p>
        
      {/* Sub Description */}
      {selectedProject.subDescription && (
        <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-4">
          {selectedProject.subDescription.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}

      {/* Tags Icons */}
        <div  className="flex gap-4 mt-3 flex-wrap">
          {selectedProject.tags?.map((tags, index) => (
            <div key={index} className="flex flex-col itmes-center">
                <img
                  src={tags.path}
                  alt={tags.name}
                  className="h-10 w-10 object-contain"
                />
                {tags.name && (
                  <p className="text-xs text-neutral-400 mt-1">{tags.name}</p>
                )}
            </div>
          ))}
        </div>
            {/* Visit Project Link */}
            {selectedProject.href && (
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r 
                          from-purple-600 to-blue-500 text-white font-medium 
                          hover:from-purple-700 hover:to-blue-600 transition"
              >
                🚀 Visit Project
              </a>
            )}
          </motion.div>
        </div>
      )}
  </section>
  )
}
export default Project