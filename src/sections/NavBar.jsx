import { useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-scroll";

function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <Link to="Hero" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">Home</Link>
            </li>
            <li className="nav-li">
                <Link to="About" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">About</Link>
            </li>
            <li className="nav-li">
                <Link to="Project" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">Projects</Link>
            </li>
            <li className="nav-li">
                <Link to="Education" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">Educations</Link>
            </li>
            <li className="nav-li">
                <Link to="Testimonail" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">Client Reviews</Link>
            </li>
            <li className="nav-li">
                <Link to="Contact" smooth={true} duration={600} offset={-80} className="nav-link cursor-pointer">Contact</Link>
            </li>
        </ul>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed insert-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                GTK
                </a>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    > 
                    <img src={isOpen?"assets/close.svg":"assets/menu.svg"
                    } 
                    className="m-6 h-6" alt="toggle"
                    />
                </button>
                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>
            </div>
        </div>
        {isOpen && (
            <motion.div
             className="block overflow-hidden text-center sm:hidden" 
             initial={{opacity:0, x: -10}}
             animate={{opacity:1, x:0}}
             style={{maxHeight: "100vh"}}
             transition={{duration:1}}
            >
            <nav className="pb-5">
                <Navigation/>
            </nav>
        </motion.div>)}
    </div>
  )
}

export default NavBar