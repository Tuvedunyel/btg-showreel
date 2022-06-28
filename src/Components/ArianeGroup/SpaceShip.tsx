import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import lanceur from '../../img/lanceur.svg'
import MovingSpaceShip from '../../img/moving-space-ship.png'
import starBackground from '../../img/etoiles.png'
import smoke from '../../img/smoke.png'
import Sesame from "./Sesame";

const SpaceShip = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );
    const [ windowHeight, setWindowHeight ] = useState( window.innerHeight );


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
            translateY: windowHeight
        }
    }

    const translateVariants = {
        initial: {
            translateY: 0,
        },
        animate: {
            translateY: -(windowHeight),
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

    const shipContainerVariants = {
        initial: {
            translateY: 0,
        },
        animate: {
            translateY: -200
        }
    }

    const shipVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: -(windowHeight * 2),
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
                    <img src={ lanceur } alt="Fusée Ariane sur son lanceur" className='launcher'/>
                    <img src={ smoke } alt="fumée de la fusée" className='smoke-one'/>
                    <div className="star__canvas__container">
                        <img src={ starBackground } alt="Fond étoilé" className='star__background__image'/>
                    </div>
                    <motion.div initial='initial' animate={ animation } variants={ opacityVariants }
                                transition={ { duration: 1, delay: 4.9 } } className="to__space__container">
                        <motion.div initial='initial' animate={ animation } variants={ translateVariants }
                                    transition={ { duration: 5 } }
                                    className="to__space">
                        </motion.div>
                    </motion.div>
                    <Sesame windowHeight={ windowHeight }/>
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ shipContainerVariants } transition={ {
                    duration: 1,
                    delay: 5
                } } className='movingship__container'>
                    <motion.div initial='initial' animate={ animation } variants={ shipVariants }
                                transition={ { duration: 3, delay: 8 } } className='movingStarShip__container'>
                        <motion.img src={ MovingSpaceShip } alt="Fusée décollant" className='movingStarShip'/>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default SpaceShip;
