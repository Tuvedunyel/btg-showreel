import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Smoke: FC<{ view: boolean }> = ( { view } ) => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } )
    const smokeRef = useRef<HTMLDivElement | null>( null )
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const [ step, setStep ] = useState( 0 )
    const [ posY, setPosY ] = useState( 0 )

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

    const reset = () => {
        if (step == 16) {
            setStep( 0 )
            setPosY( 0 )
        }
    }

    const sequence = async () => {
        await reset()
        if (inView) {
            setTimeout( () => {
                setStep( step + 1 )
                setPosY( posY + 446 )
                smokeRef.current!.style.backgroundPosition = `0 -${ posY }px`;
            }, 300 )
        }
    }

    const startAnimation = {
        initial: {
            translateY: -windowHeight * 2
        },
        animate: {
            translateY: 0
        }
    }

    useEffect( () => {
        sequence()
    }, [ inView, step ] );

    useEffect( () => {
        if (view) {
            animation.start( "animate" );
        } else {
            animation.start( "initial" );
        }
    }, [ view, animation ] )

    return (
        <>
            <motion.div initial='initial' animate={animation} variants={startAnimation} transition={{ duration: 1, delay: 44 }} ref={ref}></motion.div>
            <motion.div initial='initial' animate={ animation } variants={ smokeMove }
                        transition={ { duration: 10, delay: 46.5 } } className="smoke-move">
                <motion.div initial='initial' animate={ animation } variants={ smokeVanish }
                            transition={ { duration: 4, delay: 40 } }>
                    <div ref={ smokeRef } className="smoke__car"></div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Smoke;
