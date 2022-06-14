import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import SpaceShipImg from '../../img/space-ship.png'
import MovingSpaceShip from '../../img/moving-space-ship.png'
import { Canvas } from "@react-three/fiber";
import StarBackground from "./StarBackground";
import Sesame from "./Sesame";

const SpaceShip = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );


    const containerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }

    const backgroundVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: 1600
        }
    }

    const translateVariants = {
        initial: {
            translateY: 0,
        },
        animate: {
            translateY: -1600,
        }
    }

    const movingShipVariants = {
        initial: {
            translateY: 0,
        },
        animate: {
            translateY: 60
        }
    }


    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ inView, animation ] )

    return (
        <motion.div ref={ ref } initial='initial' animate={ animation } variants={ containerVariants }
                    transition={ { duration: 1, delay: 3 }}
                    className='space__ship'>
            <motion.div initial='initial' animate={ animation } variants={ backgroundVariants } transition={{ duration: 5, delay: 5 }}
                        className="space__ship__bg">
                <img src={ SpaceShipImg } alt="Fusée Ariane sur son lanceur" className='launcher'/>
                <motion.div initial='initial' animate={animation} variants={translateVariants} transition={{ duration: 5, delay: 5 }} className="star__canvas__container">
                    { inView && (
                        <Canvas>
                            <ambientLight intensity={ 1 }/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                            <StarBackground/>
                        </Canvas>
                    ) }
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ translateVariants } transition={{ duration: 5, delay: 5 }}
                            className="to__space">
                    <motion.img initial='initial' animate={ animation } variants={ movingShipVariants } transition={{ duration: 1, delay: 5 }}
                                src={ MovingSpaceShip } alt="Fusée décollant"  className='movingStarShip' />
                </motion.div>
                <Sesame inView={inView} />
            </motion.div>
        </motion.div>
    );
};

export default SpaceShip;
