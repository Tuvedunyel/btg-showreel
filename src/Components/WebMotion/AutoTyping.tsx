import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import code from './code';
import useOnScreen from "../../hooks/useOnScreen";

const AutoTyping: FC = () => {
    const codeTypingRef = useRef<HTMLDivElement | null>( null )
    const Code = code;
    const [ text, setText ] = useState<string | null>( null );
    const [ iteration, setIteration ] = useState<number>( 0 );
    const speed = 100;
    const isVisible = useOnScreen( codeTypingRef )


    // useEffect( () => {
    //     if (iteration < Code.length) {
    //         setTimeout( () => {
    //             setText( text + Code[ iteration ] );
    //             setIteration( iteration + 1 );
    //             console.log( iteration );
    //         }, speed )
    //
    //     }
    // }, [ iteration ] )

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
            <p>{ isVisible && handleWriting() }</p>
        </motion.div>
    );
};

export default AutoTyping;
