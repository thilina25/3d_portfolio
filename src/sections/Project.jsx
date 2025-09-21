import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const Project = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 120 });
  const springY = useSpring(y, { damping: 15, stiffness: 120 });

  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/core/projects/");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      id="Project"
      onMouseMove={handleMouseMove}
      className="C-space section-spacing rounded-4xl p-10 animated-gradient"
    >
      <div className="text-center">
        <h2 className="text-heading">My Projects</h2>
        <p className="mt-3 text-neutral-400 text-lg">
          A collection of my favorite works — designed and built with passion.
        </p>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div className="m-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-700 p-5 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onMouseEnter={() =>
              project.images.length > 0 &&
              setPreview(project.images[0].image_url)
            }
            onMouseLeave={() => setPreview(null)}
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <img
              src={
                project.images.length > 0
                  ? project.images[0].image_url
                  : "/placeholder.png"
              }
              alt={project.title}
              className="rounded-lg object-cover w-full h-40 group-hover:opacity-80 transition"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-neutral-400 text-sm mt-2 line-clamp-3">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hover Preview */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none md:block w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-neutral-900 text-white rounded-2xl max-w-4xl w-full p-6 shadow-xl relative max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            {/* Images Carousel */}
            {selectedProject.images?.length > 0 && (
              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex].image_url}
                  alt={selectedProject.title}
                  className="rounded-lg mx-auto block h-64 md:h-80 object-contain mb-4 transition"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
                        )
                      }
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-neutral-700/50 text-white p-2 rounded-full"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % selectedProject.images.length
                        )
                      }
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-neutral-700/50 text-white p-2 rounded-full"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Title & Description */}
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-neutral-300 mb-4">{selectedProject.description}</p>

            {/* Sub Descriptions */}
            {selectedProject.subDescriptions?.length > 0 && (
              <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-4">
                {selectedProject.subDescriptions.map((sub) => (
                  <li key={sub.id}>{sub.text}</li>
                ))}
              </ul>
            )}

            {/* Tags */}
            <div className="flex gap-4 mt-3 flex-wrap">
              {selectedProject.tags?.map((tag) => (
                <div key={tag.id} className="flex flex-col items-center">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="h-10 w-10 object-contain"
                  />
                  {tag.name && <p className="text-xs text-neutral-400 mt-1">{tag.name}</p>}
                </div>
              ))}
            </div>

            {/* Visit Project */}
            {selectedProject.href && (
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition"
              >
                🚀 Visit Project
              </a>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Project;
