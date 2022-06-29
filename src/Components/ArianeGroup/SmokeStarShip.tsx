import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SmokeStarShip: FC<{ inView: boolean }> = ( { inView } ) => {
    const animation = useAnimation();
    const smokeRef = useRef<HTMLDivElement | null>( null )
    const [ step, setStep ] = useState( 0 )
    const [ posY, setPosY ] = useState( 0 )

    const smokeVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: '202px'
        }
    }

    const interval = () => {
        setStep( step + 1 )
        setPosY( posY + 350.17 )
        smokeRef.current!.style.backgroundPosition = `0 -${ posY }px`;
    }


    useEffect( () => {
        if (inView) {
            if (step >= 16) {
                setStep( 0 )
                setPosY( 0 )
            }
            setTimeout( interval, 550 )
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ step, inView ] )

    return (
        <>
            { inView && <motion.div initial='initial' animate={ animation } variants={ smokeVariants }
                                    transition={ { duration: 1, delay: 0.5 } } ref={ smokeRef }
                                    className='dynamic__smoke'></motion.div> }
        </>
    );
};

export default SmokeStarShip;
