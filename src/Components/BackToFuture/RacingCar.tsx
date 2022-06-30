import { FC, useEffect, useRef, useState } from 'react';
import './backToFuture.scss';
import car from '../../img/voiture.svg'
import wheel from '../../img/pneu.svg'
import carShadow from '../../img/car-shadow.svg'
import { motion, useAnimation } from 'framer-motion'
import smokeCar from '../../img/car-smoke.svg'
import { useInView } from "react-intersection-observer";
import StarsBackground from "./StarsBackground";
import Road from "./Road";

const RacingCar: FC = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } );
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
            opacity: 1
        },
        animate: {
            opacity: 0
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
                <StarsBackground inView={inView} />
                <Road inView={inView} />
                <motion.section initial='initial' animate={ animation } variants={ carSlideIn }
                                transition={ { duration: 2, delay: 2 } } className="car__container">
                    <motion.div initial='initial' animate={ animation } variants={ carRotate }
                                transition={ { duration: 1, delay: 3 } } className='car__wrapper'>
                        <motion.div initial='initial' animate={ animation } variants={ carRotateOver }
                                    transition={ { duration: 2, delay: 3.5 } } className="car__rotate-over">
                            <motion.div initial='initial' animate={ animation } variants={ carLeft }
                                        transition={ { duration: 1, delay: 5.5 } } className='car__go-left'>
                                <img src={ car } alt="delorean grise roulant sur la route" className="carImg"/>
                                <img src={ wheel } alt="Pneu de la voiture" className='wheel'/>
                                <img src={ wheel } alt="Pneu de la voiture" className='wheel second'/>
                            </motion.div>
                        </motion.div>
                        <motion.div initial='initial' animate={ animation } variants={ smokeMove }
                                    transition={ { duration: 10, delay: 5.5 } } className="smoke-move">
                            <motion.div initial='initial' animate={ animation } variants={ smokeVanish }
                                        transition={ { duration: 4, delay: 2.5 } }>
                                <motion.img initial='initial' animate={ animation } variants={ smokeCarVariants }
                                            transition={ { duration: 3, delay: 4 } } src={ smokeCar }
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
