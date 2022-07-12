import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const SmokeStarShip: FC<{ view: boolean }> = ( { view } ) => {
    const animation = useAnimation();
    const smokeRef = useRef<HTMLDivElement | null>( null )
    const [ step, setStep ] = useState( 0 )
    const [ posY, setPosY ] = useState( 0 )
    const [ ref, inView ] = useInView( { threshold: 0 } )
    const windowHeight = window.innerHeight;

    const smokeVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: '204px'
        }
    }

    const interval = () => {
        setStep( step + 1 )
        setPosY( posY + 350.17 )
        smokeRef.current!.style.backgroundPosition = `0 -${ posY }px`
    }

    const translateDiv = {
        initial: {
            translateY: -windowHeight * 2
        },
        animate: {
            translateY: 0
        }
    }

    useEffect( () => {
        if (inView && step <= 16) {
            setTimeout( interval, 150 )
        } else if (step > 16) {
            smokeRef.current!.style.display = 'none'
        }
    }, [ step, inView ] )


    useEffect( () => {
        if (view) {
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ step, view ] )

    return (
        <>
            { view && (
                <>
                    <motion.div initial='initial' animate={ animation } variants={ translateDiv }
                                transition={ { duration: 1, delay: 4 } } ref={ ref }
                                className='dummy-view'></motion.div>
                    <motion.div initial='initial' animate={ animation } variants={ smokeVariants }
                                transition={ { duration: 1, delay: 0.5 } } ref={ smokeRef }
                                className='dynamic__smoke'></motion.div>
                </>
            ) }
        </>
    );
};

export default SmokeStarShip;
