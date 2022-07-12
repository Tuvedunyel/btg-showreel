import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import trompette from '../../../img/trompette.png'
import trompetteWebp from '../../../img/trompette.webp'
import Vague from '../../../img/wave-white.gif'
import './style.scss'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from 'three';
import { useInView } from "react-intersection-observer";
import Mame from "../Mame/Mame";
import Image from 'react-image-webp'
import Muguet from "./Muguet";

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
}

const FirstYearDetail = () => {
        const animation = useAnimation();
        const [ ref, inView ] = useInView( { threshold: 0 } )
        const windowWidth = window.innerWidth;

        const titleVariants = {
            initial: {
                translateY: 0
            },
            animate: {
                translateY: -900
            }
        }


        const canvasVariants = {
            initial: {
                translateY: 0
            },
            animate: {
                translateY: -900
            }
        }

        const whiteMotion = {
            initial: {
                translateY: 0
            },
            animate: {
                translateY: -900
            }
        }

        const yellowCircle = windowWidth > 926 ? {
            initial: {
                width: 0,
                height: 0
            },
            animate: {
                width: '363px',
                height: '363px'
            }
        } : windowWidth > 782 ? {
            initial: {
                width: 0,
                height: 0
            },
            animate: {
                width: '263px',
                height: '263px'
            }
        } : {
            initial: {
                width: 0,
                height: 0
            },
            animate: {
                width: '163px',
                height: '163px'
            }
        }

        const whiteMotionSize =
            windowWidth > 1341 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '804px',
                        height: '804px'
                    }
                }
                : windowWidth > 1061 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '704px',
                        height: '704px'
                    }
                } : windowWidth > 973 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '604px',
                        height: '604px'
                    }
                } : windowWidth > 782 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '504px',
                        height: '504px'
                    }
                } : windowWidth > 479 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '404px',
                        height: '404px'
                    }
                } : windowWidth > 355 ? {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '350px',
                        height: '350px'
                    }
                } : {
                    initial: {
                        width: 0,
                        height: 0,
                        borderRadius: '50%'
                    },
                    animate: {
                        width: '300px',
                        height: '300px'
                    }
                }

        useEffect( () => {
            if (inView) {
                animation.start( "initial" )
            } else {
                animation.start( "animate" )
            }
        }, [ inView, animation ] );


        return (
            <>
                <section className="detail__container">
                    <div ref={ ref } className='top-inview'></div>
                    <motion.div initial={ { width: 0, height: 0 } } animate={ { width: '2200px', height: '2200px' } }
                                transition={ { duration: 1 } } className="circle__orange__detail">
                    </motion.div>
                    <motion.div initial='initial' animate={ animation } variants={ titleVariants }
                                transition={ { duration: 1 } } className="detail__title">
                        <motion.h2 initial={ { opacity: 0 } } animate={ { opacity: 1 } }
                                   transition={ { duration: 1, delay: 1 } }>
                            <span>1<sup>er</sup> mai</span>
                            <span>Création de</span>
                            <span>l'agence</span>
                        </motion.h2>
                    </motion.div>
                    <motion.div className="detail__motion" initial='initial' animate='animate' variants={ variants }
                                transition={ { duration: 1, delay: 0.01 } }>
                        <motion.div initial='initial' animate={ animation } variants={ whiteMotion }
                                    transition={ { duration: 1, delay: 0.8 } } className="detail__motion__translate">
                            <motion.div className="white__motion" initial='initial'
                                        animate='animate'
                                        variants={ whiteMotionSize }
                                        transition={ { duration: 1, delay: 0.2 } }>
                                <Muguet view={ inView } windowWidth={ windowWidth }/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div initial='initial' animate={ animation } variants={ canvasVariants }
                                transition={ { duration: 1, delay: 0.5 } } className='yellow__circle__translate'>
                        <motion.div initial='initial'
                                    animate='animate'
                                    variants={ yellowCircle }
                                    transition={ { duration: 1, delay: 0.7 } }
                                    className='yellow_circle'>
                            <Canvas gl={ { antialias: true, toneMapping: THREE.NoToneMapping } }
                                    linear>
                                <ambientLight intensity={ 1 }/>
                                <Sphere args={ [ 1, 100, 200 ] } scale={ 3 }>
                                    <MeshDistortMaterial attach="material" color="#FCD647" speed={ 1.5 } distort={ 0.15 }/>
                                </Sphere>
                            </Canvas>
                            <Image src={ trompette } webp={ trompetteWebp } alt="Une trompette argentée"
                                   className='trompette'/>
                            <motion.img initial={ { scale: 0, rotate: 90 } } animate={ { scale: 1, rotate: 90 } }
                                        className='vague' src={ Vague }/>
                        </motion.div>
                    </motion.div>
                    <div className="mame__transition">
                        <Mame/>
                    </div>
                </section>
            </>
        );
    }
;

export default FirstYearDetail;
