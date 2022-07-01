import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import Muguet from '../../img/muguet.png'
import muguetWebp from '../../img/muguet.webp'
import trompette from '../../img/trompette.png'
import trompetteWebp from '../../img/trompette.webp'
import Vague from '../../img/wave-white.gif'
import './style.scss'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from 'three';
import { useInView } from "react-intersection-observer";
import Mame from "../Mame/Mame";
import Image from 'react-image-webp'

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

    useEffect( () => {
        if (inView) {
            animation.start( "animate" )
        } else {
            animation.start( "initial" )
        }
    }, [ inView, animation ] );


    return (
        <section ref={ ref } className="detail__container">
            <motion.div initial={ { width: 0, height: 0 } } animate={ { width: '2200px', height: '2200px' } }
                        transition={ { duration: 1 } } className="circle__orange__detail">
            </motion.div>
            <motion.div initial='initial' animate={ animation } variants={ titleVariants }
                        transition={ { duration: 1, delay: 6 } } className="detail__title">
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
                            transition={ { duration: 1, delay: 7 } } className="detail__motion__translate">
                    <motion.div className="white__motion" initial={ { width: 0, height: 0, borderRadius: '50%' } }
                                animate={ { width: '804px', height: '804px' } }
                                transition={ { duration: 1, delay: 0.5 } }>
                        <motion.div initial={ { scale: 0 } } animate={ { scale: 1 } } transition={ { duration: 1, delay: 1 } } className="muguet">
                            <Image src={ Muguet } webp={ muguetWebp } alt="Bouquet de muguet" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div initial='initial' animate={ animation } variants={ canvasVariants }
                        transition={ { duration: 1, delay: 6.5 } } className='yellow__circle__translate'>
                <motion.div initial={ { width: 0, height: 0, borderRadius: '50%' } }
                            animate={ { width: '363px', height: '363px' } } transition={ { duration: 1, delay: 0.7 } }
                            className='yellow_circle'>
                    <Canvas gl={ { antialias: true, toneMapping: THREE.NoToneMapping } }
                            linear>
                        <ambientLight intensity={ 1 }/>
                        <Sphere args={ [ 1, 100, 200 ] } scale={ 3 }>
                            <MeshDistortMaterial attach="material" color="#FCD647" speed={ 1.5 } distort={ 0.15 }/>
                        </Sphere>
                    </Canvas>
                    <Image src={ trompette } webp={ trompetteWebp } alt="Une trompette argentée" className='trompette'/>
                    <motion.img initial={ { scale: 0, rotate: 90 } } animate={ { scale: 1, rotate: 90 } }
                                className='vague' src={ Vague }/>
                </motion.div>
            </motion.div>
            <div className="mame__transition">
                <Mame/>
            </div>
        </section>
    );
};

export default FirstYearDetail;
