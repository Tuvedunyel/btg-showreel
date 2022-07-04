import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SesameSpace from '../../img/logo_sesame.png';
import whiteWave from '../../img/wave-white.gif'
import Spline from "@splinetool/react-spline";
import NewMembers from "./NewMembers";
import { useInView } from "react-intersection-observer";
import StarsBackground from "../BackToFuture/StarsBackground";

const Sesame: FC<{ windowHeight: number }> = ( { windowHeight } ) => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } );
    const [ step, setStep ] = useState( 0 );
    const [ posY, setPosY ] = useState( 0 );
    const sesameRef = useRef<HTMLDivElement | null>( null );

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
            opacity: 0,
            translateY: -500
        },
        animate: {
            opacity: 1,
            translateY: 0
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

    const starHide = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const opacityAfter = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }

    const reset = () => {
        if (step == 21 || posY >= 12100) {
            setStep( 0 );
            setPosY( 0 );
        }
    }

    const sequence = async () => {
        await reset();
        setTimeout( () => {
            setStep( step + 1 )
            setPosY( posY + 550 )
            sesameRef.current!.style.backgroundPosition = `0 -${ posY }px`;
        }, 45 )
    }

    useEffect( () => {
        if (inView) {
            sequence();
        }
    }, [ step, inView ] )


    useEffect( () => {
        if (inView) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ inView, animation ] );


    return (
        <>
            <div ref={ ref } className='dummy-ref__sesame'></div>
            <motion.div initial='initial' animate={ animation } variants={ variants }
                        transition={ { duration: 2, delay: 13 } } className='sesame__logo'>
                <motion.div initial='initial' animate={ animation } variants={ opacityAfter }
                            transition={ { duration: 1, delay: 18 } } className="sesame__opacity">
                    <div ref={ sesameRef } className="sesameImg"></div>
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ whiteWaveVariants }
                            transition={ { duration: 1, delay: 15 } } className="moon__container">
                    <img src={ whiteWave } alt="Vague blanche" className='top-wave wave'/>
                    <motion.div initial='initial' animate={ animation } variants={ sizeVariants }
                                transition={ { duration: 1, delay: 18 } } className="moon__hexagone">
                        <Spline scene="https://prod.spline.design/SeqKfWuhGm1Go6Zb/scene.splinecode"/>
                    </motion.div>
                    <img src={ whiteWave } alt="Vague blanche" className='bottom-wave wave'/>
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ starHide }
                            transition={ { duration: 1, delay: 12 } } className="star__container__moon">
                    <StarsBackground inView={ inView }/>
                </motion.div>
                <motion.div initial='initial' animate={ animation } variants={ bigMoonVariants } transition={ {
                    duration: 2,
                    delay: 25
                } } className="static__moon__container">
                    <NewMembers/>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Sesame;
