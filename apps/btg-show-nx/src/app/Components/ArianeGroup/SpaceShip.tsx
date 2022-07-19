import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import lanceur from '../../../img/lanceur.svg'
import MovingSpaceShip from '../../../img/fusee.svg'
import reactorLeftImg from '../../../img/left-reactor.svg';
import reactorRightImg from '../../../img/right-reactor.svg'
import Sesame from "./Sesame";
// import ReactorFire from "./ReactorFire";
// import SmokeStarShip from "./SmokeStarShip";
import TransparentStars from "./TransparentStars";
import SmokeStarShip from "./SmokeStarShip";
import ReactorFire from "./ReactorFire";

const SpaceShip = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } );
    const windowHeight = window.innerHeight


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
            translateY: -(windowHeight * 2)
        }
    }

    const reactorLeft = {
        initial: {
            translateY: 0,
            translateX: 0,
            rotate: 0,
            opacity: 1
        },
        animate: {
            translateY: 800,
            translateX: -400,
            rotate: -120,
            opacity: 0
        }
    }

    const reactorRight = {
        initial: {
            translateY: 0,
            translateX: 0,
            rotate: 0,
            opacity: 1
        },
        animate: {
            translateY: 800,
            translateX: 400,
            rotate: 120,
            opacity: 0
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
                    <div className="star__canvas__container">
                        <TransparentStars inView={ inView }/>
                    </div>
                    <Sesame windowHeight={ windowHeight / 1.87 }/>
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ shipContainerVariants } transition={ {
                    duration: 1,
                    delay: 5
                } } className='movingship__container'>
                    <div className='movingStarShip__container'>
                        <motion.div initial='initial' animate={ animation } variants={ shipVariants }
                                    transition={ { duration: 3, delay: 8 } } className='movingStrarShip__wrapper'>
                            <img src={ MovingSpaceShip } alt="Fusée décollant" className='movingStarShip'/>
                            <ReactorFire inView={inView} />
                        </motion.div>
                        <div className="reactor-left__container">
                            <motion.img initial='initial' animate={ animation } variants={ reactorLeft }
                                        transition={ { duration: 2, delay: 7 } } src={ reactorLeftImg }
                                        alt="Réacteur gauche"
                                        className='reactor left'/>
                        </div>
                        <div className="reactor-right__container">
                            <motion.img initial='initial' animate={ animation } variants={ reactorRight }
                                        transition={ { duration: 2, delay: 7 } } src={ reactorRightImg }
                                        alt="Réacteur droit"
                                        className='reactor right'/>
                        </div>
                        <SmokeStarShip view={inView} />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default SpaceShip;
