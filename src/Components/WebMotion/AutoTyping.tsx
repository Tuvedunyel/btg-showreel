import { FC, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import code from './code';
import useOnScreen from "../../hooks/useOnScreen";
import Animate from "./Animate";
import { useInView } from "react-intersection-observer";

const AutoTyping: FC = () => {
    const Code = code;
    const codeTypingRef = useRef<HTMLDivElement | null>( null )
    const [ text, setText ] = useState<string | null>( null );
    const [ iteration, setIteration ] = useState<number>( 0 );
    const speed = 40;
    const isVisible = useOnScreen( codeTypingRef )
    const [ ref, inView, entry ] = useInView( { threshold: 0 } )


    const handleWriting = () => {
        if (iteration < Code.length) {
            setTimeout( () => {
                setText( text + Code[ iteration ] );
                setIteration( iteration + 1 );
            }, speed )
        }
        return text
    }


    return (
        <motion.div ref={ref} initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                    transition={ { duration: 1, delay: 2 } } className='codeTyping'>
            <div className='codeTyping__container' ref={ codeTypingRef }>
                <motion.p className='text__codeTyping' initial={ { y: 0 } } whileInView={ { y: -1880 } }
                          viewport={ { once: true } }
                          transition={ { duration: 25, delay: 5 } }
                >{ isVisible && handleWriting() }</motion.p>
            </div>
            <Animate inView={inView} />
        </motion.div>
    );
};

export default AutoTyping;
