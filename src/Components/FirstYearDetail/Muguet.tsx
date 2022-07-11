import { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import muguetStatic from '../../img/muguet-static.png'

const Muguet: FC<{ view: boolean, windowWidth: number }> = ( { view, windowWidth } ) => {
    const animation = useAnimation();
    const muguet = useRef<HTMLDivElement | null>( null );
    const [ step, setStep ] = useState( 0 );
    const [ posY, setPosY ] = useState( 0 );
    const [ ref, inView ] = useInView( { threshold: 0 } );
    const windowHeight = window.innerHeight;

    const variants = {
        initial: {
            translateY: -windowHeight * 2
        },
        animate: {
            translateY: 0
        }
    }

    const sequence = () => {
        if (inView && step < 22 && posY < 24840) {
            setTimeout( () => {
                setStep( step + 1 )
                setPosY( posY + 1080 )
                muguet.current!.style.backgroundPosition = `0 -${ posY }px`;
            }, 50 )
        }
    }

    useEffect( () => {
        sequence();
    }, [ step, inView ] )

    useEffect( () => {
        if (view) {
            animation.start( "animate" );
        } else {
            animation.start( 'initial' )
        }
    }, [ view, animation ] )

    return (
        <motion.div ref={ ref } initial='initial' animate={ animation } variants={ variants }
                    transition={ { duration: 1, delay: 1 } } className="muguet">
            {
                windowWidth > 926 ? (
                    <div className='muguet-sequence' ref={ muguet }></div>
                ) : (
                    <img src={ muguetStatic } alt="Un muguet" className='muguet-static'/>
                )
            }
        </motion.div>
    );
};

export default Muguet;
