import { FC, useEffect, useRef, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import whiteWave from "../../../img/wave-white.gif";
import NewMembers from "./NewMembers";
import { useInView } from "react-intersection-observer";
import StarsBackground from "../BackToFuture/StarsBackground";
import LogoSesame from "./LogoSesame";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import moonMap from "../../../img/moon.png";
import { OrbitControls, Sphere } from "@react-three/drei";

const SphereMesh = () => {
  const sphereRef = useRef<THREE.Mesh | null>( null );
  const texture = useLoader( THREE.TextureLoader, moonMap );

  useFrame( () => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.x += 0.01;
    }
  } );

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={ 0.5 } color="#FFF8B5" />
      <directionalLight position={ [ 10, 10, 10 ] } intensity={ 0.5 } color="#FFD289" />
      <mesh ref={ sphereRef }>
        <Sphere args={ [ 1, 100, 200 ] } scale={ 2.5 }>
          <meshPhysicalMaterial attach="material" map={ texture } />
        </Sphere>
      </mesh>
    </>
  );
};

const Sesame: FC<{ windowHeight: number }> = ( { windowHeight } ) => {
  const animation = useAnimation();
  const [ ref, inView ] = useInView( { threshold: 0 } );
  const windowWidth = window.innerWidth;

  const variants = {
    initial: {
      opacity: 0,
      translateY: -windowHeight
    },
    animate: {
      opacity: 1,
      translateY: -windowHeight
    }
  };

  const sizeVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };

  const bigMoonVariants = {
    initial: {
      opacity: 0,
      translateY: -500
    },
    animate: {
      opacity: 1,
      translateY: 0
    }
  };

  const whiteWaveVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };

  const canvasSize = windowWidth > 500 ? {
    width: 600,
    height: 600
  } : windowWidth > 400 ? {
    width: 400,
    height: 400
  } : {
    width: 300,
    height: 300
  }

  const starHide = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };

  useEffect( () => {
    if (inView) {
      animation.start( "animate" );
    } else {
      animation.start( "initial" );
    }
  }, [ inView, animation ] );


  return (
    <>
      <div ref={ ref } className="dummy-ref__sesame"></div>
      <motion.div initial="initial" animate={ animation } variants={ variants }
                  transition={ { duration: 2, delay: 13 } } className="sesame__logo">
        <LogoSesame view={ inView } />
        <motion.div initial="initial" animate={ animation } variants={ whiteWaveVariants }
                    transition={ { duration: 1, delay: 15 } } className="moon__container">
          <img src={ whiteWave } alt="Vague blanche" className="top-wave wave" />
          <motion.div initial="initial" animate={ animation } variants={ sizeVariants }
                      transition={ { duration: 1, delay: 22 } } className="moon__hexagone">
            <Canvas style={ canvasSize }>
              <Suspense>
                <SphereMesh />
              </Suspense>
            </Canvas>
          </motion.div>
          <img src={ whiteWave } alt="Vague blanche" className="bottom-wave wave" />
        </motion.div>
        <motion.div initial="initial" animate={ animation } variants={ starHide }
                    transition={ { duration: 1, delay: 12 } } className="star__container__moon">
          <StarsBackground inView={ inView } />
        </motion.div>
        <motion.div initial="initial" animate={ animation } variants={ bigMoonVariants } transition={ {
          duration: 2,
          delay: 25
        } } className="static__moon__container">
          <NewMembers />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sesame;
