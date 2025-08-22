import { Canvas, useFrame } from "@react-three/fiber"
import { Astronaut } from "../components/Astronaut"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Float, OrbitControls } from "@react-three/drei"
import { Titan } from "../components/Titan"
import { Soul } from "../components/Soul"

import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { easing } from "maath"
import { Suspense } from "react"
import Loader from "../components/Loader"


const Hero = () => {
  return (
    <section className="flex items-start justify-between
    md:items-start md:justify-start min-h-screen overflow-hidden 
    c-space">
        <HeroText/>
        <ParallaxBackground/>
        {/*<figure className="absolute inset-0"
        style={{width: "100vw", height: "100vh"}}
        >
            <Canvas>
                <Astronaut/>
                <OrbitControls/>
            </Canvas>
        </figure>*/}
        {/* Titan 3D model inside Canvas */}
      {/*<figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
          {/* Lighting
          <ambientLight intensity={0.6} />
          <directionalLight position={[-700, 200, 550]} intensity={2} castShadow />
          {/* Titan model 
            <Titan scale={0.5} position={[300, 100, 100]} />
          <OrbitControls />
        </Canvas>
      </figure>*/}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[ 5, 5, 5]}
            intensity={1.2}
            castShadow
          />

          {/* Soul of Cinder (neon version) */}
        <Suspense fallback={<Loader/>}>  
        <Float>
            <Soul 
                scale={0.1} 
                position={[10, -250, -300]} 
                rotation={[18, Math.PI, 0]} />
        </Float>
          {/* Post-processing for glow */}
          <EffectComposer>
            <Bloom
              intensity={0.70} // strength of glow
              luminanceThreshold={0.80} // how bright before it glows
              luminanceSmoothing={0.1}
              mipmapBlur
            />
          </EffectComposer>

          {/* Controls */}
          <OrbitControls />
          <Rig/>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.4,
            delta
        )
    })
}

export default Hero