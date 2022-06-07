import { FC } from 'react';
import { motion } from 'framer-motion'

const Animate: FC = () => {
    return (
        <motion.div initial={{ height: 0 }} whileInView={{ height: '955px' }} viewport={{ once: true }} transition={{ duration: 2, delay: 35 }} className='blueBg'>
            <div className="yellow-circle"></div>
        </motion.div>
    );
};

export default Animate;
