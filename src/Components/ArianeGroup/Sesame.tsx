import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SesameSpace from '../../img/sesame.svg';
import whiteWave from '../../img/wave-white.gif'
import Spline from "@splinetool/react-spline";
import starBackground from '../../img/etoiles.png'
import NewMembers from "./NewMembers";
import { useInView } from "react-intersection-observer";

const Sesame: FC<{ windowHeight: number }> = ( {  windowHeight } ) => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );

    const variants = {
        initial: {
            opacity: 0,
            translateY: -windowHeight
        },
        animate: {
            opacity: 1,
            translateY: -windowHeight
        }
    }

    const sizeVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const bigMoonVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const sesameLogoVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: [1, 0]
        }
    }

    const whiteWaveVariants = {
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
        <motion.div ref={ref} initial='initial' animate={ animation } variants={ variants }
                    transition={ { duration: 2, delay: 10 } } className='sesame__logo'>
            <motion.img initial='initial' animate={animation} variants={sesameLogoVariants}
                        transition={ { duration: 1, delay: 12 } }
                        src={ SesameSpace } alt="Logo du projet Sésame d'ariane groupe"/>
            <motion.div initial='initial' animate={animation} variants={whiteWaveVariants}
                        transition={ { duration: 1, delay: 12 } } className="moon__container">
                <img src={ whiteWave } alt="Vague blanche" className='top-wave wave'/>
                <motion.div initial='initial' animate={ animation } variants={ sizeVariants }
                            transition={ { duration: 1, delay: 15 } } className="moon__hexagone">
                    <Spline scene="https://prod.spline.design/SeqKfWuhGm1Go6Zb/scene.splinecode"/>
                </motion.div>
                <img src={ whiteWave } alt="Vague blanche" className='bottom-wave wave'/>
            </motion.div>
            <div className="star__container__moon">
                <img src={starBackground} alt="Fond étoilé" className='star__background__image' />
            </div>
            <motion.div initial='initial' animate={animation} variants={bigMoonVariants} transition={ {
                duration: 2,
                delay: 25
            } } className="static__moon__container">
                <NewMembers />
            </motion.div>
        </motion.div>
    );
};

export default Sesame;
