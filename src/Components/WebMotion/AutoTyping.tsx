import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import code from './code';

const AutoTyping: FC = () => {
    const Code = code;
    const [text, setText] = useState<string | null>(null);
    const [iteration, setIteration] = useState<number>(0);
    const speed = 100;

    useEffect(() => {
        setTimeout( () => {
            if ( iteration < Code.length ) {
                setText(text + Code[iteration] );
                setIteration( iteration + 1 );
            }
        }, speed)
    }, [iteration])


    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 2 }} className='codeTyping'>
            <p>{ text && text }</p>
        </motion.div>
    );
};

export default AutoTyping;
