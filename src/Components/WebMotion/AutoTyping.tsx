import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import code from './code';
import useOnScreen from "../../hooks/useOnScreen";
import Animate from "./Animate";

const AutoTyping: FC = () => {
    const codeTypingRef = useRef<HTMLDivElement | null>( null )
    const Code = code;
    const [ text, setText ] = useState<string | null>( null );
    const [ iteration, setIteration ] = useState<number>( 0 );
    const speed = 50;
    const isVisible = useOnScreen( codeTypingRef )


    const handleWriting = () => {
        if (iteration < Code.length) {
            setTimeout( () => {
                setText( text + Code[ iteration ] );
                setIteration( iteration + 1 );
                console.log( iteration );
            }, speed )
        }
        return text
    }


    return (
        <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                    transition={ { duration: 1, delay: 2 } } className='codeTyping' ref={ codeTypingRef }>
            <motion.p initial={ { y: 0 } } whileInView={ { y: -1880 } } viewport={ { once: true } }
                      transition={ { duration: 35, delay: 10 } }>{ isVisible && handleWriting() }</motion.p>
            <Animate />
        </motion.div>
    );
};

export default AutoTyping;
