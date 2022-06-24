import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import SpaceShipImg from '../../img/space-ship.png'
import MovingSpaceShip from '../../img/moving-space-ship.png'
import starBackground from '../../img/etoiles.png'
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

    const opacityVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
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
        <>
            <div ref={ ref } className="null__container"></div>
            <motion.div initial='initial' animate={ animation } variants={ containerVariants }
                        transition={ { duration: 1, delay: 3 } }
                        className='space__ship'>
                <motion.div initial='initial' animate={ animation } variants={ backgroundVariants }
                            transition={ { duration: 5, delay: 5 } }
                            className="space__ship__bg">
                    <img src={ SpaceShipImg } alt="Fusée Ariane sur son lanceur" className='launcher'/>
                    <div className="star__canvas__container">
                        <img src={ starBackground } alt="Fond étoilé" className='star__background__image'/>
                    </div>
                    <motion.div initial='initial' animate={animation} variants={ opacityVariants } transition={{ duration: 1, delay: 4.9 }} className="to__space__container">
                        <motion.div initial='initial' animate={ animation } variants={ translateVariants }
                                    transition={ { duration: 5, delay: 5 } }
                                    className="to__space">
                            <motion.div className='movingship__container' initial={ { translateY: 260 } }
                                        whileInView={ { translateY: -1000 } } viewport={ { once: true } }
                                        transition={ { duration: 3, delay: 6 } }>
                                <img src={ MovingSpaceShip } alt="Fusée décollant" className='movingStarShip'/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <Sesame inView={ inView }/>
                </motion.div>
            </motion.div>
        </>
    );
};

export default SpaceShip;
