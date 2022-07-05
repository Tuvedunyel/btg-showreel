import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LogoSesame: FC<{ view: boolean }> = ( { view } ) => {
    const animation = useAnimation();
    const [ step, setStep ] = useState( 0 );
    const [ posY, setPosY ] = useState( 0 );
    const sesameRef = useRef<HTMLDivElement | null>( null );
    const [ ref, inView ] = useInView( { threshold: 0 } );
    const windowHeight = window.innerHeight;

    const opacityAfter = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }

    const translateTop = {
        initial: {
            translateY: -windowHeight * 3
        },
        animate: {
            translateY: 0
        }
    }

    const sequence = () => {
        if (step !== 21 || posY <= 12100) {
            setTimeout( () => {
                setStep( step + 1 )
                setPosY( posY + 550 )
                sesameRef.current!.style.backgroundPosition = `0 -${ posY }px`;
            }, 80 )
        }
    }

    useEffect( () => {
        if (inView) {
            sequence();
        }
    }, [ step, inView ] )

    useEffect( () => {
        if (view) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ view, animation ] );

    return (
        <motion.div ref={ ref } initial='initial' animate={ animation } variants={ translateTop }
                    transition={ { duration: 1, delay: 14 } } className='sesame__translate-top'>
            <motion.div initial='initial' animate={ animation } variants={ opacityAfter }
                        transition={ { duration: 1, delay: 18 } } className="sesame__opacity">
                <div ref={ sesameRef } className="sesameImg"></div>
            </motion.div>
        </motion.div>
    );
};

export default LogoSesame;
