import { FC, useEffect, useRef, useState } from 'react';
import moon from '../../img/moon.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import waveOrange from '../../img/wave-orange.gif';
import orangeArrow from "../../img/orange-arrow.svg";
import gregoire from '../../img/cosmonaute_gregoire_trois.png';
import anais from '../../img/cosmonaute_anais_trois.png';
import zoe from '../../img/cosmonaute_zoe_trois.png';
import StarsBackground from "../BackToFuture/StarsBackground";
import RacingCar from "../BackToFuture/RacingCar";

const NewMembers: FC = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } )
    const windowHeight = window.innerHeight;


    const moonVariants = {
        initial: {
            translateY: '410%'
        },
        animate: {
            translateY: '0%'
        }
    }

    const variants = {
        initial: {
            translateY: 900
        },
        animate: {
            translateY: -440
        }
    }

    const topVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: '339%'
        }
    }

    const employeeVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const teamVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const moonYearContainer = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }

    const roadVariants = {
        initial: {
            opacity: 0,
            translateY: windowHeight
        },
        animate: {
            opacity: 1,
            translateY: 0
        }
    }

    const slideSectionVariants = {
        initial: {
            opacity: 1,
            translateY: 0
        },
        animate: {
            opacity: 0,
            translateY: windowHeight
        }
    }

    const waveOpacity = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ animation, inView ] );


    return (
        <>
            <div className="dummy__container" ref={ ref }></div>
            <StarsBackground inView={ inView }/>
            <motion.div initial='initial' animate={ animation } variants={ slideSectionVariants }
                        transition={ { duration: 1, delay: 40 } } className="trio-employee__slide">
                <motion.section initial='initial' animate={ animation } variants={ moonVariants }
                                transition={ { duration: 5, delay: 20 } } className="moon" title="Arriv??e d'Ana??s">
                    <motion.div initial='initial' animate={ animation } variants={ topVariants }
                                transition={ { duration: 3, delay: 26 } } className="static__moon__wrapper">
                        <img src={ moon } alt="Illustration d'une lune" className='bigMoon'/>
                        <motion.img initial='initial' animate={animation} variants={waveOpacity} transition={{ duration: 1, delay: 22 }}  src={ waveOrange } alt="Vague orange" className='orange-wave'/>
                        <motion.div initial='initial' animate={ animation } variants={ variants }
                                    transition={ { duration: 1 } } className='moon-year'
                        >
                            <motion.div initial='initial' whileInView='animate' viewport={ { once: true } }
                                        variants={ moonYearContainer }
                                        transition={ { duration: 1, delay: 1.5 } } className='moon-year__container'>
                                <div className="creationAgence__left__title">
                                    <h2>
                                        <span>2</span>
                                        <span>0</span>
                                        <span>2</span>
                                        <span>0</span>
                                    </h2>
                                    <p>Arriv??e d'Ana??s</p>
                                    <strong className="orangeArrow"><img src={ orangeArrow } alt="Fl??che orange pointant vers la droite"/></strong>
                                </div>
                                <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                                            whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                                            transition={ { duration: 1, delay: 0.3 } }
                                            className="creationAgence__left__border"></motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>
                <motion.section initial='initial' animate={ animation } variants={ employeeVariants }
                                transition={ { duration: 1, delay: 28 } } className="trio-employee__container">
                    <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                                transition={ { duration: 1, delay: 31 } } src={ gregoire }
                                alt="Gr??goire dans une tenue de cosmonaute"
                                className='trio-employee gregoire-cosmonaute'/>
                    <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                                transition={ { duration: 1, delay: 30 } } src={ anais }
                                alt="Ana??s dans une tenue de cosmonaute" className='trio-employee anais-cosmonaute'/>
                    <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                                transition={ { duration: 1, delay: 32 } } src={ zoe }
                                alt="Zo?? dans une tenue de cosmonaute" className='trio-employee zoe-cosmonaute'/>
                    <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                               transition={ { duration: 1, delay: 31 } } className='employee gregoire'>Gr??goire
                    </motion.h3>
                    <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                               transition={ { duration: 1, delay: 30 } } className='employee anais'>Ana??s
                    </motion.h3>
                    <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                               transition={ { duration: 1, delay: 32 } } className='employee zoe'>Zo??
                    </motion.h3>
                </motion.section>
            </motion.div>
            <motion.section initial='initial' animate={ animation } variants={ roadVariants }
                            transition={ { duration: 1, delay: 43 } } className="roadCar__container">
                <RacingCar/>
            </motion.section>
        </>
    );
};

export default NewMembers;
