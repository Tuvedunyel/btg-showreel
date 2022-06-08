import { FC, MutableRefObject } from 'react';
import { motion } from 'framer-motion'

const Animate: FC< { codeRef: MutableRefObject<HTMLDivElement | null > }> = ( { codeRef } ) => {
    return (
        <motion.div initial={{ height: 0 }} whileInView={{ height: '955px' }}  viewport={{ root: codeRef }} transition={{ duration: 2, delay: 35 }} className='blueBg'>
            <div className="yellow-circle"></div>
        </motion.div>
    );
};

export default Animate;
