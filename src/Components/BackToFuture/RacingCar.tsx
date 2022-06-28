import { FC, useEffect, useRef, useState } from 'react';
import './backToFuture.scss';
import car from '../../img/car.svg'
import carShadow from '../../img/car-shadow.svg'
import road from '../../img/road.svg';
import { motion, useAnimation } from 'framer-motion'
import smokeCar from '../../img/car-smoke.svg'
import { useInView } from "react-intersection-observer";
import StarsBackground from "./StarsBackground";

const RacingCar: FC = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );
    const windowWidth = window.innerWidth;


    const variants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
        }
    }

    const carSlideIn = {
        initial: {
            translateX: -900
        },
        animate: {
            translateX: 500
        }
    }

    const carRotate = {
        initial: {
            rotate: 0,
            bottom: 0
        },
        animate: {
            rotate: '-5deg',
            bottom: '65px'
        }
    }

    const carRotateOver = {
        initial: {
            rotate: 0,
            bottom: 0
        },
        animate: {
            rotate: '5deg',
            bottom: '-65px'
        }
    }

    const smokeCarVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const carLeft = {
        initial: {
            translateX: 0
        },
        animate: {
            translateX: windowWidth * 1.5
        }
    }

    const smokeMove = {
        initial: {
            translateX: 0
        },
        animate: {
            translateX: -windowWidth * 1.5
        }
    }

    const smokeVanish = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ inView, animation ] );


    return (
        <>
            <div ref={ ref } className="dummyref"></div>
            <motion.div initial='initial' animate={ animation } variants={ variants } transition={ { duration: 0.5 } }
                        className='racing-car__container'>
                {/*<img src={ starBackground } alt="Ciel étoilé" className='racing-car__star'/>*/ }
                <StarsBackground />
                <section className="road">
                    <img src={ road } alt="Route grise"/>
                </section>
                <motion.section initial='initial' animate={ animation } variants={ carSlideIn }
                                transition={ { duration: 2, delay: 2 } } className="car__container">
                    <motion.div initial='initial' animate={ animation } variants={ carRotate }
                                transition={ { duration: 1, delay: 3 } } className='car__wrapper'>
                        <motion.div initial='initial' animate={ animation } variants={ carRotateOver }
                                    transition={ { duration: 2, delay: 3.5 } } className="car__rotate-over">
                            <motion.div initial='initial' animate={ animation } variants={ carLeft }
                                        transition={ { duration: 1, delay: 5.5 } } className='car__go-left'>
                                <img src={ car } alt="delorean grise roulant sur la route"/>
                            </motion.div>
                        </motion.div>
                        <motion.div initial='initial' animate={ animation } variants={ smokeMove }
                                    transition={ { duration: 10, delay: 4.5 } } className="smoke-move">
                            <motion.div initial='initial' animate={ animation } variants={ smokeVanish }
                                        transition={ { duration: 5, delay: 5 } }>
                                <motion.img initial='initial' animate={ animation } variants={ smokeCarVariants }
                                            transition={ { duration: 1, delay: 3 } } src={ smokeCar }
                                            alt="Fumée des roues arrière de la voiture" className='smoke-car'/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.img initial='initial' animate={ animation } variants={ carLeft }
                                transition={ { duration: 1, delay: 5.5 } } src={ carShadow } alt="Ombre de la voiture"
                                className='car-shadow'/>
                </motion.section>
            </motion.div>
        </>
    );
};

export default RacingCar;
